const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, '..', 'client/public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res, next) => {
  res.sendFile('index.html');
});

// routes
const loginRoutes = require('./routes/userRoutes.js');
app.use('/users', loginRoutes);

const purchaseRoutes = require('./routes/purchaseRoutes.js');
app.use('/purchases', purchaseRoutes);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(404).json({ error: err });
});
module.exports = app;
