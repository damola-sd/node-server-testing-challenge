const knex = require('knex');
const dbConfig= require('../knexfile');

const development = process.env.DB_ENV || 'development';
const testing = process.env.DB_TEST || 'testing'

module.exports = knex(dbConfig[development]);