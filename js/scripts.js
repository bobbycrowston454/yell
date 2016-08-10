$(document).ready(function(){
  $("#blanks form").submit(function(input){
    var textInput = $("input#text").val().toUpperCase();

    $(".text").text(textInput);

    $("#page-response").show();

    event.preventDefault();
  });
});
