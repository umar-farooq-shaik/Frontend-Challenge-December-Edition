// Create a container for the snow effect
const snowContainer = document.createElement('div');
snowContainer.style.position = 'fixed';
snowContainer.style.top = '0';
snowContainer.style.left = '0';
snowContainer.style.width = '100vw';
snowContainer.style.height = '100vh';
snowContainer.style.pointerEvents = 'none';
snowContainer.style.overflow = 'hidden';
snowContainer.style.zIndex = '2001';
document.body.appendChild(snowContainer);

// Function to create a falling snowflake
const createSnowflake = () => {
    const snowflake = document.createElement('div');
    
    // Randomly decide between a traditional snowflake or a circle snowflake
    if (Math.random() < 0.5) {
        snowflake.classList.add('snowflake');
        snowflake.innerText = '❄'; // Add snowflake character
    } else {
        snowflake.classList.add('snow-circle');
        const size = Math.random() * 7 + 5; // Circle size between 5px and 11px
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
    }

    // Random horizontal position and movement
    const randomLeft = Math.random() * 100 + 'vw'; // Random start position
    const randomDirection = Math.random() < 0.5 ? 1 : -1; // Random horizontal movement direction
    const randomDistance = Math.random() * 50 + 50; // Horizontal distance range
    snowflake.style.setProperty('--random-x', `${randomDirection * randomDistance}px`);

    // Set additional snowflake styles
    snowflake.style.left = randomLeft;
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Animation duration (2-5 seconds)
    snowflake.style.opacity = Math.random(); // Randomize opacity for a natural look
    snowContainer.appendChild(snowflake);

    // Remove snowflake after its animation ends
    setTimeout(() => {
        snowflake.remove();
    }, 5000); // Remove after 5 seconds
};

// Generate snowflakes every 100 milliseconds
setInterval(createSnowflake, 100);

// Smooth scroll to top function
function scrollToTop(e) {
    e.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
}

// Create a "Back to Top" button
const backToTop = document.createElement('button');
backToTop.textContent = '↑'; // Button text
backToTop.style.position = 'fixed';
backToTop.style.bottom = '20px';
backToTop.style.right = '20px';
backToTop.style.border = 'none';
backToTop.style.width = '60px';
backToTop.style.height = '60px';
backToTop.style.lineHeight = '60px';
backToTop.style.fontSize = '40px';
backToTop.style.textAlign = 'center';
backToTop.style.borderRadius = '50%'; // Circular button
backToTop.style.background = '#013e80';
backToTop.style.color = '#fff';
backToTop.style.cursor = 'pointer';
backToTop.style.display = 'none'; // Initially hidden
document.body.appendChild(backToTop);

// Show/Hide "Back to Top" button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block'; // Show button if scrolled 300px or more
    } else {
        backToTop.style.display = 'none'; // Hide button otherwise
    }
});

// Scroll to top when "Back to Top" button is clicked
backToTop.addEventListener('click', scrollToTop);

// Add smooth scrolling to footer navigation links
document.querySelectorAll('#footer-nav a').forEach(link => {
    if (link.getAttribute('href') === '#main-header') {
        link.addEventListener('click', scrollToTop);
    }
});
