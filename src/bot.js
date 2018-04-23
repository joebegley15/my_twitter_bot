const Twit = require('twit')
const config = require('./config')

const bot = new Twit(config)

bot.get('followers/list', {
  screen_name: 'kanyewest',
  count: 500
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else {
    data.users.forEach(user => {
    	console.log(user.screen_name);
    })
  }
})