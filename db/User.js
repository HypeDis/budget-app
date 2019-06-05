const Sequelize = require('sequelize');
const Purchase = require('./Purchase.js');

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
  const hashedPw = hashPw(user.password);
  user.password = hashedPw;
});

User.beforeDestroy((user, options) => {
  const userId = user.id;
  Purchase.destroy({ where: { userId } })
    .then(() => {
      console.log('destroyed users purchases');
    })
    .catch(e => console.error(e));
});
module.exports = User;
