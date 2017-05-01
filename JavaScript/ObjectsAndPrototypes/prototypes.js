'use strict';

var x = 
function () {
    
function Cat(name, color) {
    this.name = name;
    this.color = color;
    this.secret = false;
    
    Cat.prototype.meow = function() {
        return "meow";
    }
    
    Cat.prototype.scratch = function() {
        return "rawwwr";
    }
    
    Object.defineProperty(this, 'secret', {enumerable: false});
    Object.defineProperty(this, 'meow', {enumerable: false});
    Object.defineProperty(this, 'scratch', {enumerable: false});
}

var storm = new Cat("Storm", "gray");
for ( var property in storm ) {
    console.log(storm[property]);
}

}();