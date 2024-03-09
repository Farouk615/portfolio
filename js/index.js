let topHeader = document.querySelector(".top-header")
let bulbLightMode = document.querySelector("#bulb-light-mode")
let bulbDarkMode = document.querySelector("#bulb-dark-mode")
let headerElement = document.querySelector("header h1");
let headerElementSideBar = document.querySelector("#sidebar-header h1");
let sidebarHeaders = document.querySelectorAll('.sidebar-header')
let listElements = document.querySelectorAll("header li");
let elementsToggle = document.querySelectorAll(".element-to-toggle")
let resumeContainer = document.getElementById('resume')
let leftArrows = document.querySelectorAll('.left-arrow-local')
let rightArrows = document.querySelectorAll('.right-arrow-local')
let carHolder = document.querySelector('.car-holder')
let experiences = document.querySelectorAll('.experience')
let flags = document.querySelectorAll('.flag')
let emailForm = document.querySelector('.email-form ')
let sidebarButtons = document.querySelectorAll('.sidebar-button')
let sidebar = document.querySelector('#sidebar')
let sidebarIcon = document.querySelector('#sidebar-header i')
let sidebarHeader = document.querySelector('#sidebar-header')
let certifLeftArrows = document.querySelectorAll('.arrow-left')
let certifRightArrows = document.querySelectorAll('.arrow-right')
let certificates = document.querySelectorAll('.certif')
let certificatesIndex = 0;
let form = document.querySelector('#email-form')
let overlay = document.querySelector("#overlay")
let loader = document.querySelector(".loader")
let popup = document.querySelector('#popup-after-send')
let successBox = document.querySelector('#success-box')
let failureBox = document.querySelector('#failure-box')
let okButton = document.querySelector('#popup-ok')



const mediaQuery = window.matchMedia('(max-width: 991px)');

experiences[0].classList.add('explode-animation')

let welcomeText = "\"Hello there !\"";
let experienceCounter = 0;

// Add an event listener to the checkbox
bulbDarkMode.addEventListener("click", toggleTheme);
bulbLightMode.addEventListener("click", toggleTheme)

function toggleTheme() {
    document.body.classList.toggle("dark-mode")
    document.body.classList.toggle("light-mode")
    topHeader.classList.toggle("light-mode-box-shadow")
    elementsToggle.forEach((element) => element.classList.toggle("d-none"))
    resumeContainer.classList.toggle("white-background")
    headerElement.classList.toggle("purple-color")
    headerElementSideBar.classList.toggle("purple-color")
    sidebarHeader.classList.toggle('sidebar-header-light')
    listElements.forEach((element) => element.classList.toggle("purple-color"))
    sidebarHeaders.forEach((element)=>element.classList.toggle('header-white'))
    sidebar.classList.toggle('sidebar-background-light')
    sidebarIcon.classList.toggle('icons-light')
    emailForm.classList.toggle('background-light')
    emailForm.classList.toggle('box-shadow-light')
}

function showText(target, message, index, interval) {
    if (index < message.length) {
        // Append the next letter to the element
        document.getElementById(target).innerHTML += message[index++];
        // Call the function again after a delay
        setTimeout(function () {
            showText(target, message, index, interval);
        }, interval);
    } else {
        // When the message is complete, call another function to remove it
        hideText(target, message, message.length - 1, interval);
    }
}

// A function that removes one letter at a time from a text element
function hideText(target, message, index, interval) {
    if (index > 0) {
        // Remove the last letter from the element
        document.getElementById(target).innerHTML = message.substring(0, index--);
        // Call the function again after a delay
        setTimeout(function () {
            hideText(target, message, index, interval);
        }, interval);
    } else {
        showText("welcome-text", welcomeText, 0, 100);
    }
}

showText("welcome-text", welcomeText, 0, 100);

leftArrows.forEach((element) => {
    element.addEventListener("click", carClickLeft)
})
rightArrows.forEach((element) => {
    element.addEventListener("click", carClickRight)
})

function carClickLeft() {
    experiences[experienceCounter].classList.remove('explode-animation')
    experienceCounter++;
    let currentPos = carHolder.style.right || 0;
    if (parseInt(currentPos, 10) < 90)
        carHolder.style.right = `${parseInt(currentPos, 10) + 32}%`;
    if (experienceCounter === 3)
        flags.forEach((element) => element.classList.add('margin-bottom'))
    else {
        flags.forEach((element) => element.classList.remove('margin-bottom'))
    }
    experiences[experienceCounter].classList.add('explode-animation')
}

function carClickRight() {
    const currentPos = carHolder.style.right || 0;
    if (parseInt(currentPos, 10) > 2 && experienceCounter > 0) {
        experiences[experienceCounter].classList.remove('explode-animation')
        experienceCounter--;
        carHolder.style.right = `${parseInt(currentPos, 10) - 32}%`;
        if (experienceCounter === 3)
            flags.forEach((element) => element.classList.add('margin-bottom'))
        else {
            flags.forEach((element) => element.classList.remove('margin-bottom'))
        }
        experiences[experienceCounter].classList.add('explode-animation')
    }
}


certifLeftArrows.forEach((element) => element.addEventListener('click', () => {
    certificates[certificatesIndex].classList.remove('active-certificate');
    certificatesIndex--;
    if (certificatesIndex == -1) {
        certificatesIndex = 7;
    }
    certificates[certificatesIndex].classList.add('active-certificate');
    console.log(certificatesIndex)

}))
certifRightArrows.forEach((element) => element.addEventListener('click', () => {
    certificates[certificatesIndex].classList.remove('active-certificate');
    certificatesIndex++;
    if (certificatesIndex === 8) {
        certificatesIndex = 0;
    }
    certificates[certificatesIndex].classList.add('active-certificate');
    console.log(certificatesIndex)

}))

form.addEventListener('submit', async (e) => {
    console.log('hkgk')
    overlay.classList.remove('hide')
    e.preventDefault();
    const fname = document.getElementById('first-name').value;
    const lname = document.getElementById('last-name').value;
    const message = document.getElementById('message').value;
    await fetch(`${process.env.URL}/send-email`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({fname, lname, message}),
    }).then((res) => {
        popup.classList.remove('hide')
        loader.classList.add('hide')
    }).catch((error) => {
        successBox.classList.add('hide')
        failureBox.classList.remove('hide')
        popup.classList.remove('hide')
        loader.classList.add('hide')
    })
})

okButton.addEventListener('click',()=>{
    overlay.classList.add('hide')
    loader.classList.remove('hide')
    popup.classList.add('hide')
    if(successBox.classList.contains('hide')){
        successBox.classList.remove('hide')
        failureBox.classList.add('hide')
    }
})
sidebarButtons.forEach((element)=>{
    element.addEventListener('click',()=>{
        sidebar.classList.toggle('left-change')
    })
})

/*document.addEventListener('click', function(event) {
    // Check if the click is outside the popup
    if (!popup.contains(event.target)) {
        closeOverlay();
    }
});*/