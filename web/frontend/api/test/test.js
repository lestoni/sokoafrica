var mongoUpdate = require('../lib/mongo-update');

var data = {
  $pull: { categories: 'id' }
};
console.log(mongoUpdate(data));
