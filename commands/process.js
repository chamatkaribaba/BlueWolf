
module.exports.help = {
    name: "rickroll",
    decreption: "rickroll",
    aliases: ["process"]
}

module.exports.run = async function(client, message, args) {
const { MessageEmbed } = require('discord.js');
const rickroll = new MessageEmbed()
  .setTitle('GET RICKROLLED !') 
  .setImage('https://tenor.com/view/attempting-to-get-a-life-rickroll-gif-21335821')
  .setColor('RANDOM');
message.channel.send(rickroll)
}