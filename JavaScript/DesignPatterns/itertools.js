// Module pattern
// Module is an IEFE which exposes methods

var itertools = function() {
    
  function* chain ( iterables ) {
      for ( var iterable of iterables ) {
          for ( var item of iterable ) {
              yield item;
          }
      }
  }
  
  function* accumulate ( iterable ) {
      var total = 0;
      for ( var item of iterable ) {
          total += item;
          yield total;
      }
  }
  
  function* cycle ( iterable ) {
      while ( true ) {
          for ( var item of iterable ) {
              yield item;
          }
      }
  }
  
  function* count ( options ) {
      var inc = options.start || 0;
      var step = options.step || 1;
      while ( true ) {
          yield inc;
          inc += step;
      }
  }
  
  return {
      chain: chain,
      accumulate: accumulate,
      cycle: cycle,
      count: count,
  };
  
}();

var bike = itertools.count({start: 4, step: 5});
for ( var i = 0; i < 6; i++ ) {
    console.log(bike.next().value);
}