//////////Variables//////////

//Represents date in Day(Mon-Fri), Month Xth format. ex. Sunday, March 7th using the Moment.js date library utility.
var date = moment().format("dddd, MMMM Do");

//Header Date Variable
var currentDay = $("#currentDay");

//Work day start time - 1 hour. i.e if work starts at 9am it's 8, if work starts at  9pm it's 20
var workTime = 8;

//////////Functions//////////

//Save Function

//Targets the time block div and listens for a click
$(".time-block").on("click", function (e) {
  //Guard clause to make sure that a button was clicked
  if (!e.target.matches("button")) {
    //exits out if button wasn't clicked
    return;
  }
  //Jquery DOM manipulation to get the user input from the text area. Timeblock Div -> Textarea child with description class -> Text contents
  var textAreaInput = $(this).children(".description").val();

  //jQuery DOM manipulation to get the ID of the clicked timeblock
  var hourLS = $(this).attr("id");

  // Sets the info to local storage
  localStorage.setItem(hourLS, textAreaInput);

  //If the user saves a blank timeblock it will delete the existing LS for that time block allowing them to "Clear" it
  if ((textAreaInput = "")) {
    localStorage.removeItem(hourLS, textAreaInput);
  }
});

//Color Code Function

//Runs each of our work day time blocks through a jquery forloop to check for current time vs work day
$(".time-block").each(function () {
  //gets current hour 1-24 format
  var currentTime = moment().hour();

  //grabs the id of the current timeblock and cuts the letters out of it and gives us the number in the form of a string
  var timeBlocksHour = $(this).attr("id").split("hour-")[1];

  //Converts the string number into a number so we can use addition and comparison on it
  timeBlocksHour = parseInt(timeBlocksHour) + workTime;

  // if the current time is less than the time blocks ID, add past class
  if (timeBlocksHour < currentTime) {
    $(this).addClass("past");
  }

  // if the current time is the time blocks ID, add present class
  else if (timeBlocksHour === currentTime) {
    $(this).addClass("present");
  }

  //if the current time is greater than the time blocks ID, add future class
  else {
    $(this).addClass("future");
  }
});

//Load Local Storages (if it exists) pattern is $(ID Class).val(pull local storage of keyvalue pair of X)
$("#hour-1 .description").val(localStorage.getItem("hour-1"));
$("#hour-2 .description").val(localStorage.getItem("hour-2"));
$("#hour-3 .description").val(localStorage.getItem("hour-3"));
$("#hour-4 .description").val(localStorage.getItem("hour-4"));
$("#hour-5 .description").val(localStorage.getItem("hour-5"));
$("#hour-6 .description").val(localStorage.getItem("hour-6"));
$("#hour-7 .description").val(localStorage.getItem("hour-7"));
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));

//Uses Moment.js to assign our current day <p> the the date upon loading.
currentDay.text(date);
