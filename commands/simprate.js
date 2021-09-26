const Discord = require("discord.js")


module.exports.help = {
    name: "simprate",
    decreption: "simprate",
    aliases: []
}

module.exports.run = async function(client, message, args) {
        let User = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase().includes() === args.join(' ').toLocaleLowerCase())
             || message.member; let gayrate = Math.floor(Math.random() * 101)


        if(!User){
            let gayrateEmbed = new Discord.MessageEmbed()
                .setTitle("Simprate Machine")
                .setColor("RANDOM")
                .setDescription("You are `" + gayrate + "%` a simp!")
                .setFooter(message.client.user.username, message.client.user.avatarURL())
            message.channel.send(gayrateEmbed).catch(e => {
                console.log(e)
            })
        } else {
            let argsEmbed = new Discord.MessageEmbed()
                .setTitle("Simprate Machine")
                .setColor("RANDOM")
                .setDescription(`${User.name} is \`${gayrate}%\` a simp!`)
                .setFooter(message.client.user.username, message.client.user.avatarURL())
            message.channel.send(argsEmbed).catch(e => {
                console.log(e)
            })
        }
    }