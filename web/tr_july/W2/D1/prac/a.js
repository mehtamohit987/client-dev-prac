function sumMethod (receivedArgArr) {
    var returnV = 0;
    for (var i=0; i< receivedArgArr.length; i++) {
        returnV += receivedArgArr[i];
    }
    return returnV;
}
function curriedSum () {
    var prevArgs = Array.prototype.slice.call(arguments);
    var returnV = function () {
        prevArgs =  prevArgs.concat(Array.prototype.slice.call(arguments));
        return curriedSum.apply(this, prevArgs);
    };
    returnV.valueOf = function () {
        return sumMethod(prevArgs);
    };
    returnV.toString = function () {
        return this.valueOf();
    };
    returnV.inspect = function () {
        debugger;
        return this.valueOf();
    };
    return returnV;
}