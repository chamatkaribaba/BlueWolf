
const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports.help = {
    name: "cat",
    decreption: "ranom pic and info bout a cat",
    aliases: ["kitty"]
}

module.exports.run = async function(client, message, args) {
        const url = "https://some-random-api.ml/img/cat";
        const facts = "https://some-random-api.ml/facts/cat"

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
            .setTitle(`Here is a randm cat image and fact`)
            .setColor(`RANDOM`)
            .setDescription(fact.fact)
            .setImage(image.link)

        await message.channel.send(embed)
    }