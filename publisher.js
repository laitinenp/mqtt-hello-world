const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost')
const readline = require('readline-sync')
var topic = 'default-topic'

var input = readline.question('Please enter your topic of interest (' + topic + '): ')
if (input != "") topic = input

var message = readline.question('Your message: ')

client.on('connect', function() {
	client.publish(topic, message)
	console.log('Message \"' + message + '\" sent to topic ' + topic + '.')
})
