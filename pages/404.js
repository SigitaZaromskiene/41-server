import { PageTemplate } from "../lib/PageTemplate.js";

class Page404 extends PageTemplate {
  constructor() {
    super();
    this.pageTitle = "404";
  }

  mainHTML() {
    return `
        <h1>Page not found</h1>`;
  }
}

export { Page404 };
