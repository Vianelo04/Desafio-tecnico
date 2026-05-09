require('dotenv').config();

const knex = require('knex');
const knexfile = require('../../knexfile');

const connection = knex(knexfile.development);

module.exports = connection;
