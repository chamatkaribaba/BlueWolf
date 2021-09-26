const { Canvas } = require("canvacord");
const Discord = require ('discord.js')

module.exports.help = {
    name: "wanted",
    decreption: "wanted",
    aliases: []
}

module.exports.run = async function(client, message, args) {
    const user = message.mentions.users.first() || message.author;
    const avatar = user.displayAvatarURL({ format: "png" });

    const image = await Canvas.wanted(avatar);

    const attachement = new Discord.MessageAttachment(image, "wanted.png");
    message.channel.send(attachement);
  };