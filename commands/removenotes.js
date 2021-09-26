const Discord = require("discord.js")
const db = require("quick.db")
const moment = require("moment")
let random_string = require("randomstring")
module.exports.help = {
    name: "removenotes",
    decreption: "remove notes",
    aliases: ["rnotes"]
}

 module.exports.run = async function(client, message, args) {
    let user;
    if (args[0] && isNaN(args[0])) user = message.mentions.users.first()
    if (args[0] && !isNaN(args[0])) {
        user = client.users.cache.get(args[0])

        if (!message.guild.members.cache.has(args[0])) return message.reply(":x: User not found.")

    }

    if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply(":x: You don't have the required permissions")

    if (!user) return message.channel.send(":x: You must enter userID")

    let id = args.slice(1).join(" ")
    if (!id) {
        db.delete(`notes.${user.id}.${message.guild.id}`)
        message.channel.send(":white_check_mark: Notes deleted.")
    } else {
        let database = db.fetch(`notes.${user.id}.${message.guild.id}`)
        if (!database || database == []) return message.channel.send(":x: No notes found")

        if (!database.find(data => data.id === id)) return message.channel.send(":x: Note not found!")




        database.splice(database.findIndex(data => data.id == id), 1)
if(database.length >= 1){
        db.set(`notes.${user.id}.${message.guild.id}`, database)
}else {
    db.delete(`notes.${user.id}.${message.guild.id}`)
}
        message.channel.send(":white_check_mark: deleted notes.")
    }
}