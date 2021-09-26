const Discord = require("discord.js");
const { readdirSync } = require("fs");
const db = require("quick.db");

module.exports.help = {
  name: "bio-set",
  aliases: ['bs'],
  descreption: "Set a bio of yourself",
}
module.exports.run= async function(client, message, args) {
   let bio = args.join(" ");
if(!args[0]){
     return message.channel.send('Please provide a bio to be set!')
   }
if(bio.length > 200) {
     return message.channel.send('Your bio is too long! Max characters allowed is 200!')
   }
   db.set(`biography_${message.author.id}`, bio);

   message.channel.send(`**Successfully setted your bio as:** ${bio}`);

  }
