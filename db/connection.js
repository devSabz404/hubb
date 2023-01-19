import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const knex = require('knex');

const knexfile = require('../knexfile');


const env = process.env.NODE_ENV || 'development';
const configOptions = knexfile[env];

export const connection = knex(configOptions);
