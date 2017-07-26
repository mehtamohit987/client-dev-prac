//== 24/07
var r = (function () {
    let singleInst = null;
    var Gamma = function () {
    };
    var getInstance = function () {
         singleInst = singleInst ? singleInst : new Gamma();
         return singleInst;
    };
    return {getInstance: getInstance};
})();

// var x = r.getInstance();
// var y = r.getInstance();
// console.log(x===y);


var p = (function () {
    let listH = [];
    function EventHandler () {

    };
    EventHandler.prototype.subscribe = function (callback) {
        if (!this.subscriberId) { this.subscriberId=listH.length; listH.push(callback); } 
    };
    EventHandler.prototype.unsubscribe = function () {
        if ( this.subscriberId) { delete listH[this.subscriberId]; this.subscriberId=null; } 
    }
    EventHandler.prototype.fire = function () {
        var returnData = {fired: true};
        for (let ind in listH) {
            if (listH.hasOwnProperty(ind)) {
                returnData['firedFor'] = ind;
                listH[ind](returnData);
            }
        }
    } 
    return {EventHandler: EventHandler};
})();

// var x = new p.EventHandler();
// x.subscribe(function (d) {console.log(d);});
// var y = new p.EventHandler();
// y.subscribe(function (d) {console.log(d);});
// var z = new p.EventHandler();
// z.subscribe(function (d) {console.log(d);})
// y.unsubscribe();
// new p.EventHandler().fire()


function AL( ) {
}
AL.prototype.fn = function () {
    console.log(this);
	r = (function () {  
        var ob = {
            f: (()=> console.log(this)),
            g: function () {console.log(this);},
            h: function () {(()=> console.log(this))();}
        };
        return ob;
    })();
    console.log(this);
    // r.f();
    // r.g();
    // r.h();
};
// (new AL()).fn();



var propName = 'name';
var propVal = 1;
person = { 
    [propName] : propVal+1,
    "funName" () {
        return [name, this.name];
    }
}

// tagged template Literal string   
function processInvoice(segments, ...values) {console.log(segments); console.log(values);}
let invoiceNum = "1350";
let amount = '2000';
processInvoice `Invoice:${invoiceNum}for${amount}`;  


//symbols
let eventSymbol = Symbol('resizeevent');
let eventSymbol2 = Symbol('resizeevent');
console.log(eventSymbol, eventSymbol2);
console.log(eventSymbol.toString(), eventSymbol2.toString());
console.log(eventSymbol === eventSymbol2);

let eventSymbol = Symbol.for('resizeevent');
let eventSymbol2 = Symbol.for('resizeevent');
console.log(eventSymbol, eventSymbol2);
console.log(eventSymbol.toString(), eventSymbol2.toString());
console.log(eventSymbol === eventSymbol2);

let article={
    title: "Ehitedace",
    [Symbol.for('article')]: 'MyArt'
};
console.log(article[Symbol.for('article')])



let Blog=function(){}
console.log(blog.toString())
Blog.prototype[Symbol.toStringTag]='BlogClass';
let blog2=new Blog();
console.log(blog2.toString());


let values = [8,12,16];
console.log([].concat(values));
values[Symbol.isConcatSpreadable]=false;
console.log([].concat(values));

let value=[8,12,16];
let sum = values+ 100;
console.log(sum);
values[Symbol.toPrimitive]=function(hint){console.log(hint); return 42;}
let sum2=values+100;console.log(sum2);




let ids = [1,2,3];
let it = ids[Symbol.iterator](); 
console.log(typeof ids[Symbol.iterator]);
console.log(it.next());
console.log(it.next());




let idMaker = {
    [Symbol.iterator] () {
        let nextId = 800;
        return {
            next () {
                return {value: nextId++, done: false}
            }
        };
    }
};
let it = idMaker[Symbol.iterator]();
console.log(it.next().value);


let arr = [1,2,3,4,5];
arr[Symbol.iterator] = function (begin, end) {
    let current = begin;
    return {
        next() {
            return { done: current>end ? true: false, value: current>end ? undefined: (current++) };
        }
    }
}


let arr = [1,2,3,4,5];
arr[Symbol.iterator] = function (begin, end) {
    let current = begin;
    return {
        next() {
            return { value: current>end ? undefined: (current++), done: current>end ? false: true };
        }
    }
}




// let arr = [1,2,3,4,5];
// arr[Symbol.iterator] = function (iterationMethod) {
//     let current = begin;
//     let iterationMethodInstance =  iterationMethod();
//     return {
//         next() {
//             return iterationMethodInstance();
//         }
//     }
// }
// let transformativeIterationMethod = function (begin, end) {
//     let index = begin;
//     let prevValue = null;
//     return function () {
//         if(index<=end) {
//             data = {value: arr[index++]*2 + (prevValue ? prevValue : 0), done: false};
//             prevValue = data['value'];
//             return data;
//         }
//         else
//             return {value: undefined, done: true};
//     }
// };
// it = arr[Symbol.iterator](3, 11, transformativeIterationMethod(0, 5))
// it.next()





let arr = [1,2,3,4,5,6,7,8];
arr[Symbol.iterator] = function (begin, end, booleanIterationMethod) {
    let current = begin;
    return {
        next() {
            while (current<=end && !booleanIterationMethod(arr[current])) {
                current++;
            }
            let data = { value: current<=end ? arr[current] : undefined , done: current<=end ? false : true }
            current++;
            return data;
        }
    };
}
it = arr[Symbol.iterator](3, 7, function (val) {return (val%2==0);})
it.next()


// == 25/07

//=== GENERATORS
function* process() {
    yield 10;
    yield 22;
}
let it = process();
console.log(it.next());

function* process() {
    let result = yield 10;
    console.log(`result is ${result}`);
}
process();
process(25);










let arr = [1,2,3,4,5];
function *process (begin, end) {
    let current = begin;
    while (current<=end)
        yield arr[current++];
}
it = process(2, 4);
it.next();
it.next();





let arr = [1,2,3,4,5, 7, 8, 10, 9, 2];
function* process (begin, end, booleanIterationMethod) {
    let current = begin;
    while (current<=end) {
        if (booleanIterationMethod(arr[current])) {
            yield arr[current];
        }
        current++;
    }
}
it = process(2, 4, function (val) {return (val%2==0);});
it.next();
it.next();
it.next();

it.next();
it.next();


// yield*
// yield* [1,2,3]

//try catch throw in generators


function* process () {
    try{
        yield 9000;
        yield 9001;
        yield 9002;
    }
    catch (e) {

    }
} 
it=process();
console.log(it.next());
console.log(it.throw('foo'));


// promise
function doAsync () {
    let p1 = new Promise(function(resolve, reject) {
        setTimeout(function () {    
            console.log('rejecting');
            resolve();
        }, 9000);
    });
    let p2 = new Promise(function(resolve, reject) {
        setTimeout(function () {    
            console.log('rejecting');
            resolve();
        }, 2000);
    });
    return Promise.all([p1, p2]).then(
        function (value) { console.log('Ok') },
        function (reason) { console.log('Nope') }
    );
    // return new Promise(function(resolve, reject) {
    //     setTimeout(function () {    
    //         console.log('rejecting');
    //         reject();
    //     }, 2000);
    // });
};
doAsync().then(function(){console.log('acc');} , function(){console.log('rej');}).catch(function(reason){console.log('Error: '+ reason);});

