const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const eventHandler = () => {
  console.log('An event has occurred!');
};

myEmitter.on('myEvent', eventHandler);

myEmitter.emit('myEvent');