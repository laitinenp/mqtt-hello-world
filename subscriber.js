const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://localhost')
const readline = require('readline-sync')

var topic = 'default-topic';

var input = readline.question('Please enter your topic of interest (' + topic + '): ')
if (input != "") topic = input

client.on('connect', function () {
	process.stdout.write('Subscribing topic ' + topic + '... ')
	client.subscribe(topic)
	console.log('done.')
})
client.on('message', function (topic, message) {
	context = message.toString();
	console.log(context)
})

