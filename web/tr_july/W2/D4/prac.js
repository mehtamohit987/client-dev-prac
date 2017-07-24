module.exports = (function(){
    return {
        placeHolder:            {},
        partialRight:           function (fn) {
                                    var nextArgs = Array.prototype.slice.call(arguments, 1);
                                    var vacantIndices=[];
                                    for (var i=0;i<nextArgs.length;i++) { if (nextArgs[i] === this.placeHolder) { vacantIndices.push(i);nextArgs[i]=null; } }
                                    return function () {
                                        var passedArgs = Array.prototype.slice.call(arguments);
                                        for(var i=vacantIndices.length -1;i>=0;i--) { nextArgs[vacantIndices[i]]= passedArgs.pop(); }
                                        var argsToSend = passedArgs.concat(nextArgs);
                                        return fn.apply(this, argsToSend);
                                    };
                                },
        STRIP_COMMENTS_REGEX:   /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,\)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,\)]*))/mg,
        ARGUMENT_NAMES_REGEX:   /([^\s,]+)/g,
        getParamsLen:           function(func) {
                                    var fnStr = func.toString().replace(this.STRIP_COMMENTS_REGEX, '');
                                    var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(this.ARGUMENT_NAMES_REGEX);
                                    if(result === null)
                                        result = [];
                                    return result.length;
                                },
        curry:                  function  (fn) {
                                    var argumentsLength = this.getParamsLen(fn);
                                    var initialArgs = [];
                                    var alpha = function () {
                                        var passedArg = Array.prototype.slice.call(arguments)[0];
                                        initialArgs = initialArgs.concat(passedArg);
                                        if (initialArgs.length < argumentsLength) { return alpha; }
                                        else { return fn.apply(this, initialArgs); }
                                    };
                                    return alpha;
                                },
        reduce:                 function (coll, accMethod, defaultAccVal)  {
                                    var retVal = defaultAccVal;
                                    var index=0;
                                    for (value of coll) {
                                        retVal = accMethod(retVal, value, index++);
                                    }
                                    return retVal;
                                },
        keySize:                function  (key) {
                                    return key.split('/').length;
                                },
        setSettings:            function (obj, key, value) {
                                    var size = this.keySize(key);
                                    if (size == 0)  return obj;
                                    if (Object(obj) !== obj) throw "Primitive passed";
                                    if (key === "") return value;
                                    if (size === 1) {
                                        if (obj[key] !== null && obj[key] !== undefined) {
                                            if (obj[key] !== value) {
                                                throw "Mismatch";
                                            }
                                            else {
                                                return obj;
                                            }
                                        }
                                        else {
                                            let newOb = Object.assign(new Object(), obj);
                                            newOb[key] = value;
                                            return newOb;
                                        }
                                    }
                                    else {
                                        var keySplits = key.split('/');
                                        var keyFront = keySplits[0];
                                        var keyPending = keySplits.slice(1).join('/');
                                        if (obj[keyFront] === null || obj[keyFront] === undefined  || Object(obj[keyFront]) !== obj[keyFront]) {
                                            throw "Path existence err";
                                        }
                                        else {
                                            let newOb = Object.assign(new Object(), obj);
                                            newOb[keyFront] = this.setSettings(obj[keyFront], keyPending, value);
                                            return newOb;
                                        }
                                    }
                                }
    };
})();