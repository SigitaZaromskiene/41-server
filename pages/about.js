import { PageTemplate } from "../lib/PageTemplate.js";

class PageAbout extends PageTemplate {
  constructor() {
    super();
    this.pageTitle = "About";
  }
  mainHTML() {
    return `Hello, this is about`;
  }
}

export { PageAbout };
