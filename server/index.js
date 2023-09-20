const http = require('http');
const { json } = require('stream/consumers');

const PORT = 3535;
const HOSTNAME = 'localhost';
const server = http.createServer((req, res) => {
   
    // About page
    // Contact page
    // Product page
    // rest....>Error

    if (req.url == '/') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        res.end('Node Server created by SinghG!');
    } else if (req.url == '/about') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        res.end('About page!');
    } else if (req.url == '/contact') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        res.end('Contact page!');
    } else if (req.url == '/product') {
        const options = {
            hostname: 'fakestoreapi.com',
            path: '/products/1',
            method: 'Get'
        }
        const apiReq = http.request(options, (apiRes) => {
            apiRes.on("data", (data) => {
                res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.end(data.toString());
            })
        });
        apiReq.on("error", () => {
            console.log(e);
        });
        apiReq.end();
    } else { 
        res.statusCode = 500;
        res.setHeader('Content-type', 'text/plain');
        res.end('Server Error!');
    }

});

server.listen(PORT, () => {
    console.log(`Server running at ${HOSTNAME}:${PORT}`);
})