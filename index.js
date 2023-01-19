import { server } from "./lib/server.js";
const app = {};

app.init = () => {
  console.log("pradedam");
  server.init();
};

app.init();

export { app };
