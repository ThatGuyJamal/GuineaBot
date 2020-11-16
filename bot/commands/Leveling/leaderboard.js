const discordXP = require('discord-xp')
const Discord = require("discord.js")
module.exports = {
    name: 'leaderboard',
    category: 'leveling',
    description: 'Top 10 most active members in a guild',
    run: async (message, args, client, prefix, command) => {
        const rawLeaderboard = await discordXP.fetchLeaderboard(message.guild.id, 10)
        if (rawLeaderboard.length < 1) return message.channel.send("Nobody is in the leaderboard yet...")

        const leaderboard = discordXP.computeLeaderboard(message.client, rawLeaderboard)
        const lb = leaderboard.map(e => `**${e.position}.** ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`)

        const embed = new Discord.MessageEmbed()
            .setColor('#9f5000')
            .setTitle(`Most active members in ${message.guild.name}`)
            .setAuthor(message.author.tag, message.author.avatarURL())
            .setDescription(`${lb.join("\n\n")}`)
            .setThumbnail(message.client.user.avatarURL())
            .setTimestamp()
            .setFooter('Thank you for using GuineaBot!')

        message.channel.send(embed)
    }
}