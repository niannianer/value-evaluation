/**
 * Created by hekk on 2017/4/26.
 */
const knex = require('knex');
const knexflie = require('./knexfile')['development'];
const knexConfig = knex(knexflie);
module.exports = knexConfig;