/**
 * Business router.
 *
 * @summary
 *  business.create()
 *  business.update()
 *  business.delete()
 *  business.fetchOne()
 *  business.fetchAll()
 */

/**
 * Load Module Dependencies.
 */
var express  = require('express');
var debug    = require('debug')('api:business-router');

var businessController  = require('../controllers/business');
var accessControl       = require('../controllers/auth').accessControl;

var router  = express.Router();
/**
 * @api {get} /businesses/paginate?page=<RESULTS_PAGE>&per_page=<RESULTS_PER_PAGE> Get businesses collection
 * @apiVersion 1.0.0
 * @apiName FetchAllByPagination
 * @apiGroup Business
 *
 * @apiDescription Get a collection of businesses. The endpoint has pagination
 * out of the box. Use these params to query with pagination: `page=<RESULTS_PAGE`
 * and `per_page=<RESULTS_PER_PAGE>`.
 *
 * @apiSuccess {String} _id business id
 * @apiSuccess {String} name name of the business
 * @apiSuccess {String} category category id
 * @apiSuccess {String} sub_category sub_category id
 * @apiSuccess {String} country country of the business
 * @apiSuccess {String} email email of the business
 * @apiSuccess {String} phone phone of the business
 * @apiSuccess {String} rep_name name of the representative of the business
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "total_pages": 1,
 *    "total_docs_count": 0,
 *    "docs": [{
 *      "_id" : "556e1174a8952c9521286a60"
 *      "name": "Business",
 *      "category" : {
 *        "_id" : "556e1174a8952c9521286a60"
 *        name: 'Education',
 *        ...
 *      },
 *      "sub_category" : {
 *        "_id" : "556e1174a8952c9521286a60"
 *        name: "Kindergaten",
 *        ...
 *      },
 *      "country": "Algeria",
 *      "email": "business@email.com",
 *      "phone": "2017575746477",
 *      "rep_name": "Jane Doe"
 *    }]
 *  }
 *
 */
router.get('/paginate', businessController.fetchAllByPagination);

/**
 * @api {get} /businesses/all Get businesses collection
 * @apiVersion 1.0.0
 * @apiName FetchAll
 * @apiGroup Business
 *
 * @apiDescription Get a collection of businesses.
 *
 * @apiSuccess {String} _id business id
 * @apiSuccess {String} name name of the business
 * @apiSuccess {String} category category id
 * @apiSuccess {String} sub_category sub_category id
 * @apiSuccess {String} country country of the business
 * @apiSuccess {String} email email of the business
 * @apiSuccess {String} phone phone of the business
 * @apiSuccess {String} rep_name name of the representative of the business
 *
 * @apiSuccessExample Response Example:
 *  [{
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Business",
 *    "category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: 'Education',
 *      ...
 *    },
 *    "sub_category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: "Kindergaten",
 *      ...
 *    },
 *    "country": "Algeria",
 *    "email": "business@email.com",
 *    "phone": "2017575746477",
 *    "rep_name": "Jane Doe"
 *  }]
 */
router.get('/all', businessController.fetchAll);


/**
 * @api {post} /businesses/create Create a business
 * @apiVersion 1.0.0
 * @apiName Create
 * @apiGroup Business
 *
 * @apiDescription Create a new business.
 *
 * @apiParam {String} name name of the business
 * @apiParam {String} category category id
 * @apiParam {String} sub_category sub_category id
 * @apiParam {String} country country of the business
 * @apiParam {String} email email of the business
 * @apiParam {String} phone phone of the business
 * @apiParam {String} rep_name name of the representative of the business
 *
 * @apiParamExample Request Example:
 *  {
 *    "name": "Business",
 *    "category" : "556e1174a8952c9521286a60",
 *    "sub_category" : "556e1174a8952c9521286a60",
 *    "country": "Algeria",
 *    "email": "business@email.com",
 *    "phone": "2017575746477",
 *    "rep_name": "Jane Doe"
 *  }
 *
 * @apiSuccess {String} _id business id
 * @apiSuccess {String} name name of the business
 * @apiSuccess {String} category category id
 * @apiSuccess {String} sub_category sub_category id
 * @apiSuccess {String} country country of the business
 * @apiSuccess {String} email email of the business
 * @apiSuccess {String} phone phone of the business
 * @apiSuccess {String} rep_name name of the representative of the business
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Business",
 *    "category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: 'Education',
 *      ...
 *    },
 *    "sub_category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: "Kindergaten",
 *      ...
 *    },
 *    "country": "Algeria",
 *    "email": "business@email.com",
 *    "phone": "2017575746477",
 *    "rep_name": "Jane Doe"
 *  }
 *
 */
router.post('/create', businessController.create);

/**
 * @api {get} /businesses/category/:id Get businesses collection by category
 * @apiVersion 1.0.0
 * @apiName FetchAllByCategory
 * @apiGroup Business
 *
 * @apiDescription Get a collection of businesses by category
 *
 * @apiSuccess {String} _id business id
 * @apiSuccess {String} name name of the business
 * @apiSuccess {String} category category id
 * @apiSuccess {String} sub_category sub_category id
 * @apiSuccess {String} country country of the business
 * @apiSuccess {String} email email of the business
 * @apiSuccess {String} phone phone of the business
 * @apiSuccess {String} rep_name name of the representative of the business
 *
 * @apiSuccessExample Response Example:
 *  [{
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Business",
 *    "category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: 'Education',
 *      ...
 *    },
 *    "sub_category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: "Kindergaten",
 *      ...
 *    },
 *    "country": "Algeria",
 *    "email": "business@email.com",
 *    "phone": "2017575746477",
 *    "rep_name": "Jane Doe"
 *  }]
 */
router.get('/category/:id', businessController.getByCategory);

/**
 * @api {get} /businesses/sub-category/:id Get businesses collection by SubCategory
 * @apiVersion 1.0.0
 * @apiName FetchAllBySubCategory
 * @apiGroup Business
 *
 * @apiDescription Get a collection of businesses by Category
 *
 * @apiSuccess {String} _id business id
 * @apiSuccess {String} name name of the business
 * @apiSuccess {String} category category id
 * @apiSuccess {String} sub_category sub_category id
 * @apiSuccess {String} country country of the business
 * @apiSuccess {String} email email of the business
 * @apiSuccess {String} phone phone of the business
 * @apiSuccess {String} rep_name name of the representative of the business
 *
 * @apiSuccessExample Response Example:
 *  [{
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Business",
 *    "category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: 'Education',
 *      ...
 *    },
 *    "sub_category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: "Kindergaten",
 *      ...
 *    },
 *    "country": "Algeria",
 *    "email": "business@email.com",
 *    "phone": "2017575746477",
 *    "rep_name": "Jane Doe"
 *  }]
 *
 */
router.get('/sub-category/:id', businessController.getBySubCategory);


/**
 * @api {get} /businesses/:id Get Business
 * @apiVersion 1.0.0
 * @apiName Get
 * @apiGroup Business
 *
 * @apiDescription Get a business with the given id
 *
 * @apiSuccess {String} _id business id
 * @apiSuccess {String} name name of the business
 * @apiSuccess {String} category category id
 * @apiSuccess {String} sub_category sub_category id
 * @apiSuccess {String} country country of the business
 * @apiSuccess {String} email email of the business
 * @apiSuccess {String} phone phone of the business
 * @apiSuccess {String} rep_name name of the representative of the business
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Business",
 *    "category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: 'Education',
 *      ...
 *    },
 *    "sub_category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: "Kindergaten",
 *      ...
 *    },
 *    "country": "Algeria",
 *    "email": "business@email.com",
 *    "phone": "2017575746477",
 *    "rep_name": "Jane Doe"
 *  }
 */
router.get('/:id',  businessController.fetchOne);

/**
 * @api {put} /businesses/:id Update Business
 * @apiVersion 1.0.0
 * @apiName Update
 * @apiGroup Business
 *
 * @apiDescription Update a business with the given id
 *
 * @apiSuccess {String} _id business id
 * @apiSuccess {String} name name of the business
 * @apiSuccess {String} category category id
 * @apiSuccess {String} sub_category sub_category id
 * @apiSuccess {String} country country of the business
 * @apiSuccess {String} email email of the business
 * @apiSuccess {String} phone phone of the business
 * @apiSuccess {String} rep_name name of the representative of the business
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Business",
 *    "category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: 'Education',
 *      ...
 *    },
 *    "sub_category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: "Kindergaten",
 *      ...
 *    },
 *    "country": "Algeria",
 *    "email": "business@email.com",
 *    "phone": "2017575746477",
 *    "rep_name": "Jane Doe"
 *  }
 */
router.put('/:id', accessControl(['admin']), businessController.update);

/**
 * @api {delete} /businesses/:id Delete Business
 * @apiVersion 1.0.0
 * @apiName Delete
 * @apiGroup Business
 *
 * @apiDescription Delete a business with the given id
 *
 * @apiSuccess {String} _id business id
 * @apiSuccess {String} name name of the business
 * @apiSuccess {String} category category id
 * @apiSuccess {String} sub_category sub_category id
 * @apiSuccess {String} country country of the business
 * @apiSuccess {String} email email of the business
 * @apiSuccess {String} phone phone of the business
 * @apiSuccess {String} rep_name name of the representative of the business
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Business",
 *    "category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: 'Education',
 *      ...
 *    },
 *    "sub_category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: "Kindergaten",
 *      ...
 *    },
 *    "country": "Algeria",
 *    "email": "business@email.com",
 *    "phone": "2017575746477",
 *    "rep_name": "Jane Doe"
 *  }
 */
router.delete('/:id', accessControl('admin'), businessController.delete);


// Expose Business router
module.exports = router;
