const { MessageEmbed, Discord } = require('discord.js')

module.exports.help = {
  name: "suggestion",
  decreption: "suggestion",
  aliases: ["suggest"]
}

module.exports.run = async function(client, message, args) {

  let issue = args.join(" ")
  let channelForReportLogs = client.channels.cache.get("857491746673524746");
  channelForReportLogs.send(new MessageEmbed()
    .setTitle("SUGGESTION")
    .setDescription(issue)
    .setColor("RED")
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setTimestamp());
  return message.channel.send(":white_check_mark: **The suggestion has been submitted, thank you**");
  }