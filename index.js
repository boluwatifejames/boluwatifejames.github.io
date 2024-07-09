document.addEventListener('DOMContentLoaded', function() {
    
    const navLinks = document.querySelectorAll('nav ul li a');
    for (const link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    }
});
