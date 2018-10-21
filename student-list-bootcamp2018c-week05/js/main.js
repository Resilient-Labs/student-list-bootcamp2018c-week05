$(document).ready(function(){
  var studentList = [];
  $("form").on("submit", function(e){
    e.preventDefault()
    var studentName = $("input").val();
    studentList.push(studentName);
    $(".userInput").val("");
    console.log(studentList);
  });
  $("#button").on("click", function(){
    studentList.forEach(function(el){
      $("ul").append("<li>"+el+"</li>");
    });
  });
  $("#resetList").on("click", function(){
    studentList = [];
    $("li").css("display","none");
    console.log(studentList);
  });
})
