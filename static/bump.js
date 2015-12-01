chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'var phrases = [["Donald","Ronald"],["Trump","Bump"],["Tristan Damron","Lord Mumfy Tump"],["Ryan Estes","Supreme Cheese Clump"],["is","happens to be"],["The","Le"],["the","le"],["ISIS","Habitat for Humanity"],["said","kept tihs information to themselves"],["he","she"],["fun","butt stuff"],["cat","mundyfumple"]]; var div = document.createElement("div"); div.class = "mdl-card"; var text = document.createTextNode("Bumping page... Stand by."); div.appendChild(text); document.body.appendChild(div); for (var i = 0; i < document.body.innerText.length; i++) { for (var j = 0; j < phrases.length; j++) { document.body.innerHTML = document.body.innerHTML.replace(phrases[j][0], phrases[j][1]);	} }'
  });
});
