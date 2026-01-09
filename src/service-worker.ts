chrome.runtime.onMessage.addListener((message)=>{
    if (message.action==="openCustomTab"){
        chrome.storage.local.set({sharedData:message.payload})
        .then(()=>{
            chrome.tabs.create({
                url: chrome.runtime.getURL("/src/pages/home.html") 
            });
        })
        
    }
   
})