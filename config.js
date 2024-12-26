const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347062362592";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_46_12_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MixcbiAgICAgICAgNixcbiAgICAgICAgMTgyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA1OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgODYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTgsXG4gICAgICAgIDY2LFxuICAgICAgICAzMixcbiAgICAgICAgMzUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTksXG4gICAgICAgIDQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxODUsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNCxcbiAgICAgICAgODksXG4gICAgICAgIDM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA5LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA0NixcbiAgICAgICAgMTgzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDUyLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTczLFxuICAgICAgICA2MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQxLFxuICAgICAgICA0MixcbiAgICAgICAgOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxODksXG4gICAgICAgIDExOCxcbiAgICAgICAgOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM3LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnakk3M0hwZEJjZmRjWUxGT0E4dm0vempHNkY1K2YrZS82YnFRc3NjQVl3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNjIzNjI1OTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjhFOUQ5QzJEQTg5NEVFREIyMkQ4NkRGMEMwRDBEMUE3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTIzODc3MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNVVVCUkxpVlFydVZYaURvSm5mMjhRXCIsXG4gIFwicGhvbmVJZFwiOiBcImY2NGI2OGRjLWNlODMtNGZlYS05ODkzLTExMGExODg5ZWFlNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODAsXG4gICAgICAxOTUsXG4gICAgICAxOSxcbiAgICAgIDE4MixcbiAgICAgIDQ3LFxuICAgICAgNzMsXG4gICAgICAyMTEsXG4gICAgICA2OSxcbiAgICAgIDUsXG4gICAgICAxOTUsXG4gICAgICAzNyxcbiAgICAgIDQ2LFxuICAgICAgNjksXG4gICAgICAxODUsXG4gICAgICAxMSxcbiAgICAgIDEwNCxcbiAgICAgIDEyNixcbiAgICAgIDIyOSxcbiAgICAgIDE5OSxcbiAgICAgIDEwNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxLFxuICAgICAgMjE3LFxuICAgICAgMTA4LFxuICAgICAgMjA0LFxuICAgICAgMTU5LFxuICAgICAgMjExLFxuICAgICAgMjI5LFxuICAgICAgMjgsXG4gICAgICA4MixcbiAgICAgIDE5NixcbiAgICAgIDkxLFxuICAgICAgMjgsXG4gICAgICA5OSxcbiAgICAgIDI0NSxcbiAgICAgIDI1MSxcbiAgICAgIDI0NCxcbiAgICAgIDIyMCxcbiAgICAgIDMzLFxuICAgICAgMjA2LFxuICAgICAgMjI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhQRkZIOUZFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDYyMzYyNTkyOjc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSE4gQ09MTEVDVElPTiBBTkQgQUNBREVNWVwiLFxuICAgIFwibGlkXCI6IFwiMTYzNTE4MTEyMzUwNDAzOjc0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kvQzRiWUhFT2pJdHJzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia2dFeVVoQXAxcWp4bERIa2RTUXlYN0pBWWpYMmJvNjZXWjgzbC9ldjlEZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxOEc0aGpqS1VnVEYyalFVaUVCQW1xR21rWE9HN2xiTHFOOTFCOUYyMVcycGNwWXBGYURndmN1N2RSem5Md0grZjNSMmw4UG1TUS8vT0lXaE55ZnBCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2L0wxaE0yZDhDcjZOR1drL3k1U2hEN1NSV3ZmdXFqdkVMaU9TNEJsbU1FQVE4WUVWMkVpcjVMV3c0dUV2RVpPdlVTL3VwNGJLSWFSeVVPWjF5TkNEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDYyMzYyNTkyOjc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzUyMzg3NjUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHdVBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUd1UC5qc29uIjogIntcImtleURhdGFcIjpcIk5SMmpkdi9ENnh4RjhFblNqdFdqalYyNTNjSnE4bDR2SzJQMlhBNzU2aGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk5Mzg5MjEwOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNTIwMTg2NTcwN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
