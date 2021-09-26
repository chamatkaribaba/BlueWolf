const {MessageEmbed} = require('discord.js')

module.exports.help = {
    name: "feedback",
    decreption: "feedback",
    aliases: []
}

module.exports.run = async function(client, message, args) {
        let feednumber = message.content.split(" ").slice(1)
        let feedstr = message.content.split(" ").slice(2).join(" ");
        let feednumber1 = parseInt(feednumber)
        if (!feedstr) return message.channel.send(`:x: Please rate that bot on a scale of 1 - 5 with a reason \`E.g =feedback 5 has awesome utilities\``)
        if (!feednumber1 || isNaN(parseInt(feednumber)) || parseInt(feednumber) <= 0 || parseInt(feednumber) > 5) return message.channel.send(`:x:`)
        if (feednumber1 > 5) return message.channel.send(`:x: Please rate the bot on a scale of 1 - 5 with a reason \`E.g =feedback 5 has awesome utilities\``)
        let stararray = []
        for (i = 0; i < feednumber1; i++) {
            stararray.push("⭐")
        }
        let channelForFeedback = client.channels.cache.get("859746209069137970");
        channelForFeedback.send(new MessageEmbed()
        
            .setTitle(`New review`)
            .addField(`Stars:`, `${stararray.join("")}`)
            .setColor("RANDOM")
            .addField(`Comment:`, `${feedstr}`)
            .addField(`From:`, `${message.author}`)
            .setThumbnail(message.author.displayAvatarURL({
                dynamic: true
            }))
            .setTimestamp()
            .setFooter(`${message.guild.name}`)
        )
        await message.channel.send('thx for the feed back')
    }