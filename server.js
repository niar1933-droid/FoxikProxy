const http = require('http');
const httpProxy = require('http-proxy');

const port = process.env.PORT || 8080;
const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
 // Эндпоинт для keep-alive (чтобы сервер не засыпал)
 if (req.url === '/ping') {
  res.writeHead(200);
 if (!auth || auth !== 'Basic ' + Buffer.from('user:password').toString('base64')) {
  res.writeHead(407, { 'Proxy-Authenticate': 'Basic realm="Proxy"' });
 proxy.web(req, res, { target: req.url, secure: false }, (err) => {
 if (!auth || auth !== 'Basic ' + Buffer.from('Foxik:section933').toString('base64')) {
  clientSocket.write('HTTP/1.1 407 Proxy Authentication Required\r\nProxy-Authenticate: Basic realm="Proxy"\r\n\r\n');
 const { port, hostname } = new URL(`http://${req.url}`);
 const serverSocket = require('net').connect(port || 443, hostname, () => {
  clientSocket.write('HTTP/1.1 200 Connection Established\r\n\r\n');
 console.log(`Proxy server is running on port ${port}`);
});
