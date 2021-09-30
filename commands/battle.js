module.exports.help = {
  name: 'battle',
  descreption: "battle your friends",
  aliases: ["bat"]
  }

const {MessageEmbed} = require('discord.js')
module.exports.run = async function(client, message,args) {

const { DiscordBattleShip } = require("discord-battleship");
 
const BattleShip = new DiscordBattleShip({
    embedColor: "BLUE",
    prefix: "bat",
});
};