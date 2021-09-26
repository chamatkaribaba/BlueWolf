module.exports.help = {
    name: "hack",
    decreption: "hack",
    aliases: []
}

module.exports.run = async function(client, message, args) {
const emails = [
  "sadlife1010@gmail.com",
  "dumbass@gmail.com",
  "thehotline0928@gmail.com",
  "error@gmail.com"
]

const passwords = [
  "uselsesss",
  "password124",
  "ilovemygrandma",
  "small",
  "olord"
]

const lastdms = [
  "ff",
  "OMG GIRL REALLY",
  "ok",
  "Life is sooooo boring"
]

async function delay(delayInms) {
  return new Promise(resolve  => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}

const user = message.mentions.users.first() || client.users.cache.get(args[0])
  if(!user) return message.channel.send(`You need to provide a user!`)

  let email = emails[Math.floor(Math.random() * (emails.length))]
  let password = passwords[Math.floor(Math.random() * (passwords.length))]
  let lastdm = lastdms[Math.floor(Math.random() * (lastdms.length))]

  message.channel.send(`Totally real hack being prepared for ${user.tag}!`).then(async (m) => {
    await delay(3000)
    m.edit(`Finding discord login details`)
    await delay(3000);
    m.edit(`Bypassing 2FA (so easy)`)
    await delay(6000);
    m.edit(`Found details:\nEmail: \`${user.username}${email}\`\nPassword: \`${password}\``)
    await delay(4000);
    m.edit(`Last DM: ${lastdm}`)
    await delay(3000);
    m.edit(`INSERTING virus to there devices and wifi!`)
    await delay(6000)
    m.edit(`Freezing screen and selling all information to the government!`)
    await delay(4000)
    m.edit(`Getting location!`)
    await delay(7000)
    m.edit(`Hiring hitman...`)
    await delay(8000)
    m.edit(`Person killed!`)
    await delay(4000)
    m.edit(`Edited medical files and pronounced as deceased!`)
    await delay(5000)
    m.edit(`**Totally real hack complete! That person is now unknown....**`)
  })
}