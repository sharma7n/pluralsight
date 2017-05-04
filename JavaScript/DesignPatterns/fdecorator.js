'use strict';

function barLogger(func) {
    return function() {
        console.log("bar");
        func();
    };
}

var fooLogger = function () {
    console.log("foo");
};

fooLogger = barLogger(fooLogger);

fooLogger();