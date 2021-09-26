const { MessageEmbed } = require("discord.js");
const { COLOR } = require("../Config.json");

module.exports.help = {
    name: "repeat",
    decreption: "repeat",
    aliases: ["loop" , "repeat"]
}

module.exports.run = async function(client, message, args) {
    let embed = new MessageEmbed().setColor(COLOR);

    const { channel } = message.member.voice;
    if (!channel) {
     
      embed.setAuthor(
        "❌ | Must be in a voice channel before executing this command"
      );
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("There is nothing playing that I could loop");
      return message.channel.send(embed);
    }

    
    serverQueue.loop = !serverQueue.loop;

    embed.setDescription(
      `Loop is now **${serverQueue.loop ? "Enabled" : "Disabled"}**`
    );
    embed.setThumbnail(client.user.displayAvatarURL());
    message.channel.send(embed);
};