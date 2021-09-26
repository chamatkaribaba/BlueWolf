const Discord = require("discord.js");
 const db = require("quick.db");


module.exports.help = {
      name: "tag",
    decreption: "tag",
      aliases: ["t"]
}
   module.exports.run = async function(client, message, args) {
let tagname = args.join(" ");
  let tags = await db.fetch(`tags_${message.guild.id}-${tagname}`);
    if (!tags) return message.channel.send(`Tag not found!`);

  let content = tags.content;

    message.channel.send(`${content}`)
          
  }