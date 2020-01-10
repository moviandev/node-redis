const express = require('express');
const app = express();

app.listen(3000, 'localhost', () => {
  console.log('server listening port 3000')
})

const redis = require('redis');
const client = redis.createClient();

client.set('foo', 'bar', redis.print);

const { promisify } = require('util')
const getAsync = promisify(client.get).bind(client);

app.get('/', (req, res) => {
  getAsync('foo').then(resp => res.send(
    console.log(resp)
  ));
});

