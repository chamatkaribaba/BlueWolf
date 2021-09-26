const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports.help = {
    name: "changemymind",
    decreption: "makes a meme....",
    aliases: ["cm"]
}

module.exports.run = async function(client, message, args) {
    const text = args.join(" ");

    if (!text) return message.channel.send("Please provide text");

    const sendMsg = await message.channel.send("⚙ Processing Image..");

    const data = await fetch(
      `https://nekobot.xyz/api/imagegen?type=changemymind&text=${text}`
    ).then((res) => res.json());

    sendMsg.delete();
    const embed = new MessageEmbed()
      .setFooter(message.author.username)
      .setColor("BLUE")
      .setImage(data.message)
      .setTimestamp();

    message.channel.send({ embed });
  };