const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

const database = [{ name: "SR", age: 22 }];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  // Handle GET requests to the /api endpoint
  if (req.method === "GET" && req.url === "/api") {
    const responseObj = { message: "This is the API endpoint (GET)" };
    res.statusCode = 200;
    res.end(JSON.stringify(responseObj));
  } else if (req.method === "GET" && req.url === "/api/deep-api") {
    const responseObj = { message: "This is the deep API endpoint (GET)" };
    res.statusCode = 200;
    res.end(JSON.stringify(responseObj));
  } else if (req.method === "GET" && req.url === "/sr-api") {
    const responseObj = {
      message: "This is the SR database API endpoint (GET)",
      data: database,
    };
    res.statusCode = 200;
    res.end(JSON.stringify(responseObj));
  } else if (req.method === "POST" && req.url === "/sr-api") {
    //Handle POST requests to the /api endpoint
    let requestBody = "";

    // Listen for data events to collect the request body
    req.on("data", (chunk) => {
      requestBody += chunk.toString();
    });

    // When the request is complete, parse and respond with the data
    req.on("end", () => {
      try {
        const recievedData = JSON.parse(requestBody);
        console.log("This is the data received:", recievedData);
        function isValidData(data) {
          // Check if 'data' is an object
          if (typeof data === "object" && data !== null) {
            // Check if it has 'name' and 'age' properties
            if (data.hasOwnProperty("name") && data.hasOwnProperty("age")) {
              return true;
            }
          }
          return false;
        }
        function doesDataExist(data) {
          for (const item of database) {
            if (item.name === data.name) {
              return true; // Data exists in the database
            }
          }
          return false; // Data does not exist in the database
        }

        if (isValidData(recievedData)) {
          if (doesDataExist(recievedData)) {
            const responseData = {
              message: "user already exists!",
            };
            res.statusCode = 400;
            res.end(JSON.stringify(responseData));
          } else {
            database.push(recievedData);
            const responseData = {
              message:
                "This is the API endpoint (POST), changes made successfully!",
              data: database,
            };
            res.statusCode = 200;
            res.end(JSON.stringify(responseData));
          }
        } else {
          const responseData = {
            message: "Invalid JSON parameters",
          };
          res.statusCode = 400;
          res.end(JSON.stringify(responseData));
        }
      } catch (error) {
        res.statusCode = 400; // Bad Request
        res.end(JSON.stringify({ error: error }));
      }
    });
  } else if (req.method === "PUT" && req.url === "/sr-api") {
    // Handle PUT requests to the /api endpoint
    let requestBody = "";

    // Listen for data events to collect the request body
    req.on("data", (chunk) => {
      requestBody += chunk.toString();
    });

    // When the request is complete, parse and respond with the data
    req.on("end", () => {
      try {
        let flag = 0;
        const recievedData = JSON.parse(requestBody);
        console.log("This is the data received:", recievedData);
        function isValidData(data) {
          // Check if 'data' is an object
          if (typeof data === "object" && data !== null) {
            // Check if it has 'name' and 'age' properties
            if (data.hasOwnProperty("name") && data.hasOwnProperty("age")) {
              return true;
            }
          }
          return false;
        }

        if (isValidData(recievedData)) {
          let matchingObject = database.find(
            (item) => item.name === recievedData.name
          );
          if (matchingObject) {
            matchingObject.age = recievedData.age;
            flag = 1;
          }
          if (flag === 0) {
            database.push(recievedData);
            const responseData = {
              message:
                "This is the API endpoint (PUT), changes made successfully!",
              data: database,
            };
            res.statusCode = 200;
            res.end(JSON.stringify(responseData));
          } else {
            const responseData = {
              message:
                "This is the API endpoint (PUT), changes made successfully!",
              data: database,
            };
            res.statusCode = 200;
            res.end(JSON.stringify(responseData));
          }
        } else {
          res.statusCode = 400; // Bad Request
          console.log("This is error:", error);
          res.end(JSON.stringify({ error: "Invalid JSON data" }));
        }
      } catch (error) {
        res.statusCode = 400; // Bad Request
        res.end(JSON.stringify({ error: error }));
      }
    });
  } else if (req.method === "PATCH" && req.url === "/sr-api") {
    // Handle PATCH requests to the /api endpoint
    let requestBody = "";

    // Listen for data events to collect the request body
    req.on("data", (chunk) => {
      requestBody += chunk.toString();
    });

    // When the request is complete, parse and respond with the data
    req.on("end", () => {
      try {
        let flag = 0;
        const recievedData = JSON.parse(requestBody);
        console.log("This is the data received:", recievedData);
        function isValidData(data) {
          // Check if 'data' is an object
          if (typeof data === "object" && data !== null) {
            // Check if it has 'name' and 'age' properties
            if (data.hasOwnProperty("name") && data.hasOwnProperty("age")) {
              return true;
            }
          }
          return false;
        }

        if (isValidData(recievedData)) {
          let matchingObject = database.find(
            (item) => item.name === recievedData.name
          );
          if (matchingObject) {
            matchingObject.age = recievedData.age;
            flag = 1;
          }
          if (flag === 0) {
            res.statusCode = 400; // Bad Request
            res.end(JSON.stringify({ error: "Data does not exsits" }));
          } else {
            const responseData = {
              message:
                "This is the API endpoint (PATCH), changes made successfully!",
              data: database,
            };
            res.statusCode = 200;
            res.end(JSON.stringify(responseData));
          }
        } else {
          res.statusCode = 400; // Bad Request
          console.log("This is error:", error);
          res.end(JSON.stringify({ error: "Invalid JSON data" }));
        }
      } catch (error) {
        res.statusCode = 400; // Bad Request
        res.end(JSON.stringify({ error: error }));
      }
    });
  } else if (req.method === "DELETE" && req.url === "/sr-api") {
    // Handle DELETE requests to the /api endpoint
    let requestBody = "";

    // Listen for data events to collect the request body
    req.on("data", (chunk) => {
      requestBody += chunk.toString();
    });

    // When the request is complete, parse and respond with the data
    req.on("end", () => {
      try {
        const recievedData = JSON.parse(requestBody);
        let flag = 0;
        function isValidData(data) {
          // Check if 'data' is an object
          if (typeof data === "object" && data !== null) {
            // Check if it has 'name' and 'age' properties
            if (data.hasOwnProperty("name") && data.hasOwnProperty("age")) {
              return true;
            }
          }
          return false;
        }
        if (isValidData(recievedData)) {
          // Find the index of the object to delete
          const indexToDelete = database.findIndex(
            (item) => item.name === recievedData.name
          );

          if (indexToDelete !== -1) {
            // Remove the object from the database
            database.splice(indexToDelete, 1);
            flag = 1;
          }
        }

        if (flag === 0) {
          res.statusCode = 400;
          const responseData = {
            message: "Bad Request",
            type: "could not find user in database",
          };
          res.end(JSON.stringify(responseData));
        } else {
          const responseData = {
            message:
              "This is the API endpoint (DELETE), changes made successfully!",
            data: database,
          };
          res.statusCode = 200;
          res.end(JSON.stringify(responseData));
        }
      } catch (error) {
        res.statusCode = 400; // Bad Request
        console.log("This is error:", error);
        res.end(JSON.stringify({ error: error }));
      }
    });
  } else if (req.method === "HEAD" && req.url === "/sr-api") {
    // Handle HEAD requests to the /sr-api endpoint
    // HEAD requests do not require a response body, only headers

    // Check if the resource exists in the database
    const resourceName = req.url; // You might want to parse the URL to extract the resource name
    if (resourceName === "/sr-api") {
      res.statusCode = 200; // Resource exists
      res.end(); // No response body for HEAD requests
    } else {
      res.statusCode = 404; // Resource not found
      res.end(); // No response body for HEAD requests
    }
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
