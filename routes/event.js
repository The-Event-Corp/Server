var express = require("express");
var router = express.Router();

const { eventAll, eventSearch, eventAllcategories, eventByCategory } = require("../controllers/event");

router.get("/", eventAll);
router.get("/search", eventSearch); //req query name
router.get('/category', eventAllcategories)
router.get('/category/:id', eventByCategory)

module.exports = router;
