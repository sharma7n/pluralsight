$(document).ready(function() {
   $.get("/data", function(result) {
       function* getData() {
           for ( var res of result ) {
               yield res;
           }
       }
       
       var data = getData();
       
       var loader = setInterval(function(){
           var next = data.next();
           if ( !next.done ) {
               var listItem = "<li>" + next.value.value + "</li>";
               $("#asyncList").append(listItem);
           } else {
               clearInterval(loader);
               $("#asyncList").append("<li>END</li>");
           }
       }, 1000);
   });
});