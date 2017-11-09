const express = require("express");
const app = express();

app.get('/', (req, res) => res.send('Hello World!'))


 var Twit = require('twit');

var T = new Twit({
  consumer_key:         'Zh89x9BRtSBeBwYrvHtsNxdEv',
  consumer_secret:      'cmCfoDrOp67u7a8bsY0sB6fk0Aayhql41ZrVNFBEtqgK4FYEHx',
  access_token:         '42051552-prICERMck8rcpPKYG38fcSHggHuQ2vijI8Ro4mmDf',
  access_token_secret:  'mQmlRdOAirzXiBG2SHf8hwUSA25t2KHBVUN58K1Klongm',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

//
//  filter the twitter public stream by the word 'mango'.
//
var stream = T.stream('user', { track: 'trump', user_name: 'PieJieD' });

stream.on('message', function (msg) {
    //console.log(msg.text);
});

var port = process.env.PORT || 8888;
app.listen(port, function() {
  console.log("Listening on " + port);
    
});
//
// Twit has promise support; you can use the callback API,
// promise API, or both at the same time.
//
/*
T.get('account/verify_credentials', { skip_status: true })
  .catch(function (err) {
    console.log('caught error', err.stack)
  })
  .then(function (result) {
    // `result` is an Object with keys "data" and "resp".
    // `data` and `resp` are the same objects as the ones passed
    // to the callback.
    // See https://github.com/ttezel/twit#tgetpath-params-callback
    // for details.

    console.log('data', result.data);
  })

*/





