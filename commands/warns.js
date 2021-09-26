    
const Discord = require("discord.js")
const db = require("quick.db")
const moment = require("moment")
let random_string = require("randomstring")

module.exports.help = {
    name: "warns",
    decreption: "warns",
    aliases: ["aw","allwarns"]
}

module.exports.run = async function(client, message, args) {


let user;
    if(!args[0]) user = message.author
    if(args[0] && isNaN(args[0])) user = message.mentions.users.first()
    if(args[0] && !isNaN(args[0])){
        user = client.users.cache.get(args[0])
 
        if(!message.guild.members.cache.has(args[0])) return message.reply(":x: User not found.")
 
    }
    if(!user) return message.reply(":x: You must tag a user")

    const number = db.fetch(`number.${user.id}.${message.guild.id}`)
    const warnInfo = db.fetch(`info.${user.id}.${message.guild.id}`)

if(!number || !warnInfo || warnInfo == []) return message.reply("Doesn't have warn")
const warnembed = new Discord.MessageEmbed()

for(let warnings of warnInfo){
    let mod = warnings.moderator
    let reason = warnings.reason
    let date = warnings.date

warnembed.addField(`${user.tag} warns`,`**Moderator:** ${mod}\n**Reason:** ${reason} \n**Date:** ${date}\n**Warn ID:** \`${warnings.id}\``,true)
}
warnembed.setColor(message.guild.members.cache.get(user.id).roles.highest.color)

message.channel.send(warnembed)
}
//ded??