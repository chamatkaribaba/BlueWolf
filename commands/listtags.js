const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const { stripIndents } = require("common-tags");


module.exports.help = {
      name: "infotag",
    decreption: "infotag",
      aliases: ["it"]
}
   module.exports.run = async function(client, message, args) {

  let tagname = args.join(" ");
    if (!tagname) return message.channel.send(`Please specify a tag name!`);
   
  let tags = await db.fetch(`tags_${message.guild.id}-${tagname}`);
    if (!tags) return message.channel.send(`Tag not found! Make sure you have spelled it correctly!`);

  let content = tags.content;
  let createdby = tags.createdby;
  let createdbyid = tags.createdbyid;
  let name = tags.name;
  let date = tags.date;

    let embed = new MessageEmbed()
      .setTitle(`Tag Info`)
      .setColor(`RANDOM`)
      .setDescription(stripIndents`
      **Tag name:** \`${name}\`
      **Tag content:** ${content}
      **Created by:** ${createdby} 
      **Created on:** ${date}
      `)
      .setTimestamp()

    message.channel.send(embed);
          
   }