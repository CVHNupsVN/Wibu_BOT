const { readdirSync } = require(`fs`);

module.exports = (client) => {
     readdirSync("./commands/").forEach(dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(d => d.endsWith(`.js`));
        for(let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
            client.commands.set(pull.config.name, pull);
            if(pull.config.aliases) pull.config.aliases.forEach(a => client.aliases.set(a, pull.config.name));
            console.log(`Lệnh | ${pull.config.name} đã tải thành công`)
        }
    })
}
