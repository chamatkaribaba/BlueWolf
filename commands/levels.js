const { MessageEmbed } = require("discord.js");
const canvacord = require("canvacord");

const db = require('quick.db')
module.exports.help = {
  name: "level",
  decreption: "level",
  aliases: ["xp"]
}

module.exports.run = async function(client, message, args) {

var user = message.mentions.users.first() || message.author;
    var level = db.fetch(`guild_${message.guild.id}_level_${user.id}`) || 0;
    var currentxp = db.fetch(`guild_${message.guild.id}_xp_${user.id}`) || 0;
    var xpNeeded = level * 500 + 500 
  
  const embedlvl = new MessageEmbed()
    .setTitle(`${user.username}'s Level`)
    .setDescription(`**xp**  ${currentxp}/${xpNeeded} \n\n **level**  ${level}`)
    .setColor("RANDOM")
    .setThumbnail(user.displayAvatarURL({ dynamic: true }))
            message.channel.send(embedlvl)
    }