// ## 2 ##
var arr = [10, 20, 1, 2, 11, 9, 11, 12, 89, 11];
arr[Symbol.iterator] = function () {
    let initialIndex = 0;
    return {
        next () {
            if (initialIndex < arr.length) {
                data = returnVal = arr[initialIndex]*arr[initialIndex];
                initialIndex++;
                return {value: data, done: false};
            }
            else {
                return {value: undefined, done: true};
            }

        }
    };
}
var it = arr[Symbol.iterator]();
console.log(it.next());

// ## 3 ##
function *process () {
    let initialIndex = 0;
    while (initialIndex<arr.length) {
        var returnVal = arr[initialIndex] * arr[initialIndex];
        initialIndex++;
        yield returnVal;
    }
}
it = process();
console.log(it.next());
it.next();

// ## 5 ##
(function normalFunc () {
    console.log (this);
})();
(()=>console.log(this))();