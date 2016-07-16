var wallpaper = require('wallpaper');
var download = require('download');

module.exports = {
	process: function() {
		download('http://sdo.gsfc.nasa.gov/assets/img/latest/f_211_193_171.jpg','./sun/')
	    	.then(function (err, files) {
	        	wallpaper.set('./sun/f_211_193_171.jpg');
	    	});
	}
};