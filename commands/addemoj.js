const Discord = require('discord.js')
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;
const db = require ('quick.db')


module.exports.help = {
  name: 'addemoji',
  decreption: "adds a emoji to your server",
  aliases: ["steal"]
}


module.exports.run = async function(client, message, args) {
    if(!message.member.hasPermission('MANAGE_EMOJIS'))return message.channel.send('no perms')
    if(!args[0]) return message.channel.send('Please specify emoji to add!');

    const emoji = Discord.Util.parseEmoji(args[0]);
    
    if(emoji.id) {
        const emojiFormat = emoji.animated ? '.gif' : '.png';
        const emojiUrl = `https://cdn.discordapp.com/emojis/${emoji.id + emojiFormat}`;
    
        await message.guild.emojis.create(emojiUrl, `${args[1] ? args[1] : emoji.name}`)
            .then((emoji) => {
                    messag.channel.send(`**${message.author.username}**, emoji \`:${emoji.name}:\` ${emoji} was successfully added.`)
                }).catch(() => { message.channel.send('Cannot add this emoji, try again later.') });  
    } else {
        const emojiLink = args[0];
        
        if(!args[1]) return message.channel.send('You must enter a name for the emoji.');
        if(args[1].length > 32) return message.channel.send('The name of the emoji cannot exceed 32 characters!');
        await message.guild.emojis.create(emojiLink, args[1])
                .then((emoji) => {
                    message.channel.send(`**${message.author.username}**, emoji \`:${emoji.name}:\` ${emoji} was successfully added.`)
            }).catch(() => { message.channel.send('Cannot add this emoji, try again later.') });
        }
    }