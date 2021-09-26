const { Client, Message, MessageEmbed } = require("discord.js");

module.exports.help = {
    name: "nick",
    decreption: "nick",
    aliases: []
}

module.exports.run = async function(client, message, args) {
  if (message.author.id !== '773031033850953748' &&
  !message.member.hasPermission('ADMINISTRATOR')){

    return message.channel.send('You do not have permissions to use this command')

  }
    const member = message.mentions.members.first();

    if (!member) return message.reply("Please specify a member!");

    const arguments = args.slice(1).join(" ");

    if (!arguments) return message.reply("Please specify a nickname!");

    try {
      member.setNickname(arguments);
    } catch (err) {
      console.log(err);
      message.reply(
        "I do not have permission to set " + member.toString() + " nickname!"
      );
    }
  };