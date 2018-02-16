const express = require("express");
const app = express();
const Twit = require('twit');

const data = [];

var tweet;
var rap;

var T = new Twit({
    consumer_key: 'INSERT CONSUMER KEY HERE',
    consumer_secret: 'INSERT CONSUMER SECRET HERE',
    access_token: 'INSERT ACCESS TOKEN HERE',
    access_token_secret: 'INSERT ACCESS TOKEN SECRET HERE',
    timeout_ms: 60 * 1000,
});

var stream = T.stream('statuses/filter', {
    language: 'en',
    track: 'trump'
});

stream.on('message', function (msg) {
    data.push(msg.text);
    tweet = msg.text;

    if (data.length >= 10) {
        stream.stop();
    }
    freestyle(tweet, function (r) {
        var A = r.couplet();
        var B = r.couplet();

        rap = [A[0], B[0], A[1], B[1], ''].join('\n');
    });
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');

});

var freestyle = require('freestyle');

app.get('/gettrumprap', function (req, res) {
    
    
    
   res.send('<blockquote>' + rap + '</blockquote>');
});

var port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log("Listening on " + port);
});
