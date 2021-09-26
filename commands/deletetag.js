const { MessageEmbed } = require('discord.js');
const db = require(`quick.db`);
const moment = require("moment");
const { stripIndents } = require('common-tags');


module.exports.help = {
      name: "deltetag",
    decreption: "deltes a tag",
      aliases: ["dt"]
}
   module.exports.run = async function(client, message, args) {
  if (!message.member.permissions.has("ADMINISTRATOR"))
return message.channel.send('You don\'t have permissions to use this command!')

  try {

    if (message.author.bot) return message.channel.send(`LOL, you are a bot XD`)

    let name = args[0]; 
      if (!name) return message.channel.send("Please specify the name of the tag you want to delete!")

    let tags = await db.fetch(`tags_${message.guild.id}-${name}`);

          db.delete(`tags_${message.guild.id}-${name}`);

    message.channel.send(`Successfully deleted the tag!`);


  } catch (e){
    if (e.message === "Cannot read property 'content' of null")
    return message.channel.send(`Tag not found!`);
  };
   }