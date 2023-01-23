import http from "node:http";
import config from "../config.js";

const server = {};

server.httpServer = http.createServer((request, response) => {
  const ssl = request.socket.encryption ? "s" : "";
  const baseURL = `http${ssl}://${request.headers.host}`;
  const parseURL = new URL(request.url, baseURL);
  const trimmedPath = parseURL.pathname
    .replace(/^\/+|\/+$/g, "")
    .replace(/\/\/+/g, "/");
  console.log(trimmedPath);

  request.on("data", () => {
    console.log("gaunami duomenys");
  });

  request.on("end", () => {
    let HTML = server.routes[404];
    if (trimmedPath in server.routes) {
      HTML = server.routes[trimmedPath];
    }

    response.end(HTML);
  });
});

server.routes = {
  "": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Content
</body>
</html>
`,
  about: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    About
</body>
</html>
`,
  404: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    404-not found
</body>
</html>
`,
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
