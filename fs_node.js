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

// The fs module in Node.js provides a wide range of functions for working with the file system. Here are some of the common operations you can perform using the fs module:

// File Reading and Writing:

// fs.readFile(): Read the contents of a file.
// fs.writeFile(): Write data to a file.
// fs.appendFile(): Append data to an existing file.
// fs.readFileSync(): Synchronous version of fs.readFile().
// fs.writeFileSync(): Synchronous version of fs.writeFile().
// File and Directory Information:

// fs.stat(): Get information about a file or directory.
// fs.readdir(): Read the contents of a directory.
// fs.mkdir(): Create a directory.
// fs.rmdir(): Remove a directory.
// fs.rename(): Rename a file or directory.
// fs.unlink(): Delete a file.
// fs.access(): Check the accessibility of a file or directory.
// File and Directory Operations:

// fs.copyFile(): Copy a file.
// fs.copyFileSync(): Synchronous version of fs.copyFile().
// fs.link(): Create a hard link to a file.
// fs.symlink(): Create a symbolic link to a file.
// fs.chmod(): Change the file mode (permissions).
// fs.chown(): Change the owner and group of a file or directory.
// Stream-Based Operations:

// fs.createReadStream(): Create a readable stream from a file.
// fs.createWriteStream(): Create a writable stream to a file.
// File Watching:

// fs.watch(): Watch for changes in a file or directory.
// fs.watchFile(): Monitor changes to the attributes of a file.
// File Compression and Decompression:

// fs.createGzip(): Create a GZIP-compressed stream.
// fs.createGunzip(): Create a GZIP decompression stream.
// fs.createDeflate(): Create a DEFLATE-compressed stream.
// fs.createInflate(): Create an inflation (decompression) stream.
// Other Utility Functions:

// fs.realpath(): Resolve the real path of a file or directory.
// fs.truncate(): Change the file size.
// fs.existsSync(): Check if a file or directory exists.
// fs.promises: The fs.promises API provides file system functions that return promises (introduced in Node.js 10).
// These are some of the common operations you can perform with the fs module in Node.js. The specific function you use will depend on your use case, whether you need to read or write files, manipulate directories, or monitor changes in the file system. Remember to handle errors appropriately when working with the file system to ensure the robustness of your Node.js applications.
