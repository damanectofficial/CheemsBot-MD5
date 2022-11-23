
/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}


//owmner v card
global.vcardowner = ['6283872273467'] //ur owner number
global.ownername = "🦄Hidayat Store My Id" //ur owner name
global.ytname = "YT: Hidayat Store" //ur yt chanel name
global.socialm = "GitHub: damanectofficial" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//bot bomdy 
global.owner = ['6283872273467'] //ur number
global.ownernomer = "6283872273467" //ur number
global.ownertag = '6283872273467' //ur tag number
global.premium = ['6283872273467'] //ur premium number
global.botname = 'Hi Dayat Ganteng-Bot Whatsap' //ur bot name
global.ownername = "🦄Hidayat Store My Id"
global.linkz = "https://hidayat-store.my.id" //your theme url which will be displayed on whatsapp
global.websitex = "https://hidayat-store.my.id" //ur website to be displayed
global.botscript = 'https://hidayat-store.my.id' //script link
global.themeemoji = "🦄" //ur theme emoji
global.packname = "Sticker By" //ur sticker watermark packname
global.author = "Hi Dayat Ganteng-Bot Whatsap" //ur sticker watermark author
global.wm = "Hidayat Store My Id" //ur watermark

global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
