const express = require("express");
const app = express();
const test = express();
const end = express();
const Twit = require('twit');

const Markov = require('markov-strings');

const data = [];

var tweet = '';
var fakeText;

var T = new Twit({
    consumer_key: 'Zh89x9BRtSBeBwYrvHtsNxdEv',
    consumer_secret: 'cmCfoDrOp67u7a8bsY0sB6fk0Aayhql41ZrVNFBEtqgK4FYEHx',
    access_token: '42051552-prICERMck8rcpPKYG38fcSHggHuQ2vijI8Ro4mmDf',
    access_token_secret: 'mQmlRdOAirzXiBG2SHf8hwUSA25t2KHBVUN58K1Klongm',
    timeout_ms: 60 * 1000,
});

var stream = T.stream('statuses/filter', {
    language: 'en',
    track: '#trump'
});

stream.on('message', function (msg) {
    data.push(msg.text);
    tweet = msg.text;
    //var Text = require('markov-chains-text').default;
    //fakeText = new Text(tweet);
    //console.log(fakeText)
    if(data.length >= 10){
        stream.stop();
    }
});
/*
var freestyle = require('freestyle');
//var fs = require('fs');

//var s = fs.createReadStream(tweet);

freestyle(tweet, function (r) {
    var A = r.couplet();
    var B = r.couplet();
    
    console.log([
        A[0], B[0], A[1], B[1], ''
    ].join('\n'));
});

*/


var twaddle = require('twaddle');
 
var bullshit = twaddle.generate('politics-us-trump-j-donald', {paragraphs: 5}) ;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
    
    res.send('<h1>Fake Tweets for Donald</h1><h2>' + tweet + '</h2><p>' + fakeText.rejoinedText + '</p><a href="">Refresh</a>');   
    
    
    
});


var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Listening on " + port);
});
