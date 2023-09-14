console.log("This is a popup!")
let tabs;
chrome.storage.local.get(['tabs'])
    .then((result) => {
      tabs = result.tabs;
      let now = new Date().getTime();

      // add element to display number of tabs
      let tabCounter = document.createElement('div')
      tabCounter.setAttribute('class', 'tab-counter') // CLASS NAME
      tabCounter.innerText = `Party Count: ${tabs.length}`;
      document.body.appendChild(tabCounter);
      
      for (let i =0; i < tabs.length; i++) {
        const tabId = Object.keys(tabs[i]);
        const tabTime = Object.values(tabs[i]);
        const timeDiff = now - tabTime
        
        // console.log("this tab is ", timeDiff, "milliseconds old")
        
        // tab container element
        let tabContainer = document.createElement('div');
        tabContainer.setAttribute('class', 'tab-container'); // CLASS NAME
        // event listener for tab container click
        tabContainer.addEventListener('click', () => {
          chrome.tabs.move(Number(tabId), {index: 0})
        })
        document.body.appendChild(tabContainer);

        // tab id element
        let tId = document.createElement('div')
        tId.setAttribute('class', 'tab-Id') // CLASS NAME
        tId.innerText = `Tab: ${tabId}`;
        tabContainer.appendChild(tId);

        // tab age element
        let tabAge = document.createElement('div');
        tabAge.setAttribute('class', 'tab-age');  // CLASS NAME
        // convert age into seconds or minutes
        let age;
        if (timeDiff < 60000) {
            age = timeDiff/1000;
            age = Math.round(age * 10) / 10;
            tabAge.innerText = `${age} seconds old`;
        } else {
            age = (timeDiff/1000)/60;
            age = Math.round(age * 10) / 10;
            tabAge.innerText = `${age} minutes old`;
        }
        tabContainer.appendChild(tabAge);

      }

      

    })

    
