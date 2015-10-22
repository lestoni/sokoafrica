// Category Model Definiton.

/**
 * Load Module Dependencies.
 */
var mongoose  = require('mongoose');
var moment    = require('moment');
var paginator = require('mongoose-paginate');

var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name:           { type: String },
  sub_categories: [{ type: Schema.Types.ObjectId, ref: 'SubCategory' }],
  date_created:   { type: Date },
  last_modified:  { type: Date }
});

// add mongoose-troop middleware to support pagination
CategorySchema.plugin(paginator);

/**
 * Pre save middleware.
 *
 * @desc  - Sets the date_created and last_modified
 *          attributes prior to save.
 *        - Hash tokens password.
 */
CategorySchema.pre('save', function preSaveMiddleware(next) {
  var token = this;

  // set date modifications
  var now = moment().toISOString();

  token.date_created = now;
  token.last_modified = now;

  next();

});

/**
 * Category Attributes to expose
 */
CategorySchema.statics.whitelist = {
  _id: 1,
  date_created:   1,
  name: 1,
  sub_categories: 1
};


// Expose Category model
module.exports = mongoose.model('Category', CategorySchema);
