/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav 
document.addEventListener('DOMContentLoaded', () => {
    function buildNavigation() { //This function builds the navigation
        const sections = document.querySelectorAll('section');
        const navbarList = document.getElementById('navbar__list');
        sections.forEach(section => {
            const sectionId = section.getAttribute('id');
            const sectionName = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.innerHTML = sectionName;
            a.href = `#${sectionId}`;
            li.appendChild(a);
            navbarList.appendChild(li);
        });
    }
    function makeActive(){ // This function sets the sections as active. 
        const sections = document.querySelectorAll('section');
        const navbarLinks = document.querySelectorAll('.navbar__menu a');
        let currentSection = sections[0];
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                currentSection = section;
            }
        });
        sections.forEach(sec => {
            sec.classList.remove('active');
        });
        currentSection.classList.add('active');
        navbarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection.getAttribute('id')}`) {
                link.classList.add('active');
            }
        });
    }
    function scrollToSection(event) { // This function makes the web page scroll to section after clicking on it in the navbar.
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({behavior: 'smooth' });
    }
    buildNavigation(); // Call to build the Navigation bar.
window.addEventListener('scroll', makeActive);
    makeActive(); // Call to highlight the section in view on page load
    const navbarLinks = document.querySelectorAll('.navbar__menu a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


