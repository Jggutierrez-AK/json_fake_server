const server = jsonServer.create();
const db = jsonServer.router('db.json');
const jsonServer = require('json-server');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(db);

server.get('/companies', (req, res) => {
    const companies = db.get("companies");
    try {
        res.jsonp(companies);
    } catch (error) {
        res.sendStatus(404);   
    }
})

server.listen(3001, () => {
    console.log('http://localhost:3001/')
    console.log('JSON Server is running')
});

