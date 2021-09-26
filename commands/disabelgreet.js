const db = require('quick.db');

module.exports.help = {
    name: "disablegreetchannel",
    decreption: "disablegreetchannel",
    aliases: ["dgc"]
}

module.exports.run = async function(client, message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**You Do Not Have The Required Permissions! - [ADMINISTRATOR]**")

        try {
            let a = db.fetch(`greet_${message.guild.id}`)

            if (!a) {
                return message.channel.send("**There Is No greet Channel Set To Disable!**")
            } else {
                let channel = message.guild.channels.cache.get(a)
                client.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send("**greet Channel Disabled!**")
                db.delete(`greet_${message.guild.id}`)

                message.channel.send(`**greet Channel Has Been Successfully Disabled in \`${channel.name}\`**`)
            }
            return;
        } catch {
            return message.channel.send("**Error - `Missing Permissions or Channel Doesn't Exist`**")
        }
    }