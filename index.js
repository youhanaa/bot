/**
 ██████╗░████████╗██╗░░██╗           
 ██╔══██╗╚══██╔══╝╚██╗██╔╝          
 ██████╔╝░░░██║░░░░╚███╔╝░          
 ██╔══██╗░░░██║░░░░██╔██╗░          
 ██║░░██║░░░██║░░░██╔╝╚██╗          
 ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          
  GIT : https://github.com/RTX-GAMINGG/Bot-ghost-status-remover-by-RTX
  DISCORD SERVER : https://discord.gg/FUEHs7RCqz
  YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
 * **********************************************
 *   Code by RTX GAMING
 * **********************************************
 */



const { Client, GatewayIntentBits, ActivityType, TextChannel } = require('discord.js');
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const client = new Client({
  intents: Object.keys(GatewayIntentBits).map((a) => {
    return GatewayIntentBits[a];
  }),
});
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  const imagePath = path.join(__dirname, 'index.html');
  res.sendFile(imagePath);
});
app.listen(port, () => {
  console.log(`🔗 Listening to RTX: http://localhost:${port}`);
  console.log(`🔗 Replit URL: https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`);
});


const statusMessages = ["Playing Exorue-Online"];


let currentIndex = 0;
const channelId = '';

async function login() {
  try {
    await client.login(process.env.TOKEN);
    console.log(`\x1b[36m%s\x1b[0m`, `|    🐇 Logged in as ${client.user.tag}`);
  } catch (error) {
    console.error('Failed to log in:', error);
    process.exit(1);
  }
}

/**
 ██████╗░████████╗██╗░░██╗           
 ██╔══██╗╚══██╔══╝╚██╗██╔╝          
 ██████╔╝░░░██║░░░░╚███╔╝░          
 ██╔══██╗░░░██║░░░░██╔██╗░          
 ██║░░██║░░░██║░░░██╔╝╚██╗          
 ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          
GIT : https://github.com/RTX-GAMINGG/Bot-ghost-status-remover-by-RTX
  DISCORD SERVER : https://discord.gg/FUEHs7RCqz
  YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
 * **********************************************
 *   Code by RTX GAMING
 * **********************************************
 */


function updateStatusAndSendMessages() {
  const currentStatus = statusMessages[currentIndex];
  const nextStatus = statusMessages[(currentIndex + 1) % statusMessages.length];

  client.user.setPresence({
    activities: [{ name: currentStatus, type: ActivityType.Custom}],
    status: 'dnd',
  });

  
  const textChannel = client.channels.cache.get(channelId);

  if (textChannel instanceof TextChannel) {
   
    textChannel.send(`Bot status is: ${currentStatus}`);
  } else {

  }

  currentIndex = (currentIndex + 1) % statusMessages.length;
}

client.once('ready', () => {
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✅ Bot is ready as ${client.user.tag}`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    😏 I AM SORRY BOT GHOST DEVS`);
  updateStatusAndSendMessages();

  setInterval(() => {
    updateStatusAndSendMessages();
  }, 5000);
});

login();

/**
 ██████╗░████████╗██╗░░██╗           
 ██╔══██╗╚══██╔══╝╚██╗██╔╝          
 ██████╔╝░░░██║░░░░╚███╔╝░          
 ██╔══██╗░░░██║░░░░██╔██╗░          
 ██║░░██║░░░██║░░░██╔╝╚██╗          
 ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          
GIT : https://github.com/RTX-GAMINGG/Bot-ghost-status-remover-by-RTX
  DISCORD SERVER : https://discord.gg/FUEHs7RCqz
  YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
 * **********************************************
 *   Code by RTX GAMING
 * **********************************************
 */
