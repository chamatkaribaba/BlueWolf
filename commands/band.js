module.exports.help = {
    name: "band",
    decreption: "hehe",
    aliases: ["pepeband"]
}

module.exports.run = async function(client, message, args) {
const { MessageEmbed } = require('discord.js');
const band = new MessageEmbed()
    .setThumbnail(message.author.displayAvatarURL())
  .setTitle('PEPE BAND!') 
  .setImage('https://media.discordapp.net/attachments/808259770628046858/846385325466583050/image0.gif')
  .setColor('RANDOM');
message.channel.send(band)
}