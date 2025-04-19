const jsonServer = require('json-server');
const server = jsonServer.create();
const flatRouter = jsonServer.router('db.json');
const nestedRouter = jsonServer.router('db_copy.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get('/flat', (req, res) => {
  res.json(flatRouter.db.get('metrics').value());
});

server.get('/sections', (req, res) => {
  res.json(nestedRouter.db.get('sections').value());
});

server.use('/flat', flatRouter);
server.use('/sections', nestedRouter);

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`JSON Server running on port ${port}`);
});
