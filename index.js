
var yes = document.getElementById("yes");

yes.addEventListener("click", function() {
var yes= document.getElementById("yes");
  if (yes.textContent === "click me:)") {
    yes.textContent = "You clicked the paragraph!";
  } else {
    yes.textContent = "You already clicked the paragraph!";
  }
});