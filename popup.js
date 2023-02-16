document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('submit').addEventListener('click', function() {
    var question = document.getElementById('question').value;
    var url = 'http://localhost:8080/?question=' + encodeURIComponent(question);
    chrome.tabs.create({url: url, active: true});
  });
});