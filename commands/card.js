const db = require('quick.db')
const { getInfo } = require("../xp.js")
const canvacord = require("canvacord");
const Discord = require("discord.js");
module.exports.help = {
    name: "card",
    decreption: "shows your rank card",
    aliases: ["rankcard"]
}

module.exports.run = async function(client, message, args) { 
    const user = message.mentions.users.first() || message.author;
    
    if(user.id === client.user.id) { 
      return message.channel.send("consider me god 😇")
    }
    
    if(user.bot) {
      return message.channel.send("Bot do not have levels")
    }
    
    let xp = db.get(`xp_${user.id}_${message.guild.id}`) || 0;
    
    const {level, remxp, levelxp} = getInfo(xp);
    
const rank = new canvacord.Rank()
    .setAvatar(user.displayAvatarURL({dynamic: false,  format: 'png'}))
    .setCurrentXP(remxp)
    .setRequiredXP(levelxp)
    .setLevel(level)
    .setStatus(user.presence.status)
    .setProgressBar("#4169E1", "COLOR")
    .setUsername(user.username)
    .setDiscriminator(user.discriminator)
    .setRank(1, "a", false)
    .setBackground("IMAGE", "https://cdn.discordapp.com/attachments/889054278134677555/890899085966585877/unknown.png");

rank.build()
    .then(data => {
        const attachment = new Discord.MessageAttachment(data, "Rank.png");
        message.channel.send(attachment);
    });   
    
    
    
    
  }