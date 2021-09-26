module.exports.help = {
  name: 'bin',
  descreption: "bins ur code",
  aliases: []
  }

const {MessageEmbed} = require('discord.js')
module.exports.run = async function(client, message,args) {

const  ultrax = require('ultrax')

if (!args.join(' ')) return  message.channel.send('What do you want to bin?');
 

else {

const  bin = await  ultrax.bin(args.join(' '));

message.channel.send('Here i binned the code ' + bin)
}
};