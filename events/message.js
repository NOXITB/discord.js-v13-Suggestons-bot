const Discord = require('discord.js');
const util = require('../Utils/util');

module.exports = async(client, message) => {
    if(message.author.bot || !message.guild || !message.content.startsWith(client.config.prefix)) return;

    let args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    if(cmd.length == 0) return;
    let command = client.commands.get(cmd);
    if(!command) command = client.commands.get(client.aliases.get(cmd));

    if(!message.member.permissions.has(command.userPermissions ?? [])) {
        const userPerm = new Discord.MessageEmbed()
        .setDescription(`__You__ don't have permission to use this command\n\nRequired Permission: ${command.userPermissions.map((value) => `\`${value[0].toUpperCase() + value.slice(1).replace(/_/gi, " ")}\``).join(", ")}`)
        .setColor(client.colors.red)
        .setFooter(`© Random Development`, client.user.displayAvatarURL())

        return message.channel.send({ 
            embeds: [userPerm]
        })
    }

    try {   
        if(command) command.run(client, message, args, util)
    } catch {
        return;
    }

}