var restify = require("restify");

function send(req, res, next) {
    res.send('Hello there, ' + req.params.name + '!');
    return next();
}

var server = restify.createServer({
    name: "iOS Backend",
});

server.get('/hello/:name', send);

server.listen(8080);
