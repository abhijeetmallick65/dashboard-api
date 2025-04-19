const jsonServer = require('json-server');
const server = jsonServer.create();
const flatRouter = jsonServer.router('db.json');
const nestedRouter = jsonServer.router('db_copy.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Serve flat data on /flat
server.use('/flat', flatRouter);

// Serve nested data on /sections
server.use('/sections', nestedRouter);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
