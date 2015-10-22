/**
 * SubCategory router.
 *
 * @summary
 *  subCategory.create()
 *  subCategory.update()
 *  subCategory.delete()
 *  subCategory.fetchOne()
 *  subCategory.fetchAll()
 */

/**
 * Load Module Dependencies.
 */
var express  = require('express');
var debug    = require('debug')('api:subCategory-router');

var subCategoryController      = require('../controllers/sub-category');
var accessControl       = require('../controllers/auth').accessControl;

var router  = express.Router();

/**
 * @api {get} /sub-categories/paginate?page=<RESULTS_PAGE>&per_page=<RESULTS_PER_PAGE> Get subCategories collection
 * @apiVersion 1.0.0
 * @apiName FetchAllByPagination
 * @apiGroup SubCategory
 *
 * @apiDescription Get a collection of subCategories. The endpoint has pagination
 * out of the box. Use these params to query with pagination: `page=<RESULTS_PAGE`
 * and `per_page=<RESULTS_PER_PAGE>`.
 *
 * @apiSuccess {String} _id subCategory id
 * @apiSuccess {String} name name of the subCategory
 * @apiSuccess {String} category category id
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "total_pages": 1,
 *    "total_docs_count": 0,
 *    "docs": [{
 *      "_id" : "556e1174a8952c9521286a60"
 *      "name": "Kindergaten",
 *      "category" : {
 *        "_id" : "556e1174a8952c9521286a60",
 *        "name": "Education",
 *        ...
 *    }]
 *  }
 *
 */
router.get('/paginate', subCategoryController.fetchAllByPagination);

/**
 * @api {get} /sub-categories/all Get subCategories collection
 * @apiVersion 1.0.0
 * @apiName FetchAll
 * @apiGroup SubCategory
 *
 * @apiDescription Get a collection of subCategories.
 *
 * @apiSuccess {String} _id subCategory id
 * @apiSuccess {String} name name of the subCategory
 * @apiSuccess {String} category category id
 *
 * @apiSuccessExample Response Example:
 *  [{
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Kindergaten",
 *    "category" : {
 *      "_id" : "556e1174a8952c9521286a60",
 *      "name": "Education",
 *      ...
 *    }
 *  }]
 */
router.get('/all', subCategoryController.fetchAll);

/**
 * @api {post} /sub-categories/create Create a subCategory
 * @apiVersion 1.0.0
 * @apiName Create
 * @apiGroup SubCategory
 *
 * @apiDescription Create a new subCategory.
 *
 * @apiParam {String} name name of the subCategory
 * @apiParam {String} category category id
 *
 * @apiParamExample Request Example:
 *  {
 *    "name": "Kindergaten",
 *    "category" : "556e1174a8952c9521286a60"
 *  }
 *
 * @apiSuccess {String} _id subCategory id
 * @apiSuccess {String} name name of the subCategory
 * @apiSuccess {String} category category id
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Kindergaten",
 *    "category" : {
 *      "_id" : "556e1174a8952c9521286a60",
 *      "name": "Education",
 *      ...
 *    }
 *  }
 *
 */
router.post('/create', accessControl(['admin']), subCategoryController.create);

/**
 * @api {get} /sub-categories/:id Get SubCategory
 * @apiVersion 1.0.0
 * @apiName Get
 * @apiGroup SubCategory
 *
 * @apiDescription Get a subCategory with the given id
 *
 * @apiSuccess {String} _id subCategory id
 * @apiSuccess {String} name name of the subCategory
 * @apiSuccess {String} category category id
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Kindergaten",
 *    "category" : {
 *      "_id" : "556e1174a8952c9521286a60",
 *      "name": "Education",
 *      ...
 *    }
 *  }
 */
router.get('/:id',  subCategoryController.fetchOne);

/**
 * @api {put} /sub-categories/:id Update SubCategory
 * @apiVersion 1.0.0
 * @apiName Update
 * @apiGroup SubCategory
 *
 * @apiDescription Update a subCategory with the given id
 *
 * @apiSuccess {String} _id subCategory id
 * @apiSuccess {String} name name of the subCategory
 * @apiSuccess {String} category category id
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Kindergaten",
 *    "category" : {
 *      "_id" : "556e1174a8952c9521286a60",
 *      "name": "Education",
 *      ...
 *    }
 *  }
 */
router.put('/:id', accessControl(['admin']), subCategoryController.update);


/**
 * @api {delete} /sub-categories/:id Delete SubCategory
 * @apiVersion 1.0.0
 * @apiName Delete
 * @apiGroup SubCategory
 *
 * @apiDescription Delete a subCategory with the given id
 *
 * @apiSuccess {String} _id subCategory id
 * @apiSuccess {String} name name of the subCategory
 * @apiSuccess {String} category category id
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Kindergaten",
 *    "category" : {
 *      "_id" : "556e1174a8952c9521286a60",
 *      "name": "Education",
 *      ...
 *    }
 *  }
 *
 */
router.delete('/:id', accessControl('admin'), subCategoryController.delete);

// Expose SubCategory router
module.exports = router;
