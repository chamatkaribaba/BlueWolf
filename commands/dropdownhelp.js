const discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const { MessageMenuOption, MessageMenu, MessageActionRow } = require("discord-buttons")

module.exports.help = {
  name: 'dropdownhelp',
  descreption: "dropdownhelp",
  aliases: ["dhelp"]
}


module.exports.run = async function(client, message, args) {






  const info1 = new MessageEmbed()
    .setTitle("Hello! you can view all the commands with the drop down bellow :D").setColor('RANDOM').setDescription('Hope you enjoy using BlueWolf :D')

  const image = new MessageEmbed()
    .setTitle(`Image commands 🧍`).setDescription('Here area all the Available commands').addField("commands:", "** '`meme`, `hug`, `slap`, `process` , `tickle`,`band` , `avatar` ,`maro` , `tweet` , `ttweet` , `trigger` , `wasted` , `cm`, `comment` , `bed` , `spank` , `hitler` , `facepalm` , `wanted` , `slap` , `drip` , `clown`'**,").setColor("BLURPLE")

  const mod = new MessageEmbed()
    .setTitle(`Moderation command ⛔️`).setDescription('Here area all the Available commands').addField("commands:", "**     '`kick`, `ban` , `unban` , `totalbans` , `slowmode` , `mute` , `unmute` , `tempmute` , `blacklist` , `whitelist`, `warn` , `rwarns` , `warns`, `lock` , `unlock` , `giverole` , `removerole` , `deletechannel` , `rwarn` , `nuke <clears all messages from a channel>` , `massban : in dev usage-<user1 user2 etc>` , `servericon` , `logs` , `dlogs`, `rradd` , `rrdel` , `ticket`'**,").setColor("RED").setFooter('tickets work only if there is a channel named ticket-logs')

  const music = new MessageEmbed()
    .setTitle(`Music commands 🎤`).setDescription('Here area all the Available commands').addField("commands:", "** '`play` , `loop` , `stop` , `skip` , `np` , `shuffle` , `queue` , `volume` , `shuffle`'**,").setColor("GRAY")

  const minigames = new MessageEmbed()
    .setTitle('MiniGames 🎮').setDescription('Here are all the Available commands').addField("Commands:", "** '`yt` , `fish`,`betray`,`chess`,`poker`'**").setColor('RANODM')

  const fun = new MessageEmbed()
    .setTitle(`Fun Commands 🤪`).setDescription('Here area all the Available commands').addField("commands:", "**     '`emojify`, `hangman` , `ascii<anyword>` , `simprate` , `dumrate` , `howgay` ,`smartrate` , `urban` , `emoji` , `coinflip` , `8ball` , `trivia` , `message` , `hack` ,`badges` , `dice` , `roast` , `motivate` , `gif` , `google : in dev`'**,").setColor('RANDOM')

  const buttons = new MessageEmbed()
    .setTitle(`Games With Buttons😀`).setDescription('Here are all the Available commands').addField("commands:", "**'`snake`,`calculator`,`rps`,`ttt : wont work for a wile :(`,`fight` '**")

  const misc = new MessageEmbed()
    .setTitle(`Utility and misc Commands 🎮`).setDescription('Here area all the Available commands').addField("commands:", "**      ' `ping`, `afk`, `purge` , `eval` , `corona` , `weather` , `math` , `addemoji` , `snipe` , `enlarge`, `delemoji` , `feedback` , `uptime` , `rnick` , `nick` , `say` , `rm` , `join` ,`docs`, `vote` , `ei` , `se` , `gss` , `gamess` , `ab`,  `invites` '**,").setColor('RANDOM')

  const economy = new MessageEmbed()
    .setTitle(`Economy 👦🏻`).setDescription('Here area all the Available commands').addField("commands:", '`bal` , `deposit` , `with` , `beg` ,`lb` ,`work` , `rob` , `heist` , `pm`, `serach`').setColor("GREEN")

  const cofing = new MessageEmbed()
    .setTitle(`config Commands ⚙`).setDescription('Here area all the Available commands').addField("commands:", "**     '`setwelcomechannel` , `setgoodbyechannel` , `setchatbotchannel` , `setghosstpingchannel` , `logs` , `seteditlogs`  , `setverification`,`enablelevels`,`setautomeme : currently in dev` , `smr`,`sgm`'**,").setColor("GREEN")


  const embed9 = new MessageEmbed().setTitle(`Giveaways and levels 🎁`).setDescription('Here area all the Available commands').addField("commands:", '`giveaways`, `reroll` , `end` , `list` , `edit` , `create` , `level`').setColor("GREEN")

  const embed10 = new MessageEmbed().setTitle(`Developers of Bluebot`).setDescription('all Developers').addField(`head dev and owner: twitch 0078#1720
music and gaws: 0_0#6666(based on his amazing code)
beautifying and bugfixing: lukass#0069
awesome people who helped me : nishant1500#9980,nightfury#86105`).setColor("GREEN")

  const Option1 = new MessageMenuOption()
    .setLabel("Image commands")
    .setDescription("A list of all Imgae commands")
    .setEmoji('📷')
    .setValue('image')

  const Option2 = new MessageMenuOption()
    .setLabel("Mod commands")
    .setDescription("A list of all Mod commands")
    .setEmoji('⚒')
    .setValue('mod')

  const Option3 = new MessageMenuOption()
    .setLabel("Music commands")
    .setDescription("A list of all Music commands")
    .setEmoji('🎶')
    .setValue('music')

  const Option4 = new MessageMenuOption()
    .setLabel("Minigames commands")
    .setDescription("A list of all minigames")
    .setEmoji('🎮')
    .setValue('minigames')

  const Option5 = new MessageMenuOption()
    .setLabel("Fun")
    .setDescription("A list of all Fun commands")
    .setEmoji('🤣')
    .setValue('fun')

  const Option6 = new MessageMenuOption()
    .setLabel("button games")
    .setDescription("A list of all games with buttons")
    .setEmoji('🤖')
    .setValue('buttons')

  const Option7 = new MessageMenuOption()
    .setLabel("Utility commands")
    .setDescription("A list of all Utility commands")
    .setEmoji('🙄')
    .setValue('utility')

  const Option8 = new MessageMenuOption()
    .setLabel("Economy commands")
    .setDescription("A list of all Economy commands")
    .setEmoji('👦🏻')
    .setValue('economy')

  const Option9 = new MessageMenuOption()
    .setLabel("Config commands")
    .setDescription("A list of all config commands")
    .setEmoji('⚙')
    .setValue('confing')

  const Option10 = new MessageMenuOption()
    .setLabel("gaws,level commands")
    .setDescription("A list of all givaeawaya and level commands")
    .setEmoji('🎁')
    .setValue('gaw')

  const Option11 = new MessageMenuOption()
    .setLabel("Devs of BluwWolf")
    .setDescription("devlopers")
    .setEmoji('😀')
    .setValue('devs')

  const Menu = new MessageMenu()
    .setID('menu1')
    .setPlaceholder('Choose The Command You Want To View')
    .addOption(Option1)
    .addOption(Option2)
    .addOption(Option3)
    .addOption(Option4)
    .addOption(Option5)
    .addOption(Option6)
    .addOption(Option7)
    .addOption(Option8)
    .addOption(Option9)
    .addOption(Option10)
    .addOption(Option11)

  const Row1 = new MessageActionRow()
    .addComponent(Menu)


  await message.channel.send("Hello sir", { component: Row1 })

  client.on('clickMenu', async menu => {

    if (menu.values[0] == 'image') {
      await menu.reply.defer()
      menu.channel.send(image, true)
    }

    if (menu.values[0] == 'mod') {
      await menu.reply.defer()
      menu.channel.send(mod, true)
    }

    if (menu.values[0] == 'music') {
      await menu.reply.defer()

      menu.channel.send(music, true)
    }

    if (menu.values[0] == 'minigames') {
      await menu.reply.defer()
      menu.channel.send(minigames, true)
    }

    if (menu.values[0] == 'fun') {
      await menu.reply.defer()
      menu.channel.send(fun, true)
    }
    if (menu.values[0] == 'buttons') {
      await menu.reply.defer()
      menu.channel.send(buttons, true)
    }

    if (menu.values[0] == 'utility') {
      await menu.reply.defer()
      menu.channel.send(misc, true)
    }

    if (menu.values[0] == 'economy') {
      await menu.reply.defer()
      menu.channel.send(economy, true)
    }

    if (menu.values[0] == 'config') {
      await menu.reply.defer()
      menu.channel.send(config, true)
    }

    if (menu.values[0] == 'devs') {
      await menu.reply.defer()
      menu.channel.send(embed10, true)
    }
    if (menu.values[0] == 'gaws') {
      await menu.reply.defer()
      menu.channel.send(embed9, true)
    }
  })
}