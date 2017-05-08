'use strict';

var Expression = function() {
    var currentValue = 0;
    var nextOperation = null;
    
    var applyOperation = function(number) {
        if ( nextOperation === '+' ) {
            currentValue += number;
        } else if ( nextOperation === '-' ) {
            currentValue -= number;
        } else {
            throw "error";
        }
    };
    
    this.one = function() { 
        applyOperation(1);
        return this;
    };
    
    this.two = function() { 
        applyOperation(2);
        return this; 
    };
    
    this.three = function() { 
        applyOperation(3);
        return this; 
    };
    
    this.plus = function() {
        nextOperation = '+';
        return this;
    };
    
    this.minus = function() {
        nextOperation = '-';
        return this;
    };
    
    this.equals = function() {
        return currentValue;
    };
};

function one() {
    return new Expression().plus().one();
}

function two() {
    return new Expression().plus().two();
}

function three() {
    return new Expression().plus().three();
}

console.log("1 + 1 === 2");
console.log(one().plus().one().equals());

console.log("2 + 3 - 1 === 4");
console.log(two().plus().three().minus().one().equals());