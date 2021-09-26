const { MessageEmbed } = require('discord.js');
const db = require(`quick.db`);
const moment = require("moment");
const { stripIndents } = require('common-tags');

module.exports.help = {
      name: "addtag",
    decreption: "adds tags like carlbot",
      aliases: ["at"]
}
   module.exports.run = async function(client, message, args) {
if (!message.member.permissions.has("ADMINISTRATOR"))
return message.channel.send('You don\'t have permissions to use this command!')
  let name = args[0];
    if (!name) return message.channel.send("Please provide a tag name and the content for the tag!");

  let value = args.splice(1).join(" ");
    if (!value) return message.channel.send("Please provide the content for the tag!");
    if (message.author.bot) return message.channel.send(`LOL, you are a bot XD`);

  let content = value;
  let createdby = message.author.username;
  let createdbyid = message.author.id;
  let names = name;
  let date = moment().format('MMMM Do YYYY, h:mm:ss a');
    
  let tags = await db.fetch(`tags_${message.guild.id}-${name}`);
    if (tags) return message.channel.send(`Error! A tag with the name **\`${name}\`** already exists!`);

        db.set(`tags_${message.guild.id}-${name}.name`, names);
        db.set(`tags_${message.guild.id}-${name}.content`, content);
        db.set(`tags_${message.guild.id}-${name}.createdby`, createdby);
        db.set(`tags_${message.guild.id}-${name}.createdbyid`, createdbyid);
        db.set(`tags_${message.guild.id}-${name}.date`, date);
        
        message.channel.send(`Tag created successfully!`);
    
  }

