var date = moment().format('dddd , h:mm a')

var currentDay = document.getElementById("currentDay")

currentDay.textContent = date   


//Current day is displayed at the top of the calendar
//Below that is a series of time blocks
//Timeblocks are set for standard business hours (9am-5pm)
//Timeblocks are color coded to indicate whether it is in the past, present, or future
//when you click a timeblock I can enter an event
//when you click the save button for that timeblock the text is saved to local storage
//refresh the page
//  saved events persist
