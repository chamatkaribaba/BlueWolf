const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const { stripIndents } = require("common-tags");


module.exports.help = {
      name: "listtag",
    decreption: "listtag",
      aliases: ["lt"]
}
   module.exports.run = async function(client, message, args) {

   const resp = db.all().filter(data => data.ID.startsWith(`tags_${message.guild.id}`)).sort((a, b) => b.data - a.data);

  let content = "  ";

  resp.forEach(resp => { 
    let user = client.users.cache.find(m => m.id === resp.ID.split('_')[1])
      if (user === null || undefined) user = "Unknown#0000";

    content += `\`${resp.data.name}\`\n`;
  });  

  const embed = new MessageEmbed()
    .setTitle(`${message.guild.name}'s Tags`)
    .setDescription(stripIndents`${content || `No tags created yet!`}`)
    .setColor("RANDOM")
    .setTimestamp()
  message.channel.send(embed);

  } 