const Discord = require("discord.js");
const { readdirSync } = require("fs");
const db = require("quick.db");

module.exports.help = {
  name: "bio-delete",
  aliases: ['bd'],
  descreption: "Delete your current bio",
}

module.exports.run = async function(client, message, args) {

   db.delete(`biography_${message.author.id}`)
   
   message.channel.send('Successfully deleted your bio!');

  }
