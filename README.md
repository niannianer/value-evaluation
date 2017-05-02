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
# init data
```bash
knex migrate:latest
node init.js
```
# when development
``` bash
pm2 start run.config.js --only www
```

