const {MessageEmbed ,Discord} = require('discord.js')
const db = require('quick.db')
const ms = require('ms')

module.exports.help = {
    name: "dep",
    decreption: "deposits money to the bank",
    aliases: ["deposit"]
}

module.exports.run = async function(client, message, args) {
          let User = message.mentions.users.first()

        if (args[0] === "all") {
            let totalCash = db.fetch(`money_${message.guild.id}_${message.author.id}`)

            db.subtract(`money_${message.guild.id}_${message.author.id}`, totalCash);
            db.add(`bank_${message.guild.id}_${message.author.id}`, totalCash);

            let totalEmbed = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({
                dynamic: true
            }))
            .setDescription(`:white_check_mark: Deposited :moneybag: ${totalCash} to your bank!`)
            .setTimestamp()
            .setColor("GREEN")
        message.channel.send(totalEmbed)

        } else {
            let amount = parseInt(args[0])

            let totalAmountInHand = db.fetch(`money_${message.guild.id}_${message.author.id}`)

            if(amount > totalAmountInHand) return message.reply("You don't have that much in hand")

            db.subtract(`money_${message.guild.id}_${message.author.id}`, amount);
            db.add(`bank_${message.guild.id}_${message.author.id}`, amount);

            let amountEmbed = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({
                dynamic: true
            }))
            .setDescription(`:white_check_mark: Deposited :moneybag: ${amount}`)
            .setTimestamp()
            .setColor("GREEN")
        message.channel.send(amountEmbed)
        }


        

    }