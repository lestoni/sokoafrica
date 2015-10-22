// SubCategory Model Definiton.

/**
 * Load Module Dependencies.
 */
var mongoose  = require('mongoose');
var moment    = require('moment');
var paginator = require('mongoose-paginate');

var Schema = mongoose.Schema;

var SubCategorySchema = new Schema({
  name:           { type: String },
  category:       { type: Schema.Types.ObjectId, ref: 'Category' },
  date_created:   { type: Date },
  last_modified:  { type: Date }
});

// add mongoose-troop middleware to support pagination
SubCategorySchema.plugin(paginator);

/**
 * Pre save middleware.
 *
 * @desc  - Sets the date_created and last_modified
 *          attributes prior to save.
 *        - Hash tokens password.
 */
SubCategorySchema.pre('save', function preSaveMiddleware(next) {
  var token = this;

  // set date modifications
  var now = moment().toISOString();

  token.date_created = now;
  token.last_modified = now;

  next();

});

/**
 * SubCategory Attributes to expose
 */
SubCategorySchema.statics.whitelist = {
  _id: 1,
  date_created:   1,
  name: 1,
  category: 1
};


// Expose SubCategory model
module.exports = mongoose.model('SubCategory', SubCategorySchema);
