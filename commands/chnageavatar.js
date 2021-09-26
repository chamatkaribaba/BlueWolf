const Discord = require("discord.js");
const ownerid = "855322629321785354";
module.exports.help = {
    name: "changeavatar",
    decreption: "changeavatar of the bot",
    aliases: ["ca"]
}

module.exports.run = async function(client, message, args) {
    if (message.author.id == ownerid) {
      if (!message.guild.me.hasPermission("SEND_MESSAGES"))
        return message.channel
          .send("I Dont Have Permissions")
          .then(msg => msg.delete({ timeout: 5000 }));

          const avatar = args.join(" ")
client.user.setAvatar(avatar)
  .then(user => message.channel.send(`New avatar set!`))
  .catch(console.error);
    }else {
      return;
    }
}