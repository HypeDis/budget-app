const db = require('./db.js');
const User = require('./User.js');
const Purchase = require('./Purchase.js');

Purchase.belongsTo(User);
User.hasMany(Purchase);

module.exports = { db, User, Purchase };
