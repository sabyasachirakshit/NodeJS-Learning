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
  } else if (req.method === "POST" && req.url === "/api/post") {
    // Handle POST requests to the /api endpoint
    let requestBody = "";

    // Listen for data events to collect the request body
    req.on("data", (chunk) => {
      requestBody += chunk.toString();
      console.log(requestBody);
    });

    // When the request is complete, parse and respond with the data
    req.on("end", () => {
      try {
        const recievedData = JSON.parse(requestBody);
        const responseData = {
          message: "This is the API endpoint (POST)",
          data: recievedData,
        };
        res.statusCode = 200;
        res.end(JSON.stringify(responseData));
      } catch (error) {
        res.statusCode = 400; // Bad Request
        res.end(JSON.stringify({ error: "Invalid JSON data" }));
      }
    });
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
