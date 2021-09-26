const discord = require('discord.js')
const {MessageEmbed} = require('discord.js')
const { MessageMenuOption, MessageMenu, MessageActionRow } = require("discord-buttons")

module.exports.help = {
  name: 'dropdown',
  descreption: "dropdown",
  aliases: ["menu"]
}


module.exports.run = async function(client, message, args) {

const test = new MessageEmbed()
.setTitle('test')
.setDescription('help cmd test')

    const Option1 = new MessageMenuOption()
    .setLabel("Cola")
    .setDescription("A soda drink")
    .setEmoji('🍹')
    .setValue('cola')

    const Option2 = new MessageMenuOption()
    .setLabel("Water")
    .setDescription("Water to drink")
    .setEmoji('💧')
    .setValue('water')

    const Option3 = new MessageMenuOption()
    .setLabel("Reload")
    .setDescription("Reload the message")
    .setEmoji('🐨')
    .setValue('reload')

    const Menu = new MessageMenu()
    .setID('menu1')
    .setPlaceholder('Choose your drink')
    .addOption(Option1)
    .addOption(Option2)
    .addOption(Option3)


    const Row1 = new MessageActionRow()
    .addComponent(Menu)


    await message.channel.send("Hello sir", { component: Row1 })

    client.on('clickMenu', async menu => {

        if(menu.values[0] == 'cola' && menu.values[1] == 'water') {
            await menu.reply.defer()
            return menu.channel.send("1 second the water and cola will be here")
        }

        if(menu.values[0] == 'cola') {
            await menu.reply.defer()
            menu.channel.send("https://cdn.discordapp.com/attachments/826481596215197762/865264026006847539/2Q.png ",true)
        }

        if(menu.values[0] == 'water') {
            await menu.reply.defer()
            menu.channel.send(test),true
        }

        if(menu.values[0] == 'reload') {
            menu.message.update("No more choices come later, all sold", null)
        }

    })

};