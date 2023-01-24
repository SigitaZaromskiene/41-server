import http from "node:http";
import config from "../config.js";
import { Page404 } from "../pages/404.js";
import { PageAbout } from "../pages/about.js";
import { PageHome } from "../pages/home.js";

const server = {};

server.httpServer = http.createServer((request, response) => {
  const ssl = request.socket.encryption ? "s" : "";
  const baseURL = `http${ssl}://${request.headers.host}`;
  const parseURL = new URL(request.url, baseURL);
  const trimmedPath = parseURL.pathname
    .replace(/^\/+|\/+$/g, "")
    .replace(/\/\/+/g, "/");
  console.log(trimmedPath);

  const extension = utils.fileExtension(trimmedPath);

  const isTextFile = ["css", "js"].includes(extension);
  const isBinaryFile = ["jpg", "png", "ico"].includes(extension);
  const isAPI = trimmedPath.includes("api");
  const isPage = !isTextFile && !isAPI && !isBinaryFile;

  request.on("data", () => {
    console.log("gaunami duomenys");
  });

  request.on("end", () => {
    if (isTextFile) {
      response.end("texto failas");
    }

    if (isBinaryFile) {
      response.end("binary failas");
    }

    if (isAPI) {
      response.end("api failas");
    }
    if (isPage) {
      let PageClass = server.routes[404];
      if (trimmedPath in server.routes) {
        PageClass = server.routes[trimmedPath];
      }

      const page = new PageClass();

      response.end(page.render());
    }
  });
});

server.routes = {
  "": PageHome,
  about: PageAbout,
  404: Page404,
};
server.init = () => {
  const { port } = config;
  console.log("paleidziam serveri");
  server.httpServer.listen(port, () => {
    console.log(config);
    console.log(`Projekto nuoroda: http://localhost:${port}/`);
  });
};

export { server };
