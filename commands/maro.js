module.exports.help = {
    name: "maro",
    decreption: "maro",
    aliases: []
}

module.exports.run = async function(client, message, args) {
const { MessageEmbed } = require('discord.js');
const maro = new MessageEmbed()
  .setDescription(`OH BAHI! MARO MUJHE MARO`)
  .setThumbnail(message.author.displayAvatarURL())
  .setTitle('marna') 
  .setImage('https://tenor.com/view/o-bhai-maro-mujhe-maro-o-bhai-maro-o-bhai-maro-mujhe-maro-maro-gif-16958199')
  .setColor('RANDOM');
message.channel.send(maro)
}