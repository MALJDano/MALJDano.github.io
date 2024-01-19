document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.toggle_btn');
    const links = document.querySelector('.links');

    toggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('nav-links-visible');
        toggleBtn.classList.toggle('clicked'); 
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.links a');
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, 
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const sectionId = entry.target.id;
            const link = document.querySelector(`.links a[href="#${sectionId}"]`);

            if (entry.isIntersecting) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
