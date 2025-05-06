// Array of project objects
const projects = [
    {
        id: 'deamerica',
        title: 'De America Soy Website',
        company: 'Freelance',
        description: 'Developed, launched, and hosted a website for Rethinking Economics\' De America Soy Organization, establishing their online presence and communication platform.',
        icon: 'fa-globe',
        technologies: ['HTML/CSS', 'JavaScript', 'WordPress'],
        link: 'https://deamericasoy.org/'
    },
    {
        id: 'drop-calculator',
        title: 'Drop Calculator Sales Tool',
        company: 'Gigastar',
        description: 'A React and TypeScript-based sales tool that helped secure equity deals worth hundreds of thousands of dollars. This tool calculated potential revenue for creators based on various metrics.',
        icon: 'fa-calculator',
        technologies: ['React', 'TypeScript', 'CSS'],
        link: 'https://gigastar.io/'
    },
    {
        id: 'amazon-registry',
        title: 'Amazon Baby Registry Features',
        company: 'Amazon',
        description: 'Designed and implemented multiple key features for Amazon Baby Registry, including the Visitor View Page, Frequently Added Items Widget (increased item adds by 18%), and the Share Page.',
        icon: 'fa-gift',
        technologies: ['Java Spring', 'JavaScript', 'AWS'],
        link: 'https://www.amazon.com/baby-reg'
    },
    {
        id: 'onboarding',
        title: 'Onboarding Automation',
        company: 'Gigastar',
        description: 'Backend system developed in Go that streamlined the creator onboarding process, saving significant time for the sales team and prioritizing promising candidates.',
        icon: 'fa-user-plus',
        technologies: ['Go', 'REST API', 'SQL'],
        link: null
    },
    {
        id: 'bi-dashboards',
        title: 'Business Intelligence Dashboards',
        company: 'Gigastar',
        description: 'Created comprehensive BI dashboards using Looker Studio and BigQuery, enabling data-driven decision making with visualizations of key business metrics.',
        icon: 'fa-chart-line',
        technologies: ['Looker Studio', 'BigQuery', 'SQL'],
        link: null
    },
    {
        id: 'crm-management',
        title: 'CRM & Database Management',
        company: 'Freelance',
        description: 'Managed and configured HubSpot CRM and Airtable databases for Rethinking Economics, improving contact organization and project data accessibility.',
        icon: 'fa-database',
        technologies: ['HubSpot', 'Airtable', 'Data Management'],
        link: null
    }
];

// Function to generate HTML for a project card
function createProjectCard(project) {
    const isLinked = project.link !== null;
    
    // Create the card content
    const cardHTML = `
        <div class="project-card">
            <div class="project-header">
                <i class="fas ${project.icon} project-icon"></i>
                <h3>${project.title}</h3>
                <span class="project-tag">${project.company}</span>
            </div>
            <div class="project-body">
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
    
    // If the project has a link, wrap it in an anchor tag
    if (isLinked) {
        return `
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">
                ${cardHTML}
            </a>
        `;
    }
    
    // Otherwise return just the card
    return cardHTML;
}

// Function to render all project cards
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    // Clear any existing content
    projectsGrid.innerHTML = '';
    
    // Add each project card to the grid
    projects.forEach(project => {
        projectsGrid.innerHTML += createProjectCard(project);
    });
}

// Render projects when the DOM is loaded
document.addEventListener('DOMContentLoaded', renderProjects); 