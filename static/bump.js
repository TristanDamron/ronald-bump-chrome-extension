chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'var phrases = [["Donald","Ronald"],["Trump","Bump"],["Tristan Damron","Lord Mumfy Tump"],["Ryan Estes","Supreme Cheese Clump"],["is","happens to be"],["The","Le"],["the","le"],["ISIS","Habitat for Humanity"],["said","kept tihs information to themselves"],["he","she"],["fun","butt stuff"],["cat","mundyfumple"]]; for (var i = 0; i < phrases.length; i++) { document.body.innerHTML = document.body.innerHTML.replace(phrases[i][0], phrases[i][1]);	}'
  });
});
