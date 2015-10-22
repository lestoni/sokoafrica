/**
 * Template router.
 *
 * @summary
 *  template.create()
 *  template.update()
 *  template.delete()
 *  template.fetchOne()
 *  template.fetchAll()
 */

/**
 * Load Module Dependencies.
 */
var express  = require('express');
var debug    = require('debug')('api:template-router');

var templateController  = require('../controllers/template');
var accessControl       = require('../controllers/auth').accessControl;

var router  = express.Router();

/**
 * @api {get} /templates/paginate?page=<RESULTS_PAGE>&per_page=<RESULTS_PER_PAGE> Get templates collection
 * @apiVersion 1.0.0
 * @apiName FetchAllByPagination
 * @apiGroup Template
 *
 * @apiDescription Get a collection of templates. The endpoint has pagination
 * out of the box. Use these params to query with pagination: `page=<RESULTS_PAGE`
 * and `per_page=<RESULTS_PER_PAGE>`.
 *
 * @apiSuccess {String} _id template id
 * @apiSuccess {String} name name of the template
 * @apiSuccess {String} category category id
 * @apiSuccess {String} sub_category sub_category id
 * @apiSuccess {String} picture_url picture url
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "total_pages": 1,
 *    "total_docs_count": 0,
 *    "docs": [{
 *      "_id" : "556e1174a8952c9521286a60"
 *      "name": "Template",
 *      "picture_url": "api.soko.business/templates/template_image.png",
 *      "category" : {
 *        "_id" : "556e1174a8952c9521286a60"
 *        name: 'Education',
 *        ...
 *      },
 *      "sub_category" : {
 *        "_id" : "556e1174a8952c9521286a60"
 *        name: "Kindergaten",
 *        ...
 *      }
 *    }]
 *  }
 *
 */
router.get('/paginate', templateController.fetchAllByPagination);

/**
 * @api {get} /templates/all Get templates collection
 * @apiVersion 1.0.0
 * @apiName FetchAll
 * @apiGroup Template
 *
 * @apiDescription Get a collection of templates.
 *
 * @apiSuccess {String} _id template id
 * @apiSuccess {String} name name of the template
 * @apiSuccess {String} category category id
 * @apiSuccess {String} sub_category sub_category id
 * @apiSuccess {String} picture_url picture url
 *
 * @apiSuccessExample Response Example:
 *  [{
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Template",
 *    "picture_url": "api.soko.business/templates/template_image.png",
 *    "category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: 'Education',
 *      ...
 *    },
 *    "sub_category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: "Kindergaten",
 *      ...
 *    }
 *  }]
 *
 */
router.get('/all', templateController.fetchAll);


/**
 * @api {post} /templates/create Create a template
 * @apiVersion 1.0.0
 * @apiName Create
 * @apiGroup Template
 *
 * @apiDescription Create a new template. Note -> __this should be submitted as `multipart/form-data`__
 *
 * @apiParam {String} name name of the template
 * @apiParam {String} category category id
 * @apiParam {String} sub_category sub_category id
 *
 * @apiParamExample Request Example:
 *  {
 *    "name": "Template",
 *    "category" : "556e1174a8952c9521286a60",
 *    "sub_category" : "556e1174a8952c9521286a60",
 *    "picture_url": "<PICTURE/IMAGE/PHOTO AS PART OF THE MULTIPART>"
 *    // this should be submitted as multipart/form-data not application/json
 *  }
 *
 * @apiSuccess {String} _id template id
 * @apiSuccess {String} name name of the template
 * @apiSuccess {String} category category id
 * @apiSuccess {String} sub_category sub_category id
 * @apiSuccess {String} picture_url picture url
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Template",
 *    "picture_url": "api.soko.business/templates/template_image.png",
 *    "category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: 'Education',
 *      ...
 *    },
 *    "sub_category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: "Kindergaten",
 *      ...
 *    }
 *  }
 *
 */
router.post('/create', accessControl(['admin']), templateController.create);

/**
 * @api {get} /templates/category/:id Get templates collection by category
 * @apiVersion 1.0.0
 * @apiName FetchAllByCategory
 * @apiGroup Template
 *
 * @apiDescription Get a collection of templates by category
 *
 * @apiSuccess {String} _id template id
 * @apiSuccess {String} name name of the template
 * @apiSuccess {String} category category id
 * @apiSuccess {String} sub_category sub_category id
 * @apiSuccess {String} picture_url picture url
 *
 * @apiSuccessExample Response Example:
 *  [{
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Template",
 *    "picture_url": "api.soko.business/templates/template_image.png",
 *    "category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: 'Education',
 *      ...
 *    },
 *    "sub_category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: "Kindergaten",
 *      ...
 *    }
 *  }]
 *
 */
router.get('/category/:id', templateController.getByCategory);

/**
 * @api {get} /templates/sub-category/:id Get templates collection by SubCategory
 * @apiVersion 1.0.0
 * @apiName FetchAllBySubCategory
 * @apiGroup Template
 *
 * @apiDescription Get a collection of templates by Category
 *
 * @apiSuccess {String} _id template id
 * @apiSuccess {String} name name of the template
 * @apiSuccess {String} category category id
 * @apiSuccess {String} sub_category sub_category id
 * @apiSuccess {String} picture_url picture url
 *
 * @apiSuccessExample Response Example:
 *  [{
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Template",
 *    "picture_url": "api.soko.business/templates/template_image.png",
 *    "category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: 'Education',
 *      ...
 *    },
 *    "sub_category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: "Kindergaten",
 *      ...
 *    }
 *  }]
 *
 */
router.get('/sub-category/:id', templateController.getBySubCategory);


/**
 * @api {get} /templates/:id Get Template
 * @apiVersion 1.0.0
 * @apiName Get
 * @apiGroup Template
 *
 * @apiDescription Get a template with the given id
 *
 * @apiSuccess {String} _id template id
 * @apiSuccess {String} name name of the template
 * @apiSuccess {String} category category id
 * @apiSuccess {String} sub_category sub_category id
 * @apiSuccess {String} picture_url picture url
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Template",
 *    "picture_url": "api.soko.business/templates/template_image.png",
 *    "category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: 'Education',
 *      ...
 *    },
 *    "sub_category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: "Kindergaten",
 *      ...
 *    }
 *  }
 */
router.get('/:id',  templateController.fetchOne);

/**
 * @api {put} /templates/:id Update Template
 * @apiVersion 1.0.0
 * @apiName Update
 * @apiGroup Template
 *
 * @apiDescription Update a template with the given id
 *
 * @apiSuccess {String} _id template id
 * @apiSuccess {String} name name of the template
 * @apiSuccess {String} category category id
 * @apiSuccess {String} sub_category sub_category id
 * @apiSuccess {String} picture_url picture url
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Template",
 *    "picture_url": "api.soko.business/templates/template_image.png",
 *    "category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: 'Education',
 *      ...
 *    },
 *    "sub_category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: "Kindergaten",
 *      ...
 *    }
 *  }
 */
router.put('/:id', accessControl(['admin']), templateController.update);

/**
 * @api {delete} /templates/:id Delete Template
 * @apiVersion 1.0.0
 * @apiName Delete
 * @apiGroup Template
 *
 * @apiDescription Delete a template with the given id
 *
 * @apiSuccess {String} _id template id
 * @apiSuccess {String} name name of the template
 * @apiSuccess {String} category category id
 * @apiSuccess {String} sub_category sub_category id
 * @apiSuccess {String} picture_url picture url
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60"
 *    "name": "Template",
 *    "picture_url": "api.soko.business/templates/template_image.png",
 *    "category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: 'Education',
 *      ...
 *    },
 *    "sub_category" : {
 *      "_id" : "556e1174a8952c9521286a60"
 *      name: "Kindergaten",
 *      ...
 *    }
 *  }
 */
router.delete('/:id', accessControl('admin'), templateController.delete);


// Expose Template router
module.exports = router;
