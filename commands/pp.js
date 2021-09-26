const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../colour.js");

module.exports.help = {
    name: "pp",
    decreption: "pp",
    aliases: ["penis"]
}

module.exports.run = async function(client, message, args) {

    let sizes = [
      "8D",
      "8=D",
      "8==D",
      "8===D",
      "8====D",
      "8=====D",
      "8======D",
      "8=======D",
      "8========D",
      "8=========D",
      "8==========D",
      "8===========D",
      "8============D",
      "8=============D",
      "8==============D",
      "8===============D",
      "8================D",
      "8=================D",
      "8==================D",
      "8===================D",
      "8====================D",
      "8=====================D",
      "8======================D",
      "8=======================D"
    ];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = sizes[Math.floor(Math.random() * sizes.length)];

    let embed = new MessageEmbed()
      .setColor(Color)
      .setDescription(`**${Member.user.username}'s Size Is:**
      \n${Result}`)

    message.channel.send(embed);

  }