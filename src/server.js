const jsonServer = require('json-server');
const server = jsonServer.create();
const db = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(db);

server.get('/db', (req, res) => {
    const companies = db
    try {
        console.log(companies)
        res.jsonp(companies);
    } catch (error) {
        res.sendStatus(404);   
    }
})

server.listen(3001, () => {
    console.log('http://localhost:3001/')
    console.log('JSON Server is running')
});

