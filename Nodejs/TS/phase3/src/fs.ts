const { readFileSync, writeFileSync } = require('fs');


// synchronous file read

const filePath1 = './src/content/first.txt';
const filePath2 = './src/content/second.txt';
console.log("starting task");
const file1Content = readFileSync(filePath1, 'utf8');
const file2Content = readFileSync(filePath2, 'utf8');
console.log(file1Content); // Output: Content of first.txt
console.log(file2Content); // Output: Content of second.txt
console.log("finished reading files");
writeFileSync('./src/content/result-sync.txt', `Here is the result: ${file1Content}, ${file2Content}`, { flag: 'a' });
// Output: Here is the result: Content of first.txt, Content of second.txt
// here we using flag 'a' ,which means if the file already exists then it will append the text
console.log('done with this task');



// asynchronous file read
const { readFile, writeFile } = require('fs').promises;

console.log("starting task");

async function readFiles() {
    try {
        const file1Content = await readFile(filePath1, 'utf8');
        const file2Content = await readFile(filePath2, 'utf8');
        console.log(file1Content);
        console.log(file2Content);
        console.log("finished reading files");

        await writeFile('./src/content/result-async.txt', `Here is the result: ${file1Content}, ${file2Content}\n`);
        // here we are not using flag 'a' so it will clear whole data in file if already exists and add this content
        console.log('done with this task');
    } catch (error) {
        console.error('Error reading files:', error);
    }
}

readFiles();