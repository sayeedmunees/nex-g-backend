// 1. Import json-server
const jsonServer = require("json-server");

// 5. Import cors
const cors = require("cors");

// 2. Create a server
const server = jsonServer.create();

//  3. Setup middleware
const middleware = jsonServer.defaults();

// 4. Setup routes
const route = jsonServer.router("db.json");

// 6. Implementing use
server.use(cors());
server.use(middleware);
server.use(route);

// 7. Create port
const PORT = process.env.PORT || 3000;

// 8. Start server
server.listen(PORT, () => {
  console.log("Server running on port", PORT);
});