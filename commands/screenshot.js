const { Message, MessageEmbed } = require("discord.js");

const Discord = require("discord.js");

const moment = require("moment");
const fetch = require("node-fetch");

const url = require("url");
module.exports.help = {
    name: "ss",
    decreption: "ss",
    aliases: ["screenshot"]
}

module.exports.run = async function(client, message, args) {

    const user = message.author.tag
    const urls = args[0];
    if (!urls)
      return message.channel
        .send(`where is the link ?`)
        .then(message => client.setTimeout(() => message.delete(), 15000).catch(e => {}));
    if (urls.length < 8)
      return message
        .reply(
          "your link is too short to reach - 8 limit"
        )
        .then(message => client.setTimeout(() => message.delete(), 15000).catch(e => {}));
    message.react('👍');
    const site = /^(https?:\/\/)/i.test(urls) ? urls : `http://${urls}`;
    try {
      const { body } = await fetch(
        `https://image.thum.io/get/width/1920/crop/675/noanimate/${site}`
      );

      return message.channel.send(
        {
          content: `Here is a screenshot from requested URL`, files: [{ attachment: body, name: "Screenshot.png" }]
        }
      );
    } catch (err) {
      if (err.status === 404)
        return message.channel
          .send("Could not find any results. Invalid URL?")
          .then(message => client.setTimeout(() => message.delete(), 15000));
      return message
        .reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`)
        .then(message => client.setTimeout(() => message.delete(), 15000).catch(e => {}));
    }
  }