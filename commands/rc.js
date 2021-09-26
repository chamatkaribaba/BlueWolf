const{ MessageButton, MessageActionRow } = require('discord-buttons')

module.exports.help = {
    name: "rc",
    decreption: "rc",
    aliases: []
}

module.exports.run = async function(client,message, args) { 
        const reactButton = new MessageButton()
        .setStyle('green')
        .setLabel('👌 ')
        .setID('reaction')

        const reactButtonDisabled = new MessageButton()
        .setStyle('red')
        .setLabel(' 🏓')
        .setID('reactiondisabled')
        .setDisabled(true)

        let now = new Date().getTime();
        let time = 0
        let setTimer

        message.channel.send('React as soon as the button is green', reactButtonDisabled).then((m) => {
            let timer = (Math.floor(Math.random() * 6) + 1) * 2000
        
            setTimeout(function(){ 
                m.edit('React as soon as the button is green', reactButton); 
                setTimer = setInterval(function(){time = time + 1}, 1)
            }, timer)
        })

        client.on('clickButton', async (button) => { 

            if (button.id == "reaction") {
                clearInterval(setTimer)
                button.message.edit(" 🤔 It took you " +time / 1000+ "s to react")
            }
        })

    }