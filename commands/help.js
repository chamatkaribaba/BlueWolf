const discord = require('discord.js')
const { MessageEmbed } = require("discord.js");
const db = require('quick.db')
const Discord = require('discord.js')
const disbut = require('discord-buttons')
const { MessageActionRow } = require('discord-buttons')

module.exports.help = {
  name: 'help',
  decreption: 'help',
  aliases: ["halp"]
};

module.exports.run = async function(client, message, args) {
  
  const avatar = ("https://cdn.discordapp.com/attachments/890899955961724928/891261100149047296/unknown.png")
  embeds = new Discord.MessageEmbed().setTitle('Hello!').setDescription('By clicking on any of these buttons under this embed you will get list of commands. have a bug report or a suggestion or a feedback? you can use the bug, suggest, or feedback command').setColor('BLACK').setImage('https://media.discordapp.net/attachments/879741127702499418/883310849752703016/standard.gif').setTimestamp();
  embed1 = new Discord.MessageEmbed().setTitle(`Image Commands 🧍`).setDescription('Here are all the Available commands').addField("Commands:", "**`meme`,  `hug`,  `slap`,\n  `process`,  `tickle`,  `band`,\n  `avatar`,  `maro`,  `tweet`, \n  `ttweet`,  `trigger`,  `wasted`,\n  `cm`, `comment`,  `bed`,\n  `spank`,  `hitler`,  `facepalm`,\n  `wanted`,  `slap`,  `drip`, \n `clown`**").setImage('https://cdn.discordapp.com/attachments/890899955961724928/891258161959436328/unknown.png').setColor("BLURPLE").setFooter('1/10').setThumbnail(avatar)
  embed2 = new Discord.MessageEmbed().setTitle(`Moderation Commands ⛔️`).setDescription('Here are all the Available commands').addField("Commands:", " `kick`,\n  `ban`,  `unban`, \n `totalbans`,  `slowmode`,  `mute`,\n  `unmute`,  `tempmute`, `blacklist`,\n  `whitelist`,  `warn`,  `rwarns`,\n  `warns`,  `lock`,  `unlock`,\n  `giverole`,  `removerole`,  `deletechannel`,\n  `rwarn`,  `nuke <clears all messages from a channel>`,  `massban : in dev usage-<user1 user2 etc>`,\n  `servericon`,  `logs`,  `dlogs`,\n  `rradd`,  `rrdel`,  `ticket`,\n  `tag`,  `infotag`,  `edittag`,\n  `listtags`,  `deletetag`,  `addtag`,\n  `backupcreate`,  `backupload`**,").setColor("RED").setFooter('2/10   Tickets work only if there is a channel named ticket-logs!').setThumbnail(`${avatar}`)
  embed3 = new Discord.MessageEmbed().setTitle(`Music Commands 🎤`).setDescription('Here area all the Available commands').addField("Commands:", "** `play`,  `loop`,  `stop`,\n  `skip`,  `np`,  `shuffle`,\n  `queue`,  `volume`,  `shuffle`**,").setColor("BLURPLE").setFooter('3/10').setThumbnail(`${avatar}`)
  embed4 = new Discord.MessageEmbed().setTitle(`Utility and Misc Commands 🎮`).setDescription('Here are all the Available commands').addField("Commands:", "**       `ping`,  `afk`,  `purge`,\n  `eval`,  `corona`,  `weather`,\n  `math`,  `addemoji`,  `snipe`,\n  `enlarge`,  `delemoji`,  `feedback`,\n  `uptime`,  `rnick`,  `nick`,\n  `say`,  `rm`,  `join`,\n  `youtube<channelid>`, `docs`,  `vote`,\n  `ei`,  `se`,  `gss`,\n  `gamess`,  `ab`,   `invites` **,").setColor("GRAY").setFooter('4/10').setThumbnail(`${avatar}`)
  embed5 = new Discord.MessageEmbed().setTitle(`Fun Commands 🤪`).setDescription('Here are all the Available commands').addField("Commands:", "**     `emojify`,  `ttt`,  `hangman`,\n  `ascii<anyword>`,  `simprate`,  `dumrate`,\n  `howgay`,  `smartrate`,  `urban`,\n  `emoji`,  `coinflip`,  `8ball`,\n  `trivia`,  `rps`,  `message`,\n  `hack`,  `badges`,   `dice`,\n  `fight`,  `snake`,  `calculator`,\n  `roast`,  `motivate`,  `gif`,\n  `google : in dev`,  `fish`,  `poker`,\n  `betrayal`,  `chess`**,").setColor("GREEN").setFooter('5/10').setThumbnail(`${avatar}`)
  embed6 = new Discord.MessageEmbed().setTitle(`YoutubeTogether and Economy 👦🏻`).setDescription('Here are all the Available commands').addField("Commands:", "**`bal`,  `deposit`,  `with`,\n  `beg`,  `lb`,  `work`,\n  `rob`,  `heist`,  `pm`,\n  `serach`,  `yt`**").setColor("BLURPLE").setFooter('6/10').setThumbnail(`${avatar}`)
  embed7 = new Discord.MessageEmbed().setTitle(`Server Setup Commands 🤗`).setDescription('Here are all the Available commands').addField("Commands:", "**`gss`,  `gamess`**").setColor("RED").setFooter('7/10').setThumbnail(`${avatar}`)
  embed8 = new Discord.MessageEmbed().setTitle(`config Commands ⚙`).setDescription('Here area all the Available commands').addField("commands:", "**     '`setwelcomechannel` , `setgoodbyechannel` , `setchatbotchannel` , `logs` , `setmessagelogs`  , `setverification`,`enablelevels`,`setautomeme : currently in dev` , `smr`,`sc for setting text colour for welcome image`, `sb for setting the background for welcome image`").setColor("GREEN").setFooter('8/10').setThumbnail(`${avatar}`)
  embed9 = new Discord.MessageEmbed().setTitle(`Giveaways and levels 🎁`).setDescription('Here area all the Available commands').addField("commands:", '`giveaways`, `reroll` , `end` , `list` , `edit` , `create` , `level`').setColor("BLURPLE").setFooter('9/10').setThumbnail(`${avatar}`)
  embed10 = new Discord.MessageEmbed().setTitle(`Developers of Bluebot`).setDescription('all Developers').addField(`head dev and owner: twitch 0078#1720
music and gaws: 0_0#6666(based on his amazing code)
beautifying and bugfixing: lukass#0069
awesome people who helped me : nishant1500#9980,nightfury#8615`).setColor("RED").setFooter('10/10').setThumbnail(`${avatar}`)
  pages = [embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8, embed9, embed10]


  let btn1 = new disbut.MessageButton()
    .setStyle('blurple')
    .setLabel('Image🧍')
    .setID('1');
  let btn2 = new disbut.MessageButton()
    .setStyle('red')
    .setLabel('Moderation⛔️')
    .setID('2');
  let btn3 = new disbut.MessageButton()
    .setStyle('gray')
    .setLabel('Music commands 🎤')
    .setID('3');
  let btn4 = new disbut.MessageButton()
    .setStyle('green')
    .setLabel('Utlity and misc🎮')
    .setID('4');
  let btn5 = new disbut.MessageButton()
    .setStyle('blurple')
    .setLabel('Fun🤪')
    .setID('5');
  let btn6 = new disbut.MessageButton()
    .setStyle('red')
    .setLabel('YoutubeTogether,Economy👦🏻')
    .setID('6');
  let btn7 = new disbut.MessageButton()
    .setStyle('gray')
    .setLabel('Server-setup🤗')
    .setID('7');
  let btn8 = new disbut.MessageButton()
    .setStyle('green')
    .setLabel('config⚙')
    .setID('8');
  let btn9 = new disbut.MessageButton()
    .setStyle('blurple')
    .setLabel('Giveaways,levels🎁')
    .setID('9');
  let btn10 = new disbut.MessageButton()
    .setStyle('red')
    .setLabel('Developers of BlueWolf')
    .setID('10');

  let buttonRow = new MessageActionRow()
    .addComponent(btn1)
    .addComponent(btn2)
    .addComponent(btn3)
    .addComponent(btn4)
    .addComponent(btn5)

  let buttonRow2 = new MessageActionRow()
    .addComponent(btn6)
    .addComponent(btn7)
    .addComponent(btn8)
    .addComponent(btn9)
    .addComponent(btn10)

if (!args[0]){
 let msg = await message.channel.send({
  embed:embeds,
  components: [buttonRow, buttonRow2]
 });

  client.on('clickButton', async (button) => {
    if (button.clicker.member.id !== message.author.id) return;
    if (button.id === '1') {
      await button.reply.defer()
      msg.edit({
        embed: embed1,
        components: [buttonRow, buttonRow2]
      });
    }
    if (button.id === '2') {
      await button.reply.defer()
      msg.edit({
        embed: embed2,
        components: [buttonRow, buttonRow2]
      });
    }
    if (button.id === '3') {
      await button.reply.defer()
      msg.edit({
        embed: embed3,
        components: [buttonRow, buttonRow2]
      });
    }
    if (button.id === '4') {
      await button.reply.defer()
      msg.edit({
        embed: embed4,
        components: [buttonRow, buttonRow2]
      });
    }
    if (button.id === '5') {
      await button.reply.defer()
      msg.edit({
        embed: embed5,
        components: [buttonRow, buttonRow2]
      });
    }
    if (button.id === '6') {
      await button.reply.defer()
      msg.edit({
        embed: embed6,
        components: [buttonRow, buttonRow2]
      });
    }
    if (button.id === '7') {
      await button.reply.defer()
      msg.edit({
        embed: embed7,
        components: [buttonRow, buttonRow2]
      });
    }
    if (button.id === '8') {
      await button.reply.defer()
      msg.edit({
        embed: embed8,
        components: [buttonRow, buttonRow2]
      });
    }
    if (button.id === '9') {
      await button.reply.defer()
      msg.edit({
        embed: embed9,
        components: [buttonRow, buttonRow2]
      });
    }
    if (button.id === '10') {
      await button.reply.defer()
      msg.edit({
        embed: embed10,
        components: [buttonRow, buttonRow2]
      });
    }
  });
return;
}
 
 const query = args[0].toLowerCase();
const command =
  client.commands.get(query) || client.commands.get(client.aliases.get(query));

if (!command) return message.channel.send("Command not found sadge");

const embed = new MessageEmbed()
  .setTitle(`${command.help.name}`)
  .setDescription(
    `Name: ${command.help.name}\nDescription: ${
      command.help.decreption
    }\nAliases: ${command.help.aliases || "No aliases"}`
  )
  .setColor("RANDOM");

message.channel.send(embed);
}
