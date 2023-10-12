const fs = require("fs");
// Specify the file path you want to read
const readfilePath = "output.txt";

// Use the `fs.readFile` function to read the file
fs.readFile(readfilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // The file contents are available in the `data` variable
  console.log("File content:", data);
});
// Specify the file path where you want to write
const filePath = "output.txt";

// The content you want to write to the file
const content = "This is the content that will be written to the file.\n";

// Use the `fs.writeFile` function to write to the file
fs.writeFile(filePath, content, "utf8", (err) => {
  if (err) {
    console.error("Error writing the file:", err);
    return;
  }

  console.log("File has been written successfully.");
});
