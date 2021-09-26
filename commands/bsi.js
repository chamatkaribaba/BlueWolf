const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;
module.exports.help = {
    name: "botserverinfo",
    decreption: "shows the server info of a server ur not in but ur bot is in",
    aliases: ["bsi"]
}

module.exports.run = async function(client, message, args) {

        

        if (!args[0] || isNaN(args[0])) return message.channel.send(`Please Give A Valid Server iD!`);

        let g;

        try {

        g = await client.guilds.cache.get(args[0]);

        } catch (error) {
          return message.channel.send(`Invalid Server ID!`);
        };

        let Mem = g.memberCount;

        let Human = g.members.cache.filter(m => !m.user.bot).size || "0";

        let Bots = g.members.cache.filter(m => m.user.bot).size || "0";

        let Owner = g.ownerID;

        let Roles = g.roles.cache.size;

        let Channels = g.channels.cache.filter(c => c.type !== "category").size || "0";

        let Emotes = g.emojis.cache.size;

        let Created = g.createdAt.toDateString();

        await g.channels.cache.random().createInvite().then(invite => {
        let Embed = new MessageEmbed()
        .setColor(Color)
        .setThumbnail(g.iconURL({ dynamic: true }))
        .setTitle(`Server Information!`)
        .addField(`Full Name`, g.name, true)
        .addField(`ID`, g.id, true)
        .addField(`Owner`, `<@${Owner}>`, true)
        .addField(`Roles`, Roles, true)
        .addField(`Channels`, Channels, true)
        .addField(`Emojis`, Emotes, true)
        .addField(`Members`, Mem, true)
        .addField(`Humans`, Human, true)
        .addField(`Bots`, Bots, true)
        .addField(`Server Created At`, Created)
        .addField(`Invite`, invite.code)
        .setTimestamp();

        return message.channel.send(Embed);
        });
    }