function* letters( str ) {
    for ( var i = 0; i < str.length; i++ ) {
        yield str[i];
    }
}

function* ienumerate ( iter ) {
    var item = null;
    var done = false;
    var index = 0;
    while( !done ) {
        item = iter.next();
        yield {
            index: index,
            value: item.value,
        };
        index++;
        done = item.done;
    };
}

function* chain ( initial, final ) {
    var intermediate = initial;
    for ( var pack of ienumerate(letters(final)) ) {
        var index = pack.index;
        var letter = pack.value;
        yield intermediate;
        intermediate = intermediate.substr(0, index) + letter + intermediate.substr(index + 1);
    }
}

var result = Array.from(chain("cardio", "donuts"));
console.log(result);