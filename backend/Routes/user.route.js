const  express = require('express');

const router = express.Router();

const controller = require('../Controller/user.controller')





router.get('/', controller.getUsers)

router.post('/', controller.loginUsers)


module.exports = router;

