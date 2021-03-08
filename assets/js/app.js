//Variables

// Variable that represents date in Day(Mon-Fri), Month Xth format. ex. Sunday, March 7th using the Moment.js date library utility.
var date = moment().format('dddd, MMMM Do')

//Assigns our <p> at the top of the page a variable so we can use moment.js to update the date.
var currentDay = document.getElementById("currentDay")

//Sets our above <p> to be equal to todays date
currentDay.textContent = date   


//Current day is displayed at the top of the calendar✅
//Below that is a series of time blocks✅
//Timeblocks are set for standard business hours (9am-5pm)✅

//Timeblocks are color coded to indicate whether it is in the past, present, or future
//when you click a timeblock I can enter an event✅
//when you click the save button for that timeblock the text is saved to local storage
//refresh the page
//  saved events persist
