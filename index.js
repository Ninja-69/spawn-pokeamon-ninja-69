//Don't Change Anything Below, Dont Touch Anything
//Go To config.json and Put Your Bot User id in "Owner id"
// Put channel id where You want Spam in "spamChannelID"
//Put Token in Secret Variable key will be token and in value put Your User Token
//ninja is better
//plz dont change this stuffs / credits 

const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('NINJA-69 Github  , Rate Us A Star ⭐'))

app.listen(port, () =>
  console.log(`ninja is the best! it is better than rest`)
);
const Discord = require('discord.js-selfbot');
const cron = require('node-cron');
const settings = require('./config.json');
const client = new Discord.Client();
const prefix = settings.prefix;
const color = "RANDOM";
const spawnChannelID = settings.spawnChannelID;
const botPrefix = settings.pokeTwoBotPrefix;
const spamChannelID = settings.spamChannelID;
var spamming = false;
var chrons = false;

client.on("ready", () => {
  console.log("[INFO] Starting...\n[INFO] NinSpammer");
  if (settings.autoSpam == false) return;
  client.channels.fetch(spamChannelID)
    .then(channel => {
      channel.send(`${prefix}spam on`);
    })
})

client.on('message', msg => {
  if (!msg.content.startsWith(prefix)) return;
  if (msg.author.id != settings.ownerID) return;
  let args = msg.content.toLowerCase().slice(prefix.length).trim().split(" ");
  let cmd = args.shift();
  if (cmd == "spam") {
    msg.delete();
    if (!args[0]) return;
    if (args[0] == "on") {
      if (spamming == true) return;
      spamming = true;
      if (chrons == true) return;
      chrons = true;
      return startChrons(msg);
    }
    if (args[0] == "off") {
      return spamming = false;
    }
    return;
  }
  try {
    msg.delete();
    let cmdFile = require(`./commands/${cmd}.js`);
    cmdFile.run(client, msg, args, settings, prefix, color);
  } catch (e) {
    console.log("[Commands] Not A Command");
    console.log(e);
  }
});
function startChrons(msg) {
  cron.schedule('*/4 * * * * *', () => {
    if (spamming) {
      sendMsg(msg);
    }

  });
  cron.schedule('*/6 * * * * *', () => {
    if (spamming) {
      sendMsg(msg);
    }

  });
}
function sendMsg(msg) {
  msg.channel.send(Math.random().toString(36).substr(2, 7));
}
client.login(process.env.token);