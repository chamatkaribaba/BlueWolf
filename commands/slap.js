const { Canvas } = require("canvacord");
const Discord = require ("discord.js")
module.exports.help = {
    name: "slap",
    decreption: "slap",
    aliases: []
}

module.exports.run = async function(client, message, args) {
    const users = message.mentions.users.map((u) => u);
    const user1 = users[0] || message.author;
    const user2 = users[1] || client.user;

    const avatar1 = user1.displayAvatarURL({ format: "png" });
    const avatar2 = user2.displayAvatarURL({ format: "png" });

    const image = await Canvas.slap(avatar2, avatar1);
    message.channel.send(
      new Discord.MessageAttachment(image, "ugotslapedkid.gif")
    );
  };