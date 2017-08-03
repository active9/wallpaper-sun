var fs = require('fs');
var wallpaper = require('wallpaper');
var moment = require('moment');
var download = require('download');
var wallpaperFile = './sun/f_211_193_171.jpg';

module.exports = {
  process: function() {
    fs.stat(wallpaperFile, function (err, data) {
      var previousLMM = moment().subtract({minutes: 15});
      var folderLMM = moment(data.mtime.toISOString());
      var res = moment(folderLMM).isBefore(previousLMM);
      if (res) {
        download('http://sdo.gsfc.nasa.gov/assets/img/latest/f_211_193_171.jpg','./sun/')
          .then(function (fileData) {
            if (!fileData) {
              console.log('File Download Error ::', fileData);
            }
            wallpaper.set(wallpaperFile);
          });
      }
    });
  }
};