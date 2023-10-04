const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  // Handle GET requests to the /api endpoint
  if (req.method === "GET" && req.url === "/api") {
    const responseObj = { message: "This is the API endpoint" };
    res.statusCode = 200;
    res.end(JSON.stringify(responseObj));
  } else if (req.method === "GET" && req.url === "/api/deep-api") {
    const responseObj = { message: "This is the deep API endpoint" };
    res.statusCode = 200;
    res.end(JSON.stringify(responseObj));
  } else {
    // Handle other requests with a 404 Not Found response
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

server.listen(port || 8000, hostname || "127.0.0.1", () => {
  console.log(
    `Server running at port ${
      port || 8000
    }. Visit -> http://${hostname}:${port}/`
  );
});
