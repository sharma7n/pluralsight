/*
 * block comment
*/

// alert("Hello, world!");
// confirm("I love JS");
// prompt("What is your name?");

var factorize = function*(n) {
    var divisor = 2;
    while (n > 1) {
        if (n % divisor == 0) {
            yield divisor;
            n /= divisor;
        } else {
            divisor++;
        }
    }
};