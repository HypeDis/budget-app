const app = require('./server.js');
const { db } = require('./../db/index.js');

const PORT = 3000;

db.sync()
  .then(() => {
    console.log('db synced');
    app.listen(PORT, () => {
      console.log('server is running');
    });
  })
  .catch(e => console.error(e));
