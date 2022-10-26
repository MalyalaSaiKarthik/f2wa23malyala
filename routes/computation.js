var express = require('express');
var router = express.Router();

var rand = Math.random();
var rand1 = Math.random();
var mathatan2 = Math.atan2(rand,rand1);
var mathatanh = Math.atanh(rand);
var mathcbrt = Math.cbrt(rand);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`Math.atan2() applied to ${rand} and ${rand1} is ${mathatan2}`
            + "<br>" + `Math.atanh() applied to ${rand} is ${mathatanh}`
            + "<br>" + `Math.cbrt()  applied to ${rand} is ${mathcbrt}`);
});

module.exports = router;
