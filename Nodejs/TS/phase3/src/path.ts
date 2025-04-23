const path = require('path');

// Join paths
const joinedPath: string = path.join('./content', 'first.txt');
console.log(joinedPath); // Output: ./content/first.txt

// resolve paths
const resolvedPath: string = path.resolve(__dirname, 'content', 'first.txt');
console.log(resolvedPath); // Output: /path/to/current/directory/content/first.txt

// basename
const baseName: string = path.basename(resolvedPath);
console.log(baseName); // Output: first.txt

// dirname
const dirName: string = path.dirname(resolvedPath);
console.log(dirName); // Output: /path/to/current/directory/content

// extname
const extName: string = path.extname(resolvedPath);
console.log(extName); // Output: .txt

// or
// Join paths
const fullPath = path.join('/users', 'priyanka', 'file.txt');
console.log(fullPath);  // /users/priyanka/file.txt

// Get filename from a path
console.log(path.basename(fullPath));  // file.txt

// Get extension
console.log(path.extname(fullPath));  // .txt

// Get directory name
console.log(path.dirname(fullPath));  // /users/priyanka