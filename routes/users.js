var express = require("express");
var router = express.Router();

const darksky = require('../controllers/darkSky')

const { signinFacebook, loginUser, registerUser, getDataUsers } = require('../controllers/users')

const {quotes} = require('../controllers/quotes')
/* GET users listing. */
router.post('/signin/facebook', signinFacebook)
router.get('/getData', getDataUsers)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/darksky',darksky.darkskyapi)
router.get('/quotes',quotes)



router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;