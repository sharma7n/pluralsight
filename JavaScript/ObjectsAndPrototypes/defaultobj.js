function DefaultObject(factory) {
    var obj = {};
    
    var objProxy = new Proxy(obj, {
        get(target, name) {
            if ( obj[name] === undefined ) {
                obj[name] = factory();
                return obj[name];
            } else {
                return obj[name];
            }
        }
    });
    
    return objProxy;
}

var numberDict = DefaultObject(function() { return 0; });
numberDict["apple"] = 1;
console.log(numberDict["apple"]);
console.log(numberDict["banana"]);