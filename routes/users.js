var express = require("express");
var router = express.Router();

const darksky = require('../controllers/darkSky')

const { loginUser, registerUser, getDataUsers } = require('../controllers/users')

/* GET users listing. */
router.get('/getData', getDataUsers)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/darksky',darksky.darkskyapi)


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;