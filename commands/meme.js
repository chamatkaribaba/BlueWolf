const {MessageEmbed} = require('discord.js')
const Discord = require("discord.js");
const got = require("got")

module.exports.help = {
    name: "meme",
    discription: "meme",
    aliases: ["meme"]
}

module.exports.run = async function(client, message, args) {
   const embed = new Discord.MessageEmbed();
                        got(`https://www.reddit.com/r/memes/random/.json`).then((response) => {
                            let content = JSON.parse(response.body);
                            let memelink = content[0].data.children[0].data.permalink;
                            let memeUrl = `https://reddit.com${memelink}`;
                            let memeImage = content[0].data.children[0].data.url;
                            let memeTitle = content[0].data.children[0].data.title;
                            let memeUpvotes = content[0].data.children[0].data.ups;
                            let memeNumComments = content[0].data.children[0].data.num_comments;
                            embed.setTitle(`${memeTitle}`);
                            embed.setURL(`${memeUrl}`);
                            embed.setImage(memeImage);
                            embed.setColor("YELLOW")
                            embed.setFooter(
                                `👍 ${memeUpvotes} 💬 ${memeNumComments}`
                            );
                            message.channel.send(embed);
                        })};

