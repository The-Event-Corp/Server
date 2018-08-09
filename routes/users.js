var express = require("express");
var router = express.Router();

const { eventAll, eventSearch } = require("../controller/event");

const { loginUser, registerUser, getDataUsers } = require('../controllers/users')

/* GET users listing. */
router.get("/", eventAll);
router.get("/search", eventSearch);



/* GET users listing. */
router.get('/getData', getDataUsers)
router.post('/register', registerUser)
router.post('/login', loginUser)

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
