const {Discord , MessageEmbed} = require('discord.js')
const db = require('quick.db')

module.exports.help = {
  name: 'bal',
  descreption: "shows the balance of the user",
  aliases: ["balance"]
  }


module.exports.run = async function(client, message,args) {
      let User = message.mentions.users.first() || message.author;

        let bal = await db.fetch(`money_${message.guild.id}_${User.id}`);
        let bank = await db.fetch(`bank_${message.guild.id}_${User.id}`)
        if (bal === null) bal = 0;
        if (bank === null) bank = 0;


        let balanceEmbed = new MessageEmbed()
            .setTimestamp()
            .setAuthor(User.tag, User.avatarURL({
                dynamic: true
            }))
            .setColor("BLUE")
            .addField("Coins:", `:moneybag: ${bal}`, true)
            .addField("Bank: ", `:moneybag: ${bank}`, true)
            .addField("Net worth:", `:moneybag: ${bank + bal}`)
        message.channel.send(balanceEmbed)
    }