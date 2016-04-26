//var twitter = require('twitter-text');
var GeoCoordinate = require('geocoordinate').GeoCoordinate;
var BoundingBox = require('geocoordinate').BoundingBox;
var TwitPackage = require('twit');

var config = {
    consumer_key:         '7AND1RLIQCMWaqJJ7zn2fRGIB'
  , consumer_secret:      'QQiTnG6kPdTWbNLAmhXvr4lrufrAS8dFsWbXVdNGuzmA9wdNu6'
  , access_token:         '304660726-kL5wWCQSvda6jZzlBs8f2bb0ml7kFHbmVHy8Qf6v',
    access_token_secret:  '3ytcl1cSqhPrQRF8XBEKXIq9psBg15h3RaaTqpePbRZ0w',
};

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
    /*
    var coordinates = tweet.coordinates;
    var location = new GeoCoordinate(coordinates[1],coordinates[0]);

    var usBox = new BoundingBox();
    usBox.pushCoordinate(-124.848974, 24.396308);
    usBox.pushCoordinate(-66.885444, 49.384358);

    var hawaiiBox = new BoundingBox();
    hawaiiBox.pushCoordinate(20.268459, -154.806625);
    hawaiiBox.pushCoordinate(18.91172, -156.061661);

    var alaskaBox = new BoundingBox();
    alaskaBox.pushCoordinate(20.268459, -154.806625);
    alaskaBox.pushCoordinate(18.91172, -156.061661);

    if(usBox.contains(location) || hawaiiBox.contains(location) || alaskaBox.contains(location)){
    */

    if(tweet.text.includes("fuck")){
        fuckTweets.push(getStateCode(tweet.user.location));
        console.log("added fuck tweet");
    }
    if(tweet.text.includes("shit")){
        shitTweets.push(getStateCode(tweet.user.location));
        console.log("added shit tweet");
    }
    if(tweet.text.includes("damn")){
        damnTweets.push(getStateCode(tweet.user.location));
        console.log("added damn tweet");
    }
    if(tweet.text.includes("ass")){
        assholeTweets.push(getStateCode(tweet.user.location));
        console.log("added ass tweet");
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


    var regex = /[a-zA-Z]+,\s([A-Z][A-Z])/

    var code = regex.exec(place_name);

    return code;

    /*var location = new GeoCoordinate(coordinates[1],coordinates[0]);

    var long = stateCoords[0].longitude;
    var lat = stateCoords[0].latitude;
    var state = new GeoCoordinate(lat, long);

    var minDist = location.distanceTo(state);
    var code = stateCoords[0].state;

    for (i = 1; i < 50 ; i++){
        long = stateCoords[i].longitude;
        lat = stateCoords[i].latitude;
        state = new GeoCoordinate(lat, long);

        var newDist = location.distanceTo(state);
        if (newDist < minDist){
            minDist = newDist;
            code = stateCoords[i].state;
        }
    }*/
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
