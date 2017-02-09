$(document).ready(function(){
$("#searchResults").hide();
 $("#submit").on('click', function() {
     //form entry to variable 
   var searchTerm = $("#lookup").val();
   var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
   $("#searchResults").show();
   $.ajax({
     url: url,
     type: 'GET',
     contentType: "application/json; charset=utf-8",//conentType is the type of data you send...this is a common one
     asynch: false,
     dataType: 'json',
     success: function(data) {
      console.log(data);
      $("#searchResults").html();
       for (i = 0; i < data[1].length; i++) {
         if (data[2][i].length > 0) {
        $("#searchResults").prepend("<a href=" + data[3][i] + "\">" + data[2][i].trim(5) + "<br>" + "<hr>" + "<br>");
         } 
       }
     },
     error: function(err) {
       $("#searchResults").text("error")
     }
     })
   })
 })