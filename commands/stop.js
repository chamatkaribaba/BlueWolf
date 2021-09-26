const { MessageEmbed } = require("discord.js");
const { COLOR } = require("../Config.json");

const discord = require("discord.js");

module.exports.help = {
    name: "stop",
    decreption: "stops da music",
    aliases: []
}

module.exports.run = async function(client, message, args) {
    let embed = new MessageEmbed().setColor(COLOR);

    const { channel } = message.member.voice;

    if (!channel) {
          embed.setAuthor(
        "❌ | You need to be in a voice channel before executing this command"
      );
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      await channel.leave();
      embed.setAuthor("Successfully Disconnected");
      return message.channel.send(embed);
    }

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
  };