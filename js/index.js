let topHeader = document.querySelector(".top-header")
let bulbLightMode = document.querySelector("#bulb-light-mode")
let bulbDarkMode = document.querySelector("#bulb-dark-mode")
let headerElement = document.querySelector("header h1");
let listElements = document.querySelectorAll("header li");
let resumeCloudLight = document.querySelector("#resume img:nth-child(2)")
let resumeCloudDark = document.querySelector("#resume img:nth-child(3)")
let resumeContainer = document.getElementById('resume')
console.log(resumeCloudLight);

let welcomeText = "\"Hello there !\"";

let divs = document.querySelectorAll('[data-theme]')
// Add an event listener to the checkbox
bulbDarkMode.addEventListener("click", toggleTheme);
bulbLightMode.addEventListener("click",toggleTheme)
function toggleTheme(){
    document.body.classList.toggle("dark-mode")
    document.body.classList.toggle("light-mode")
    topHeader.classList.toggle("light-mode-box-shadow")
    bulbDarkMode.classList.toggle("d-none")
    bulbLightMode.classList.toggle("d-none")
    resumeCloudLight.classList.toggle("d-none")
    resumeCloudDark.classList.toggle("d-none")
    resumeContainer.classList.toggle("white-background")
    headerElement.classList.toggle("purple-color")
    listElements.forEach((element)=>element.classList.toggle("purple-color"))
}

function showText(target, message,index, interval) {
    console.log(index)
    if (index < message.length) {
        // Append the next letter to the element
        document.getElementById(target).innerHTML += message[index++];
        // Call the function again after a delay
        setTimeout(function() {
            showText(target, message, index, interval);
        }, interval);
    } else {
        // When the message is complete, call another function to remove it
        hideText(target, message, message.length-1, interval);
    }
}

// A function that removes one letter at a time from a text element
function hideText(target, message,index, interval) {
    if (index > 0) {
        // Remove the last letter from the element
        document.getElementById(target).innerHTML = message.substring(0, index--);
        // Call the function again after a delay
        setTimeout(function() {
            hideText(target, message, index, interval);
        }, interval);
    }else{
        showText("welcome-text", welcomeText,0, 100);
    }
}
showText("welcome-text", welcomeText,0, 100);
