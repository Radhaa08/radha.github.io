document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.querySelector('.welcome-text');
    const text =typingElement.getAttribute('data-text')
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 300); // Adjust typing speed here (in milliseconds)
        }
    }

    type();

    // Toggle mode functionality
    const toggleButton = document.getElementById('toggleMode');
    const body = document.body;

    // Set the initial state to dark mode
    body.classList.add('dark-mode');
    updateBackground(true);

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        updateBackground(body.classList.contains('dark-mode'));
        updateTextColors(body.classList.contains('dark-mode'));
    });

    function updateBackground(isDarkMode) {
        const darkModeBackground = toggleButton.getAttribute('data-dark-mode-background');

        if (isDarkMode) {
            body.style.backgroundImage = "url('https://images.squarespace-cdn.com/content/v1/62e7473003e99432886bfc3b/7c573c83-1550-4f4e-a13e-1ef3c9389be3/portfolio_website_video.gif?format=2500w')";
            // Dark mode background image URL
        } else {
            body.style.backgroundImage = "url('https://plus.unsplash.com/premium_photo-1667587245819-2bea7a93e7a1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRmb2xpbyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')"; // No background image in light mode
        }
    }

    function updateTextColors(isDarkMode) {
        // Add code to update text colors based on dark mode state if needed
    }

});
