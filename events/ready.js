const chalk = require('chalk');
const ms = require('ms');

module.exports = async(client) => {
    setTimeout(async function() {
        console.log(chalk.white(`[${chalk.blueBright("Nox-CLIENT")}]${chalk.white(" - ")}${chalk.blue("Connecting...")}`));
    }, ms("0.2s"));
    setTimeout(async function() {
        console.log(chalk.white(`[${chalk.blueBright("NOX-CLIENT")}]${chalk.white(" - ")}${chalk.blue(`Connected to ${client.user.tag}`)}`))
        console.log(" ")
    }, ms("1s"));
    console.log(" ")

    await client.user.setPresence({ activities: [{ name: "in development | v1.0.0" }] });
}