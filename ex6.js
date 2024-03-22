// -> https://www.npmjs.com/package/qrcode
// Write a nodejs programe to qr code which has data link
// ->https://github.com/parampatel07/frontend27/

var QRCode = require('qrcode')

QRCode.toString('https://github.com/parampatel07/frontend27/',{type:'terminal'}, function (err, url) {
  console.log(url)
});
