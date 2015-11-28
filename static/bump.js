chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'var phrases = [["Donald Trump","Ronald Bump"],["Tristan Damron","Lord Mumfy Tump"],["Ryan Estes","Supreme Cheese Clump"],["the","le"],["ISIS","Habitat for Humanity"],["said","kept tihs information to themselves"];for (int i = 0; i < phrases.length; i++) { document.body.innerHTML = document.body.innerHTML.replace(phrases[i][0], phrases[i][1]);	}'
  });
});
