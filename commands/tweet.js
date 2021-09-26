const Discord = require('discord.js')
const db = require('quick.db')
const fetch = require('node-fetch')
const ms = require('ms')

module.exports.help = {
    name: "tweet",
    decreption: "tweet",
    aliases: []
}

module.exports.run = async function(client, message, args) {
			
        let user = message.author.username;
        let text = args.join(" ");

        let m = await message.channel.send("**Please wait...**");
        if(!text){
            return m.edit("You must enter a message!");
        }

        else {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=tweet&username=${user}&text=${text}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "tweet.png");
            await message.channel.send(`**New tweet by **<@${message.author.id}>`, attachment);
            m.delete({ timeout: 5000});
				}
    }