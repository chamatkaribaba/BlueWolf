const db = require("quick.db")
const {MessageEmbed} = require('discord.js')
const Discord =require ('discord.js')

module.exports.help = {
    name: "highlighte",
    decreption: "highlighte",
    aliases: ["hl"]
}

module.exports.run = async function(client, message, args) {

let word = args[0]
db.push(`highlighted`, { word: word, user: message.author.id })

message.channel.send(new MessageEmbed()
  .setTitle("Word Added!")
  .setDescription(`I have added the word \`${word}\` to my database! Whenever a user says this word, I will DM you!`)
  .setFooter(client.user.username, client.user.displayAvatarURL())
  .setAuthor(message.author.tag, message.author.displayAvatarURL())
  .setColor("GREEN")
)
}