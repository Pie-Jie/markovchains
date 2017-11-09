module.exports = function (str, ender, reggie) {
  return str + (str.match(reggie || /(\.|\?|\!)$/) ? '' : (ender ? ender : '.'))
}
