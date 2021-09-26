const {Discord , MessageEmbed} = require('discord.js')
const db = require('quick.db')

module.exports.help = {
    name: "pay",
    decreption: "pay",
    aliases: ["give" , "gib"]
}

module.exports.run = async function(client, message, args) {
        let User = await message.mentions.members.first() || client.users.cache.get(args[0])
        let authorBal = db.fetch(`money_${message.guild.id}_${message.author.id}`)
        let payment = Number[args[1]]

        if(authorBal < payment){
            let tooLessMoneyEmbed = new Discord.MessageEmbed()
                .setColor("red")
                .setDescription()
            message.channel.send()

        }
    }