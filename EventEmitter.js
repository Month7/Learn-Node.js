// var events = require('events');
// var eventEmitter = events.EventEmitter;

// var event = new eventEmitter();
// event.on('event',function(){
//     console.log('event事件');
// })
// setTimeout(function(){
//     event.emit('event');
// },1000)

function isOdd(num) {
    return num % 2 == 1;
}
function isEven(num) {
    return num%2 ==0;
}
function isSame(num){
    return isOdd(num) || isEven(num);
}
console.log([7,4,'13',-9,Infinity].map(isSame))