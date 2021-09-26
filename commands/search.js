const { MessageEmbed , Discord } = require("discord.js");
const db = require("quick.db");
const ms =require('ms')
module.exports.help = {
    name: "search",
    decreption: "search",
    aliases: []
}

module.exports.run = async function(client, message, args) {
let randomArray = ["street", "sewer" ,"shoe"];
let r = Math.floor(Math.random() * randomArray.length);



        let payment = Math.floor(Math.random() * 501)

        let timeout = 5 * 60000;
        let work = await db.fetch(`search_${message.guild.id}_${message.author.id}`);

        if(work !== null && timeout - (Date.now() - work) > 0){
            let time = ms(timeout - (Date.now() - work));

            return message.channel.send(`Please wait 5 minutes before searching again`)
        } else {
            db.add(`money_${message.guild.id}_${message.author.id}`, payment);
            db.set(`search_${message.guild.id}_${message.author.id}`, Date.now());

            let workEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
                .setDescription("you searched the " + randomArray[r] +  " and got :moneybag: " + payment + '!')
                .setTimestamp()
                .setColor("GREEN")
            message.channel.send(workEmbed)

        }
    }
    