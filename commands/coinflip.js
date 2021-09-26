  
const Discord = require('discord.js');
const bot = new Discord.Client();
const {MessageEmbed} = require ('discord.js')
module.exports.help = {
    name: "coinflip",
    decreption: "flips a coin for u",
    aliases: ["cf"]
}

module.exports.run = async function(client, message, args) {
        let number = Math.floor(Math.random() * 2);
        if (number == 1) {
            message.channel.send(new MessageEmbed ()
            .setTitle('HEADS')
            .setColor('RANDOM')
            .setImage('https://tenor.com/view/heads-coinflip-flip-a-coin-coin-coins-gif-21479854' ))
        }
        if (number == 0) {
                message.channel.send(new MessageEmbed ()
            .setTitle('TAILS')
            .setColor('RANDOM')
            .setImage('https://tenor.com/view/coins-tails-coin-flip-a-coin-coinflip-gif-21479856' ))
        }
    };