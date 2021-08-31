const { Intents } = require('discord.js');
const Nox = require('./Utils/nox');
const client = new Nox({ intents: [Intents.ALL] }, { allowedMentions: { parse: ['users', 'roles'], repliedUser: false } });
client.start();