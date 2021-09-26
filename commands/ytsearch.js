const ytSearch = require("yt-search")
const {MessageEmbed} = require('discord.js')


module.exports.help = {
    name: "ytsearch",
    decreption: "ytsearch",
    aliases: ["ytsearch"]
}

module.exports.run = async function(client, message, args) {
    if (!args.length)
      return message.channel.send(
        'Ya got no brain to figure out that you cannot search " " on yt'
      );

    const query = args.join(" ");
    ytSearch(query).then((res) => {
      let results = res.all;

      message.channel.send(
        new MessageEmbed()
          .setTitle("Youtube🔴")
          .setDescription(`Search results for ${query}`)
          .addFields([
            { name: `1.${results[0].title}`, value: `${results[0].url}` },
            { name: `2.${results[1].title}`, value: `${results[1].url}` },
            { name: `3.${results[2].title}`, value: `${results[2].url}` },
          ])
          .setColor("RANDOM")
      );
    });
  }