const db = require("quick.db");

module.exports.help = {
    name: "setgreetchannel",
    decreption: "setgreetchannel",
    aliases: ["sgc"]
}

module.exports.run = async function(client, message, args) {

    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "**You Do Not Have The Required Permissions! - [ADMINISTRATOR]**"
      );
    
    if (!args[0]) {
      let b = await db.fetch(`greet_${message.guild.id}`);
      let channelName = message.guild.channels.cache.get(b);
      if (message.guild.channels.cache.has(b)) {
        return message.channel.send(
          `**greet Channel Set In This Server Is \`${channelName.name}\` Channel!**`
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
      let a = await db.fetch(`greet_${message.guild.id}`);

      if (a === channel.id) {
        return message.channel.send(
          "**This Channel is Already Set As greet Channel**"
        );
      } else {
        client.guilds.cache
          .get(message.guild.id)
          .channels.cache.get(channel.id)
          .send("**greet Channel Set!**");
        db.set(`greet_${message.guild.id}`, channel.id);

        message.channel.send(
          `**greet Channel Has Been Set Successfully in \`${channel.name}\`**`
        );
      }
      return;
    } catch (e) {
            return message.channel.send("**Error - `Missing Permissions Or Channel Is Not A Text Channel!`**");
    }
}