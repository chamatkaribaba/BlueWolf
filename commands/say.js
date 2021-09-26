  
const { Client, Message, MessageEmbed } = require("discord.js");

module.exports.help = {
    name: "say",
    decreption: "say",
    aliases: ["say"]
}

module.exports.run = async function(client, message, args) {
    const sayEmbed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
        .setDescription(args.join(" "))
        .setTimestamp()
        .setColor("RANDOM")

    message.channel.send(sayEmbed)
  };