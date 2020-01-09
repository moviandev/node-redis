const redis = require('redis'),
  client = redis.createClient();

client.on('message', (channel, message) => console.log(`${channel}: ${channel, message}`));

client.subscribe('sensor');
console.log('Waiting incomming message...');
