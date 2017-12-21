

console.log("Called from two.js");

var utils = {
    generateRandom: function() {
        return Math.random();    
    },
    sum: function(a, b) {
        return a + b;
    }
};

//export default utils;