const { MessageEmbed } = require('discord.js')
const mojangjs = require("mojangjs")
module.exports.help = {
    name: "mcskin",
    decreption: "mcskin",
    aliases: ["ms"]
}

module.exports.run = async function(client, message, args) {
  let skin = args.join(" ")
  if(!skin) return message.channel.send("Enter a username")
  
  mojangjs.getUUID(`${skin}`).then(uuid => {
    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${skin}`, `https://visage.surgeplay.com/head/832/${uuid}`)
    .setDescription(`**mcskin**`)
    .setImage(`https://visage.surgeplay.com/full/832/${uuid}`)
    .setThumbnail(`https://visage.surgeplay.com/skin/832/${uuid}`)
    .setFooter(`Requested by  ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed)
  })

}