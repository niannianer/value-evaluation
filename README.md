# Express

> An express project

## Build Setup
* install mysql
* install redis

# install global
```bash
npm install -g knex
npm install -g pm2
```
# install dependencies
``` bash
npm install
```


# when development
``` bash
knex migrate:latest
node init.js
pm2 start run.config.js --only dev
```
# production
```
knex migrate:latest --env production
npm run init_production
pm2 start run.config.js --only production 
```
