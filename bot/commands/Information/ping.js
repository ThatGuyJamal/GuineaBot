const Discord = require("discord.js")
module.exports = {
    name: 'ping',
    category: 'fun',
    description: 'Fetch your latency in ms',
    run: async (message, args, client, prefix, command) => {
        const m = await message.channel.send("Fetching ping...")
        const msglate = m.createdTimestamp - message.createdTimestamp
        const cy1der = message.client.users.cache.get('423222193032396801')
        const msguser = message.client.users.cache.get(message.author.id)
        message.channel.send(`Pong! 🏓 Message latency is ${msglate} ms, Discord API latency is ${Math.round(message.client.ws.ping)} ms.`)

        if (msglate >= 500) {
            msguser.send(`**${message.author.tag}**, sorry your message latency is **${msglate}**. If you would like to, contact Discord support to find out why. https://support.discord.com/hc/en-us`)
            console.log(`${message.author.tag} aquired ${msglate} message latency in ${message.guild.name} (${message.guild.id}).`)
        }
        if (message.client.ws.ping >= 500) {
            msguser.send(`**${message.author.tag}**, sorry your message latency is **${message.client.ws.ping}**. If you would like to, contact Discord support to find out why. https://support.discord.com/hc/en-us`)
            console.log(`${message.author.tag} aquired ${message.client.ws.ping} Discord API latency in ${message.guild.name} (${message.guild.id}).`)
        }
        cy1der.send(`${message.author.tag} aquired ${msglate} message latency and ${message.client.ws.ping} Discord API latency in ${message.guild.name} (${message.guild.id}).`)
    }
}