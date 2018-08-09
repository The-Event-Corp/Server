var express = require("express");
var router = express.Router();
const { eventAll, eventSearch } = require("../controller/event");

/* GET users listing. */
router.get("/", eventAll);
router.get("/search", eventSearch);

module.exports = router;
