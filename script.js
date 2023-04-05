// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
//Code to display current date in header of the page.
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D, YYYY'));


//Code to convert time to 24-hour/military time
var currentTime = dayjs().format("H");
console.log(currentTime);


var timePresent = currentTime;
console.log(timePresent);



/*$(function )
  if (currentTime === timeDiv) {
    $(this).addClass("present");

// first box is 8 am which is 0 + 8 so if time is 1400, then 8<14 and should be "past"
then if box is 14 and current time is 800m then 14 > 8, and should be "future"

  }else if(currentTime < timeDiv) {
    $(this).removeClass("present")
    $(this).addClass("future")

  }else if(currentTime > timeDiv) {
    $(this).removeClass("future")
    $(this).addClass("past")
  } */

  

