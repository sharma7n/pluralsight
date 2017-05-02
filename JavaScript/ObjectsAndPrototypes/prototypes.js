'use strict';

var x = 
function () {
    
function Cat(name, color) {
    this.name = name;
    this.color = color;
    
    Cat.prototype.meow = function() {
        return this.name + " says 'meow'!";
    };
    
    Cat.prototype.scratch = function() {
        return "rawwwr";
    };
    
    Object.defineProperty(Cat.prototype, 'meow', {enumerable: false});
    Object.defineProperty(Cat.prototype, 'scratch', {enumerable: false});
    
    var secretPower = "fireball";
    
    Object.defineProperty(this, 'hiddenPower', {
        get: function() { return secretPower; },
        set: function(power) { secretPower = power; }
    });
}

var storm = new Cat("Storm", "gray");
for ( var property in storm ) {
    console.log(storm[property]);
}

storm.hiddenPower = "grass blade";
console.log(storm.hiddenPower);

console.log(storm.meow());

var garfield = new Cat("Garfield", "tabby");
console.log(garfield.meow());

}();