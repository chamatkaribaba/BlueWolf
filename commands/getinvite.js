const ownerid = "855322629321785354";

module.exports.help = {
    name: "getinvite",
    decreption: "getinvite",
    aliases: ["gi"]
}

module.exports.run = async function(client, message, args) {
        if (message.author.id === ownerid) {
        let guild = null;

        if (!args[0]) return message.channel.send("Enter the guild name or guild ID of which you want an invite!")

        if(args[0]){
            let fetched = client.guilds.cache.find(g => g.name === args.join(" "));
            let found = client.guilds.cache.get(args[0]);
            if(!found) {
                if(fetched) {
                    guild = fetched;
                }
            } else {
                guild = found
            }
        } else {
            return message.channel.send("Invalid guild!");
        }
        if(guild){
            let tChannel = guild.channels.cache.find(ch => ch.type == "text" && ch.permissionsFor(ch.guild.me).has("CREATE_INSTANT_INVITE"));
            if(!tChannel) {
                return message.channel.send("Sorry, I don't have CREATE_INSTANT_INVITE permission there!"); 
            }
            let invite = await tChannel.createInvite({ temporary: false, maxAge: 0 }).catch(err => {
                return message.channel.send(`${err} has occured!`);
            });
            message.channel.send(invite.url);
        } else {
            return message.channel.send(`\`${args.join(' ')}\` - I'm not in that Server.`);
        }
    } else {
        return;
    }
    }
