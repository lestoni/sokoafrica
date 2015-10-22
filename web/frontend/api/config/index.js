/** * Load Module dependencies.
 */
var path = require('path');
var env     = process.env;

var PORT        = env.PORT || 7070;
var MONGODB_URL = env.MONGODB_URL || 'mongodb://127.0.0.1:27017/db';
var NODE_ENV    = env.NODE_ENV || 'development';
var HOST        = 'localhost';
var API_URL     = env.API_URL || (HOST + ':' + PORT);

module.exports = {

  API_URL: API_URL,

  ENV: NODE_ENV,

  PORT: PORT,

  HOST: HOST,

  // MongoDB URL
  MONGODB_URL: MONGODB_URL,

  SALT_FACTOR: 12,

  DOCS_URL : API_URL + '/docs',

  TOKEN: {
    RANDOM_BYTE_LENGTH: 32
  },

  OPEN_ENDPOINTS: [
    /\/media\/.*/,
    /\/docs\/.*/,
    /\/businesses\/category\/.*/,
    /\/businesses\/sub-category\/.*/,
    /\/templates\/category\/.*/,
    /\/templates\/sub-category\/.*/,
    /\/users\/[login, signup]/,
    '/',
    '/plans/all',
    '/plans/paginate',
    '/categories/all',
    '/categories/paginate',
    '/countries/all',
    '/countries/paginate',
    '/sub-categories/all',
    '/sub-categories/paginate',
    '/businesses/all',
    '/businesses/create',
    '/businesses/paginate',
    '/templates/all',
    '/templates/paginate'
  ],
  MEDIA: {
    FILE_SIZE: 2 * 1024 * 1024, // 1MB,
    URL: API_URL + '/templates/',
    FILES_FOLDER: path.resolve(process.cwd(), './templates') + '/'
  },

  VERIFICATION: {
    ON: true,
    TOKEN_LENGTH: 24
  }
};
