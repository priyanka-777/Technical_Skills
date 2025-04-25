// steps to create this project with ts 
### Install development dependencies
```bash
npm install --save-dev typescript ts-node nodemon @types/node
```

---

###  Create `tsconfig.json`
```bash
npx tsc --init
```

Then edit your `tsconfig.json` with these recommended settings:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "src",
    "outDir": "dist",
    "esModuleInterop": true,
    "strict": true,
    "noImplicitAny": true,
    "moduleResolution": "node",
    "skipLibCheck": true
  }
}
```

---

###  Create folder structure
```bash
mkdir src
touch src/index.ts
```

### commands to run the test files

#### install test dependencies  
```bash 
npm install --save-dev @jest/globals @types/jest ts-jest
```
#### initialize jest config file
```bash 
npx ts-jest config:init
```

#### run the test files
```bash 
npm run test
``` 

#### run the test files in watch mode
```bash 
npm run ci-test
``` 



Event loops and Non Blocking I/O:

video reference-https://youtu.be/eiC58R16hb8?si=nKr700mnnsPFyeOB

event loops -https://dev.to/tolobayo/
javascript-event-loop-everything-you-need-to-know-explained-in-simple-terms-fg0
non blocking I/O-https://medium.com/idea-core/javascript-what-is-non-blocking-i-o-a2acb5b7594c

Callbacks vs Promises vs Async/Await : https://www.youtube.com/watch?v=670f71LTWpM

modules (fs,http,fs) - https://www.youtube.com/watch?v=Oe421EPjeBE

debugging - https://youtu.be/i9hOCvBDMMg?si=BlBSIozEUryVYwDA

to see debugging: we are performing it on dist/index.js file

so to get that we need to run 
```bash 
npm run build 
```

then to see debugging: we are performing it on dist/index.js file
```bash
npm run debug 
```


