const db = require('quick.db');

module.exports.help = {
    name: "disableeditlogschannel",
    decreption: "disableeditlogschannel",
    aliases: [ "del"]
}

module.exports.run = async function(client, message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**You Do Not Have The Required Permissions! - [ADMINISTRATOR]**")

        try {
            let a = db.fetch(`editlogs_${message.guild.id}`)

            if (!a) {
                return message.channel.send("**There Is No editlogs Channel Set To Disable!**")
            } else {
                let channel = message.guild.channels.cache.get(a)
                client.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send("**editlogs Channel Disabled!**")
                db.delete(`editlogs_${message.guild.id}`)

                message.channel.send(`**editlogs Channel Has Been Successfully Disabled in \`${channel.name}\`**`)
            }
            return;
        } catch {
            return message.channel.send("**Error - `Missing Permissions or Channel Doesn't Exist`**")
        }
    }