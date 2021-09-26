const db = require('quick.db')

module.exports.help = {
    name: "setstarborad",
    decreption: "starboard",
    aliases: ["ssbc"]
}

module.exports.run = async function(message, args, client ){
        if (!message.member.permissions.has('ADMINISTRATOR')) {
            return message.channel.send(`You are unable to set members`)
        }
    
    if (!args[0]) {
      let b = await db.fetch(`starboard_${message.guild.id}`);
      let channelName = message.guild.channels.cache.get(b);
      if (message.guild.channels.cache.has(b)) {
        return message.channel.send(
          `**starboard Channel Set In This Server Is \`${channelName.name}\` Channel!**`
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
      let a = await db.fetch(`starboard_${message.guild.id}`);

      if (a === channel.id) {
        return message.channel.send(
          "**This Channel is Already Set As starboard Channel**"
        );
      } else {
        client.guilds.cache
          .get(message.guild.id)
          .channels.cache.get(channel.id)
          .send("**starboard Channel Set!**");
        db.set(`starboard_${message.guild.id}`, channel.id);

        message.channel.send(
          `**starboard Channel Has Been Set Successfully in \`${channel.name}\`**`
        );
      }
      return;
    } catch (e) {
            return message.channel.send("**Error - `Missing Permissions Or Channel Is Not A Text Channel!`**");
    }
}