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
let sidebarButton = document.querySelector('#sidebar-button')
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
let bubbleHolder = document.querySelector('.bubble-holder')
let bubble = document.querySelectorAll('.bubble-holder .bubble')
let myName = document.querySelector('#my-name')
let introParagraph = document.querySelector('#intro-section p')
let faroukPhoto = document.querySelector('#photo-section img:first-child')
let footer = document.querySelector('footer')


// validation elements
let firstNameValidation = document.querySelector('#fname-valid')
let lastNameValidation = document.querySelector('#lname-valid')
let bodyValidation = document.querySelector('#body-valid')

let fname = document.getElementById('first-name');
let lname = document.getElementById('last-name');
let message = document.getElementById('message');

fname.addEventListener('input', () => {
    if (fname.value === '') {
        firstNameValidation.classList.add('reveal')
        fname.classList.add('validation-border-bottom')
    } else {
        firstNameValidation.classList.remove('reveal')
        fname.classList.remove('validation-border-bottom')
    }
})
lname.addEventListener('input', () => {
    if (lname.value === '') {
        lastNameValidation.classList.add('reveal')
        lname.classList.add('validation-border-bottom')
    } else {
        lastNameValidation.classList.remove('reveal')
        lname.classList.remove('validation-border-bottom')
    }
})
message.addEventListener('input', () => {
    if (message.value === '') {
        bodyValidation.classList.add('reveal')
        message.classList.add('validation-border')
    } else {
        bodyValidation.classList.remove('reveal')
        message.classList.remove('validation-border')
    }
})


window.addEventListener('scroll', handleScroll);

function handleScroll() {
    const rectBubbleHolder = bubbleHolder.getBoundingClientRect();
    const rectMyName = myName.getBoundingClientRect();
    const rectPhoto = faroukPhoto.getBoundingClientRect();
    if (rectBubbleHolder.top < window.innerHeight && rectBubbleHolder.bottom > 0) {
        bubbleHolder.classList.add('hovered');
    } else {
        bubbleHolder.classList.remove('hovered');
    }
    if (rectMyName.top < window.innerHeight && rectMyName.bottom > 0) {
        myName.classList.add('text-active');
        introParagraph.classList.add('text-active');
    } else {
        myName.classList.remove('text-active');
        introParagraph.classList.add('text-active');
    }
    if (rectPhoto.top < window.innerHeight && rectPhoto.bottom > 0) {
        faroukPhoto.classList.add('photo-active');
    } else {
        faroukPhoto.classList.remove('photo-active');
    }
}

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
    bubble.forEach((element) => element.classList.toggle('bubble-light'))
    listElements.forEach((element) => element.classList.toggle("purple-color"))
    sidebarHeaders.forEach((element) => element.classList.toggle('header-white'))
    sidebar.classList.toggle('sidebar-background-light')
    sidebarIcon.classList.toggle('icons-light')
    emailForm.classList.toggle('background-light')
    emailForm.classList.toggle('box-shadow-light')
    footer.classList.toggle('footer-light')
}

function showText(target, message, index, interval) {
    let title = document.getElementById(target);
    if (index < message.length) {
        title.innerHTML += message[index++];
        setTimeout(function () {
            showText(target, message, index, interval);
        }, interval);
    } else {
        hideText(target, message, message.length - 1, interval);
    }
}

function hideText(target, message, index, interval) {
    if (index > 0) {
        document.getElementById(target).innerHTML = message.substring(0, index--);
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
        carHolder.style.right = `${parseInt(currentPos, 10) + 30}%`;
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
        carHolder.style.right = `${parseInt(currentPos, 10) - 30}%`;
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
    if (certificatesIndex === -1) {
        certificatesIndex = 7;
    }
    certificates[certificatesIndex].classList.add('active-certificate');

}))
certifRightArrows.forEach((element) => element.addEventListener('click', () => {
    certificates[certificatesIndex].classList.remove('active-certificate');
    certificatesIndex++;
    if (certificatesIndex === 8) {
        certificatesIndex = 0;
    }
    certificates[certificatesIndex].classList.add('active-certificate');
}))

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!fname.value) {
        if (!firstNameValidation.classList.contains('reveal')) {
            fname.classList.add('validation-border-bottom')
            firstNameValidation.classList.add('reveal')
        }
    }
    if (!lname.value) {
        if (!lastNameValidation.classList.contains('reveal')) {
            lname.classList.add('validation-border-bottom')
            lastNameValidation.classList.add('reveal')
        }
    }
    if (!message.value) {
        if (!bodyValidation.classList.contains('reveal')) {
            message.classList.add('validation-border')
            bodyValidation.classList.add('reveal')
        }
    }
    if (fname.value !== '' && lname.value !== '' && message.value !== '') {
        firstNameValidation.classList.remove('reveal')
        lastNameValidation.classList.remove('reveal')
        bodyValidation.classList.remove('reveal')
        overlay.classList.remove('hide')
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
    }
})

okButton.addEventListener('click', () => {
    overlay.classList.add('hide')
    loader.classList.remove('hide')
    popup.classList.add('hide')
    if (successBox.classList.contains('hide')) {
        successBox.classList.remove('hide')
        failureBox.classList.add('hide')
    }
})
sidebarButtons.forEach((element) => {
    element.addEventListener('click', () => {
        sidebar.classList.toggle('left-change')
    })
})

document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !sidebarButton.contains(event.target)) {
        if (sidebar.classList.contains('left-change'))
            sidebar.classList.remove('left-change');
    }
    if (!popup.contains(event.target)) {
        if (!overlay.classList.contains('hide') && !popup.classList.contains('hide')) {
            overlay.classList.add('hide')
            popup.classList.add('hide')
            loader.classList.remove('hide')
        }
    }
});
