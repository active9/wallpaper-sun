var CronJob = require('cron').CronJob;
var wallpaperSun = require('../index.js');
new CronJob('00 */15 * * * *', function() {
  wallpaperSun.process();
}, null, true, 'America/Los_Angeles');