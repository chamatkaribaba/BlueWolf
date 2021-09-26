const { MessageEmbed, Discord } = require('discord.js')

module.exports.help = {
  name: "bugreport",
  decreption: "reports a bug",
  aliases: ["bug"]
}

module.exports.run = async function(client, message, args) {

  let issue = args.join(" ")
  let channelForReportLogs = client.channels.cache.get("857276629768077322");
  channelForReportLogs.send(new MessageEmbed()
    .setTitle("BUG REPORTED")
    .setDescription(issue)
    .setColor("RED")
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setTimestamp());
  return message.channel.send(":white_check_mark: **The issue has been submitted, thank you**");
  }