const redis = require('redis'),
  publisher = redis.createClient();

let value = 0;
console.log('Sending data');

setInterval(() => { sendingData() }, 1000);

function sendingData() {
  publisher.publish('sensor', value);
  value++;
  if (value > 50) value = 0;
}
