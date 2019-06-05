const express = require('express');

const router = express.Router();

const { User } = require('../../db/index.js');

const hashPw = require('../../utils/hashPw.js');

router.post('/login', (req, res, next) => {
  console.log('req body', req.body);
  const email = req.body.email;
  const password = req.body.password;
  const hashedPassword = hashPw(password);
  User.findOne({
    where: {
      email,
      password: hashedPassword,
    },
  })
    .then(user => {
      if (!user) {
        return res.status(400).send({ error: 'invalid login' });
      }
      res.status(200).json({ id: user.id, name: user.name });
    })
    .catch(next);
});

router.post('/register', (req, res, next) => {
  const newUser = req.body;
  User.create(newUser)
    .then(user => {
      console.log(user);
      res.status(200).json({ id: user.id, name: user.name });
    })
    .catch(next);
});

router.put('/update/:userid', (req, res, next) => {
  const userId = req.params.userid;
  const updateObj = {};
  const updateInfo = req.body;
  for (key in updateInfo) {
    if (updateInfo[key]) {
      updateObj[key] = updateInfo[key];
    }
  }
  console.log('updateObj', updateObj.name);
  User.update(updateObj, { where: { id: userId } })
    .then(user => {
      res.send(user);
    })
    .catch(next);
});

router.delete('/:userid', (req, res, next) => {
  const id = req.params.userid;
  User.destroy({
    where: {
      id,
    },
    individualHooks: true,
  })
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch(next);
});
module.exports = router;
