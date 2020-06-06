const Gamedig = require('gamedig');
const moment = require('moment');
const CronJob = require('cron').CronJob;
require("file-logger")(true);

ragna3 = {
  type: 'arkse',
  host: '176.57.171.208', // ragna 3
  port: '28415'
};



var job = new CronJob('* * * * * *', function() {
  Gamedig.query(ragna3).then((state) => {
      console.log(moment().format(), 'Ping:', state.ping);
  }).catch((error) => {
      console.log("Server is offline");
      console.log(error);
  });
}, null, true, 'Europe/Vienna');
job.start();