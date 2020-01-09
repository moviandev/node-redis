const dotenv = require('dotenv');

dotenv.config('./config.env');

const redis = require('redis'),
  client = redis.createClient(process.env.PORT, process.env.HOST);

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
