import { PageTemplate } from "../lib/PageTemplate.js";

class PageAbout extends PageTemplate {
  mainHTML() {
    return `Hello, this is about`;
  }
}

export { PageAbout };
