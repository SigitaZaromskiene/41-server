import http from "node:http";

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
    response.end(`<!DOCTYPE html>
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
`);
  });
});
server.init = () => {
  console.log("paleidziam serveri");
  server.httpServer.listen(41069);
};

export { server };
