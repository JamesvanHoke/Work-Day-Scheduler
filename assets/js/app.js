//////////Variables//////////

//Moment.js Time Variables

//Represents date in Day(Mon-Fri), Month Xth format. ex. Sunday, March 7th using the Moment.js date library utility.
var date = moment().format("dddd, MMMM Do");

//Represents the current hour in 1-24 format
var time = moment().format("HH");

//Header Date Variable
var currentDay = $("#currentDay");

//////////Save Function//////////

//Targets the time block div and listens for a click
$(".time-block").on("click", function (e) {
  //Guard clause to make sure that a button is clicked
  if (!e.target.matches("button")) {
      //exits out if a button isn't clicked
    return;
  }
//Jquery DOM manipulation to get the user input from the text area equal to the 
var textAreaInput = $(this).children(".description").val()
//jQuery DOM manipulation to get the ID of the clicked
var hourLS = $(this).attr("id");

localStorage.setItem(hourLS, textAreaInput)

});

$("#hour-1 .description").val(localStorage.getItem("hour-1"));



//Uses Moment.js to assign our current day <p> the the date upon loading.
currentDay.text(date);

//Current day is displayed at the top of the calendar✅
//Below that is a series of time blocks✅
//Timeblocks are set for standard business hours (9am-5pm)✅

//Timeblocks are color coded to indicate whether it is in the past, present, or future
//when you click a timeblock I can enter an event✅
//when you click the save button for that timeblock the text is saved to local storage
//refresh the page
//  saved events persist
