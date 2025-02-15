document.addEventListener("DOMContentLoaded", () => {
    const pricingCards = document.querySelectorAll(".pricing-card");

    // Add hover animation on pricing cards
    pricingCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.classList.add("hovered");
        });

        card.addEventListener("mouseout", () => {
            card.classList.remove("hovered");
        });
    });

    // Optional: Add a subtle entry animation when the page loads
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    });

    pricingCards.forEach(card => {
        observer.observe(card);
    });
});
