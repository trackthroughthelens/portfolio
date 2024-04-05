document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.journey-section');
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            document.body.style.backgroundColor = section.dataset.theme;
        }
    });
});
