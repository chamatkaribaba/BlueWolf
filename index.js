const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send(` m alive ig `));          

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));



const Discord = require('discord.js');
const message = require('discord.js');
const canvacord = require('canvacord');
const got = require('got');


const AntiSpam = require('discord-anti-spam');
const { AntiInvites, AntiRaid } = require("djs-antiraid");
const jimp = require('jimp');
require('discord-reply');
const fetch = require("node-fetch")
const client = new Discord.Client({ disableEveryone: true, partials: ['MESSAGE', 'REACTION'] });
const fs = require("fs");
const config = require("./Config.json");
const ServerId = require("./Config.json");
client.config = config;
const { MessageEmbed, Client } = require('discord.js');
require('discord-buttons')(client)
const Nuggies = require('nuggies')


Nuggies.handleInteractions(client)

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.aliases = new Discord.Collection();
client.image = new Discord.Collection();



const db = require("quick.db");


async function run() {
  const db = require('quick.db');
  client.queue = new Map();
  const { prefix, ServerID } = require('./Config.json');
  const config = require('./Config.json');

  client.vote = new Map();
}

const { GiveawaysManager } = require("discord-giveaways");
client.giveawaysManager = new GiveawaysManager(client, {
  updateCountdownEvery: 3000,
  default: {
    botsCanWin: false,
    embedColor: "#FF0000",
    reaction: "🎉"
  }
});
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(f => {
    if (!f.endsWith(".js")) return;
    const event = require(`./events/${f}`);
    let eventName = f.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(f => {
    if (!f.endsWith(".js")) return;
    let command = require(`./commands/${f}`);
    client.commands.set(command.help.name, command);
    command.help.aliases.forEach(alias => {
      client.aliases.set(alias, command.help.name);
    });
  });
});


client.giveawaysManager.on(
  "giveawayReactionAdded",
  async (giveaway, reactor, messageReaction) => {
    if (reactor.user.bot) return;
    try {
      if (giveaway.extraData) {
        await client.guilds.cache.get(giveaway.extraData.server).members.fetch(reactor.id)
      }
      reactor.send(
        new Discord.MessageEmbed()
          .setTimestamp()
          .setTitle("Entery Approved! | You have a chance to win!!")
          .setDescription(
            `Your entery to [This Giveaway](https://discord.com/channels/${giveaway.guildID}/${giveaway.channelID}/${giveaway.messageID}) has been approved!`
          )

          .setTimestamp()
      );
    } catch (error) {
      const guildx = client.guilds.cache.get(giveaway.extraData.server)
      messageReaction.users.remove(reactor.user);
      reactor.send(new Discord.MessageEmbed()
        .setTimestamp()
        .setTitle(":x: Entery Denied | Databse Entery Not Found & Returned!")
        .setDescription(
          `Your entery to [This Giveaway](https://discord.com/channels/${giveaway.guildID}/${giveaway.channelID}/${giveaway.messageID}) has been denied as you did not join **${guildx.name}**`
        )

      );
    }
  }
);

client.giveawaysManager.on('endedGiveawayReactionAdded', (giveaway, member, reaction) => {
  reaction.users.remove(member.user);
  member.send(`**Aw snap! Looks Like that giveaway has already ended!**`)

});

client.giveawaysManager.on('giveawayEnded', (giveaway, winners) => {
  winners.forEach((member) => {
    member.send(new Discord.MessageEmbed()
      .setTitle(`🎁 Let's goo!`)
      .setDescription(`Hello there ${member.user}\n I heard that you have won **[[This Giveaway]](https://discord.com/channels/${giveaway.guildID}/${giveaway.channelID}/${giveaway.messageID})**\n Good Job On Winning **${giveaway.prize}!**\nDirect Message the host to claim your prize!!`)
      .setTimestamp()
      .setFooter(member.user.username, member.user.displayAvatarURL())
    );
  });
});

client.giveawaysManager.on('giveawayRerolled', (giveaway, winners) => {
  winners.forEach((member) => {
    member.send(new Discord.MessageEmbed()
      .setTitle(`🎁 Let's goo! We Have A New Winner`)
      .setDescription(`Hello there ${member.user}\n I heard that the host rerolled and you have won **[[This Giveaway]](https://discord.com/channels/${giveaway.guildID}/${giveaway.channelID}/${giveaway.messageID})**\n Good Job On Winning **${giveaway.prize}!**\nDirect Message the host to claim your prize!!`)
      .setTimestamp()
      .setFooter(member.user.username, member.user.displayAvatarURL())
    );
  });
});

client.giveawaysManager.on('giveawayReactionRemoved', (giveaway, member, reaction) => {
  return member.send(new Discord.MessageEmbed()
    .setTimestamp()
    .setTitle('❓ Hold Up Did You Just Remove a Reaction From A Giveaway?')
    .setDescription(
      `Your entery to [This Giveaway](https://discord.com/channels/${giveaway.guildID}/${giveaway.channelID}/${giveaway.messageID}) was recorded but you un-reacted, since you don't need **${giveaway.prize}** I would have to choose someone else 😭`
    )
    .setFooter("Think It was a mistake? Go react again!")
  );
});

client.on("message", async (message) => {


  const prefix = await db.fetch(`prefix_${message.guild.id}`) || "="

  if (message.content.match(new RegExp(`^<@!?${client.user.id}>`))) {
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`Hello there ${message.author}, my prefix in this 
     guild is ${prefix}`)
    message.channel.send(embed)

  }


})




/*client.on("channelCreate", function(channel , message) {
    const mod = db.fetch(`modlog_${channel.guild.id}`)
    if (!mod) return;
  
    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Channel created")
      .setDescription(`Channel name: \`${channel.name}\`\n\n Channel ID: \`${channel.id}\`\n\n Channel type: \`${channel.type}\``)
  
    var sChannel = channel.guild.channels.cache.get(mod)
    if (!sChannel) return;
    sChannel.send(embed)
  })*/
  
  client.on("channelDelete", function(channel) {
    const mod = db.fetch(`modlog_${channel.guild.id}`)
    if (!mod) return;
  
    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Channel deleted")
      .setDescription(`Channel name: \`${channel.name}\`\nChannel ID: \`${channel.id}\`\nChannel type: \`${channel.type}\``
      )
  
    var sChannel = channel.guild.channels.cache.get(mod)
    if (!sChannel) return;
    sChannel.send(embed)
  })
  
   client.on("channelPinsUpdate", function(channel, time) {
  
    const yeet = db.fetch(`modlog_${channel.guild.id}`)
    if (!yeet) return;
  
  
    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Channel pins update")
      .setDescription(`Channel name: \`${channel.name}\`\nChannel ID: \`${channel.id}\`\nPinned/Removed a pin at \`${time}\``)
  
    var sChannel = channel.guild.channels.cache.get(yeet)
    if (!sChannel) return;
    sChannel.send(embed)
  })
  client.on('roleCreate', async  role => {
  
    const moo = db.fetch(`modlog_${role.guild.id}`)
    if (!moo) return;
    const embed = new MessageEmbed()
      .setTitle(`New role named ${role.name} was created`)
      .setColor("GREEN")
      .setFooter(`ID: ${role.id}`)
      .setTimestamp();
  
    var sChannel = role.guild.channels.cache.get(moo)
    if (!sChannel) return;
    sChannel.send(embed)
  })
  
  client.on('roleDelete', async role => {
   
    const cool = db.fetch(`modlog_${role.guild.id}`)
    if (!cool) return;
    const embed = new MessageEmbed()
      .setTitle(`
       Role (${role.name}) was deleted`)
      .setColor("RANDOM")
      .setFooter(`ID: ${role.id}`)
      .setTimestamp();
  
    var sChannel = role.guild.channels.cache.get(cool)
    if (!sChannel) return;
    sChannel.send(embed)
  })

  
client.on("message", async (message) => {
  
  
  const cchann = db.get(`chatbot_${message.guild.id}`);
  if (cchann === null) return;
  if (!cchann) return;
  const sender = client.channels.cache.get(cchann);
  if (message.channel.id == sender.id) {
    if (message.author.bot) return;
    message.content = message.content
      .replace(/@(everyone)/gi, "everyone")
      .replace(/@(here)/gi, "here");
    message.channel.stopTyping();
    message.channel.startTyping();
    fetch(
      `https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(
        message.content
      )}&botname=${client.user.username}&ownername= chamatkai baba#6969 &username=human`
    )
      .then(res => res.json())
      .then(data => {
        message.lineReply(data.message);
      });

    message.channel.stopTyping();
  }
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let messageFetch = db.fetch(`guildMessages_${message.guild.id}`)
  if (messageFetch === null) return;

  db.add(`messages_${message.guild.id}_${message.author.id}`, 1)
  let messagefetch = db.fetch(`messages_${message.guild.id}_${message.author.id}`)

  let messages;
  if (messagefetch == 0) messages = 0;
  else if (messagefetch == 100) messages = 100;
  else if (messagefetch == 200) messages = 200;
  else if (messagefetch == 300) messages = 300;
  else if (messagefetch == 400) messages = 400;
  else if (messagefetch == 500) messages = 500;
  else if (messagefetch == 600) messages = 600;
  else if (messagefetch == 700) messages = 700;
  else if (messagefetch == 800) messages = 800;
  else if (messagefetch == 900) messages = 900;
  else if (messagefetch == 1000) messages = 1000;
  else if (messagefetch == 1100) messages = 1100;
  else if (messagefetch == 1200) messages = 1200;
  else if (messagefetch == 1300) messages = 1300;
  else if (messagefetch == 1400) messages = 1400;
  else if (messagefetch == 1500) messages = 1500;
  else if (messagefetch == 1600) messages = 1600;
  else if (messagefetch == 1700) messages = 1700;
  else if (messagefetch == 1800) messages = 1800;
  else if (messagefetch == 1900) messages = 1900;
  else if (messagefetch == 2000) messages = 2000;
  else if (messagefetch == 2100) messages = 2100;
  else if (messagefetch == 2200) messages = 2200;
  else if (messagefetch == 2300) messages = 2300;
  else if (messagefetch == 2400) messages = 2400;
  else if (messagefetch == 2500) messages = 2500;
  else if (messagefetch == 2600) messages = 2600;
  else if (messagefetch == 2700) messages = 2700;
  else if (messagefetch == 2800) messages = 2800;
  else if (messagefetch == 2900) messages = 2900;
  else if (messagefetch == 3000) messages = 3000;
  else if (messagefetch == 3100) messages = 3100;
  else if (messagefetch == 3200) messages = 3200;
  else if (messagefetch == 3300) messages = 3300;
  else if (messagefetch == 3400) messages = 3400;
  else if (messagefetch == 3500) messages = 3500;
  else if (messagefetch == 3600) messages = 3600;
  else if (messagefetch == 3700) messages = 3700;
  else if (messagefetch == 3800) messages = 3800;
  else if (messagefetch == 3900) messages = 3900;
  else if (messagefetch == 4000) messages = 4000;
  else if (messagefetch == 4100) messages = 4100;
  else if (messagefetch == 4200) messages = 4200;
  else if (messagefetch == 4300) messages = 4300;
  else if (messagefetch == 4400) messages = 4400;
  else if (messagefetch == 4500) messages = 4500;
  else if (messagefetch == 4600) messages = 4600;
  else if (messagefetch == 4700) messages = 4700;
  else if (messagefetch == 4800) messages = 4800;
  else if (messagefetch == 4900) messages = 4900;
  else if (messagefetch == 5000) messages = 5000;
  else if (messagefetch == 5100) messages = 5100;
  else if (messagefetch == 5200) messages = 5200;
  else if (messagefetch == 5300) messages = 5300;
  else if (messagefetch == 5400) messages = 5400;
  else if (messagefetch == 5500) messages = 5500;
  else if (messagefetch == 5600) messages = 5600;
  else if (messagefetch == 5700) messages = 5700;
  else if (messagefetch == 5800) messages = 5800;
  else if (messagefetch == 5900) messages = 5900;
  else if (messagefetch == 6000) messages = 6000;
  else if (messagefetch == 6100) messages = 6100;
  else if (messagefetch == 6200) messages = 6200;
  else if (messagefetch == 6300) messages = 6300;
  else if (messagefetch == 6400) messages = 6400;
  else if (messagefetch == 6500) messages = 6500;
  else if (messagefetch == 6600) messages = 6600;
  else if (messagefetch == 6700) messages = 6700;
  else if (messagefetch == 6800) messages = 6800;
  else if (messagefetch == 6900) messages = 6900;
  else if (messagefetch == 7000) messages = 7000;
  else if (messagefetch == 7100) messages = 7100;
  else if (messagefetch == 7300) messages = 7200;
  else if (messagefetch == 7400) messages = 7300;


  if (!isNaN(messages)) {
    db.add(`level_${message.guild.id}_${message.author.id}`, 1)
    let levelfetch = db.fetch(`level_${message.guild.id}_${message.author.id}`)

    let levelembed = new MessageEmbed()
      .setColor('GREEN')
      .setDescription(`**${message.author}, You Have Leveled Up To Level ${levelfetch}**`)
      .setFooter(`use disablelevels command To Disable Level Up Messages`)
    message.channel.send(levelembed);
  };

  if (message.mentions.members.first()) {
    if (db.has(`ar-${message.mentions.members.first().id}+${message.guild.id}`)) {
      message.channel.send(db.get(`ar-${message.mentions.members.first().id}+${message.guild.id}`))
    } 
}


   
  let highlightedWords = await db.fetch(`highlighted`)/*.filter(c => c.word === message.content)
let user = await client.users.fetch(highlightedWords.user)
if(highlightedWords.length) highlightedWords.forEach(c => {
 
user.send(`**${message.author.tag}** mentioned ${message.content} in **${message.guild}** (${message.channel.toString()})!`)
});*/
if (highlightedWords.some(word => message.toString().includes(highlightedWords))) {
let user = await client.users.fetch(highlightedWords.user)
console.log(highlightedWords)
user.send(`**${message.author.tag}** mentioned ${message.content} in **${message.guild}** (${message.channel.toString()})!`)
}


  let On = await db.fetch(`AntiSpamOn_${message.guild.id}`);
  if (On === "On") {
    antiSpam.message(message);
  }


let Of = await db.fetch(`AntiInviteOn_${message.guild.id}`);
  if (Of === "On") {
    antiInvites.message(message);
  }

   
})

const antiSpam = new AntiSpam({
  warnThreshold: 3,
  kickThreshold: 7,
  banThreshold: 14,
  maxInterval: 2000,
  warnMessage: '{@user}, Please stop spamming.',
  kickMessage: '**{user_tag}** has been kicked for spamming.',
  banMessage: '**{user_tag}** has been banned for spamming.',
  maxDuplicatesWarning: 7,
  maxDuplicatesKick: 10,
  maxDuplicatesBan: 12,
  exemptPermissions: ['ADMINISTRATOR', 'MODERATOR'],
  ignoreBots: true,
  verbose: true,
  ignoredUsers: [],
  muteRoleName: "Muted",
  removeMessages: true
});


const antiRaid = new AntiRaid(client, {
  rateLimit: 5, 
  time: 30000, 
  punishType: "ban", 
  verbose: true, 
  ignoredUsers: [], 
  ignoredRoles: ["ADMINISTRATOR"], 
  ignoredEvents: [] 
});
  antiRaid.on("trying", async (member, event, punishType) => {
  let On = await db.fetch(`AntiRaidOn_${message.guild.id}`);
  if (On && On.toLowerCase() === "On") return message.channel.send(`I will trying do ${punishType} to stop ${member.user.tag} for ${event}`);
});
 
antiRaid.on("action", async (member, type) => {
  let On = await db.fetch(`AntiRaidOn_${message.guild.id}`);
  if (On && On.toLowerCase() === "On") return message.channel.send(`${member.user.tag} has been ${type}`);
})




const antiInvites = new AntiInvites(client, {
  maxInterval: 60000 * 60 * 2, 
  warnThreshold: 1,
  kickThreshold: 5,
  banThreshold: 8,
  muteThreshold: 3,
  warnMessage: "{@user}, Please don't advertising",
  kickMessage: "**{user_tag}** has been kicked for advertising.",
  banMessage: "**{user_tag}** has been banned for advertising.", 
  muteMessage: "**{user_tag}** has been muted for advertising.",
  verbose: true,
  ignoredPermissions: ["MANAGE_MESSAGES"], 
  ignoredBots: true, 
  ignoredUsers: [], 
  ignoredRoles: [] 
});
 
antiInvites.on("warnAdd", member => console.log(`${member.user.tag} has been warned for advertising.`));
antiInvites.on("muteAdd", member => console.log(`${member.user.tag} has been muted for advertising.`));
antiInvites.on("kickAdd", member => console.log(`${member.user.tag} has been kicked for advertising.`));
antiInvites.on("banAdd", member => console.log(`${member.user.tag} has been banned for advertising.`));


client.on('guildCreate', guild => {
  const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
  const embed = new MessageEmbed()
    .setTitle(`Thanks for adding me to your server!`)
    .setDescription(`I'm a multipurpose bot made by \`chamtkari baba#6969\!\nCheck out my commands by using ` + `=help`)
    .setColor("GREEN")
  channel.send(embed)
})

client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (user.bot) return;
  const { guild } = reaction.message;
  if (!guild) return;
  if (!guild.me.hasPermission("MANAGE_ROLES")) return;
  const member = guild.members.cache.get(user.id);
  if (!member) return;
  const data = db.get(`reactions_${guild.id}_${reaction.message.id}`)
  if (!data) return;
  const reaction2 = data.find(
    (r) => r.emoji === reaction.emoji.toString()
  );
  if (!reaction2) return;
  member.roles.add(reaction2.roleId).catch(err => undefined);

  });

client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (user.bot) return;
  const { guild } = reaction.message;
  if (!guild) return;
  if (!guild.me.hasPermission("MANAGE_ROLES")) return;
  const member = guild.members.cache.get(user.id);
  if (!member) return;
  const data = db.get(`reactions_${guild.id}_${reaction.message.id}`)
  if (!data) return;
  const reaction3 = data.find(
    (r) => r.emoji === reaction.emoji.toString()
  );
  if (!reaction3) return;
  member.roles.remove(reaction3.roleId).catch(err => undefined);

    });

client.on('guildCreate', async guild => {
let owner = await guild.fetchOwner();
        const addEmbed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTimestamp()
            .setTitle("New guild joined!")
            .setDescription(`**Guild Name:** ${guild.name}\n**Guild ID:** ${guild.id}\n**Owner:** \`${owner.user.tag}\` [${guild.ownerId}]\n**User count:** ${guild.memberCount}\n**Bot guild count:** ${client.guilds.cache.size}`)
        if (guild.iconURL()) addEmbed.setThumbnail(`${guild.iconURL({dynamic:true})}`);
        client.channels.cache.get("891010155502776371").send(addEmbed)
    })

client.on('guildDelete', async guild => {
let owner = await guild.fetchOwner();
        const lEmbed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTimestamp()
            .setTitle("Left a Guild")
            .setDescription(`**Guild Name:** ${guild.name}\n**Guild ID:** ${guild.id}\n**Owner:** \`${owner.user.tag}\` [${guild.ownerId}]\n**User count:** ${guild.memberCount}\n**Bot guild count:** ${client.guilds.cache.size}`)
        if (guild.iconURL()) lEmbed.setThumbnail(`${guild.iconURL({dynamic:true})}`);
        client.channels.cache.get("891010426878447637").send(lEmbed)
})

/*
client.on('userUpdate', (oldUser, newUser) => {
  db.push(`avatars_${oldUser.id}`, { av: oldUser.displayAvatarURL({dynamic: true}), time: Date.now()})
})*/

client.on('messageDelete', async (message) => {


  if (!db.has(`messagelogs_${message.guild.id}`)) return;

  const LogChannel = db.fetch(`messagelogs_${message.guild.id}`);
  const DeletedLog = new Discord.MessageEmbed()
    .setTitle("Deleted Message")
    .addField('Deleted by', `${message.author}`) //+ 'in' + `${message.channel}` + 'content' + `${message.content}`)
    .addField("In", message.channel)
    .addField('Content', message.content)
    .setColor('RANDOM')

  try {
    await client.channels.cache.get(`${LogChannel}`).send(DeletedLog)
  } catch (error) {
    console.log(error)
  }
  if(message.mentions.users.first()){
    const embed = new MessageEmbed()
    .setTitle("Ghost ping detected")
    .setDescription(`well,well,well.......${message.author} decided to ghostpinged ${message.mentions.users.first()}`)
    .setColor("RANDOM")
    return message.channel.send(embed)
    
  }


})


client.on('messageUpdate', (oldMessage, newMessage) => {
  //if (message.author.bot) return;

  //if (newMessage.author.id === client.user.id) return;
  logMessageEdit(oldMessage, newMessage);
});

function logMessageEdit(oldMessage, newMessage) {
  

  const update = db.fetch(`messagelogs_${oldMessage.guild.id}`)
  if (!update) return;
  //if(newMessage.author.bot) return;

  let embed = new MessageEmbed()
    .setTitle(`Message edited in #${oldMessage.channel.name}`)
    .addField("Before", " " + oldMessage.content)
    .addField("After", " " + newMessage.content)
    .addField("Message sent by", " " + newMessage.author.tag)
    .setTimestamp()
    .setColor("RANDOM");

  var sChannel = oldMessage.guild.channels.cache.get(update)
  if (!sChannel) return;
  sChannel.send(embed)

}




client.on("guildMemberRemove", async (member) => {

  

  let background;
  let backgrounds = db.fetch(`background_${member.guild.id}`)
  if(backgrounds == null) {
      background = 'https://cdn.discordapp.com/attachments/885032335597273099/890917655945564190/bg.png'
  } else {
      background = backgrounds
  }

  const avatar = member.user.displayAvatarURL({dynamic: false})
  const title = member.user.username
  const Member12 = member.guild.memberCount
  const sub = `Member ${Member12}`
  const color = db.fetch(`colour_${member.guild.id}`) || "ffffff"
  const res = await fetch(`https://frenchnoodles.xyz/api/endpoints/welcomebanner?background=${background}&avatar=${avatar}&title=${title}&subtitle=${sub}&textcolor=${color}`, {
    
})

const gChan = await db.fetch(`goodbye_${member.guild.id}`)
  if (!gChan) return console.log('Hi');
  if(gChan == null) {
    return
} else {
    const gChannel =  member.guild.channels.cache.get(gChan)
    let Image = await res.buffer()
    const gImage = new Discord.MessageAttachment(Image)
const embed = new MessageEmbed()
    .setTitle("some bs test")
    .setDescription(`eh idek`)
        .setColor("RANDOM")
    gChannel.send(gImage)
}

})


client.on('guildMemberAdd', async (member) => {
  

  let background;
  let backgrounds = db.fetch(`background_${member.guild.id}`)
  if(backgrounds == null) {
      background = 'https://cdn.discordapp.com/attachments/885032335597273099/890917655945564190/bg.png'
  } else {
      background = backgrounds
  }

  const avatar = member.user.displayAvatarURL({dynamic: false})
  const title = member.user.username
  const Member12 = member.guild.memberCount
  const sub = `Member ${Member12}`
  const color = db.fetch(`colour_${member.guild.id}`) || "ffffff"
  const res = await fetch(`https://frenchnoodles.xyz/api/endpoints/welcomebanner?background=${background}&avatar=${avatar}&title=${title}&subtitle=${sub}&textcolor=${color}`, {
    
})
  const greetmsg = await db.fetch(`greetmsg_${member.guild.id}`) || `welcome to the server ${title}`
    const welcomechannel = await db.fetch(`welcome_${member.guild.id}`)
  if(welcomechannel == null) {
    return
} else {
    const Wchannel =  member.guild.channels.cache.get(welcomechannel)
    let Image = await res.buffer()
    const WImage = new Discord.MessageAttachment(Image)
    Wchannel.send(greetmsg , WImage)
}

})



client.on('messageReactionAdd', async (reaction, user) => {
    const handleStarboard = async () => {
        const SBChannel = client.channels.cache.find(channel => channel.name.toLowerCase() === 'starboard');
        const msgs = await SBChannel.messages.fetch({ limit: 100 });
        const SentMessage = msgs.find(msg => 
            msg.embeds.length === 1 ?
            (msg.embeds[0].footer.text.startsWith(reaction.message.id) ? true : false) : false);
        if(SentMessage) SentMessage.edit(`${reaction.count} - ⭐`);
        else {
            const embed = new Discord.MessageEmbed()
            .setAuthor(reaction.message.author.tag, reaction.message.author.displayAvatarURL())
            .setDescription(`**[Jump to the message](${reaction.message.url})**\n\n${reaction.message.content}\n`)
            .setColor('YELLOW')
            .setFooter(reaction.message.id)
            .setTimestamp();
            if(SBChannel)
            SBChannel.send('1 - ⭐', embed);
        }
    }
    if(reaction.emoji.name === '⭐') {
        if(reaction.message.channel.name.toLowerCase() === 'starboard') return;
        if(reaction.message.partial) {
            await reaction.fetch();
            await reaction.message.fetch();
            handleStarboard();
        }
        else
        handleStarboard();
    }
});




/*
const subReddits = [
  'meme',
  'me_irl',
  'AdviceAnimals',
  'dankmemes',
  'MemeEconomy',
  'ComedyCemetery',
  'memes',
  'PrequelMemes',
  'terriblefacebookmemes',
  'funny',
  'teenagers'
];
const random = subReddits[Math.floor(Math.random() * subReddits.length)];
setInterval(async () => {
  const channel = ("859102905277874217")//await db.fetch(`automememe_${message.guild.id}`)
  if (!channel) return;

  if (!channel) return console.log('[ERROR]: Channel Not Found');
  const embed = new Discord.MessageEmbed();
  got(`https://www.reddit.com/r/${random}/random/.json`).then(response => {
    let content = JSON.parse(response.body);
    let permalink = content[0].data.children[0].data.permalink;
    let memeUrl = `https://reddit.com${permalink}`;
    let memeImage = content[0].data.children[0].data.url;
    let memeTitle = content[0].data.children[0].data.title;
    let memeUpvotes = content[0].data.children[0].data.ups;
    let memeDownvotes = content[0].data.children[0].data.downs;
    let memeNumComments = content[0].data.children[0].data.num_comments;
    embed.setTitle(`${memeTitle}`);
    embed.setURL(`${memeUrl}`);
    embed.setImage(memeImage);
    embed.setColor('#ffc256');
    embed.setFooter(
      `👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`
    );
   message.guild.channel.cache.get(`${channel}`).send(embed)
  });
}, 6000);*/





client.on("message", async (message) => {
  if (message.author.bot) return;
  let msg = message.content;

  let emojis = msg.match(/(?<=:)([^:\s]+)(?=:)/g)
  if (!emojis) return;
  emojis.forEach(m => {
    let emoji = client.emojis.cache.find(x => x.name === m)
    if (!emoji) return;
    let temp = emoji.toString()
    if (new RegExp(temp, "g").test(msg)) msg = msg.replace(new RegExp(temp, "g"), emoji.toString())
    else msg = msg.replace(new RegExp(":" + m + ":", "g"), emoji.toString());
  })

  if (msg === message.content) return;

  let webhook = await message.channel.fetchWebhooks();
  let number = randomNumber(1, 2);
  webhook = webhook.find(x => x.name === "NQN" + number);

  if (!webhook) {
    webhook = await message.channel.createWebhook(`NQN` + number, {
      avatar: client.user.displayAvatarURL({ dynamic: true })
    });
  }

  await webhook.edit({
    name: message.member.nickname ? message.member.nickname : message.author.username,
    avatar: message.author.displayAvatarURL({ dynamic: true })
  })

  message.delete().catch(err => { })
  webhook.send(msg).catch(err => { })

  await webhook.edit({
    name: `NQN` + number,
    avatar: client.user.displayAvatarURL({ dynamic: true })
  })


})






function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 


run();

client.login("ODQzMDExNzExNzI3OTYwMDc1.YJ9p1g.3MW25uy3xTmvSNMc-1nbsBxcsQ0")

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 