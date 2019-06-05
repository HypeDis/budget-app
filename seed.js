const { db, User, Purchase } = require('./db/index.js');

const createUser = (name, email, password) => {
  return User.create({ name, email, password });
};

const createPurchase = (name, cost) => {
  return Purchase.create({ name, cost });
};

db.sync({ force: true })
  .then(() => {
    return Promise.all([
      createUser('mark', 'mark@yahoo.com', '123456'),
      createUser('john', 'john@gmail.com', '123456'),
      createPurchase('groceries', 12.344),
      createPurchase('phone', 600.34),
      createPurchase('candy', 1.32),
    ]);
  })
  .then(([mark, john, groceries, phone, candy]) => {
    // console.log(groceries);
    console.log('synced');
    return Promise.all([
      groceries.setUser(mark),
      phone.setUser(mark),
      candy.setUser(john),
    ]);
  })
  .then(() => {
    db.close();
    console.log('connection closed');
  })
  .catch(e => console.error(e));
