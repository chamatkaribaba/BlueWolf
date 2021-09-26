module.exports.help = {
    name: "vote",
    decreption: "vote",
    aliases: []
}

module.exports.run = async function(client, message, args) {
const { MessageEmbed } = require('discord.js');
const vote = new MessageEmbed()
  .setDescription("[Click Here to Vote](https://discordbotlist.com/bots/blue-bot-1814)")
  .addField(" [top.gg] (https://top.gg/bot/843011711727960075)")
  
  .setThumbnail(message.author.displayAvatarURL())
  .setTitle('Vote BLuebot here') 
 
  .setColor('RANDOM');
message.channel.send(vote)
}