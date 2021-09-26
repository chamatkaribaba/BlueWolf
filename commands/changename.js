const Discord = require("discord.js");
const ownerid = "773031033850953748";
module.exports.help = {
    name: "changename",
    decreption: "changename",
    aliases: ["cn"]
}

module.exports.run = async function(client, message, args) {
    if (message.author.id == ownerid) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR"))
        return message.channel
          .send("I Dont Have Permissions")
          .then(msg => msg.delete({ timeout: 5000 }));

          const username = args.join(" ")
          client.user.setUsername(username)
  .then(user => message.channel.send(`My new username is ${user.username}`))
  .catch(console.error);
    }else {
      return;
    }
}