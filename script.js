document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentYearSpan = document.getElementById('current-year');
    const downloadResumeBtn = document.getElementById('download-resume');

    // Set current year in footer
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Theme toggle functionality
    if (themeToggleBtn) {
        // Check for saved theme preference in localStorage
        const currentTheme = localStorage.getItem('theme');
        
        if (currentTheme === 'dark-theme') {
            document.documentElement.classList.add('dark-theme');
            document.body.classList.add('dark-theme');
        } else if (currentTheme === 'light-theme') {
            // If light theme is explicitly set, ensure dark theme is removed
            document.documentElement.classList.remove('dark-theme');
            document.body.classList.remove('dark-theme');
        } else {
            // Set dark theme as the default when no preference exists
            document.documentElement.classList.add('dark-theme');
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        }

        themeToggleBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark-theme');
            document.body.classList.toggle('dark-theme');

            // Save theme preference
            if (document.body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark-theme');
            } else {
                localStorage.setItem('theme', 'light-theme'); // Store light theme preference instead of removing
            }
        });
    }

    // Download resume functionality (placeholder)
    if (downloadResumeBtn) {
        downloadResumeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Resume download functionality would be implemented here. This would typically link to a PDF file.');
            // In a real implementation, you would set the href to the PDF file:
            // downloadResumeBtn.href = 'path/to/benjamin-gur-resume.pdf';
        });
    }

    // Project card hover effects enhancement
    const projectCards = document.querySelectorAll('.project-card');
    if (projectCards.length > 0) {
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            });
        });
    }
});