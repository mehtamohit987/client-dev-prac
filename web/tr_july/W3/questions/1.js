function Al () {
    var alpha = function () {console.log("I'm alpha and I am a secret.");};
    return {
        pubAlpha: function () {console.log("I'm alpha's friend I enjoy living transparently.");}
    };
}
var al = new Al();
al.pubAlpha();al.alpha();