const db = require('quick.db')
const canvacord = require("canvacord");
const Discord = require("discord.js");
module.exports.help = {
    name: "card",
    decreption: "shows your rank card based on your level",
    aliases: ["rankcard" , "rank"]
}

module.exports.run = async function(client, message, args) { 
        
      var user = message.mentions.users.first() || message.author;
    var level = db.fetch(`guild_${message.guild.id}_level_${user.id}`) || 0;
    var currentxp = db.fetch(`guild_${message.guild.id}_xp_${user.id}`) || 0;
    var xpNeeded = level * 500 + 500 
    
const rankcard = new canvacord.Rank()
        .setAvatar(user.displayAvatarURL({format: 'png', dynamic: true}))
        .setCurrentXP(db.fetch(`guild_${message.guild.id}_xp_${user.id}`) || 0)
        .setRequiredXP(xpNeeded)
        .setStatus(user.presence.status)
        .setLevel(db.fetch(`guild_${message.guild.id}_level_${user.id}`) || 0)
        .setRank(1, 'RANK', false)
        .setProgressBar("#0000ff", "COLOR")
        //.setOverlay("#ffffff")
        .setUsername(user.username)
        .setDiscriminator(user.discriminator)
        .setBackground("IMAGE", "https://cdn.discordapp.com/attachments/889054278134677555/890899085966585877/unknown.png")
        rankcard.build()
        .then(data => {
            const atta = new Discord.MessageAttachment(data, "rank.png")
            
            message.channel.send(atta)
        })
    
    
    
    
  }