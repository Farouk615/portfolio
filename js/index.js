let checkbox = document.getElementById("theme-switch");
let topHeader = document.querySelector(".top-header")
let bulbLightMode = document.querySelector("#bulb-light-mode")
let bulbDarkMode = document.querySelector("#bulb-dark-mode")

let divs = document.querySelectorAll('[data-theme]')
// Add an event listener to the checkbox
bulbDarkMode.addEventListener("click", () => {
    // Toggle the data attribute based on the checkbox state
    document.body.classList.toggle("dark-mode")
    topHeader.classList.toggle("light-mode-box-shadow")
    bulbDarkMode.classList.toggle("invisible")
    bulbLightMode.classList.toggle("invisible")
});