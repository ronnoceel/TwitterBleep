//var twitter = require('twitter-text');
var GeoCoordinate = require('geocoordinate').GeoCoordinate;
var BoundingBox = require('geocoordinate').BoundingBox;
var TwitPackage = require('twit');

var config = require('./twitterConfig.json'); // read the twitter keys from separate file

var T = new TwitPackage(config);     // Creating an instance of the Twit package
var filter_stream;

filter_stream = T.stream('statuses/filter', { track: 'fuck,shit,damn,ass'});
console.log("opened stream");

filter_stream.on('connect', function (request) {
  console.log("connect attempted");
})

filter_stream.on('connected', function (response) {
  console.log("connection successful");
})

filter_stream.on('tweet', function (tweet) {
    //console.log("tweet recieved");
    if(tweet.user.location == null){
        return;
    }

    var code = getStateCode(tweet.user.location);
    if(code != null){
        if(tweet.text.includes("fuck")){
            fuckTweets.push(code);
        }
        if(tweet.text.includes("shit")){
            shitTweets.push(code);
        }
        if(tweet.text.includes("damn")){
            damnTweets.push(code);
        }
        if(tweet.text.includes("ass")){
            assTweets.push(code);
        }
    }
});

/**
    Takes in the twitter provided tweet and returns an object with just the information
    relevant
*/
function minifyTweet(tweet){
    var miniTweet = {};
    miniTweet.text = tweet.text;

    miniTweet.stateCode = getStateCode(tweet.place);
    return miniTweet;
}

/*
    Takes in an array of coordinates [longitude, latitude] from a tweet and returns the
    state code who's average coordinates are closest to the tweet's coordinates.
*/
function getStateCode(place_name){
    var regex = /[a-zA-Z]+,\s([A-Z][A-Z])/;
    var code = regex.exec(place_name);
    if(code != null) { return code[1];}
    else { return null }
}



/* a function for removing unwanted elements from tweets. Likely will not be used
function cleanText(text){
    var usernames = twitter.extractMentions(text);
    usernames.forEach(function(user){
        re = new RegExp("@"+user, "g")
        text = text.replace(re, "")
    })
    var urls = twitter.extractUrls(text);
    urls.forEach(function(url){
        re = new RegExp(url, "g")
        text = text.replace(re, "")
    })
    var hashtags = twitter.extractHashtags(text);
    hashtags.forEach(function(hashtag){
        re = new RegExp("#"+hashtag, "g")
        text = text.replace(re, "")
    })
    text = text.replace(/\s\s+/g, ' ')
    return text.trim()
}
*/
