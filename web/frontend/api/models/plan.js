// Plan Model Definiton.

/**
 * Load Module Dependencies.
 */
var mongoose  = require('mongoose');
var moment    = require('moment');
var paginator = require('mongoose-paginate');

var Schema = mongoose.Schema;

var PlanSchema = new Schema({
  name:           { type: String },
  pricing:        { type: String },
  date_created:   { type: Date },
  last_modified:  { type: Date }
});

// add mongoose-troop middleware to support pagination
PlanSchema.plugin(paginator);

/**
 * Pre save middleware.
 *
 * @desc  - Sets the date_created and last_modified
 *          attributes prior to save.
 *        - Hash tokens password.
 */
PlanSchema.pre('save', function preSaveMiddleware(next) {
  var token = this;

  // set date modifications
  var now = moment().toISOString();

  token.date_created = now;
  token.last_modified = now;

  next();

});

/**
 * Plan Attributes to expose
 */
PlanSchema.statics.whitelist = {
  _id: 1,
  date_created: 1,
  name: 1,
  pricing: 1
};


// Expose Plan model
module.exports = mongoose.model('Plan', PlanSchema);
