const redis = require('redis'),
  client = redis.createClient(6379, 'localhost');

// On error
client.on('error', (err) => console.log(`Error event ${client.host}:${client.port} - ${err}`));

client.set('city', 'São Paulo ', redis.print);
client.set('country', 'BR', redis.print);
client.set('Date', new Date(), redis.print);

client.get('city', (err, res) => {
  if (err) console.log(err);

  console.log(res.toString());
});

client.get('country', (err, res) => {
  if (err) console.log(err);

  console.log(res.toString());
});

client.get('Date', (err, res) => {
  if (err) console.log(err);

  console.log(res);
});
