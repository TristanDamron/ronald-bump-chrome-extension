var phrases = [
	["Donald Trump","Ronald Bump"],
	["Tristan Damron","Lord Mumfy Tump"],
	["Ryan Estes","Supreme Cheese Clump"],
	["the","le"],
	["ISIS","Habitat for Humanity"],
	["said","kept tihs information to themselves"]
];

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'for (int i = 0; i < phrases[0].length; i++) { document.body.innerHTML = document.body.innerHTML.replace(phrases[i][0], phrases[i][1]);	}'
  });
}
