const  discord  = require('discord.js')
const db = require ('quick.db')
const {MessageButton} = require('discord-buttons')
const prefix = "="
module.exports.help = {
  name: 'invite',
  decreption: 'invites',
  aliases: ['bot-invite', 'inv', 'invite-bot']
};
const { MessageEmbed } = require('discord.js');

module.exports.run = async function(client, message, args) {

 /* let invite = new MessageEmbed()
    .setTitle('Thanks for choosing to invite bluebot|| the bot shall not be part of any act against the TOS doing so will get you blacklisted . Enjoy using bluebot!')
  let invitebtn = new disbut.MessageButton()
    .setStyle('url')
    .setLabel('Invite BlueBot')
    .setURL(
      'https://discord.com/api/oauth2/authorize?client_id=843011711727960075&permissions=201334791&scope=bot');
  let serverbtn = new disbut.MessageButton()
    .setStyle('url')
    .setLabel('Join our Support server')
    .setURL(
      'https://discord.gg/AAUfKnDKfE');
  await message.channel.send({ buttons: invitebtn && serverbtn, embed: invite });
};*/
 
    const embed = new discord.MessageEmbed()
    .setTitle("Thanks for choosing to invite bluebot || the bot shall not be part of any act against the TOS doing so will get you blacklisted . Enjoy using bluebot!")
    .setColor("BLUE")

    const inve = new MessageButton()
    .setStyle("url")
    .setLabel('Invite Bluebot')
    .setURL("https://discord.com/api/oauth2/authorize?client_id=843011711727960075&permissions=201334791&scope=bot")

    const server = new MessageButton()
    .setStyle("url")
    .setLabel("Join our Support server")
    .setURL("https://discord.com/invite/UkZWUr663U")
       const website = new MessageButton()
    .setStyle("url")
    .setLabel("Website")
    .setURL("https://siddugaming07.wixsite.com/bluebot")

    message.channel.send("Hello", {
        buttons: [inve,server , website],
        embed: embed
    })
}