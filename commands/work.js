const db = require('quick.db')
const { MessageEmbed } = require('discord.js')
const ms = require('ms')
module.exports.help = {
    name: "work",
    decreption: "work",
    aliases: []
}

module.exports.run = async function(client, message, args) {

        let payment = Math.floor(Math.random() * 501)

        let timeout = 5 * 60000;
        let work = await db.fetch(`work_${message.guild.id}_${message.author.id}`);

        if (work !== null && timeout - (Date.now() - work) > 0) {
            let time = ms(timeout - (Date.now() - work));

            return message.channel.send(`Please wait 5 minutes before working again`)
        } else {
            db.add(`money_${message.guild.id}_${message.author.id}`, payment);
            db.set(`work_${message.guild.id}_${message.author.id}`, Date.now());

            let workEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL({
                    dynamic: true
                }))
                .setDescription("You did good at work. Here's :moneybag: " + payment + '!')
                .setTimestamp()
                .setColor("GREEN")
            message.channel.send(workEmbed)

        }
    }