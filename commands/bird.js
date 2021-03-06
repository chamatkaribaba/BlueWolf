
const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports.help = {
    name: "birda",
    decreption: "a random pic and info about a bird",
    aliases: ["bird"]
}

module.exports.run = async function(client, message, args) {
        const url = "https://some-random-api.ml/img/bird";
        const facts = "https://some-random-api.ml/facts/bird"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Random bird Image and Fact`)
            .setColor(`#f3f3f3`)
            .setDescription(fact.fact)
            .setImage(image.link)

        await message.channel.send(embed)
    }
