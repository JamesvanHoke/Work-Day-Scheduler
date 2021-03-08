//////////Variables//////////

//Moment.js Time Variables

//Represents date in Day(Mon-Fri), Month Xth format. ex. Sunday, March 7th using the Moment.js date library utility.
var date = moment().format("dddd, MMMM Do");

//Represents the current hour in 1-24 format
var time = moment().format("HH");

//Header Date Variable
var currentDay = $("#currentDay");

//////////Functions//////////

//Save Function

//Targets the time block div and listens for a click
$(".time-block").on("click", function (e) {
    //Guard clause to make sure that a button is clicked
    if (!e.target.matches("button")) {
        //exits out if a button isn't clicked
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


$(".time-block").each(function(){
    
})


//Load Local Storage (if it exists)
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



//Timeblocks are color coded to indicate whether it is in the past, present, or future
