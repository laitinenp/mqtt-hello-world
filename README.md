# mqtt-hello-world

A very simple mqtt example using aedes (for server) and mqtt (for clients) libraries. In order to run the demo place following commands in to the command line (e.g. PowerShell). Please note the start in the beginning of each command runs the command in the background.

>> npm install

>> start node broker.js

>> start node subscriber.js
Please enter your topic of interest (default/topic/etc): /wartsila/classrooms/wa026a
Subscribing topic /wartsila/classrooms/wa026a... done.

>> start node publisher
Please enter your topic of interest (default/topic/etc): /wartsila/classrooms/wa026a
Your message: {"temperature": 22, "humidity": 25}
Message "{"temperature": 22, "humidity": 25}" sent to topic /wartsila/classrooms/wa026a.
