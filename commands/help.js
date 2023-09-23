
exports.run = (client, msg, args, config, prefix, color) => {
    const Discord = require('discord.js-selfbot');
   
	let list = "";
    let commandlist = [`:star: **${prefix}spam on** - Spams random strings at random intervals in channel.`, `:star: **${prefix}spam off** - Stops spamming.`,
        `:star: **${prefix}restart** - Restarts the bot`,
        `:star: **${prefix}purge** <**Amount**> - Deletes messages.`
    ];

    for (i = 0; i < commandlist.length; i++) {
        list = list + commandlist[i] + "\n";
    }
    let embed = new Discord.MessageEmbed()
        .setTitle(`**HELP COMMAND**`)
        .setColor(color)
        .setFooter("Help List, Page 1/1")
        .addField(`:star: **Commands** :star:`, `${list}`)

    msg.channel.send(embed);
}