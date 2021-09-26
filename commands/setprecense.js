
const Discord = require("discord.js");
const ownerid = "773031033850953748";
module.exports.help = {
    name: "changeprecence",
    decreption: "changeprecence",
    aliases: ["crp"]
}

module.exports.run = async function(client, message, args) {
    if (message.author.id == ownerid) {
      if (!message.guild.me.hasPermission("SEND_MESSAGES"))
        return message.channel
          .send("I Dont Have Permissions")
          .then(msg => msg.delete({ timeout: 5000 }));

          const name = args.join(" ")
    client.user.setPresence({ activity: { name: name }, status: 'idle' })
  .then(console.log)
   .then(user => message.channel.send(`new Presence set!`))
  .catch(console.error);
    }else {
      return;
    }
}

