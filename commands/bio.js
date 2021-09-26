const Discord = require("discord.js");
const { readdirSync } = require("fs");
const db = require("quick.db");
const{MessageEmbed} = require('discord.js')

module.exports.help = {
  name: "bio",
  aliases: ['bio'],
  descreption: "See the bio of someone",
}

module.exports.run= async function(client, message, args) {
  let user = message.mentions.users.first() || message.author
if(!args[0]){
    return message.channel.send('Please mention the user of whose bio you want to see!')
  }
if(args[0])
{
var bio = db.fetch(`biography_${user.id}`);
}

message.channel.send(new MessageEmbed()
.setTitle(`bio for ${message.mentions.users.first().username}`)
.setDescription(bio)
.setTimestamp()
.setColor('RANDOM')
)
  }
