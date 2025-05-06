document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentYearSpan = document.getElementById('current-year');

    // Set current year in footer
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Theme toggle functionality
    if (themeToggleBtn) {
        // Check for saved theme preference in localStorage
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.body.classList.add(currentTheme);
            // Ensure the correct icon is shown on load
            if (currentTheme === 'dark-theme') {
                // If dark theme, moon should be hidden, sun shown
                // The CSS handles this by default, but this is for clarity
            }
        } else {
            // Default to light theme if no preference or if system prefers light
            // You could add prefers-color-scheme detection here if desired
            // For now, let's default to light if nothing is set.
        }


        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');

            // Save theme preference
            if (document.body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark-theme');
            } else {
                localStorage.removeItem('theme'); // Or set to 'light-theme'
            }
        });
    }
});