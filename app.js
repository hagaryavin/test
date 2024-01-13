console.log("hello");
function hi() {
  console.log("hello #2");
  if (window.screen.availWidth < 480 || window.screen.width < 480) {
    console.log("hello #3");
    document.getElementById("greeting").innerHTML = "it Worked!";
  }
}
