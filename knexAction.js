/**
 * Created by hekk on 2017/4/26.
 */
const knexLib = require('knex');
const knexflie = require('./knexfile')['development'];
const knex = knexLib(knexflie);
module.exports = knex;