const url = require("url");
const http = require("http");
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl);
  if (parsedUrl.pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Home Page</h1>");
    res.end();
  } else if (parsedUrl.pathname === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>About Us</h1>");
    res.end();
  } else if (parsedUrl.pathname === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Contact Us</h1>");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>Page not found</h1>");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
