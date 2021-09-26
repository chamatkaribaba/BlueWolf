const db = require("quick.db");

module.exports.help = {
    name: "setghostpingchannel",
    decreption: "setghostpingchannel",
    aliases: ["sgc" , "sgpc" , "sgp"]
}

module.exports.run = async function(client, message, args) {

    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "**You Do Not Have The Required Permissions! - [ADMINISTRATOR]**"
      );
    
    if (!args[0]) {
      let ghost = await db.fetch(`ghostping_${message.guild.id}`);
      let channelName = message.guild.channels.cache.get(ghost);
      if (message.guild.channels.cache.has(ghost)) {
        return message.channel.send(
          `**ghostping Channel Set In This Server Is \`${channelName.name}\` Channel!**`
        );
      } else return message.channel.send("**Please Enter Channel Name or ID To Set!**");
    }

    let channel =
      message.mentions.channels.first() ||
      client.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) ||
      message.guild.channels.cache.find(
        c => c.name.toLowerCase() === args.join(" ").toLocaleLowerCase()
      );
    
    if (!channel || channel.type !== 'text') return message.channel.send("**Please Enter A Valid Text Channel!**");

    try {
      let a = await db.fetch(`ghostping_${message.guild.id}`);

      if (a === channel.id) {
        return message.channel.send(
          "**This Channel is Already Set As ghostping Channel**"
        );
      } else {
        client.guilds.cache
          .get(message.guild.id)
          .channels.cache.get(channel.id)
          .send("**ghostping Channel Set!**");
        db.set(`ghostping_${message.guild.id}`, channel.id);

        message.channel.send(
          `**ghostping Channel Has Been Set Successfully in \`${channel.name}\`**`
        );
      }
      return;
    } catch (e) {
            return message.channel.send("**Error - `Missing Permissions Or Channel Is Not A Text Channel!`**");
    }
}