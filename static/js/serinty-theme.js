function myNavigate() {
  let elem = document.getElementById("elem");
  document.addEventListener("click", (e) =>
    console.log(typeof e.target.value)
  );
}
  
function toggleLightDarkMode() {
    var bntElement = document.getElementById("darkmodetogglebutton");
    if(bntElement.value == "light") {
        bntElement.value = "dark";
        bntElement.innerText == "☾";
        bntElement.classList.toggle("dark-mode");
    } else {
        bntElement.value = "light";
        bntElement.innerText == "☼";
        bntElement.classList.toggle("dark-mode");   
    }
}
