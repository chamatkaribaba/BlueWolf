const { MessageEmbed } = require('discord.js')
module.exports.help = {
  name: 'ohelp',
  decreption: 'ohelp',
  aliases: ["ohelp"]
};

module.exports.run = async function(client, message, args) {
  const ohelp = new MessageEmbed()
    .setAuthor('commands for Twitch')
    .setTitle('Owner only commands')
    .setDescription(`eval , serverlist , gi , cs , crp , ca , cn `)
    .setColor('#f535aa')
    .setImage('https://cdn.discordapp.com/attachments/861958318992785408/863078040782372875/unknown.png')
    .setTimestamp()
  message.channel.send(ohelp)
}