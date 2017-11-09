add-ender
----------------

Do you ever have this issue with your robots?

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Yesterday I displayed to insulated Today I must love you. No blockers.</p>&mdash; standup? (@gutenScrum) <a href="https://twitter.com/gutenScrum/status/634771963391680514">August 21, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

# IKNORITE?

if only it had inserted a period there between the sentences that would have been a hot toot!

### NOT ANYMORE

add-ender will check the last character or your string and see if it is `.` or `?` or `!` and if it is not it will append a `.` to that string and return it unto you.


[![NPM](https://nodei.co/npm/add-ender.png)](https://nodei.co/npm/add-ender/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Build Status](https://secure.travis-ci.org/coleww/add-ender.png)](http://travis-ci.org/coleww/add-ender)

### EXAMPLE

```
var addEnder = require('add-ender')
var str = 'wow it really works'

addEnder(str, '!')
// => 'wow it really works!'

// lets get more excited about this!
addEnder(str, '!').toUpperCase()
// => 'WOW IT REALLY WORKS!'
```

### API

`addEnder(str, ender || '.', reggie || /(\.|\?|\!)$/)`

- str: any string. probably the output of some sort of api call or text generator or twitter stream or idk. you know it is a "sentence" but it is possible it does not end with proper punctuation.

- ender: any string. probably something like `.` or `?` or `!`. 

- reggie: any reginald or regex. defaults to the `.` or `?` or `!` thing. 

