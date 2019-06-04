const Sequelize = require('sequelize');

const db = require('./db.js');

const hashPw = require('./../utils/hashPw.js');

const User = db.define('user', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [6, 32],
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
});

User.beforeCreate((user, opts) => {
  console.log(user.password);
  const hashedPw = hashPw(user.password);
  user.password = hashedPw;
  console.log(user.password);
});

module.exports = User;
