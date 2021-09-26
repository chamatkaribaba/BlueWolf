const db = require('quick.db');

module.exports.help = {
    name: "disableghostpingchannel",
    decreption: "disableghostpingchannel",
    aliases: [ "dgpc" , "dgp"]
}

module.exports.run = async function(client, message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**You Do Not Have The Required Permissions! - [ADMINISTRATOR]**")

        try {
            let a = db.fetch(`ghostping_${message.guild.id}`)

            if (!a) {
                return message.channel.send("**There Is No ghostping Channel Set To Disable!**")
            } else {
                let channel = message.guild.channels.cache.get(a)
                client.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send("**ghostping Channel Disabled!**")
                db.delete(`ghostping_${message.guild.id}`)

                message.channel.send(`**ghostping Channel Has Been Successfully Disabled in \`${channel.name}\`**`)
            }
            return;
        } catch {
            return message.channel.send("**Error - `Missing Permissions or Channel Doesn't Exist`**")
        }
    }