// Simple example of how to use EventEmitters

const EventEmitter = require('events');
const uuid = require('uuid');

// // example of what a uuid looks like:
// console.log(uuid.v4());

class Logger extends EventEmitter {
  log(msg) {
    // Emitt event
    this.emit('message', {id: uuid.v4(), msg });
  }
}

// module.exports = Logger;

// const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener', data));

logger.log('Hello World');
logger.log('New event');
