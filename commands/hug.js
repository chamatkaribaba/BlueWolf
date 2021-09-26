  
const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports.help = {
    name: "hug",
    decreption: "hug",
    aliases: []
}

module.exports.run = async function(client, message, args) {
        const url = 'https://some-random-api.ml/animu/hug';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`@${message.author.username} hugs @${message.mentions.users.first().username}`)
            .setImage(data.link)

        await message.channel.send(embed)
    }