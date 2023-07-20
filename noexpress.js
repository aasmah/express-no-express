// Without Express
const http = require('http');

const server1 = http.createServer((req, res) => {
  if (req.url === '/order/' && req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is the order route');
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not found');
  }
});

server1.listen(3000, () => {
  console.log('Server running on port 3000');
});




// provided on page discussion

const http = require('http');
const server = http.createserver((req, res) => {
// This function is called once the headers have been received
res.setHeader('Content-Type', 'application/json');

if (req.method !== 'POST' || req.url !== '/order') {
    res.statusCode = 405;
    res.end('{"error":"METHOD_NOT_ALLOWED")');
    return;
}
let body = '';

req.on('data', (data) => {
//  This function is called as chunks of body are received
body += data;
});


req.on('end', ()=> {
// This function is called once the body has been fully received
    let parsed;
    try {
        parsed = JS0N-parsed(body);
    }   catch (e) {
        res.statusCode = 400
        res.end('("error": "CANNOT_PARSE")');
    }

res.end(JS0N.stringify({
    error: false,
    username: parsed.username
    }));
  });
});
server.listen(3000, () => {
   console. log('Server running at http://localhost:3000/');
})