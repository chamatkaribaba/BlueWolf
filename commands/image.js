  
const img = require('images-scraper')

const google = new img({
    puppeteer : {
        headless : true,
    }
})




module.exports.help = {
    name: "image",
    decreption: "image",
    aliases: ["img"]
}

module.exports.run = async function(client, message, args) {
          



        const query = args.join(" ")
        if(!query) return message.channel.send('Please enter a search query')

        const results = await google.scrape(query, 1)
        message.channel.send(results[0].url);
    }