# mqtt-hello-world

A very simple mqtt example using aedes (for server) and mqtt (for clients) libraries. In order to run the demo place following commands in to the command line (e.g. PowerShell). Please note the start in the beginning of each command runs the command in the background.

`npm install`

`start node broker.js`

`start node subscriber.js`
Please enter your topic of interest (default/topic/etc): **/wartsila/classrooms/wa026a**
Subscribing topic /wartsila/classrooms/wa026a... done.

`start node publisher`
Please enter your topic of interest (default/topic/etc): **/wartsila/classrooms/wa026a**
Your message: **{"temperature": 22, "humidity": 25}**
Message "{"temperature": 22, "humidity": 25}" sent to topic /wartsila/classrooms/wa026a.

At that point the received message has to be seen in the subscriber process.

# Aedes CLI

You may also consider taking a look on the aedes command line interpreter [https://github.com/moscajs/aedes-cli]. The CLI can be installed with npm:

`npm install aedes-cli -g`

You can manage user credentials with credentials.json file.

`aedes adduser <user> <pass> --credentials ./credentials.json`

Now you can start your server. In the command below we assume we have generated key.pem and cert.pem files [ https://www.suse.com/support/kb/doc/?id=000018152 ].

`aedes --key .\key.pem --cert .\cert.pem --protos tls --credentials '.\credentials.json'`
