document.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const serviceDetails = button.nextElementSibling;
            if (serviceDetails.style.display === 'none' || serviceDetails.style.display === '') {
                serviceDetails.style.display = 'block';
                button.textContent = 'Read Less';
            } else {
                serviceDetails.style.display = 'none';
                button.textContent = 'Read More';
            }
        });
    });
});
