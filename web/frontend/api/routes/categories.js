/**
 * Category router.
 *
 * @summary
 *  category.create()
 *  category.update()
 *  category.delete()
 *  category.fetchOne()
 *  category.fetchAll()
 */

/**
 * Load Module Dependencies.
 */
var express  = require('express');
var debug    = require('debug')('api:category-router');

var categoryController  = require('../controllers/category');
var accessControl       = require('../controllers/auth').accessControl;

var router  = express.Router();

/**
 * @api {get} /categories/paginate?page=<RESULTS_PAGE>&per_page=<RESULTS_PER_PAGE> Get categories collection
 * @apiVersion 1.0.0
 * @apiName FetchAllByPagination
 * @apiGroup Category
 *
 * @apiDescription Get a collection of categories. The endpoint has pagination
 * out of the box. Use these params to query with pagination: `page=<RESULTS_PAGE`
 * and `per_page=<RESULTS_PER_PAGE>`.
 *
 * @apiSuccess {String} _id category id
 * @apiSuccess {String} name name of the category
 * @apiSuccess {Array}  sub_categories category sub categories
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "total_pages": 1,
 *    "total_docs_count": 0,
 *    "docs": [{
 *      "_id" : "556e1174a8952c9521286a60"
 *      "name": "Education",
 *      "sub_categories": []
 *    }]
 *  }
 *
 */
router.get('/paginate', categoryController.fetchAllByPagination);

/**
 * @api {get} /categories/all Get categories collection
 * @apiVersion 1.0.0
 * @apiName FetchAll
 * @apiGroup Category
 *
 * @apiDescription Get a collection of categories.
 *
 * @apiSuccess {String} _id category id
 * @apiSuccess {String} name name of the category
 * @apiSuccess {Array}  sub_categories category sub categories
 *
 * @apiSuccessExample Response Example:
 *
 *  [{
 *      "_id" : "556e1174a8952c9521286a60"
 *      "name": "Education",
 *      "sub_categories": []
 *  }]
 *
 */
router.get('/all', categoryController.fetchAll);


/**
 * @api {post} /categories/create Create a category
 * @apiVersion 1.0.0
 * @apiName Create
 * @apiGroup Category
 *
 * @apiDescription Create a new category.
 *
 * @apiParam {String} name name of the category
 *
 * @apiParamExample Request Example:
 *  {
 *    "name": "Education"
 *  }
 *
 * @apiSuccess {String} _id category id
 * @apiSuccess {String} name name of the category
 * @apiSuccess {Array}  sub_categories category sub categories
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Education",
 *    "sub_categories": []
 *  }
 *
 */
router.post('/create', accessControl(['admin']), categoryController.create);

/**
 * @api {get} /categories/:id Get Category
 * @apiVersion 1.0.0
 * @apiName Get
 * @apiGroup Category
 *
 * @apiDescription Get a category with the given id
 *
 * @apiSuccess {String} _id category id
 * @apiSuccess {String} name name of the category
 * @apiSuccess {Array}  sub_categories category sub categories
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Education",
 *    "sub_categories": []
 *  }
 */
router.get('/:id', accessControl(['admin']), categoryController.fetchOne);

/**
 * @api {put} /categories/:id Update Category
 * @apiVersion 1.0.0
 * @apiName Update
 * @apiGroup Category
 *
 * @apiDescription Update a category with the given id
 *
 * @apiSuccess {String} _id category id
 * @apiSuccess {String} name name of the category
 * @apiSuccess {Array}  sub_categories category sub categories
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Education",
 *    "sub_categories": []
 *  }
 */
router.put('/:id', accessControl(['admin']), categoryController.update);

/**
 * @api {delete} /categories/:id Delete Category
 * @apiVersion 1.0.0
 * @apiName Delete
 * @apiGroup Category
 *
 * @apiDescription Delete a category with the given id
 *
 * @apiSuccess {String} _id category id
 * @apiSuccess {String} name name of the category
 * @apiSuccess {Array}  sub_categories category sub categories
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Education",
 *    "sub_categories": []
 *  }
 *
 */
router.delete('/:id', accessControl('admin'), categoryController.delete);

// Expose Category router
module.exports = router;
