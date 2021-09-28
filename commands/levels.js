const { MessageEmbed } = require("discord.js");
const canvacord = require("canvacord");

const db = require('quick.db')
module.exports.help = {
  name: "level",
  decreption: "level",
  aliases: ["xp"]
}

module.exports.run = async function(client, message, args) {

  let prefix = await db.fetch(`prefix_${message.guild.id}`) || "="
 const user = message.mentions.members.first() || message.author.id;

    const level = db.fetch(`guild_${message.guild.id}_level_${user.id}`) || 0
    const currentxp = db.fetch(`guild_${message.guild.id}_xp_${user.id}`) || 0
    const xpNeeded = level * 500 + 500

  const embedlvl = new MessageEmbed()
    .setTitle(`${user.id}'s Level`)
    .setDescription(`**xp**${currentxp}/${xpNeeded} \n\n **level** ${level}`)
            message.channel.send(embedlvl)
    }