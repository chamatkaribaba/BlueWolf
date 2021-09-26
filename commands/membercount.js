const { MessageEmbed } = require('discord.js')

module.exports.help = {
  name: "count",
  discription: "count",
  aliases: ["membercount"]
}

module.exports.run = async function(client, message, args) {
  const count = new MessageEmbed()
    .setTitle('member count')
    .addField(` there are ${message.guild.memberCount} members`)
    .addField(`There are ${message.guild.members.cache.size}hoomans`)
    .addField(`There are ${message.guild.members.cache.filter(m => m.user.bot).size} bots!`)
    .setColor('RANDOM')
    .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }))
    message.channel.send(count)
}