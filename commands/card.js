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
    
  let xp = db.fetch(`messages_${message.guild.id}_${user.id}`)
  let lvl = db.fetch(`level_${message.guild.id}_${user.id}`)
    
    if (lvl === null) lvl = 0
  if (xp === null) xp = 0

  let curxp = xp;
  let curlvl = lvl;
  let nxtLvlXp = curlvl * 100;
  let difference2 = nxtLvlXp + 100 - curxp;
    
const rank = new canvacord.Rank()
    .setAvatar(user.displayAvatarURL({dynamic: false,  format: 'png'}))
    .setCurrentXP(curxp)
    .setRequiredXP(difference2)
    .setLevel(curlvl)
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