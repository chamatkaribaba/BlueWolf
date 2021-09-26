const Discord = require("discord.js");
const ownerid = ["773031033850953748"];
module.exports.help = {
    name: "leave",
    decreption: "leave",
    aliases: []
}

module.exports.run = async function(client, message, args) {
    if (message.author.id == ownerid) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR"))
        return message.channel
          .send("I Dont Have Permissions")
        
            const guildId = args[0];
 
    if (!guildId) {
      return message.channel.send("Please provide a guild id");
    }
 
    const guild = client.guilds.cache.find((g) => g.id === guildId);
 
    if (!guild) {
      return message.channel.send("That guild wasn't found");
    }
 
    try {
      await guild.leave();
      message.channel.send(`Successfully left guild: **${guild.name}**`);
    } catch (e) {
      console.error(e);
      return message.channel.send("An error occurred while leaving that guild");
    }
    }
  };