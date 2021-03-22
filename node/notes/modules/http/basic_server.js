const http = require('http')

const server = http.createServer(function(req, res){
    switch(req.url){
        case '/':
            res.write('Hello World')
            res.end()
            break;
        case '/api/courses/':
            res.write(JSON.stringify([1,2,3]))
            res.end()
            break;
    }
})

const PORT = 3050

server.listen(PORT);
console.log('Listening on port', PORT, '...')