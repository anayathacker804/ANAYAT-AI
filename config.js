const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUw4SUl5UjkvYmViZXozRkZPN1BRdEg1YUtseDZuVGtEbWM2OURRSDRHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajZOYlVBUjBmYzZYNllHbEZxSXhrT25LcVNXWFM5dEx1cjhCRGxiblpEST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTUHczRTJUMGlrbk56V0UzbVFLaDRWYUExUjNNdmcwUUdkK0xWUVJLU0ZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxdnIzNEZtRmxnZkduQmhMVk92TG5qSzluSFBicmlZeEJCTVc4aWljUjBzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktIN1c3QVE3SmVXSm5IaXJ2UktHRmFwSGhUbUFmRVhDUUVNTmZQSUZVa0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkYvc21RQXNBMlZVNXNpTnpmUjRlV1lDVlBCejNaaVliRDZHaWJLMERVRjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0l3MWJuUW9RYnB0TXpkREtiZ2sreENiL2d3WHVMb3RzUXFIeHdxL2FVbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRnhjaWNBTVRoU2ZCN0hteDJVSjBnUCt5Q0pDbGxiQ0d1TmdEaGNaZ1oxYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxwTnhwSFU5OEF2MXcrRlVLY2ZkRGtzOUZpSWQzTUN5UlFwcVFGV2ZjWjNtMC8xTHFYZFFEbGNaV2hUM0pQa1ZBNWh0U3dkN2FnaUdZZk94bS9HaUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ5LCJhZHZTZWNyZXRLZXkiOiIzS0pRQ3pnR3VtVWU0S3R5c29MckxHbG94YXpyWjFoTmZld21vS283Z0FFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjM4NjY1NzAyMzE3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDRDBDOTU4NzYzNkQwNjdFOTY1QTZDRTM5MTZENzREIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk3NDQ4MTN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjM4NjY1NzAyMzE3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDMzNBRDVFMEQ3RDM4QUI3QjU3Q0UwREIwQjdGMDNGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk3NDQ4MTN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjM4NjY1NzAyMzE3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDRThGQkU4NjRCRkQ0RDlFNjkwNUY3QTM4MTQwQjhDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk3NDQ4MTR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjdQNlNGTlhYIiwibWUiOnsiaWQiOiIzODY2NTcwMjMxNzoyMUBzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijg0OTUwODYyODI3NTIwOjIxQGxpZCIsIm5hbWUiOiJBTkFZQVQgSEFDS0VSIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKZkx0YXNERUthbWpzY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwWGR5TFNzVWtUamRFUjZybDBwbXl5bnZvQUJsTFhSREFyVVo5WitJZTBVPSIsImFjY291bnRTaWduYXR1cmUiOiJ0c3A4dlFxblF5S09pSHVjaUtFQ1pzTTJwRndLMHVEQVo2MnYrZVRPcnk4KzRXQnJ3bCs4UEVlVEVtZnA4ZnpLTFZ6MjZvOENPakUvU2lKNEw4VklDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRjFWUTJoWVY2ZE1yaldTV2h5MTBwZjJON28vSkRqbExUQ1NsMDhCVXJ2czBGM3kvSkNYUEZXbmJOL0ZEVFFaYWtZVDlmSjNDMGtqc3FONVcvOUxpQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIzODY2NTcwMjMxNzoyMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhVjNjaTByRkpFNDNSRWVxNWRLWnNzcDc2QUFaUzEwUXdLMUdmV2ZpSHRGIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTk3NDQ4MTEsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSlJlIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ANAYAT-AI 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/adhn5v.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ANAYAT-AI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ANAYAT-AI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923452401207",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Anayat-ai*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Anayat-ai ❣️*",
// add bot owner name    
ALIVE_VID: process.env.ALIVE_VID || "https://files.catbox.moe/2myos8.mp4",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923452401207",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
