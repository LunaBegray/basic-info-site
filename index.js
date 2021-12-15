const http = require('http')
let fs = require('fs');


const server = http.createServer(
    (req, res) => {
        if(req.url == '/'){
            fs.readFile('./index.html', (err, date) => {
                if(err) {throw err};
                res.setHeader(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            })
        }
        else if(req.url == '/about'){
            fs.readFile('./about.html', (err, date) => {
                if(err){throw err};
                res.setHeader(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            })
        }
        else if(req.url == '/contact-me'){
            fs.readFile('./contact-me.html', (err, date) => {
                if(err) {throw err};
                res.setHeader(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            })
        }
        else{
            fs.readFile('./404.html', (err, date) => {
                if(err) {throw err};
                res.setHeader(404, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            })
        }
    }
).listen(8080);