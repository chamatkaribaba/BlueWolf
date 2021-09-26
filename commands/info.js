const Discord = require("discord.js");
const prettyMs = require("pretty-ms");
const { MessageEmbed } = require("discord.js")
const { version } = require("discord.js");
const os = require("os");
const fetch = require('node-fetch')

module.exports.help = {
      name: "info",
    decreption: "info",
      aliases: []
}
   module.exports.run = async function(client, message, args) {



const botStats = `
Uptime              ::    ${prettyMs(client.uptime, { verbose: true, secondsDecimalDigits: 0 })}
Memory Usage        ::    ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
Discordjs Version   ::    v12
Node Version        ::    ${process.version}
Host OS             ::    ${os.type()} ${os.release()} (${os.arch()})
Speed               ::    ${os.cpus()[0].speed} MHz
Model               ::    ${os.cpus()[0].model}
Heap Total          ::    ${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} Mbps
Heap Usage          ::    ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} Mbps`

message.channel.send(new MessageEmbed()
.setTitle('Info For BlueWolf')
.setColor('RANODM')
.setDescription(botStats)
.setTimestamp()
)
   }