const { MessageEmbed } = require('discord.js');
const db = require(`quick.db`);
const moment = require("moment");
const { stripIndents } = require('common-tags');


module.exports.help = {
      name: "edittag",
    decreption: "edittag",
      aliases: ["e"]
}
   module.exports.run = async function(client, message, args) {
if (!message.member.permissions.has("ADMINISTRATOR"))
return message.channel.send('You don\'t have permissions to use this command!')
  try {
    if (message.author.bot) return message.channel.send(`LOL, you are a bot XD`)

    let name = args[0]; 
    let tags = await db.fetch(`tags_${message.guild.id}-${name}`);
    
    let value = args.splice(1).join(" ");
    if (!value) return message.channel.send("Please provide the new content for the tag!");

        db.set(`tags_${message.guild.id}-${name}.content`, value);
  
        message.channel.send(`Successfully edited the tag!`);
   
  } catch (e){
    if (e.message === "Cannot read property 'content' of null")
    return message.channel.send(`Tag not found!`)
  }

}
