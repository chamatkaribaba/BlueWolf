const Discord = require('discord.js')

module.exports.help = {
    name: "dice",
    decreption: "rolls a dice-",
    aliases: [],
    commandOptions: null,
	global: true,
}

module.exports.run = async function(client, message, args) {

 
let randomArray = [1,2,3,4,5,6];
let r = Math.floor(Math.random() * randomArray.length);
message.channel.send(randomArray[r]);
}