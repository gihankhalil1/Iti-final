document.addEventListener('DOMContentLoaded', function () {


    const navLinks = document.querySelectorAll('a.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll reveal animation
    const sections = document.querySelectorAll('.reveal');
    const revealOptions = {
        rootMargin: '-50px 0px', // Adjust root margin as needed
        threshold: 0.2
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

});