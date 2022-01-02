const { Client, Collection } = require("discord.js");
const client = (global.client = new Client({ fetchAllMembers: true }));
const cfg = require("./src/configs/config.json");
const moment = require("moment");

client.commands = global.commands = new Collection();
client.aliases = new Collection();
client.invites = new Collection();
client.cooldown = new Map();
require("./src/handlers/commandHandler");
require("./src/handlers/eventHandler");
require("./src/handlers/mongoHandler");
require("./src/events/functions.js")(client, cfg, moment); 

client.login(cfg.Bot.Token).catch(err => console.error("Bota giriş yapılırken başarısız olundu!"));

client.puanData = [
    { role: "", puan: 0 },
  ]
