chrome.tabs.onCreated.addListener((tab) => {
  console.log('tab created')
  console.log(tab);
  let date = new Date().getTime();
  
  let tabs;
  chrome.storage.local.get(['tabs'])
  .then((result) => {
    if (result.tabs){
        tabs = result.tabs;
        tabs.push({[tab.id] : date});  
    } else {
        tabs = [{[tab.id] : date}]
    }
    
  })
  .then(() => {
    chrome.storage.local.set({tabs: tabs});// [{id: now}]

    console.log(tabs);

  })
  
})

// Event listener to remove tab from tracked data when tab closes
chrome.tabs.onRemoved.addListener( (tabid, tabObj) => {
  let tabs;
  chrome.storage.local.get(['tabs'])
  .then((result) => {
      tabs = result.tabs;
      console.log(tabs);
      let index;
      for (let i =0; i < tabs.length; i++) {
        console.log(tabid);
        if (Object.keys(tabs[i])[0] === tabid.toString()) {
          console.log(i, "match found");
          index = i;
          break;
        }
      }
      tabs.splice(index, 1);
      console.log(tabs);
  }).then(() => {
    chrome.storage.local.set({tabs: tabs});
    console.log('removed tab');
  })
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  // store the tab id of the tab that was closed
  // get the tabs array from storage
  // iterate through the tabs array until we find a match of the tabid
    // delete that element from the array
  // set the tabs storage object to the new array
)


// add event listener for opening a new window that starts a set timeout loop
// to update the colors of the tabs
// use the chrome.window api to add an event listener on window creation
// use the setTimeout function to console.log() every n milliseconds
// make sure the callback passed to setTimeout calls setTimeout again
chrome.windows.onCreated.addListener(() => {
  //chrome.storage.local.clear();
  const wait = 3000;
  const timeCheck = function() {
    // set variable to store Date Object now
    const now = new Date().getTime()
    // get the tabs from storage local
    chrome.storage.local.get(['tabs'])
    .then((result) => {
        tabs = result.tabs;
        for (let i =0; i < tabs.length; i++) {
          const tabTime = Object.values(tabs[i]);
          const timeDiff = now - tabTime
          console.log("this tab is ", timeDiff, "milliseconds old")
        }
    })
    // iterate through the tabs
      // for each tab
      // save in a variable now - stored timestamp
      // console.log result, "this tab is xMS old"

    console.log('Checking the tab age')
    setTimeout(timeCheck, wait);
  }

  timeCheck();
    
})

// chrome.storage.local.set(tabs: [{tabid: date}])
// const tabs = chrome.storage.local.get(['tabs'])