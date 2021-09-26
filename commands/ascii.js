const {MessageEmbed , Client , Message , Discord} = require('discord.js')
const figlet = require ('figlet')
const db = require ('quick.db')
module.exports.help = {
  name: 'ascii',
  descreption: "make a fun format for your text llol",
  aliases: []
  }


module.exports.run = async function(client, message,args) {
       prefix = db.fetch(`prefix_${message.guild.id}`) || "=";
 if(!message.content.startsWith(prefix)) return;

        let noArgsEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription("Please provide some text")
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))

        if(!args[0]) return message.channel.send(noArgsEmbed);

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Something went wrong');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('Please provide text shorter than 2000 characters')

            message.channel.send('```' + data + '```')
        })
    }