const EventEmitter = require('events')

const Logger = require('./logger')
const logger = new Logger();

logger.on('messageLogged', function(data) {
    console.log('Listener called with data', data)
});

logger.log('message')

// emitter.emit('messageLogged', {id: 1, url: 'http://'})
