const Discord = require("discord.js");
const ownerid = "855322629321785354";
module.exports.help = {
    name: "serverlist",
    decreption: "serverlist",
    aliases: []
}

module.exports.run = async function(client, message, args) {
    if (message.author.id == ownerid) {
      if (!message.guild.me.hasPermission("SEND_MESSAGES"))
        return message.channel
          .send("I Dont Have Permissions")
          .then(msg => msg.delete({ timeout: 5000 }));

      let i0 = 0;
      let i1 = 10;
      let page = 1;

      let description =
        `Total Servers - ${client.guilds.cache.size}\n\n` +
        client.guilds.cache
          .sort((a, b) => b.memberCount - a.memberCount)
          .map(r => r)
          .map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members\nID - ${r.id}`)
          .slice(0, 10)
          .join("\n");

      let embed = new Discord.MessageEmbed()
        .setAuthor(
          message.author.tag,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setColor("GREEN")
        .setFooter(client.user.username)
        .setTitle(`Page - ${page}/${Math.ceil(client.guilds.cache.size / 10)}`)
        .setDescription(description);

      let msg = await message.channel.send(embed);

      await msg.react("⬅");
      await msg.react("➡");
      await msg.react("❌");

      let collector = msg.createReactionCollector(
        (reaction, user) => user.id === message.author.id
      );

      collector.on("collect", async (reaction, user) => {
        if (reaction._emoji.name === "⬅") {
     
          i0 = i0 - 10;
          i1 = i1 - 10;
          page = page - 1;

         
          if (i0 + 1 < 0) {
            console.log(i0)
            return msg.delete();
          }
          if (!i0 || !i1) {
            return msg.delete();
          }

          description =
            `Total Servers - ${client.guilds.cache.size}\n\n` +
            client.guilds.cache
              .sort((a, b) => b.memberCount - a.memberCount)
              .map(r => r)
              .map(
                (r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members`
              )
              .slice(i0, i1)
              .join("\n");

          
          embed
            .setTitle(
              `Page - ${page}/${Math.round(client.guilds.cache.size / 10 + 1)}`
            )
            .setDescription(description);

          
          msg.edit({ embed: embed })
        }

        if (reaction._emoji.name === "➡") {
         
          i0 = i0 + 10;
          i1 = i1 + 10;
          page = page + 1;

   
          if (i1 > client.guilds.cache.size + 10) {
            return msg.delete();
          }
          if (!i0 || !i1) {
            return msg.delete();
          }

          description =
            `Total Servers - ${client.guilds.cache.size}\n\n` +
            client.guilds.cache
              .sort((a, b) => b.memberCount - a.memberCount)
              .map(r => r)
              .map(
                (r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members`
              )
              .slice(i0, i1)
              .join("\n");

   
          embed
            .setTitle(
              `Page - ${page}/${Math.round(client.guilds.cache.size / 10 + 1)}`
            )
            .setDescription(description);

       
          msg.edit({ embed: embed })
        }

        if (reaction._emoji.name === "❌") {
          return msg.delete();
        }

       
        await reaction.users.remove(message.author.id);
      });
    } else {
      return;
    }
  };