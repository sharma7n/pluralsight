function Counter(iterable) {
    var counter = {};
    for ( var item of iterable ) {
        if ( counter[item] === undefined ) {
            counter[item] = 1;
        } else {
            counter[item]++;
        }
    }
    return counter;
}

var factors = Counter([2, 3, 3, 5, 5, 5, 7, 7]);
console.log(JSON.stringify(factors));

var raphaels = Counter(["raph", "raph", "raph"]);
console.log(JSON.stringify(raphaels));