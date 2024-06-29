import { createProject } from './Project.js';

class ProjectList {
    constructor() {
        this._projectList = []
        this._projectIdCounter = 0;
    }

    fooTest = "BOO";

    get projectList() {
        return this._projectList;
    }

    removeProject(id) {
        const project = this._projectList.find(project => project.id === id);

        if (!project) {
            throw new Error(`Todo with id ${id} does not exist.`);
        }

        this._projectList = this._projectList.filter(project => project.id !== id);
    }

    addProject(name) {
        this._projectIdCounter++;
        // SRP - Project list is not responsible creating new Project
        // const newProject = new Project(this._projectIdCounter, name);
        const newProject = createProject(this._projectIdCounter, name);
        this.projectList.push(newProject);
        return this._projectIdCounter;
    }
}

export default ProjectList;