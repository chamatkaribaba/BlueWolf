const Discord = require("discord.js")
const ms = require("ms")
const db = require("quick.db")


module.exports.help = {
    name: "templock",
    decreption: "templock",
    aliases: ["tl"]
}

module.exports.run = async function(client, message, args) { 

const time = args.join(" ");
 if (!time) {
 return message.channel.send("Error:x: Enter a valid time period in `Seconds`, `Minutes` or `Hours` ")
 }
 if (!message.member.hasPermission("MANAGE_SERVER", "MANAGE_CHANNELS")) {
 return message.channel.send(`<:uuf:867747994135953429> | You don't have enough Permisions `)

 }
 message.channel.overwritePermissions([
 {
 id: message.guild.id,
 deny : ['SEND_MESSAGES'],
 },
 ],);
 const embed = new Discord.MessageEmbed()
 .setTitle("Channel Updates")
 .setDescription(`<:kek_respect:867964809746989146> ${message.channel} has been placed under lockdown for ${time} `)
 .setColor("FF0000");
 message.channel.send(embed)

 let time1 = (`${time}`)
 setTimeout(function(){
 message.channel.overwritePermissions([
 {
 id: message.guild.id,
 null: ['SEND_MESSAGES'],
 },
 ],);
 const embed2 = new Discord.MessageEmbed()
 .setTitle("Channel Updates")
 .setDescription(`Locked has been lifted in ${message.channel}`)
 .setColor("FF0000");
 message.channel.send(embed2);
 }, ms(time1));
 message.delete();
 };