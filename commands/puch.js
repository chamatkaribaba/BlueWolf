const Discord = require('discord.js');
const { Message } = require('discord.js');
const punchs = [
    'https://media1.tenor.com/images/ee3f2a6939a68df9563a7374f131fd96/tenor.gif?itemid=14210784',
    'https://media.tenor.com/images/8e51636630e8eed819dd59f92c928795/tenor.gif',
    'https://media.tenor.com/images/1dcba5faac6462fa788487c99cd678c9/tenor.gif',
    'https://media.tenor.com/images/2dfb030da07fe89448bb636c5e969ece/tenor.gif'
];
module.exports.help = {
    name: "punch",
    decreption: "punch",
    aliases: ["punch"]
}

module.exports.run = async function(client, message, args) {
        const user = message.mentions.users.first();
        if (!user) return message.channel.send('Oh oh... you gotta provide a valid user to punch :/');
        return message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setImage(punchs[Math.floor(Math.random() * punchs.length)])
            .setDescription(`${message.author.username} punched ${user.username}!`)
        );
    }
