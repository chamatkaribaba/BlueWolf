const Discord = require("discord.js")
module.exports.help = {
    name: "dumbrate",
    decreption: "dumbrate",
    aliases: []
}

module.exports.run = async function(client, message, args) {
        let User = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase().includes() === args.join(' ').toLocaleLowerCase())
        let gayrate = Math.floor(Math.random() * 101)


        if(!User){
            let gayrateEmbed = new Discord.MessageEmbed()
                .setTitle("Dumbrate Machine")
                .setColor("RANDOM")
                .setDescription("You are `" + gayrate + "%` dumb!")
                .setFooter(message.client.user.username, message.client.user.avatarURL())
            message.channel.send(gayrateEmbed).catch(e => {
                console.log(e)
            })
        } else {
            let argsEmbed = new Discord.MessageEmbed()
                .setTitle("Dumbrate Machine")
                .setColor("RANDOM")
                .setDescription(`${User.username} is \`${gayrate}%\` dumb!`)
                .setFooter(message.client.user.username, message.client.user.avatarURL())
            message.channel.send(argsEmbed).catch(e => {
                console.log(e)
            })
        }
    }