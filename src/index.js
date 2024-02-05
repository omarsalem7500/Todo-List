import { projectManager } from './projectManager.js';

import { domHandler}  from './domHandler.js';


document.addEventListener('DOMContentLoaded', () => {
    projectManager.loadProjectsFromLocalStorage();
    
    // After loading the projects, re-render them on the DOM
    projectManager.getProjects().forEach(project => {
      const projectContainer = domHandler.createProjectContainer(project);
      document.querySelector('.projectsList').appendChild(projectContainer);
    });
  });

 projectManager.initializeProjects();

console.log("After initialization, currentProject:", projectManager.currentProject);

domHandler.initializeEventListeners();

