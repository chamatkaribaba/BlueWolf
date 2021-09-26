const ytdl = require("ytdl-core");
const { MessageEmbed } = require("discord.js");
const { QUEUE_LIMIT, COLOR } = require("../Config.json");

module.exports = {
  async play(song, message) {
    const queue = message.client.queue.get(message.guild.id);
    let embed = new MessageEmbed().setColor(COLOR);

    if (!song) {
      queue.channel.leave();
      message.client.queue.delete(message.guild.id);
      embed.setAuthor("Dispatcher queue ended | Opus Returned a Queue End");
      embed.setDescription(
        `Ended without playing a song? Dm twitch 0078#9999 for assistance!`
      );
      return queue.textChannel.send(embed).catch(console.error);
    }

    try {
      var stream = await ytdl(song.url, {
        highWaterMark: 1 << 25
      });
    } catch (error) {
      if (queue) {
        queue.songs.shift();
        module.exports.play(queue.songs[0], message);
      }

      if (error.message.includes === "copyright") {
        return message.channel.send(
          "© | Contents of this video are copyright protected."
        );
      } else {
        console.error(error);
      }
    }

    const dispatcher = queue.connection
      .play(stream)
      .on("finish", () => {
        if (queue.loop) {
          let lastsong = queue.songs.shift();
          queue.songs.push(lastsong);
          module.exports.play(queue.songs[0], message);
        } else {
          queue.songs.shift();
          module.exports.play(queue.songs[0], message);
        }
      })
      .on("error", console.error);

    dispatcher.setVolumeLogarithmic(queue.volume / 100); 
    embed
      .setAuthor(
        "💿 | Started Playing Your Song",
        message.client.user.displayAvatarURL()
      )
      .setDescription(`**[${song.title}](${song.url})**`)
      .setImage(`${song.thumbnail}`)
      .setFooter(
        `Channel: ${song.author} | Duration : ${song.duration}m | Uploaded : ${song.date}`
      )
      .addField(`Playing In`, `${queue.channel}`, true)
      .addField(`Bound To`, `${queue.textChannel}`, true)
      .setThumbnail(song.avatar);

    queue.textChannel
      .send(embed)
      .catch(err =>
        message.channel.send("Unable to play song | Dm twitch 0078#9999 for assistance")
      );
  }
};
