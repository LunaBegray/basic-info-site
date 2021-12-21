const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (_req,res)=>{
  res.sendFile(__dirname + '/index.html')
})

app.get('/about', (_req,res)=>{
  res.sendFile(__dirname + '/about.html')
})

app.get('/contact', (_req,res)=>{
  res.sendFile(__dirname + '/contact.html')
})

app.get('/404', (_req,res)=>{
  res.sendFile(__dirname + '/404.html')
})

app.use((_req, res, _next) => {
  res.status(404).sendFile(__dirname + '/404.html');
});

app.listen(PORT, () => console.log('Server running on port: ' + PORT));
/*
const http = require('http');
const handleRequest= require('./app');

http.createServer(handleRequest).listen(8080, console.log('server is running on your port'));
*/
/*
const http = require('http');
let fs = require('fs');
const url = require('url');

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
).listen(8000); */