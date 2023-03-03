const  express = require('express');

const router = express.Router();

const controller = require('../Controller/user.controller')


router.get('/', controller.getUsers)

router.post('/post', controller.signupUsers)


module.exports = router;

