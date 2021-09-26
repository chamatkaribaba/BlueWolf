const { Util, MessageEmbed } = require("discord.js");
module.exports.help = {
    name: "emojiinfo",
    decreption: "emojiinfo",
    aliases: ["ei"]
}

module.exports.run = async function(client, message, args) {
    if (!message.guild)
      return message.channel.send("This command only works on servers.");
    if (!args[0]) return message.channel.send("Usage: emoji <emoji>");
    let emoji =
      client.emojis.cache.get(args[0]) ||
      client.emojis.cache.find((e) => e.name === args[0]);
    if (!emoji) {
      const e = Util.parseEmoji(args[0]);
      if (!e.id) emoji = client.emojis.cache.find((a) => a.name === e.name);
      else emoji = client.emojis.cache.get(e.id);
      if (!emoji) return message.channel.send("Invalid emoji!");
    }
 
    let auth = emoji.author;
    if (
      !auth &&
      message.guild.me.hasPermission("MANAGE_EMOJIS") &&
      emoji.guild.id === message.guild.id
    ) {
      auth = await emoji.fetchAuthor();
    } else if (!auth) {
      auth = "*Without perms to see that*";
    }
    const embed = new MessageEmbed()
      .setTitle("Emoji info for " + emoji.name)
      .setThumbnail(emoji.url)
      .setColor("RANDOM")
      .addField("ID", emoji.id, true)
      .addField("URL", `[Click here](${emoji.url})`, true)
      .addField("Use", "`" + emoji.toString() + "`", true)
      .addField("Animated?", emoji.animated ? "Yes" : "No", true)
      .addField("Managed?", emoji.managed ? "Yes" : "No", true)
      .addField("Requires colons?", emoji.requiresColons ? "Yes" : "No", true)
      .addField("Available", emoji.available ? "Yes" : "No", true)
      .setFooter("Created at")
      .setTimestamp(emoji.createdAt);
    if (emoji.guild.id === message.guild.id) {
      embed
        .addField("Author", auth, true)
        .addField(
          "Roles that can use the emoji",
          emoji.roles.cache.first()
            ? emoji.roles.cache.map((e) => `${e}`).join(", ")
            : "@everyone"
        );
    }
    await message.channel.send(embed);
  };
  