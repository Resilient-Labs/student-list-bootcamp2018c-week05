// Waits until DOM loads before executing functions inside
$(document).ready(function(){

  // // Behavior when add button is clicked
  // $('#add').on('click', function(){
  //     $('#list').append('<li class="new">' + $('input').val() + '</li>');
  //     length++;
  //     console.log(length);
  //     $('#number').html(length);
  // })

  var studentList = [];
// teacher can enter a student Name
$("form").on("submit", function(e){
  // prevent default Behavior
  e.preventDefault()
  // get value from input
  var studentName = $("input").val()
  // store that value
  studentList.push(studentName)
  // clear the input to add another value
  $("input").val("")


});

// teacher can click a button to see all stored names
$("#button").on("click", function(){
  // take names from list and append them to document
  studentList.forEach(function(el){
    $("ul").append("<li>"+el+"</li>")

  });



});




})
