module.exports.help = {
    name: "tickle",
    decreption: "tickle",
    aliases: []
}

module.exports.run = async function(client, message, args) {
const { MessageEmbed } = require('discord.js');
const tickle = new MessageEmbed()
  .setDescription(` ${message.member} tickles`)
  .setThumbnail('https://cdn.discordapp.com/attachments/843034484739276820/847712355344842772/OIP_3.jpg')
  .setTitle('tickles') 
  .setImage('https://tenor.com/view/tickle-laugh-gif-19915995')
  .setColor('RANDOM');
message.channel.send(tickle)
}