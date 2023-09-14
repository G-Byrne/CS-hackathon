# CS-hackathon

// use the tabs google tabs api to store tab creation timestamp for each tab.id that is open on the window
  // creating an event listener for a new tab opened
  // get access to the tab details of the tab opened and store those details

// event listener for tabs closing
  // remove the closed tab's data from the storage
  chrome.tabs.onRemoved.addListener(
    // store the tab id of the tab that was closed
    // get the tabs array from storage
    // iterate through the tabs array until we find a match of the tabid
      // delete that element from the array
    // set the tabs storage object to the new array
  )

// when a new window is opened, a setTimeout loop is started
  // get the tabs array from storage
  // iterate through each object in tabs
    // calculate time elapsed since open
    // set tab color to a particular shade based on age using the style api


// we want to send google notifications for tab birthdays

https://developer.chrome.com/docs/extensions/mv3/user_interface/#popup
https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/
https://developer.chrome.com/docs/extensions/reference/alarms/