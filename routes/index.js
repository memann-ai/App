var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const data = {
    title: "Hello Express",
    content: "This is a sample text"
  }
  res.render('index', data);
});

module.exports = router;
