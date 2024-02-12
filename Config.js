const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber =  "201090952790"
global.ownername = "Team SHOKY"
global.ytname = "Team SHOKY"
global.socialm = "Facebook: Team Shoky"
global.location = "Egypt"

global.ownername = 'YousefTamer' //owner name
global.botname = ' Team Shoky' //name of the bot

//sticker details
global.stickername = '💙𓆩‎✘yousef✘𓆪_✰'
global.packname = 'Sticker By'
global.author = 'Shoky Bot'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Shoky botz inc."

//theme link
global.link = 'https://api.whatsapp.com/send?phone=+201019127998'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*تمت المهمه* ✅️',
    prem: '*لازم تبقي دافع فلوث*',
    admin: '*الادمن بس يا اخ*',
    botAdmin: '*للاسف انت مش ادمن ف الجروب* ',
    owner: '*لما تبقي صاحب البوت ابقي استخدمه*',
    group: '*يسطا دا شات لازت تبقي ف جروبات*',
    private: '*This feature is only for private chats*',
    wait: '*شغال يبن عمي...* ',    
    error: '*نيلت اي !*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
