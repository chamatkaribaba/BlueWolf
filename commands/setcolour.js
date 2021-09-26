const discord = require("discord.js");
const db = require('quick.db')
module.exports.help = {
    name: "sc",
    decreption: "sc",
    aliases: ["settextcolour"," settextcolor","stc"]
}

module.exports.run = async function(client, message, args) {

    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("You dont have enough permission to excute this command!")
    let background = args[0]
    if(!background) return message.channel.send("Please Provide the background link")
    message.channel.send(`successfully set the text colour`)
    await db.set(`colour_${message.guild.id}`, args[0])

}
