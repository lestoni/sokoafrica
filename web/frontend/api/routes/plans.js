/**
 * Plan router.
 *
 * @summary
 *  plan.create()
 *  plan.update() *  plan.delete()
 *  plan.fetchOne()
 *  plan.fetchAll()
 */

/**
 * Load Module Dependencies.
 */
var express  = require('express');
var debug    = require('debug')('api:plan-router');

var planController      = require('../controllers/plan');
var accessControl       = require('../controllers/auth').accessControl;

var router  = express.Router();

/**
 * @api {get} /plans/paginate?page=<RESULTS_PAGE>&per_page=<RESULTS_PER_PAGE> Get plans collection
 * @apiVersion 1.0.0
 * @apiName FetchAllByPagination
 * @apiGroup Plan
 *
 * @apiDescription Get a collection of plans. The endpoint has pagination
 * out of the box. Use these params to query with pagination: `page=<RESULTS_PAGE`
 * and `per_page=<RESULTS_PER_PAGE>`.
 *
 * @apiSuccess {String} _id plan id
 * @apiSuccess {String} name name of the plan
 * @apiSuccess {String} pricing plan pricing
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "total_pages": 1,
 *    "total_docs_count": 0,
 *    "docs": [{
 *      "_id" : "556e1174a8952c9521286a60"
 *      "name": "Pro",
 *      "Pricing": "$70"
 *    }]
 *  }
 *
 */
router.get('/paginate', planController.fetchAllByPagination);

/**
 * @api {get} /plans/all Get plans collection
 * @apiVersion 1.0.0
 * @apiName FetchAll
 * @apiGroup Plan
 *
 * @apiDescription Get a collection of plans.
 *
 * @apiSuccess {String} _id plan id
 * @apiSuccess {String} name name of the plan
 * @apiSuccess {String} pricing plan pricing
 *
 * @apiSuccessExample Response Example:
 *  [{
 *      "_id" : "556e1174a8952c9521286a60"
 *      "name": "Pro",
 *      "Pricing": "$70"
 *  }]
 *
 */
router.get('/all', planController.fetchAll);


/**
 * @api {post} /plans/create Create a plan
 * @apiVersion 1.0.0
 * @apiName Create
 * @apiGroup Plan
 *
 * @apiDescription Create a new plan.
 *
 * @apiParam {String} name name of the plan
 * @apiParam {String} pricing plan pricing
 *
 * @apiParamExample Request Example:
 *  {
 *    "name": "Pro",
 *    "Pricing": "$70"
 *  }
 *
 * @apiSuccess {String} _id plan id
 * @apiSuccess {String} name name of the plan
 * @apiSuccess {String} pricing plan pricing
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Pro",
 *    "Pricing": "$70"
 *  }
 *
 */
router.post('/create', accessControl(['admin']), planController.create);

/**
 * @api {get} /plans/:id Get Plan
 * @apiVersion 1.0.0
 * @apiName Get
 * @apiGroup Plan
 *
 * @apiDescription Get a plan with the given id
 *
 * @apiSuccess {String} _id plan id
 * @apiSuccess {String} name name of the plan
 * @apiSuccess {String} pricing plan pricing
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Pro",
 *    "Pricing": "$70"
 *  }
 */
router.get('/:id',  planController.fetchOne);

/**
 * @api {put} /plans/:id Update Plan
 * @apiVersion 1.0.0
 * @apiName Update
 * @apiGroup Plan
 *
 * @apiDescription Update a plan with the given id
 *
 * @apiSuccess {String} _id plan id
 * @apiSuccess {String} name name of the plan
 * @apiSuccess {String} pricing plan pricing
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Pro",
 *    "Pricing": "$70"
 *  }
 */
router.put('/:id', accessControl(['admin']), planController.update);

/**
 * @api {delete} /plans/:id Delete Plan
 * @apiVersion 1.0.0
 * @apiName Delete
 * @apiGroup Plan
 *
 * @apiDescription Delete a plan with the given id
 *
 * @apiSuccess {String} _id plan id
 * @apiSuccess {String} name name of the plan
 * @apiSuccess {String} pricing plan pricing
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Pro",
 *    "Pricing": "$70"
 *  }
 *
 */
router.delete('/:id', accessControl('admin'), planController.delete);

// Expose Plan router
module.exports = router;
