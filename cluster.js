var cluster = require('cluster');

if (cluster.isWorker) {
  console.log(' worker');
} else {
  console.log('master');
  cluster.fork();
  cluster.fork();
} 