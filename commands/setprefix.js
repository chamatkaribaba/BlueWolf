const db = require('quick.db');

module.exports.help = {
    name: "setprefix",
    decreption: "setprefix",
    aliases: ["sp"]
}

module.exports.run = async function(client, message, args) {

          const prevPrefix = db.fetch(`prefix_${message.guild.id}`) || "=";
    if (!args[0])
      return message.channel.send(`Current Server Prefix: ${prevPrefix}`);
    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send(
        "You don't have administrator permission to use this command"
      );

    if (args[0].length > 5)
      return message.channel.send(
        "You cannot set a prefix that is more than 5 characters"
      );
    const newPrefix = args[0];

    if (newPrefix == prevPrefix)
      return message.channel.send(
        `Prefix changed from ${prevPrefix} to ${newPrefix}`
      );
    db.set(`prefix_${message.guild.id}`, newPrefix);
    message.channel.send(`Prefix changed from ${prevPrefix} to ${newPrefix}`);
  }