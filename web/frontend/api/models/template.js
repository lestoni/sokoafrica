// Template Model Definiton.

/**
 * Load Module Dependencies.
 */
var mongoose  = require('mongoose');
var moment    = require('moment');
var paginator = require('mongoose-paginate');

var Schema = mongoose.Schema;

var TemplateSchema = new Schema({
  number:         { type: Number },
  name:           { type: String },
  category:       { type: Schema.Types.ObjectId, ref: 'Category' },
  sub_category:   { type: Schema.Types.ObjectId, ref: 'SubCategory' },
  picture_url:    { type: String },
  date_created:   { type: Date },
  last_modified:  { type: Date }
});

// add mongoose-troop middleware to support pagination
TemplateSchema.plugin(paginator);

/**
 * Pre save middleware.
 *
 * @desc  - Sets the date_created and last_modified
 *          attributes prior to save.
 *        - Hash tokens password.
 */
TemplateSchema.pre('save', function preSaveMiddleware(next) {
  var token = this;

  // set date modifications
  var now = moment().toISOString();

  token.date_created = now;
  token.last_modified = now;

  next();

});

/**
 * Template Attributes to expose
 */
TemplateSchema.statics.whitelist = {
  _id: 1,
  date_created:   1,
  number: 1,
  name: 1,
  sub_category: 1,
  category: 1,
  picture_url: 1
};


// Expose Template model
module.exports = mongoose.model('Template', TemplateSchema);
