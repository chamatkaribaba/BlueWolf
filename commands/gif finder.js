
module.exports.help = {
    name: "gif-finder",
    decreption: "gif finder",
    aliases: ["gif"]
}

module.exports.run = async function(client, message, args) {

if (!args[0]) return message.channel.send("Please Provide Query To Search!");

const {
    data
} = await (require("axios").default).get(`https://tenor.com/search/${encodeURI(args.join("+"))}-gifs`, {
    responseType: "text"
});

const $ = await (require("cheerio")).load(data);

const child = $(".column").children().eq(0);

if (!child) return message.channel.send("No Gif Found!");

const tags = [];

await child.find(".list-unstyled").children().each((ii, html) => tags.push($(html).text()));

const info = {
    title: child.find("a").first().attr("href"),
    img: child.find("div.Gif > img").attr("src"),
    tags
};

return message.channel.send({
    embed: {
        color: "RANDOM",
        url: "https://tenor.com" + info.title,
        title: info.title.replace("/view/", "").split("-").slice(0, -2).join(" "),
        image: {
            url: info.img
        },
        description: tags.join(", "),
        timestamp: new Date()
    }}
)
}