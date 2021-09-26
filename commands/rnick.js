const { Client, Message, MessageEmbed } = require("discord.js");

module.exports.help = {
    name: "rnick",
    decreption: "rnick",
    aliases: []
}

module.exports.run = async function(client, message, args) {
        if (!message.member.permissions.has('CHANGE_NICK')) {
            return message.channel.send(`You are unable to ban members`)
        }
                if (!message.guild.me.permissions.has('CHANGE_NICK')) {
            return message.channel.send(`bot dosent have permission`)
        }

    const member = message.mentions.members.first();

    if (!member) return message.reply("Please specify a member!");

    try {
      member.setNickname(null);
    } catch (err) {
      message.reply(
        "I do not have permission to reset " + member.toString() + " nickname!"
      );
    }
  };