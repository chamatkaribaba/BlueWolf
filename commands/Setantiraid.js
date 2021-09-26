const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require('quick.db');
const { embedcolor } = require('../colour.js')
 
module.exports.help = {
    name: "antiraid",
    decreption: "antiraid",
    aliases: ["ari"]
}

module.exports.run = async function(client, message, args) {



if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({
            embed: {
                "color": embedcolor,
                "description": "❌ **You Do Not Have Sufficient Permissions! - [ADMINISTRATOR]**"}
        });
 
        const Type = args[0];
 
        if (!Type) return message.channel.send({
            embed: {
                "color": embedcolor,
                "description": "❌ **Please Give Command Type - On , Off**"}
        });
 
        let array = ["on", "off"];
 
        if (!array.find(a => a === Type.toLowerCase())) return message.channel.send({
            embed: {
                "color": embedcolor,
                "description": "❌ **Invalid Type - On , Off**"}
        });
 
        const Current = await db.fetch(`AntiRaidOn_${message.guild.id}`);
 
        if (Current && Current.toLowerCase() === Type.toLowerCase()) return message.channel.send({
            embed: {
                "color": embedcolor,
                "description": `✅ Its Already ${Current}!`}
        });
 
        if (Current === null && Type.toLowerCase() === "on") return message.channel.send({
            embed: {
                "color": embedcolor,
                "description": "✅ Its Already On!"}
        });
 
        let Upper = Type.charAt(0).toUpperCase() + Type.slice(1);
 
        await db.set(`AntiRaidOn_${message.guild.id}`, Type.toLowerCase() === "on" ? "On" : Upper);
 
        let success = new MessageEmbed()
        .setColor(embedcolor)
        .setTitle(`Success`)
        .setDescription(`Anti Raid System Has Been ${Upper === "On" ? "Enabled" : "Disabled"} - <@${message.author.id}>`)
        .setFooter(`Requested By ${message.author.username}`)
        .setTimestamp();
 
        return message.channel.send(success);
 
    };