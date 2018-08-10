var express = require("express");
var router = express.Router();

const { meetupSearch, getMeetups } = require('../controllers/meetup')

router.get('/search', meetupSearch)
router.get('/', getMeetups)


module.exports = router