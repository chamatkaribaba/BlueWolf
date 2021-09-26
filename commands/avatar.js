const discord = require ('discord.js')
const {MessageEmbed} = require ('discord.js')

module.exports.help = {
    name: "avatar",
    decreption: "shows the mentioned person's avatar",
    aliases: ["bot-avatar", "av", "avatar-bot"]
}

module.exports.run = async function(client, message, args) {
 let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let embed = new discord.MessageEmbed()
    .setColor('RANDOM')
    .addField('Links', `**[PNG](${member.user.displayAvatarURL({ dynamic: true, format: 'png' })}) | [JPG](${member.user.displayAvatarURL({ dynamic: true, format: 'jpg' })}) | [GIF](${member.user.displayAvatarURL({ dynamic: true, format: 'gif' })})**`)
    .setImage(member.user.displayAvatarURL({ dynamic: true }))
.setFooter(
					`Requested By: ${message.author.tag}`)
    message.channel.send(embed);
  }