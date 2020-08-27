var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://localhost')

client.on('connect', function () {
	client.subscribe('topikki')
})

client.on('message', function (topic, message) {
	context = message.toString();
	console.log(context)
})