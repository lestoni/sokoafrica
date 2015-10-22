/**
 * Country router.
 *
 * @summary
 *  country.create()
 *  country.update()
 *  country.delete()
 *  country.fetchOne()
 *  country.fetchAll()
 */

/**
 * Load Module Dependencies.
 */
var express  = require('express');
var debug    = require('debug')('api:country-router');

var countryController      = require('../controllers/country');
var accessControl       = require('../controllers/auth').accessControl;

var router  = express.Router();

/**
 * @api {get} /countries/paginate?page=<RESULTS_PAGE>&per_page=<RESULTS_PER_PAGE> Get countries collection
 * @apiVersion 1.0.0
 * @apiName FetchAllByPagination
 * @apiGroup Country
 *
 * @apiDescription Get a collection of countries. The endpoint has pagination
 * out of the box. Use these params to query with pagination: `page=<RESULTS_PAGE`
 * and `per_page=<RESULTS_PER_PAGE>`.
 *
 * @apiSuccess {String} _id country id
 * @apiSuccess {String} name name of the country
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "total_pages": 1,
 *    "total_docs_count": 0,
 *    "docs": [{
 *      "_id" : "556e1174a8952c9521286a60"
 *      "name": "Seychelles"
 *    }]
 *  }
 *
 */
router.get('/paginate', countryController.fetchAllByPagination);

/**
 * @api {get} /countries/all Get countries collection
 * @apiVersion 1.0.0
 * @apiName FetchAll
 * @apiGroup Country
 *
 * @apiDescription Get a collection of countries.
 *
 * @apiSuccess {String} _id country id
 * @apiSuccess {String} name name of the country
 *
 * @apiSuccessExample Response Example:
 *  [{
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Seychelles",
 *  }]
 */
router.get('/all', countryController.fetchAll);

router.get('/_populate',  accessControl('admin'), countryController.populate);

/**
 * @api {post} /countries/create Create a country
 * @apiVersion 1.0.0
 * @apiName Create
 * @apiGroup Country
 *
 * @apiDescription Create a new country.
 *
 * @apiParam {String} name name of the country
 *
 * @apiParamExample Request Example:
 *  {
 *    "name": "Seychelles"
 *  }
 *
 * @apiSuccess {String} _id country id
 * @apiSuccess {String} name name of the country
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Seychelles",
 *  }
 *
 */
router.post('/create', accessControl(['admin']), countryController.create);

/**
 * @api {get} /countries/:id Get Country
 * @apiVersion 1.0.0
 * @apiName Get
 * @apiGroup Country
 *
 * @apiDescription Get a country with the given id
 *
 * @apiSuccess {String} _id country id
 * @apiSuccess {String} name name of the country
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Seychelles",
 *  }
 */
router.get('/:id',  countryController.fetchOne);

/**
 * @api {put} /countries/:id Update Country
 * @apiVersion 1.0.0
 * @apiName Update
 * @apiGroup Country
 *
 * @apiDescription Update a country with the given id
 *
 * @apiSuccess {String} _id country id
 * @apiSuccess {String} name name of the country
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Seychelles",
 *  }
 */
router.put('/:id', accessControl(['admin']), countryController.update);


/**
 * @api {delete} /countries/:id Delete Country
 * @apiVersion 1.0.0
 * @apiName Delete
 * @apiGroup Country
 *
 * @apiDescription Delete a country with the given id
 *
 * @apiSuccess {String} _id country id
 * @apiSuccess {String} name name of the country
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Seychelles",
 *  }
 */
router.delete('/:id', accessControl('admin'), countryController.delete);


// Expose Country router
module.exports = router;
