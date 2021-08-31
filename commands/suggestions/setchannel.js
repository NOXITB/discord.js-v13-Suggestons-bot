const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "setchannel",
    category: "Suggestions",
    description: "Set a channel for events.",
    aliases: ["sc"],
    usage: "setchannel <event> <channel>",
    userPermissions: ["MANAGE_CHANNELS"],
    run: async(client, message, args) => {
        if(args[0] === "suggestions") {
            let channel = message.mentions.channels.first()
            if(!channel) {
                const noChannel = new MessageEmbed()
                .setDescription(`Please mention a channel`)
                .setColor(client.colors.red)
                .setFooter(message.author.username, message.author.displayAvatarURL())

                return message.channel.send({
                    embeds: [noChannel]
                })
            }

            db.set(`suggestionChannel_${message.guild.id}`, channel.id)

            const success = new MessageEmbed()
            .setDescription(`Set the suggestion channel to ${channel}`)
            .setColor(client.colors.green)
            .setFooter(message.author.username, message.author.displayAvatarURL())

            return message.channel.send({
                embeds: [success]
            })
        } else {
            const noArgs = new MessageEmbed()
            .setDescription(`Please provide a valid event\n\nValid Events: \`suggestions\``)
            .setColor(client.colors.red)
            .setFooter(`© Random Development`, client.user.displayAvatarURL())

            return message.channel.send({
                embeds: [noArgs]
            })
        }
    }
}