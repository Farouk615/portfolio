let checkbox = document.getElementById("theme-switch");
let topHeader = document.querySelector(".top-header")
let bulbLightMode = document.querySelector("#bulb-light-mode")
let bulbDarkMode = document.querySelector("#bulb-dark-mode")
let headerElement = document.querySelector("header h1");

let divs = document.querySelectorAll('[data-theme]')
// Add an event listener to the checkbox
bulbDarkMode.addEventListener("click", toggleTheme);
bulbLightMode.addEventListener("click",toggleTheme)
function toggleTheme(){
    document.body.classList.toggle("dark-mode")
    topHeader.classList.toggle("light-mode-box-shadow")
    bulbDarkMode.classList.toggle("d-none")
    bulbLightMode.classList.toggle("d-none")
    headerElement.classList.toggle("purple-color")
}