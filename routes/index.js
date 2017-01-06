var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:inputDate', function(req, res, next) {
  var date;
  var inputD = req.params.inputDate;
  if (!isNaN(inputD)) {
    date = moment.unix(inputD);
  }
  else {
    date = moment(inputD);
  }
  var dateString = date.toString();
  if (dateString === "Invalid date") {
    dateString = null;
  }
  res.json({"unix": date.unix(), "natural": dateString});
});

module.exports = router;
