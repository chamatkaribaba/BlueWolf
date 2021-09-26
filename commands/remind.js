  
const Discord = require("discord.js")
const discord = require("discord.js")
const ms = require("ms")
const db = require("quick.db")


module.exports.help = {
    name: "remind",
    decreption: "rmeind",
    aliases: ["rm"]
}

module.exports.run = async function(client, message, args) { 
  let time = args[0]
  if(!time)return message.reply("how minutes / hours will you set your alarm")
  if(ms(time) > ms("1d"))return message.reply("you can't set your alarm bigger than 1 day")
  let reason = args.slice(1).join(' ')
  if(!reason)return message.reply("please give some reason")
  
  const embed = new discord.MessageEmbed()
  .setAuthor(`${message.author.tag} Alarm`,message.author.displayAvatarURL())
  .setColor("RANDOM")
  .setDescription(`Time: \`${time}\`\nReason: \`${reason}\``)
  .setTimestamp()
  message.channel.send(embed)
  
  setTimeout(() => {
    const embed = new discord.MessageEmbed()
  .setAuthor(`${message.author.tag} Your alarm has been ended`,message.author.displayAvatarURL())
  .setColor("RANDOM")
  .setDescription(`Time: \`${time}\`\nReason: \`${reason}\`\nAlarm seted in server: \`${message.guild.name}\``)
  .setTimestamp()
  message.author.send(embed)
  }, ms(time))
  
}