const {Discord , MessageEmbed} = require('discord.js')
const db = require('quick.db')

module.exports.help = {
    name: "Leaderboard",
    decreption: "leaderboard",
    aliases: ["lb"]
}

module.exports.run = async function(client, message, args) {
  let cashInHand = db.all().filter(data => data.ID.startsWith(`money_${message.guild.id}`)).sort((a, b) => b.data - a.data)
        let moneyInBank = db.all().filter(data => data.ID.startsWith(`bank`)).sort((a, b) => b.data - a.data)

        cashInHand.length = 10;
        moneyInBank.length = 10
        var finalLb = "";
        if (!args.length) {
            let embed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL({
                    dynamic: true
                })).setDescription(':x: Invalid `[-cash | -bank]` arguments given.')
                .addField('Usage:', '`leaderboard <-cash | -bank>`')
                .setColor("RANDOM")
                .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
                message.channel.send(embed)

        } else if (args[0] === "-cash") {
            for (var i in cashInHand) {
                finalLb += `**${cashInHand.indexOf(cashInHand[i])+1}. <@${message.client.users.cache.get(cashInHand[i].ID.split('_')[2]) ? message.client.users.cache.get(cashInHand[i].ID.split('_')[2]).id : "Unknown User#0000"}>** • :moneybag: ${cashInHand[i].data}\n`;
            }
            const embed = new MessageEmbed()
                .setAuthor(`${message.guild.name}'s Cash Leaderboard`, 'https://media.discordapp.net/attachments/506838906872922145/506899959816126493/h5D6Ei0.png')
                .setColor("#7289da")
                .setDescription(finalLb)
                .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
                .setTimestamp()
            message.channel.send(embed);
        } else if (args[0] === "-bank") {
            for (var i in moneyInBank) {
                finalLb += `**${moneyInBank.indexOf(moneyInBank[i])+1}. <@${message.client.users.cache.get(moneyInBank[i].ID.split('_')[2]) ? message.client.users.cache.get(moneyInBank[i].ID.split('_')[2]).id : "Unknown User#0000"}>** • :moneybag: ${moneyInBank[i].data}\n`;
            }
            const embed = new MessageEmbed()
                .setAuthor(`${message.guild.name}'s Bank Leaderboard`, 'https://media.discordapp.net/attachments/506838906872922145/506899959816126493/h5D6Ei0.png')
                .setColor("#7289da")
                .setDescription(finalLb)
                .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
                .setTimestamp()
            message.channel.send(embed);
        }

}