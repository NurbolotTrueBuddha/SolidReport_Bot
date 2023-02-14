import TelegramBot from 'node-telegram-bot-api';
import Validate from './validate.js'
import Handler from './handler.js';
const token = '';
const bot = new TelegramBot(token, { polling: true });
let handler = new Handler(bot);
let validate = new Validate(handler);

bot.on('message', (msg) => {
    validate.validateMsg(msg, bot)
    console.log(msg);

})