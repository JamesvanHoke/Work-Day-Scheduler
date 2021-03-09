# 05 Third-Party APIs: Work Day Scheduler

## Goal

To create a simple calendar application that allows a user to save events for each hour of the work day by modifying starter code. This app is ran in the browser and featurse dynamically updated HTML and CSS powered by jQuery.

## Project Criteria

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Approach

To complete the project, a web interface was created with HTML. This interface was formatted using Bootstrap. The time related elements are powered by Moment.js The interface is powered by JavaScript and jQuery. JavaScript was used to dynamically update the color sections of the page to reflect if the chosen hour is in the past, present, or future.

User input is saved to local storage via a series of hour key'd textareas paired with buttons which save the contents of that page, allowing for the input information to persist through reloads.

## Technology
jQuery<br>
Bootstrap<br>
Moment.js

## Links
 https://github.com/JamesvanHoke/Work-Day-Scheduler <br>
 https://jamesvanhoke.github.io/Work-Day-Scheduler/
