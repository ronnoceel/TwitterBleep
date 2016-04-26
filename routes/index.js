var express = require('express');
var router = express.Router();
var streaming = require('../libs/streaming.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Twitter Bleep' });
});

/* GET counts and locations objects*/
router.get('/fuck', function(req, res, next) {
    var tweets = [];
    fuckTweets.forEach( function(entry) {
            //console.log("This tweet is:"+entry.text);
            var tweet = {author:entry.coordinates, text:entry.text};
            tweets.push(tweet);
    });
    fuckTweets = [];
    res.send(JSON.stringify(tweets));
});
router.get('/shit', function(req, res, next) {
    var tweets = [];
    shitTweets.forEach( function(entry) {
            //console.log("This tweet is:"+entry.text);
            var tweet = {author:entry.coordinates, text:entry.text};
            tweets.push(tweet);
    });
    shitTweets = [];
    res.send(JSON.stringify(tweets));
});
router.get('/asshole', function(req, res, next) {
    var tweets = [];
    assholeTweets.forEach( function(entry) {
            //console.log("This tweet is:"+entry.text);
            var tweet = {author:entry.coordinates, text:entry.text};
            tweets.push(tweet);
    });
    assholeTweets = [];
    res.send(JSON.stringify(tweets));
});
router.get('/damn', function(req, res, next) {
    var tweets = [];
    damnTweets.forEach( function(entry) {
            //console.log("This tweet is:"+entry.text);
            var tweet = {author:entry.coordinates, text:entry.text};
            tweets.push(tweet);
    });
    damnTweets = [];
    res.send(JSON.stringify(tweets));
});

module.exports = router;
