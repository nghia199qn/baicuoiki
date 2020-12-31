require("dotenv").config();
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();

fs.readdir("./events/", (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`);
    const eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventHandler(client, ...args));
  });
});

client.login(Nzk0MTM4NDAwNjA4ODc4NjAy.X-2dBQ.4GZfe29RBHG5ZKB4Qn6k-GxjAmI);
