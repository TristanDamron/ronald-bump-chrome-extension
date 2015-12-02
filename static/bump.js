/*
* @author Tristan Damron (github.com/tristandamron)
*/

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: 'static/findAndReplaceDOMText.js' 
  });
});
