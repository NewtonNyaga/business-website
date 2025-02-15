// Function to add animation class when the element is in the viewport
function animateOnScroll() {
    const infoBoxes = document.querySelector('.info-box');
    const infoItems = document.querySelectorAll('.info-item');
    
    // Check if the info-box is in the viewport
    const isInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (rect.top >= 0 && rect.bottom <= window.innerHeight);
    };

    // Add class to animate when the section is in view
    if (isInViewport(infoBoxes)) {
        infoBoxes.classList.add('animate');
        infoItems.forEach((item, index) => {
            item.classList.add('animate-item-' + index); // Add specific class for each item
        });
    }
}

// Add the animation classes when the user scrolls
window.addEventListener('scroll', animateOnScroll);

// Initial call in case the section is already in view when the page loads
animateOnScroll();
