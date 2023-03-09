var para = document.getElementById("myPara");


para.addEventListener("click", function() {
var result = document.getElementById("result");
  if (para.textContent === "Click me!") {
    result.textContent = "You clicked the paragraph!";
  } else {
    result.textContent = "You already clicked the paragraph!";
  }
});