const { MessageEmbed } = require('discord.js');

module.exports.help = {
    name: "ban1",
    decreption: "ban1",
    aliases: ["ban1","totalbans"]
}

module.exports.run = async function(client, message, args) {
 message.guild.fetchBans().then(bans => {
 
            message.channel.send(`${bans.size} members are banned from this server`)
        })

    }
