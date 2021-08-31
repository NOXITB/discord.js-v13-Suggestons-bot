const { MessageEmbed } = require('discord.js');

module.exports.errorEmbed = async function(client, message, content, color) {
    if(!client) throw new Error("[Utils] errorEmbed - client must be provided")
    if(!message) throw new Error("[Utils] errorEmbed - message must be provided")
    if(!content || typeof content !== 'string') throw new TypeError("[Utils] errorEmbed - content must be a string")
    if(!color || typeof color !== 'string') throw new TypeError("[Utils] - errorEmbed - color must be a string")

    const errorEmbed = new MessageEmbed()
    .setDescription(content)
    .setColor(color)
    .setFooter(`© Solar Development`, client.user.displayAvatarURL())

    await message.channel.send({
        embeds: [errorEmbed]
    })
}