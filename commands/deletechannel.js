const discord = require("discord.js");

module.exports.help = {
    name: "deletechannel",
    decreption: "eh it deletes a channel",
    aliases: ["delete"]
}

module.exports.run = async function(client, message, args) {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(':x: you need ```ADMINISTRATOR``` or ```BAN MEMBERS``` permission to use this command')
    }
    
    if(!message.guild.me.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(`**${message.author.username}**, I am do not have perms to ban someone`)
    }
   
  let channel = client.channels.cache.get(message.channel.id)
  channel.delete();
  }