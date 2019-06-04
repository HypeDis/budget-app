const express = require('express');
const router = express.Router();

const { User, Purchase } = require('./../../db/index.js');

router.get('/:userid', (req, res, next) => {
  const id = req.params.userid;
  Purchase.findAll({ where: { userId: id } })
    .then(purchases => {
      res.json(purchases);
    })
    .catch(e => console.error(e));
});

router.post('/');
module.exports = router;
