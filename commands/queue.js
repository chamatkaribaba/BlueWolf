const { MessageEmbed } = require("discord.js");

const { COLOR } = require("../Config.json");

module.exports.help = {
    name: "queue",
    discription: "q",
    aliases: ["q"]
}
 module.exports.run = async function(client, message, args) { 
    let embed = new MessageEmbed().setColor(COLOR);
    const { channel } = message.member.voice;

    if (!channel) {
          embed.setAuthor("❌ | You need to be in a Voice Channel Before executing this command");
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("There is nothing in the queue");
      return message.channel.send(embed);
    }

    embed.setDescription(
      `${serverQueue.songs
        .map((song, index) => index + 1 + ". " + song.title)
        .join("\n\n")}`,
      { split: true }
    );
    embed.setThumbnail(client.user.displayAvatarURL())
    
    message.channel.send(embed);
  };

