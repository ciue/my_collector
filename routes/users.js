const express = require('express');

const router = express.Router();
const UserServices = require('../services/user_service');
const HTTPReqParamError = require('../error/http_request_param_error');


router.get('/', (req, res, next) => {
  (async () => {
    const users = await UserServices.getAllUsers();
    res.locals.users = users;
  })()
    .then(() => {
      res.render('users');
    })
    .catch((e) => {
      next(e);
    });
});

router.post('/', (req, res) => {
  const { name, age } = req.body;
  const u = UserServices.addUser(name, age);
  res.json(u);
});

router.get('/:userId', (req, res) => {
  (async () => {
    const { userId } = req.params;
    if (userId.length < 5) throw new HTTPReqParamError('userId', '用户ID不能为空', 'UserId cant be empty');
    const user = await UserServices.getOneById(userId);
    res.location.user = user;
    res.json(user);
  }
  )()
    .catch((e) => {
      res.json(e);
    });
});

router.post('/:userId/sub', (req, res) => {
  const sub = UserServices.createSub(Number(req.params.userId), req.body.url);
  res.json(sub);
});

module.exports = router;
