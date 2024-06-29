// DOMHandler.js
//import ApplicationController from "./ApplicationController.js";

export default class DOMHandler {
    constructor(appController) {
        this.app = appController;

        this.elements = {
            addProjectButton: document.getElementById("add-project-button"),
            addProjectContainer: document.getElementById("add-project"),
            inputProjectName: document.getElementById("input-project-name"),
            saveProjectButton: document.getElementById("save-project"),
            cancelProjectButton: document.getElementById("cancel-project"),

            projectList: document.getElementById("project-list"),

            main: document.getElementById("main"),

        }

        // Here are get all projects from ProjectList Class via ApplicationController
        this.projectList = this.app.getAllProjects()

        for (const project of this.projectList) {
            this.displayProjectList(project.id, project.name);
        }

        this.elements.addProjectButton.addEventListener("click", () => {
            this.elements.addProjectContainer.classList.toggle("show")
        });

        this.elements.cancelProjectButton.addEventListener("click", () => {
            this.elements.addProjectContainer.classList.toggle("show")
        })

        this.elements.saveProjectButton.addEventListener("click", () => {
            this.elements.addProjectContainer.classList.toggle("show")
            const projectName = this.elements.inputProjectName.value;
            const newId = this.app.addProject(projectName)
            this.displayProjectList(newId, projectName);
        })

    }

    displayProjectList(projectId, projectName) {
        const listItem = document.createElement('li');

        const nameBox = document.createElement('div');
        nameBox.classList.add("fii")
        nameBox.textContent = projectName + projectId;
        listItem.appendChild(nameBox);

        this.elements.projectList.appendChild(listItem);

        const img1 = document.createElement('img');
        img1.classList.add("set-project")
        img1.setAttribute("src", "assets/images/option.png");
        listItem.appendChild(img1);

        const img2 = document.createElement('img');
        img2.classList.add("edit-project")
        img2.setAttribute("src", "assets/images/edit-text.png");
        listItem.appendChild(img2);

        const img3 = document.createElement('img');
        img3.classList.add("delete-project")
        img3.setAttribute("src", "assets/images/delete.png");
        listItem.appendChild(img3);


        this.setupEventListeners(img1, projectId, projectName, "set");
        this.setupEventListeners(img2, projectId, projectName, "edit");
        this.setupEventListeners(img3, projectId, projectName, "del");
        this.setupEventListeners(nameBox, projectId, projectName, "trig");
    }

    setupEventListeners(element, projectId, projectName, action) {
        element.addEventListener("click", () => {
            if (action === 'trig') {
                console.log(`trig control- ${projectId}`);
                this.displaySelectedProject(projectId, projectName);
            }
            if (action === 'set') {
                console.log(`set control- ${projectId}`);
            } else if (action === 'edit') {
                console.log(`Edit - ${projectId}`);
            } else if (action === 'del') {
                console.log(`Removed - ${projectId}`);
                element.parentElement.remove();
                this.app.removeProject(projectId);
            }
        });
    }

    displaySelectedProject(projectId, projectName) {
        const currProjectName = document.getElementById('curr-project-name');
        currProjectName.textContent = projectName;

        // todo() - we need to get all todos from the Project Class
    }
}