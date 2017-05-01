function* fizzbuzz( n ) {
    for ( var i = 1; i <= n; i++ ) {
        if ( i % 15 === 0 ) {
            yield "fizzbuzz";
        } else {
            if ( i % 3 === 0 ) {
                yield "fizz";
            } else if ( i % 5 === 0 ) {
                yield "buzz";
            } else {
                yield i.toString();
            }
        }
    }
};

/* print-each version
 * for ( item of fizzbuzz(15) ) {
 *     alert(item);  
 * }
*/

var result = Array.from(fizzbuzz(15));
alert(result);