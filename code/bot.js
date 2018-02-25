const Discord = require('discord.js');
const Commando = require('discord.js-commando'),
const Manager = new Discord.ShardingManager('./Penta.js');
Manager.spawn(1)
