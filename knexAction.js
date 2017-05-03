/**
 * Created by hekk on 2017/4/26.
 */
const knex = require('knex');
console.log(process.env.NODE_ENV);
const NODE_ENV = process.env.NODE_ENV || 'development';
const knexflie = require('./knexfile')[NODE_ENV];
const knexConfig = knex(knexflie);
module.exports = knexConfig;