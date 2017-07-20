// var placeHolder = {};
// function partialRight (fn) {
//     var nextArgs = Array.prototype.slice.call(arguments, 1);
//     var vacantIndices=[];
//     for (var i=0;i<nextArgs.length;i++) { if (nextArgs[i] === placeHolder) { vacantIndices.push(i);vacantIndices[i]=null; } }
//     return function () {
//         var passedArgs = Array.prototype.slice.call(arguments);
//         var startingArgs =1;
//         for(var i=0;i<nextArgs.length;i++) { if (startingArgs[i] === placeHolder) { vacantIndices.push(i);vacantIndices[i]=null; } }
//         var argsToSend = startingArgs.concat(nextArgs);
//         return fn.apply(this, argsToSend);
//     };
// }
// partialRight( (m,n,o)=>m+n+o, 'alpha', placeHolder)('hi ');
// function curry (fn) {
//     // return 
// };
// curry((a,b)=>a+b)(1)(2);

// function reduce(coll, acc_method, default_acc_val)  {

// }
// function acc_method (acc_val, val, key) {

// }
// function 

var orig  = {};
function setSettings (key, value) {};
