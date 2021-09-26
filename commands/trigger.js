const { Canvas } = require("canvacord");
const Discord = require ('discord.js')

module.exports.help = {
    name: "trigger",
    decreption: "trigger",
    aliases: []
}

module.exports.run = async function(client, message, args) {
    const user = message.mentions.users.first() || message.author;
    const avatar = user.displayAvatarURL({ format: "png" });

    const image = await Canvas.trigger(avatar);

    const attachement = new Discord.MessageAttachment(image, "triggered.gif");
    message.channel.send(attachement);
  };