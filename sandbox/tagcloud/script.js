document.addEventListener('DOMContentLoaded', () => {
    const tags = document.querySelectorAll('.tag');

    tags.forEach(tag => {
        const count = tag.getAttribute('data-count');
        tag.addEventListener('mouseenter', () => {
            tag.textContent += ` (${count} terms)`;
        });

        tag.addEventListener('mouseleave', () => {
            tag.textContent = tag.textContent.replace(` (${count} terms)`, '');
        });
    });
});