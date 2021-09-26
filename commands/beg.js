const { MessageEmbed , Discord } = require("discord.js");
const db = require("quick.db");
const ms =require('ms')
module.exports.help = {
    name: "beg",
    decreption: "begs for money",
    aliases: []
}

module.exports.run = async function(client, message, args) {
let randomArray = ["future santa", "billgates" ,"twitch" , "ur mom"];
let r = Math.floor(Math.random() * randomArray.length);



        let payment = Math.floor(Math.random() * 501)

        let timeout = 5 * 60000;
        let work = await db.fetch(`beg_${message.guild.id}_${message.author.id}`);

        if(work !== null && timeout - (Date.now() - work) > 0){
            let time = ms(timeout - (Date.now() - work));

            return message.channel.send(`Please wait 5 minutes before beging again`)
        } else {
            db.add(`money_${message.guild.id}_${message.author.id}`, payment);
            db.set(`beg_${message.guild.id}_${message.author.id}`, Date.now());

            let workEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
                .setDescription("ugh fine " + randomArray[r] +  " gave you :moneybag: " + payment + '!')
                .setTimestamp()
                .setColor("GREEN")
            message.channel.send(workEmbed)

        }
    }
    