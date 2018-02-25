const Discord = require('discord.js');
const Commando = require('discord.js-commando'),
const Manager = new Discord.ShardingManager('./index.js');
Manager.spawn(2)
