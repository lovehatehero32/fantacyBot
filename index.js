import TelegramApi from 'node-telegram-bot-api'
import { parse } from './parser.js'

const token = "1950332965:AAHx_fNvEq0q9ZouzuZWxbvpa9b14Tcx2Z4"
const bot = new TelegramApi(token, {polling: true})


  const startBot = () => {

      let date = parse().then(result => {return result})
      
      const place = [
          "Senya : 1",
          "Valdis : 2",
          "Denis : 3"
      ]
      const points = [
        "Senya : 14",
        "Valdis : 24",
        "Denis : 31"
      ]
    bot.setMyCommands([
        {command: '/start', description: 'Приветствие'},
        {command: '/deadline', description: 'Узнать дэдлайн для замен'},
        {command: '/place', description: 'Узнать позицию в лиге'},
        {command: '/points', description: 'Очки за последний тур'}
    ])
    
    bot.on('message', async msg => {
        const text = msg.text
        const chatId = msg.chat.id
        const name = msg.from.first_name
        
        if (text == '/start@FantasyEPLbot') {
            await bot.sendSticker(chatId, "https://tlgrm.ru/_/stickers/35a/cc3/35acc3d9-6859-4b58-923e-bcb3d8779314/6.webp")
            return bot.sendMessage(chatId, `Привет ${name}`)   
        }

        if (text == '/deadline@FantasyEPLbot') {
            return bot.sendMessage(chatId, `Deadline is on ${await date}`)
        }

        if (text == '/place@FantasyEPLbot') {
            return bot.sendMessage(chatId, `Current plases are ${place.map(el => {
                return el
            })}`)
        }

        if (text == '/points@FantasyEPLbot') {
            return bot.sendMessage(chatId, `Last tour points are ${points.map(el => {
                return el 
            })}`)
        }
       
        return bot.sendMessage(chatId, `${name}, такой команды не существует, попробуй другую`)
      })

    
  }

  startBot() 