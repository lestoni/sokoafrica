// Access Layer for Category Data.
/**
 * Load Module Dependencies.
 */
var debug   = require('debug')('api:dal-category');
var moment  = require('moment');
var _       = require('lodash');

var Category      = require('../models/category');
var SubCategory   = require('../models/sub-category');
var mongoUpdate   = require('../lib/mongo-update');

var returnFields = Category.whitelist;
var population = [{
  path: 'sub_categories',
  select: SubCategory.whitelist
}];

/**
 * create a new category.
 *
 * @desc  creates a new category and saves them
 *        in the database
 *
 * @param {Object}  categoryData  Data for the category to create
 * @param {Function} cb       Callback for once saving is complete
 */
exports.create = function create(categoryData, cb) {
  debug('creating a new category');

  var searchQuery = { name: categoryData.name };

  // Make sure category does not exist
  Category.findOne(searchQuery, function categoryExists(err, isPresent) {
    if(err) {
      return cb(err);
    }

    if(isPresent) {
      exports.get({ _id: isPresent._id }, function (err, category) {
        if(err) {
          return cb(err);
        }

        cb(null, category);

      });

      return;
    }


    // Create category if is new.
    var categoryModel  = new Category(categoryData);

    categoryModel.save(function saveCategory(err, data) {
      if (err) {
        return cb(err);
      }


      exports.get({ _id: data._id }, function (err, category) {
        if(err) {
          return cb(err);
        }

        cb(null, category);

      });

    });

  });

};

/**
 * delete a category
 *
 * @desc  delete data of the category with the given
 *        id
 *
 * @param {Object}  query   Query Object
 * @param {Function} cb Callback for once delete is complete
 */
exports.delete = function deleteItem(query, cb) {
  debug('deleting category: ', query);

  Category
    .findOne(query, returnFields)
    .populate(population)
    .exec(function deleteCategory(err, category) {
      if (err) {
        return cb(err);
      }

      if(!category) {
        return cb(null, {});
      }

      category.remove(function(err) {
        if(err) {
          return cb(err);
        }

        cb(null, category);

      });

    });
};

/**
 * update a category
 *
 * @desc  update data of the category with the given
 *        id
 *
 * @param {Object} query Query object
 * @param {Object} updates  Update data
 * @param {Function} cb Callback for once update is complete
 */
exports.update = function update(query, updates,  cb) {
  debug('updating category: ', query);

  var now = moment().toISOString();
  var opts = {
    'new': true,
    select: returnFields
  };

  updates = mongoUpdate(updates);

  Category
    .findOneAndUpdate(query, updates, opts)
    .populate(population)
    .exec(function updateCategory(err, category) {
      if(err) {
        return cb(err);
      }

      cb(null, category || {});
    });
};

/**
 * get a category.
 *
 * @desc get a category with the given id from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.get = function get(query, cb) {
  debug('getting category ', query);

  Category
    .findOne(query, returnFields)
    .populate(population)
    .exec(function(err, category) {
      if(err) {
        return cb(err);
      }

      cb(null, category || {});
    });
};

/**
 * get a collection of categories
 *
 * @desc get a collection of categories from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.getCollection = function getCollection(query, qs, cb) {
  debug('fetching a collection of categories');

  Category
    .find(query, returnFields)
    .populate(population)
    .exec(function (err, categories) {
      if(err) {
        return cb(err);
      }

      cb(null, categories);
    });

};

/**
 * get a collection of categories using pagination
 *
 * @desc get a collection of categories from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.getCollectionByPagination = function getCollection(query, qs, cb) {
  debug('fetching a collection of categories');

  var opts = {
    columns:  returnFields,
    sortBy:   qs.sort || {},
    populate: population,
    page:     qs.page,
    limit:    qs.limit
  };


  Category.paginate(query, opts, function (err, docs, page, count) {
    if(err) {
      return cb(err);
    }


    var data = {
      total_pages: page,
      total_docs_count: count,
      docs: docs
    };

    cb(null, data);

  });

};
