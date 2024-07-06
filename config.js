const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '22575285416'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'maxdavid126@gmail.com'
global.github = 'https://github.com/Bladeh4x/BLADE-MD'
global.location = 'Lahore pakistan'
global.gurl = 'https://instagram.com/alex_david/' // add your username
global.sudo = process.env.SUDO || "22575285416"
global.devs = '2348069553870'
global.website = 'https://github.com/Bladeh4x/BLADE-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/d55e842b35a4d0befefc0.mp4'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUhQdEVGMmdBRk5qckkyODF1c3RYcThhWmErcGt1UDdyQjN5V2w2ZzhYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmsySENGZ1gzZXAvVlFxaHllMmpNaHpJbUVSQ1ZjWUxOdVcxdjc3YzlTMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSFhCWGVPeG0wYjJGZkxyK291YW1KN2hrdk9tUjZzTXVPMHVXbEZKNTFVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSHl0Rm0vQk5jYURib3FFZSt0SlZxTWt0Z3JEMndVR0cxT2w3VWlPSkg4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1IK2dtNm5BVGlXVTZtV1hIWHhhMzA1S29DSnZVRFdjQk5pc0tFV1liM3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFCZXFCSVAxRVJRWHY0d1RXbW5uOG5qNlZsTFI0eEFaSEVqV3JwT2ZmZzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVBsajhYeFV6dWdJTXd4WWg1V1U3RXplVG4xZXduZDMzZDR3R1FUc0lsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVFwYmVXZXkyV3J5UmR5Z25nb2JobWdaMWw4Q2RpQ0VXWFJpNkNUMEExND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFDUWZ4ditoTVFXRStlOWhZay9LZnE3NTJHakMzM1FCQVRvcmtGYkZzMUREMGtOclJDbG4rL3BPK09QNE1YZThBYU13RDgzVE82ekFTYkZtT2lXY0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA3LCJhZHZTZWNyZXRLZXkiOiJtalhDUEpkUitJczBydzdtV2xLMmgvMXFhbSttWGhIajFoZlhWQmxDSWl3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6NDgsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo0OCwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJTS3dZUzVjQlRrbWZMOUsyQkxON0hRIiwicGhvbmVJZCI6ImVmM2Q0MTdkLWYzMWItNDE4OS04YjZjLWQ1OTA4YzYzYzdkZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtNTBZN1UxZWtCS0FEL2RiZ29saUtnRjJ1RWc9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5XY3g4TUtFTE9xcE53dkoyM2VPQ0FMRzRURT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wrUjM4a0dFTXFCb2JRR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InBNenVETWltK215cFF2b2ppUWtncHl3ZWkxbjIxZHAxS2dwVmc0aUQ0SFk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlMrR2dVbjlHOTJGY2FSVlc0OXJoNllML21oOVp2ZzBFSzlkTC9LajhobDVGTS9FUnNOemZQLzJ2cnlXK2pxVlBpMER2TEVuSGxFQllSdWFaSHpJa0R3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVT3p4L3pNSTdWRGExL0RzOEJ1bUgrckZ0Z3pTVGVrek51cisvOG9OWnJaa1JDY095N2tvZklTcHZFSVU1RGVnSk5HbDBsT2htUjRjQUE0VURxUGpEUT09In0sIm1lIjp7ImlkIjoiMjI1NzUyODU0MTY6NjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Qi/CdkKjwnZCu8J2QpPCdkKzwnZCo8J2QpyDwnZCU8J2Qs/CdkK7wnZCm8J2QmvCdkKTwnZCiIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyNTc1Mjg1NDE2OjYzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFUTTdneklwdnBzcVVMNkk0a0pJS2NzSG90Wjl0WGFkU29LVllPSWcrQjIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAyMDU1ODR9",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'ʟᴏᴏᴜᴋsᴏᴏɴ×ᴜᴢᴜᴍᴀᴋɪ',
  packname:  process.env.PACK_NAME || 'ʟᴏᴏᴜᴋsᴏᴏɴ×ᴜᴢᴜᴍᴀᴋɪ',
  
  botname:   process.env.BOT_NAME === undefined ? "ɴᴀʀᴜᴛᴏ×ᴍᴅ" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'ʟᴏᴏᴜᴋsᴏᴏɴ×ᴜᴢᴜᴍᴀᴋɪ' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '√' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴅᴇ-²²¹-ᴍᴅ•* ",   //*『ɴᴀʀᴜᴛᴏ×ᴍᴅ •ʟᴏᴏᴜᴋsᴏᴏɴ×ᴜᴢᴜᴍᴀᴋɪ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
