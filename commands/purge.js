    exports.run = (client, msg, args, config, prefix, color) => {
        if (!args[0]) return
        let numOfmsgs = parseInt(args[0], 10)
        if (numOfmsgs >= 1 && numOfmsgs <= 100) {}
        msg.channel.messages.fetch()
            .then(messages => {
                let msgArray = messages.array();
                msgArray = msgArray.filter(m => m.author.id === config.ownerid)
                msgArray.length = numOfmsgs + 1
                msgArray.map(m => m.delete().catch(console.error));
            });
    }