var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost')

client.on('connect', function() {
    setInterval(function () {
		client.publish('topikki','Hello MQTT')
		console.log('Msg sent now.')
	}, 5000)
})
