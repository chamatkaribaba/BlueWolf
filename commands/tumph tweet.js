const Discord = require('discord.js')
const db = require('quick.db')
const fetch = require('node-fetch')
const ms = require('ms')
module.exports.help = {
    name: "ttweet",
    decreption: "ttweet",
    aliases: []
}

module.exports.run = async function(client, message, args) {
        let text = args.join(" ");

        let m = await message.channel.send("**Please wait...**");
        if(!text){
            return m.edit("You must enter a message!");
        }

        else {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${text}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "tweet.png");
            await message.channel.send( attachment );
            m.delete({ timeout: 5000});
				}
    }