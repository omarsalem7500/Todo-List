import { projectManager } from './projectManager.js';

import { domHandler}  from './domHandler.js';

projectManager.initializeProjects();
console.log("After initialization, currentProject:", projectManager.currentProject);

domHandler.initializeEventListeners();

// projectManager.projects.forEach(project => {
//     domHandler.renderProject(project);
//   });

// Initialize projects from local storage or create a default project


// Render all projects initially
// domHandler.renderAllProjects(projectManager.getProjects());

// Optional: Render todos for the active project initially
// domHandler.renderTodosForActiveProject();