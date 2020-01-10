# POC Node-Redis 

To run this app you should have installed REDIS SERVER, and in the config.env change host and port values.

With REDIS Server started to run the base project:
```bash 
  npm start
```

To test subscriber and publisher you should run subscriber first and publisher after doing that
```bash
  npm run subscriber
  npm run publisher
```

To test redis promise you should run: 
```bash
  npm run promise
```
then hit localhost:3000

Thanks all.