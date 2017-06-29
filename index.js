var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('assets'));
app.use(bodyParser.json());


// create array for messags
	// var messages = [
	// 	"What's happening!",
	// 	"You probably want to start chatting, huh.",
	// 	"Oh shiz, here we go!"
	// ];

	var messages = [];
	// try adding username
	var user = [];

// Create object of our array of messages
// messages.push({
// 	message: req.body.message,
// 	time: new Date()
// });


// GET endpoint that returns array of messages
app.get('/messages', function(req, res, next){
	res.status(200).json({ messages: messages});
});

// POST a new message
app.post('/messages', function(req, res, next) {
	messages.push({message: req.body.message, time: new Date() });
	user.push({username: req.body.username, name: req.body.name})
	res.status(200).json({messages: messages});
})


// create listening port
var port = 3000;
app.listen(port, function() {
	console.log('listening on port', port)
});
