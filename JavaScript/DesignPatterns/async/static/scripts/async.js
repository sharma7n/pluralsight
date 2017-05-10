$(document).ready(function() {
   $.get("/data", function(result) {
       var html = "";
       
       for ( var item of result ) {
           html += "<li>" + item.value + "</li>";
       }
       
       $("#asyncList").append(html);
   });
});