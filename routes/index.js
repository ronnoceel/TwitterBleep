var express = require('express');
var router = express.Router();
var streaming = require('../libs/streaming.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Twitter Bleep' });
});

/* GET counts and locations objects*/

router.get('/all', function(req, res, next){
    counts = [fuckTweets, shitTweets, assTweets, damnTweets];
    res.send(JSON.stringify(counts));
    fuckTweets = [];
    shitTweets = [];
    assTweets = [];
    damnTweets = [];
});
router.get('/fuck', function(req, res, next) {
    res.send(JSON.stringify(fuckTweets));
    fuckTweets = [];
});
router.get('/shit', function(req, res, next) {
    res.send(JSON.stringify(shitTweets));
    shitTweets = [];
});
router.get('/ass', function(req, res, next) {
    res.send(JSON.stringify(assTweets));
    assTweets = [];
});
router.get('/damn', function(req, res, next) {
    res.send(JSON.stringify(damnTweets));
    damnTweets = [];
});

module.exports = router;
