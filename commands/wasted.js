const Color = "RANDOM", Random = require("srod-v2");
const Discord = require("discord.js");

module.exports.help = {
    name: "wasted",
    decreption: "wasted",
    aliases: []
}

module.exports.run = async function(client, message, args) {
    
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const Data = await Random.Wasted({ Image: Member.user.displayAvatarURL({ format: "png" }), Color: Color });

    return message.channel.send(Data);
  };