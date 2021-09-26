const Discord = require('discord.js')
const db = require('quick.db')
const config = require('../Config.json')

module.exports.help = {
    name: "whitelist",
    decreption: "whitelist",
    aliases: []
}

module.exports.run = async function(client, message, args) {
     if(message.author.id !== '773031033850953748') return;

const user = message.mentions.users.first()
    if(!user) return message.channel.send("Please mentions a user to blacklist")
    const Blacklisted = db.fetch(`blacklistedUsers_${user.id}`)
    if(Blacklisted == true) return message.channel.send("This user is already blacklisted")
    message.channel.send(`Successfully added ${user.username} to the blacklisted users`)
    db.set(`blacklistedUsers_${user.id}`, true)

}