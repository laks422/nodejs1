 var EventEmitter= require('events');
 var emitter= new EventEmitter();

 emitter.on("scream",()=>{console.log("a scream is detected");
})

emitter.emit("scream");

