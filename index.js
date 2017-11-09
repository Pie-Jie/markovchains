const express = require("express");
const app = express();
const Twit = require('twit');

const data = [];

var tweet;
var rap;

var T = new Twit({
    consumer_key: 'Zh89x9BRtSBeBwYrvHtsNxdEv',
    consumer_secret: 'cmCfoDrOp67u7a8bsY0sB6fk0Aayhql41ZrVNFBEtqgK4FYEHx',
    access_token: '42051552-prICERMck8rcpPKYG38fcSHggHuQ2vijI8Ro4mmDf',
    access_token_secret: 'mQmlRdOAirzXiBG2SHf8hwUSA25t2KHBVUN58K1Klongm',
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
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');

});

var freestyle = require('freestyle');

app.get('/gettrumprap', function (req, res) {
    
    freestyle(tweet, function (r) {
        var A = r.couplet();
        var B = r.couplet();

        rap = [A[0], B[0], A[1], B[1], ''].join('\n');
    });
    
   res.send('<blockquote>' + rap + '</blockquote>');
});

var port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log("Listening on " + port);
});