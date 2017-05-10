$(document).ready(function () {
   $.get("/", function (result) {
      var listItems = [];
      
      for ( var res of result) {
          listItems.push("<li>" + res + "</li>");
      }
      
      $('ul').append(listItems.join(""));
   });
});