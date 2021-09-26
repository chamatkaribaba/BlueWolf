const moment = require('moment');
const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')
const os = require('os')
const ms = require('ms')
module.exports.help = {
    name: "botinfo",
    decreption: "shows the stats of the bot",
    aliases: ["stats"]
}

module.exports.run = async function(client, message, args) {
              message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`blue Bot Info`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .addField('Uptime', `${ms(client.uptime)}`, true)
            .addField('WebSocket Ping', `${client.ws.ping}ms`, true)
            .addField('Memory', `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap`, true)
            .addField('Guild Count', `${client.guilds.cache.size} guilds`, true)
            .addField(`User Count`, `${client.users.cache.size} users`, true)
            .addField('Commands', `${client.commands.size} cmds`,true)
            .addField('Node', `${process.version} on ${process.platform} ${process.arch}`, true)
            .addField('Cached Data', `${client.users.cache.size} users\n${client.emojis.cache.size} emojis`, true)
                       .setTimestamp()
        );
    }