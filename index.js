const jsonServer = require("json-server");
const db = require("./db");
const server = jsonServer.create();
const router = jsonServer.router(db());
const middlewares = jsonServer.defaults();

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
