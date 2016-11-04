var express = require('express');
var router = express.Router();
var request = require('request');


var userlist = '';
request('https://randomuser.me/api/?results=5&nat=US', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    userlist = JSON.parse(body);
    console.log(userlist);
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {


  request('https://randomuser.me/api/?results=50&nat=US', function (error, response, body) {
    if (!error && response.statusCode == 200) {

      var userlist = JSON.parse(body);
      res.render('index', { title: 'Match Maker Pro'});
    }
  });

});


router.get('/api/userlist', function(req, res, next) {

  res.json(userlist);

});


router.get('/api/finder', function(req, res, next) {

  var randuser = userlist[Math.floor(Math.random() * userlist.length)];

  res.json(JSON.stringify(randuser));
});

module.exports = router;
