var fs = require('fs');
var wallpaper = require('wallpaper');
var moment = require('moment');
var download = require('download');
var wallpaperFile = './sun/f_211_193_171pfss.jpg'; // './sun/f_211_193_171.jpg';

module.exports = {
  process: function() {
    fs.stat(wallpaperFile, function (err, data) {
      var previousLMM = moment().subtract({minutes: 15});
      var folderLMM = moment(data.mtime.toISOString());
      var res = moment(folderLMM).isBefore(previousLMM);
      if (res) {
        // This image has been updated from the image at http://sdo.gsfc.nasa.gov/assets/img/latest/f_211_193_171.jpg due to NASA not updating this composite in over a month
        download('https://sdo.gsfc.nasa.gov/assets/img/latest/f_211_193_171pfss.jpg','./sun/')
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