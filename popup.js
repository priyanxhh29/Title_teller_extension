const btn = document.querySelector('.titleBtn');
const Value = document.querySelector('.Value');

btn.addEventListener("click",async()=>{
    chrome.tabs.query (
        { "currentWindow": true, "active": true }, 
        function(tabs) {
            
        
         var gettitle = tabs[0].title;          
            
            Value.innerHTML=gettitle;
            
     });

});