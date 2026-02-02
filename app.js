const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("CI/CD Pipeline Successful 🚀");
});

server.listen(3000, () => {
  console.log("App running on port 3000");
});

