const Discord = require('discord.js')
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;

module.exports.help = {
  name: 'emoji',
  descreption: "emoji",
  aliases: []
  }


module.exports.run = async function(client, message,args) {
        const emoji = args[0];
        if (!emoji) return message.channel.send(`Please Give Me A Emoji!`);

        let customemoji = Discord.Util.parseEmoji(emoji);

        if (customemoji.id) {
            const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
              customemoji.animated ? "gif" : "png"
            }`;
            const name = args.slice(1).join(" ");
            message.guild.emojis.create(
                `${Link}`,
                `${name || `${customemoji.name}`}`
            ).catch(error => {
                console.log(error)
            })
            const Added = new MessageEmbed()
                .setTitle(`Emoji link`)
                .setColor(`RANDOM`)
                .setDescription(
                    `[Click Me](${Link})`
                );
            return message.channel.send(Added).catch(e => {
                console.log(e)
            })
        } else {
            let CheckEmoji = parse(emoji, {
                assetType: "png"
            });
            if (!CheckEmoji[0])
                return message.channel.send(`Please Give Me A Valid Emoji!`);
        }
    };