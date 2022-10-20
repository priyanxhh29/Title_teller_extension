let color = 'red';
chrome.runtime.onInstalled.addListener(()=>{
    chrome.tab.sync.set({title});
});