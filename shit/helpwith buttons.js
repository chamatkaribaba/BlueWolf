  /*const queueEmbed = new MessageEmbed()
    .setTitle('BlueBot Commands')
    .setDescription(`Server Prefix =`)
    .addField('Information commands', '```react with 🤖 to open```', true)
    .addField('Music Commands', '```react with 🎶 to open```', true)
    .addField('Moderation Commands', '```react with 🔒 to open```', true)
    .addField('Fun&games Commands', '```react with 😀 to open```', true)
    .addField('Image Commands', '```react with 📷 to open```', true)
    .addField('Utility Commands', '```react with 💡 to open```', true)
    .addField('Economy', '```react with ⭐ to open```', true)
    .addField('Tickets', '```react with 📱 to open```', true)
    .addField('Animal commands', '```react with 🐨 to open```', true)
    .addField('Giveaways', '```react with 🎁 to open```', true)

  const butinfo = new MessageButton()
    .setStyle('PRIMARY')
    .setLabel('🤖')
    

  const butmusic = new MessageButton()
    .setStyle('PRIMARY')
    .setLabel('🎶')
  

  const butmoderation = new MessageButton()
    .setStyle('PRIMARY')
    .setLabel('🔒')
    

  const butfun = new MessageButton()
    .setStyle('PRIMARY')
    .setLabel('🤣')
   

  const butimage = new MessageButton()
    .setStyle('PRIMARY')
    .setLabel('📸')
   

  const bututil = new MessageButton()
    .setStyle('PRIMARY')
    .setLabel('💡')
    

  const buteco = new MessageButton()
    .setStyle('PRIMARY')
    .setLabel('⭐')
  

  const butticks = new MessageButton()
    .setStyle('PRIMARY')
    .setLabel('📱')
  
  const butgaw = new MessageButton()
    .setStyle('PRIMARY')
    .setLabel('🎁')
   

  const butanimals = new MessageButton()
    .setStyle('PRIMARY')
    .setLabel('🐨')
    

const infocmd = new MessageEmbed()
.setTitle('Info cmds')
.setDescription('`emojify` , `ttt` , `hangman` , `ascii<anyword>` , `simprate` , `dumrate` , `howgay` ,`smartrate` , `urban` , `emoji` , `coinflip` , `8ball` , `trivia`, `rps` , `message` , `hack` ,`badges` , `dice` , `fight` , `snake` , `calculator`')
.setColor("RANDOM")

const musiccmd = new MessageEmbed()
.setTitle('Music cmds')
.setDescription('`play` , `loop` , `stop` , `skip` , `np` , `shuffle` , `queue` , `volume` , `shuffle`')
.setColor("RANDOM")

const imagecmd = new MessageEmbed()
.setTitle('Image cmds')
.setDescription( '`meme`, `hug`, `slap`, `process` , `tickle`,`band` , `avatar` ,`maro` , `tweet` , `ttweet` , `trigger` , `wasted` , `cm`, `comment` , `bed` , `spank` , `hitler` , `facepalm` , `wanted` , `slap` , `drip` , `clown`')
.setColor("RANDOM")

const economycmd = new MessageEmbed()
.setTitle('Economy cmds')
.setDescription('`bal` , `deposit` , `with` , `beg` ,`lb` ,`work` , `rob` , `heist`')
.setColor("RANDOM")

const giveawayscmd = new MessageEmbed()
.setTitle('Giveaways cmds')
.setDescription('`giveaways`, `reroll` , `end` , `list` , `edit` , `create`')
.setColor("RANDOM")

const modcmd = new MessageEmbed()
.setTitle('mod cmds')
.setDescription( '`kick`, `ban` , `unban` , `totalbans` , `slowmode` , `mute` , `unmute` , `tempmute` , `blacklist` , `whitelist`, `warn` , `rwarns` , `warns`, `lock` , `unlock` , `giverole` , `removerole` , `deletechannel` , `rwarn` , `nuke <clears all messages from a channel>` , `servericon` , `logs` , `dlogs`, `rradd` , `rrdel`')
.setColor("RANDOM")

const music = new MessageEmbed()
.setTitle('Tickets p.s they work only in a category named TICKETS')
.setDescription('`ticket` , `cticket`')
.setColor("RANDOM")


  const row1 = new MessageActionRow()
    .addComponents(butinfo)
    .addComponents(butmusic)
    .addComponents(butmoderation)
    .addComponents(butfun)
    .addComponents(butimage)
    .addComponents(bututil)
    .addComponents(buteconomy)
    .addComponents(buttickets)
    .addComponents(butgiveaways)
    .addComponents(butanimals)

  const helpcol = await msg.channel.send({ embeds: [queueEmbed], components: [row1] });

}/*