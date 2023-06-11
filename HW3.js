function showGreeting() {
  var nameInput = document.getElementById("nameInput");

  var name = nameInput.value;

  var greeting = "Привет, " + name + "!";
  var newTab = window.open();
  newTab.document.write('<html><head><title>Приветствие</title></head><body><h1>' + greeting + '</h1></body></html>');
}