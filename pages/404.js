import { PageTemplate } from "../lib/PageTemplate.js";

class Page404 extends PageTemplate {
  mainHTML() {
    return `
        <h1>Page not found</h1>`;
  }
}

export { Page404 };
