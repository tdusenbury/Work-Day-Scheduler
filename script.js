
//Code to display current date in header of the page.
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D, YYYY'));

//Code to convert time to 24-hour/military time for color parameters for loop
var currentTime = dayjs().format("H");
console.log(currentTime);


//test
var timePresent = currentTime;
console.log(timePresent);

//apply color based on time parameters
for(var i=8; i <= 18; i++) {
  if(i < currentTime) {
    $(`#hour-${i}`).addClass('past');
  } else if(i == currentTime) {
    $(`#hour-${i}`).addClass('present');
    console.log("I am here");
  } else if(i > currentTime) {
    $(`#hour-${i}`).addClass('future');
  }
}

console.log(document.body.children[1].children[1]);

var divId = document.body.children[1].children[1]
console.log("TEST")


$('.saveBtn').on('click', function(event) {
  event.preventDefault();
  var text = $(this).siblings('.description').val();
  var time = $(this).parent().attr("id");
  console.log(typeof time)
  localStorage.setItem(time, text);

  console.log(time);
  console.log(text)
  });

  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  console.log($("#hour-8 .time-block"))
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("-hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


