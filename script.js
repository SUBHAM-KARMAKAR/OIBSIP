document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        { name: "Portfolio", link: "https://subham-karmakar.github.io/OIBSIP/portfolio/" },
        { name: "Temp Converter", link: "https://subham-karmakar.github.io/OIBSIP/Temp-Converter/" },
        { name: "Landing Page", link: "https://subham-karmakar.github.io/OIBSIP/landing-page/" }
    ];

    const projectsList = document.getElementById('projects-list');

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        projectDiv.innerHTML = `
            <h3>${project.name}</h3>
            <a href="${project.link}" target="_blank">${project.link}</a>
        `;

        projectsList.appendChild(projectDiv);
    });
});
