// ApplicationController.js // use by the DOMHandler
import ProjectList from "./ProjectList.js";

class ApplicationController {
    constructor() {
        this.projectList = new ProjectList();

        // Create Default Project and add it to ProjectList Class
        // Later on these will come from Local Storage
        // So we will need to load them. if empty we then create a default
        this.projectList.addProject('Default');
    }

    getAllProjects() {
        return this.projectList.projectList;
    }

    removeProject(id) {
        this.projectList.removeProject(id);
        console.log(this.projectList)
    }

    addProject(name) {
        return this.projectList.addProject(name)
    }
}

export default ApplicationController;