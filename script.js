// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

//  THIS IS THIS SECTION OF CODE <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
//  CLICK TO THIS BUTTON <button class="btn saveBtn col-2 col-md-1" aria-label="save">  <i class="fas fa-save" aria-hidden="true"></i>
//        </button>
//

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


$("fas fa-save").on("click", function(event) {
  var plannerEntry = document.getElementsByClassName(description)
  if(data) {
  localStorage.setItem(`#hour-${i}`, plannerEntry);
  console.log(plannerEntry)
}})

//Code to display current date in header of the page.
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D, YYYY'));


//Code to convert time to 24-hour/military time
var currentTime = dayjs().format("H");
console.log(currentTime);

//test
var timePresent = currentTime;
console.log(timePresent);

//apply color based on time parameters
for(var i=8; i <= 18; i++) {
  if(i < currentTime) {
    $(`#hour-${i}`).addClass("past");
  } else if(i == currentTime) {
    $(`#hour-${i}`).addClass("present");
    console.log("I am here");
  } else if(i > currentTime) {
    $(`#hour-${i}`).addClass("future");
  }
}


