var https = require('https');
var fs = require('fs');
var wallpaper = require('wallpaper');
var moment = require('moment');
var wallpaperFile = './sun/latest_4096_211193171.jpg';

// For When NASA has Expired SSL Certificates (Which does happen like on 10/14/2017)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

module.exports = {
  process: function() {
    fs.stat(wallpaperFile, function (err, data) {
      if (data) {
        var previousLMM = moment().subtract({minutes: 15});
        var folderLMM = moment(data.mtime.toISOString());
        var res = moment(folderLMM).isBefore(previousLMM);
      }
      if (res || !data) {

        var file = fs.createWriteStream(wallpaperFile);
        var request = https.get('https://sdo.gsfc.nasa.gov/assets/img/latest/latest_4096_211193171.jpg', function(response) {
          if (!response) {
            console.log('File Download Error ::', response);
          }
          response.pipe(file);
          file.on('finish', function() {
            file.close(function() {
              wallpaper.set(wallpaperFile)
            });
          });
        });
      }
    });
  }
};