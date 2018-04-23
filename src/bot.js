const Twit = require('twit')
const config = require('./config')

const bot = new Twit(config)

var willTweet = ['Once I finish debuggin, I will stop, I promise', 'Thank you all for tolerating this.', 'Till next time - Joe\'s Twitter Bot'];
var i = 0;

var fireMeUp = function(){
	if (i >= willTweet.length) {
		clearInterval(timerId);
	}
	bot.post('statuses/update', {
	  status: willTweet[i]
	}, (err, data, response) => {
	  if (err) {
	    console.log(err)
	  } else {
	    console.log(`${data.text} tweeted!`)
	  }
	})
	i++;
}

let timerId = setInterval(() => fireMeUp(), 10000);