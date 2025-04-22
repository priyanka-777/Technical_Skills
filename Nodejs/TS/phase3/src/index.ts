import http from "http";
import fs from "fs";
import path from "path";
import { getData,getDataPromise,fetchData } from "./CB_PM_AsAw"; 

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from TypeScript backend!");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});


// callback
getData((data: string) => {
    console.log(data); // Data received
  })
  
  // promise
  getDataPromise()
    .then((data: string) => {
      console.log(data); // Data received Through Promise
    })
  
  // async/await
  fetchData() // Data received Through Async/Await
  
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });