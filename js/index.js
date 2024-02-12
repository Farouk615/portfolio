let topHeader = document.querySelector(".top-header")
let bulbLightMode = document.querySelector("#bulb-light-mode")
let bulbDarkMode = document.querySelector("#bulb-dark-mode")
let headerElement = document.querySelector("header h1");
let listElements = document.querySelectorAll("header li");
let elementsToggle = document.querySelectorAll(".element-to-toggle")
let resumeContainer = document.getElementById('resume')
let leftArrows = document.querySelectorAll('.left-arrow-local')
let rightArrows = document.querySelectorAll('.right-arrow-local')
let carHolder = document.querySelector('.car-holder')


let welcomeText = "\"Hello there !\"";

let divs = document.querySelectorAll('[data-theme]')
// Add an event listener to the checkbox
bulbDarkMode.addEventListener("click", toggleTheme);
bulbLightMode.addEventListener("click",toggleTheme)
function toggleTheme(){
    document.body.classList.toggle("dark-mode")
    document.body.classList.toggle("light-mode")
    topHeader.classList.toggle("light-mode-box-shadow")
    elementsToggle.forEach((element)=>element.classList.toggle("d-none"))
    resumeContainer.classList.toggle("white-background")
    headerElement.classList.toggle("purple-color")
    listElements.forEach((element)=>element.classList.toggle("purple-color"))
}

function showText(target, message,index, interval) {
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

leftArrows.forEach((element)=>{
    element.addEventListener("click",carClickLeft)
})
rightArrows.forEach((element)=>{
    element.addEventListener("click",carClickRight)
})

function carClickLeft(){
    let currentPos = carHolder.style.right || 0;
    if(parseInt(currentPos, 10)<90)
    carHolder.style.right=`${parseInt(currentPos, 10) + 30}%`;
}

function carClickRight(){
    const currentPos = carHolder.style.right || 0;
    if(parseInt(currentPos, 10)>2){
        carHolder.style.right=`${parseInt(currentPos, 10) - 30}%`;
    }
}