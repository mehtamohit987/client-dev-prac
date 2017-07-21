var placeHolder = {};
function partialRight (fn) {
    var nextArgs = Array.prototype.slice.call(arguments, 1);
    var vacantIndices=[];
    for (var i=0;i<nextArgs.length;i++) { if (nextArgs[i] === placeHolder) { vacantIndices.push(i);nextArgs[i]=null; } }
    return function () {
        var passedArgs = Array.prototype.slice.call(arguments);
        for(var i=vacantIndices.length -1;i>=0;i--) { nextArgs[vacantIndices[i]]= passedArgs.pop(); }
        var argsToSend = passedArgs.concat(nextArgs);
        return fn.apply(this, argsToSend);
    };
}
// partialRight( (m,n,o)=>m+n+o, 'alpha ', placeHolder)('hi ', 'beta ');

// function curry (fn) {
//     var alpha = function () {
//         var passedArgs = Array.prototype.slice.call(arguments);
//         try {

//         }
//         if (){}
//         var beta = function () {

//         };
//         return alpha.apply(this, passedArgs);
//     };
//     return alpha;
// };
// curry((a,b)=>a+b)(1)(2);

function reduce(coll, acc_method, default_acc_val)  {
        var ret_val = default_acc_val;
        var index=0;
        for (value of coll) {
            ret_val = acc_method(ret_val, value, index++);
        }
        return ret_val;
}
// function acc_method (acc_val, val, key) {}
// reduce([1,12,3], ((s, a)=>s+a), 2)

function key_size (key) {
    return key.split('/').length;
}
function setSettings (obj, key, value) {
    var size = key_size(key);
    if (size == 0)  return obj;
    // CHECK PRIMITIVE//https://stackoverflow.com/questions/31538010/test-if-a-variable-is-a-primitive-rather-than-an-object
    if (Object(obj) !== obj) throw "Primitive passed";
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
            let new_ob = Object.assign(new Object(), obj);
            new_ob[key] = value;
            return new_ob;
        }
    }
    else {
        var key_splits = key.split('/');
        var key_front = key_splits[0];
        var key_pending = key_splits.slice(1).join('/');
        if (obj[key_front] === null || obj[key_front] === undefined  || Object(obj[key_front]) !== obj[key_front]) {
            throw "Path existence err";
        }
        else {
            let new_ob = Object.assign(new Object(), obj);
            new_ob[key_front] = setSettings(obj[key_front], key_pending, value);
            return new_ob;
        }
    }

}
// var alpha = {};
// var beta = setSettings(alpha, 'a', {});
// beta = setSettings(beta, 'a/b', {});
// beta = setSettings(beta, 'a/b/c', 1);
// beta = setSettings(beta, 'a/b1', 2);
// beta = setSettings(beta, 'a1', 3);
