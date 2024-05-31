const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');

// TODO: finish creating this element config
const elementConfig = [
    {
        id: 'nav',
        darkClass: 'nav-dark',
        lightClass: 'nav-light'
    },
    {
        id: 'text-box',
        darkClass: 'text-box-dark',
        lightClass: 'text-box-light'
    }
]

const imageConfig = [
    {
        id: 'image1',
        lightFile: 'img/undraw_feeling_proud_light.svg',
        darkFile: 'img/undraw_feeling_proud_dark.svg'
    },
    {
        id: 'image2',
        lightFile: 'img/undraw_code_typing_re_light.svg',
        darkFile: 'img/undraw_code_typing_re_dark.svg'
    },
    {
        id: 'image3',
        lightFile: 'img/undraw_engineering_team_light.svg',
        darkFile: 'img/undraw_engineering_team_dark.svg'
    }
]

// Dark or Light Images
function imageMode(mode) {
    imageConfig.forEach((image) => {
        const imageElement = document.getElementById(image.id); // dynamically defines image element in the dom
        if (imageElement) {
            imageElement.src = image[`${mode}File`];
        } else {
            console.log('missing image element');
        }
    })
}

// toggle Light and Dark Mode for elements
function toggleElementMode() {
    // Loop over Dark and Light Elements
    elementConfig.forEach((elementObj) => {
        const element = document.getElementById(elementObj.id);
        if (element) {
            element.classList.toggle(`${element.id}-dark`)
        } else {
            console.log('missing DOM element');
        }
    })
}

function toggleDarkLightMode(isDark) {
    toggleElementMode();
    isDark ? imageMode('dark') : imageMode('light');
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') :    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false);
    }
}

// Event Listeners
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (currentTheme === 'dark')
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    if (currentTheme === 'light') {
        toggleSwitch.checked = false;
        toggleDarkLightMode(false);
    }
}