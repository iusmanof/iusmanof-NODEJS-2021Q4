const { myReadable } = require('./advanced/readble')

const counter = new myReadable({ highWaterMark: 2 });

counter.on('data', chunk => {
  console.log(`Received: ${chunk.toString()}`);
});