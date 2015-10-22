/**
 * Load Module dependencies
 */
var debug = require('debug')('api:routes');

var pkg       = require('../package.json');
var config    = require('../config');

var usersController       = require('./users');
var categoriesController  = require('./categories');
var countriesController   = require('./countries');
var templatesController   = require('./templates');
var businessesController  = require('./businesses');
var plansController       = require('./plans');
var subCategoriesController = require('./sub-categories');

module.exports = function initRoutes(app) {
  debug('loading routes');

  app.use('/users',       usersController);
  app.use('/categories',  categoriesController);
  app.use('/countries',   countriesController);
  app.use('/templates',   templatesController);
  app.use('/businesses',  businessesController);
  app.use('/plans',       plansController);
  app.use('/sub-categories',  subCategoriesController);

  app.get('/', function (req, res) {
    res.json({
      name:           pkg.name,
      version:        pkg.version,
      description:    pkg.description,
      documentation:  config.DOCS_URL,
      uptime:         process.uptime() + 's'
    });
  });

  debug('routes loaded');
};
