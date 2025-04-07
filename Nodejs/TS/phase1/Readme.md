Commands :

## TypeScript Commands Cheat Sheet

### 1. Install TypeScript Globally
```sh
npm install -g typescript
```
Installs TypeScript globally so you can use `tsc` from anywhere.

### 2. Check TypeScript Version
```sh
tsc -v
```
Displays the installed TypeScript version.

### 3. Initialize a TypeScript Project
```sh
tsc --init
```
Creates a `tsconfig.json` file to configure TypeScript settings.

### 4. Compile a TypeScript File
```sh
tsc filename.ts
```
Converts the TypeScript file (`.ts`) into JavaScript (`.js`).So that we can run js file as `node fileName.js`

### 5. Watch for File Changes & Auto-Compile
```sh
tsc --watch
```
Automatically recompiles TypeScript files when changes are detected.

### 6. Run a TypeScript File Directly with ts-node
```sh
npx ts-node filename.ts
```
Runs TypeScript files without needing to compile them separately.Instead of two commands to convert to js and run in js ,we can use this command directly.

### 7. Compile and Build the TypeScript Project
```sh
npm run build
```
Uses `tsconfig.json` settings to compile the entire project.when we run this command whole ts code will be turn into js code by creating dist folder.

### 8. Preview the TypeScript Project in a Browser
```sh
npm run preview
```
Starts a local server to preview the compiled TypeScript project.

### 9. Start a Development Server
```sh
npm run dev
```
Runs the TypeScript/JavaScript project in development mode with hot reload.


## Sources

what is typescript: https://www.freecodecamp.org/news/what-is-typescript/

Add tsc file.ts --noEmitOnError = to stop keeping code in js file if ts file has any error.

github link for different types of tsconfigs = https://github.com/tsconfig/bases

ts documentation = https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html