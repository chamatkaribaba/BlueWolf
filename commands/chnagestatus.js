
const Discord = require("discord.js");
const ownerid = "855322629321785354";
module.exports.help = {
    name: "changestatus",
    decreption: "changestatus",
    aliases: ["cs"]
}

module.exports.run = async function(client, message, args) {
    if (message.author.id == ownerid) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR"))
        return message.channel
          .send("I Dont Have Permissions")
          .then(msg => msg.delete({ timeout: 5000 }));

          const status = args.join(" ")
 client.user.setStatus(status)
  .then(console.log)
  .then(message.channel.send('new status set!'))
  .catch(console.error);

    }else {
      return;
    }
}

