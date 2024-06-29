import ApplicationController from "./ApplicationController.js";
import DOMHandler from "./DOMHandler.js";

const appController = new ApplicationController();
new DOMHandler(appController);
