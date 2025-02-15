// Add bounce animation on page load
const pricingButton = document.querySelector(".pricing-button");

// Optional: Trigger the animation only when the button is visible
window.addEventListener("scroll", () => {
    const rect = pricingButton.getBoundingClientRect();
    const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

    if (isVisible) {
        pricingButton.classList.add("bounce");
    } else {
        pricingButton.classList.remove("bounce");
    }
});

// Optional: Stop bounce animation on hover
pricingButton.addEventListener("mouseover", () => {
    pricingButton.classList.remove("bounce");
});

pricingButton.addEventListener("mouseout", () => {
    pricingButton.classList.add("bounce");
});
