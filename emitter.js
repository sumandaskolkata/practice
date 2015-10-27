var emitter=require('events');
var emitter = new emitter();
emitter.setMaxListeners(29)
var morning=function(){
	console.log('good morning');
};
emitter.once('evening',function(){
	console.log('good evening');
});	

emitter.once('morning',morning);
emitter.once('morning',function(){
	console.log('its 7.00 AM')
});
emitter.emit('morning')
emitter.emit('morning')
emitter.emit('morning')
emitter.emit('morning')
emitter.emit('morning')
emitter.emit('morning')
emitter.emit('morning')

emitter.emit('evening')

