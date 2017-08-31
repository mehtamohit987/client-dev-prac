export function timeout(t) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(true);
        }, t);
    });
}
