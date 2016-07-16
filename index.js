var wallpaper = require('wallpaper');
var download = require('download');

module.exports = {
	process: function() {
		new download({mode: '755'})
	    	.get('http://sdo.gsfc.nasa.gov/assets/img/latest/f_211_193_171.jpg')
	    	.dest('./sun/')
	    	.run(function (err, files) {
	        	wallpaper.set('./sun/f_211_193_171.jpg', function (err) {
		    		if (err) console.log("Error:",err);
				});
	    	});
	}
};