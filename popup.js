console.log("This is a popup!")
let tabs;
chrome.storage.local.get(['tabs'])
    .then((result) => {
      tabs = result.tabs;
      
      for (let i =0; i < tabs.length; i++) {
        const tabId = Object.keys(tabs[i]);
        const tabTime = Object.values(tabs[i]);
        const timeDiff = now - tabTime
        
        console.log("this tab is ", timeDiff, "milliseconds old")
        
        // tab container element
        let tabContainer = document.createElement('div');
        tabContainer.setAttribute('class', 'tab-container'); // CLASS NAME
        document.body.appendChild(tabContainer);

        // tab id element
        let tId = document.createElement('div')
        tId.setAttribute('class', 'tab-Id') // CLASS NAME
        tId.innerText = `${tabId}`;
        tabContainer.appendChild(tId);

        // tab age element
        let tabAge = document.createElement('div');
        tabAge.setAttribute('class', 'tab-age');  // CLASS NAME
        // convert age into seconds or minutes
        let age;
        if (timeDiff < 60000) {
            age = timeDiff/1000;
            tabAge.innerText = `${age} seconds`;
        } else {
            age = (timeDiff/1000)/60;
            tabAge.innerText = `${age} minutes`;
        }
        tabContainer.appendChild(tabAge);

      }
    })

