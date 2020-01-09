const redis = require('redis'),
  client = redis.createClient(6379, 'localhost');

// On error
client.on('error', (err) => console.log(`Error event ${client.host}:${client.port} - ${err}`));

client.set('hello', 'Hello ', redis.print);
client.append('hello', 'world', redis.print);

client.get('city', (err, res) => {
  if (err) console.log(err);

  console.log(res.toString());
});


