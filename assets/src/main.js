const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

// Set active item and hide menu
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    // Active link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    // Hides mobile menu on click
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 200,
    reset: true
})

// Scroll home

sr.reveal('.home-title', {});
sr.reveal('.button', {delay: 200});
sr.reveal('.home-img', {delay: 400});
sr.reveal('.home-social-icon', {interval: 400});

// Scroll about

sr.reveal('.about-img', {});
sr.reveal('.about-subtitle', {delay: 200});
sr.reveal('.about-text', {delay: 400});

// Scroll skills
sr.reveal('.skills-subtitle', {});
sr.reveal('.skills-text', {delay: 200});
sr.reveal('.skills-data', {interval: 200});
sr.reveal('.skills-img', {delay: 400});

// Scroll experience
sr.reveal('.experience-img', {delay: 400});
sr.reveal('.experience-subtitle', {interval: 400});
sr.reveal('.experience-list-item', {interval: 200});



// Scroll contact
sr.reveal('.contact-input', {interval: 200});






