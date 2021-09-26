module.exports.help = {
    name: "icon",
    decreption: "icon",
    aliases: ["servericon"]
}

module.exports.run = async function(client, message, args) {

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args, utils) => {
    const embed = new MessageEmbed()
      .setTitle(`${message.guild.name}'s Icon`)
      .setImage(message.guild.iconURL({ dynamic: true, size: 512 }))
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
};
};