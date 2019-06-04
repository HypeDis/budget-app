const Sequelize = require('sequelize');
const db = require('./db.js');

const Purchase = db.define('purchase', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cost: {
    type: Sequelize.DECIMAL(9, 2),
    allowNull: false,
  },
});

module.exports = Purchase;
