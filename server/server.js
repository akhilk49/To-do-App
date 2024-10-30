const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const fs = require('fs');

server.use(middlewares);

server.delete('/todos', (req, res) => {
  const db = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
  db.todos = [];
  fs.writeFileSync('db.json', JSON.stringify(db, null, 2));
  res.status(200).json({ message: 'All tasks deleted successfully.' });
});

server.use(router);

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
