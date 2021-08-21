import cheerio from 'cheerio'
import axios from 'axios'

import { deadlineFormat } from './deadlineFormat.js'

export const parse = async () =>  {
    const getHTML = async (url) => {
        const { data } = await axios.get(url)
        return cheerio.load(data)
    }
    
    const $ = await getHTML('https://www.sports.ru/epl/table/')
        
    const deadline = $('div.teaser-event__status span').eq(0).text()
    
    //console.log(deadlineFormat(deadline))
    return deadlineFormat(deadline)
}

