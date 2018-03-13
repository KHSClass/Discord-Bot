const Discord = require('discord.js');
const Commando = require('wonderwork'),
const Manager = new Discord.ShardingManager('./index.js');
Manager.spawn(2)
