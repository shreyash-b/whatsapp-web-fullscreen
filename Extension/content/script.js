lnk = document.createElement('link');
lnk.href = chrome.runtime.getURL('content/main.css');
lnk.rel = "stylesheet";
lnk.type = "text/css"

document.querySelector('head').appendChild(lnk) // add our css at end for higher precendence
console.log("script loaded...")