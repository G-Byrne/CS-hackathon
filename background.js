chrome.tabs.onCreated.addListener((tab) => {
  console.log('tab created')
  console.log(tab);
  
  let tabs;
  chrome.storage.local.get(['tabs'])
  .then((result) => {
    if (result.tabs){
        tabs = result.tabs;
        tabs.push({[tab.id] : new Date()});  
    } else {
        tabs = [{[tab.id] : new Date()}]
    }
    
  })
  .then(() => {
    chrome.storage.local.set({tabs: tabs});
    console.log(tabs); // [{id: now}]
  })
  
})

// add event listener for opening a new window that starts a set timeout loop
// to update the colors of the tabs
// use the chrome.window api to add an event listener on window creation
// use the setTimeout function to console.log() every n milliseconds
// make sure the callback passed to setTimeout calls setTimeout again
chrome.windows.onCreated.addListener(() => {
    const wait = 1000;
    const timeCheck = function() {
        console.log('Checking the tab age')
        setTimeout(timeCheck, wait);
    }

    timeCheck();
    
})


// chrome.storage.local.set(tabs: [{tabid: date}])
// const tabs = chrome.storage.local.get(['tabs'])