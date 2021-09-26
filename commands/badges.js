const { Client, Message, MessageEmbed } = require('discord.js');

module.exports.help = {
  name: 'badges',
  descreption: "shows the badges of the mentioned person",
  aliases: []
  }


module.exports.run = async function(client, message,args) {
        const user = message.mentions.users.first() || message.author;

        const flags = user.flags.toArray();

        console.log(flags);
        
        message.channel.send(`${user}'s badges: ${flags.join(', ')}`)
    }