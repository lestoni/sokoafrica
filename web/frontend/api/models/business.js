// Business Model Definiton.

/**
 * Load Module Dependencies.
 */
var mongoose  = require('mongoose');
var moment    = require('moment');
var paginator = require('mongoose-paginate');

var Schema = mongoose.Schema;

var BusinessSchema = new Schema({
  name:           { type: String },
  category:       { type: Schema.Types.ObjectId, ref: 'Category' },
  sub_category:   { type: Schema.Types.ObjectId, ref: 'SubCategory' },
  country:        { type: String },
  email:          { type: String },
  phone:          { type: String },
  rep_name:       { type: String },
  date_created:   { type: Date },
  last_modified:  { type: Date }
});

// add mongoose-troop middleware to support pagination
BusinessSchema.plugin(paginator);

/**
 * Pre save middleware.
 *
 * @desc  - Sets the date_created and last_modified
 *          attributes prior to save.
 *        - Hash tokens password.
 */
BusinessSchema.pre('save', function preSaveMiddleware(next) {
  var token = this;

  // set date modifications
  var now = moment().toISOString();

  token.date_created = now;
  token.last_modified = now;

  next();

});

/**
 * Business Attributes to expose
 */
BusinessSchema.statics.whitelist = {
  _id: 1,
  date_created:   1,
  name: 1,
  email: 1,
  rep_name: 1,
  category: 1,
  sub_category: 1,
  country: 1,
  phone: 1
};


// Expose Business model
module.exports = mongoose.model('Business', BusinessSchema);
