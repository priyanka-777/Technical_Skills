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
Converts the TypeScript file (`.ts`) into JavaScript (`.js`).

### 5. Watch for File Changes & Auto-Compile
```sh
tsc --watch
```
Automatically recompiles TypeScript files when changes are detected.

### 6. Run a TypeScript File Directly with ts-node
```sh
npx ts-node filename.ts
```
Runs TypeScript files without needing to compile them separately.

### 7. Change Execution Policy in PowerShell (Fix Execution Errors)
```sh
Set-ExecutionPolicy Unrestricted -Scope CurrentUser
```
Allows running scripts in PowerShell (needed if you get script execution errors).

### 8. Run TypeScript in VS Code Terminal (PowerShell Fix)
```sh
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```
Allows running locally created TypeScript scripts in PowerShell.

### 9. Compile and Build the TypeScript Project
```sh
npm run build
```
Uses `tsconfig.json` settings to compile the entire project.

### 10. Preview the TypeScript Project in a Browser
```sh
npm run preview
```
Starts a local server to preview the compiled TypeScript project.

### 11. Start a Development Server
```sh
npm run dev
```
Runs the TypeScript/JavaScript project in development mode with hot reload.

### 12. List All Previously Used Commands (CMD Only)
```sh
doskey /history
```
Displays a history of commands used in the current session.

### 13. List Only the Last 50 Commands (PowerShell)
```sh
Get-History | Select-Object -Last 50
```
Shows the last 50 commands used in PowerShell.

### 14. Run a TypeScript File in Command Prompt (CMD)
```sh
tsc filename.ts && node filename.js
```
Compiles and runs the TypeScript file in a single command.

### 15. Open the TypeScript Project in VS Code
```sh
code .
```
Opens the current directory in VS Code.

## Sources

what is typescript: https://www.freecodecamp.org/news/what-is-typescript/

Add tsc file.ts --noEmitOnError = to stop keeping code in js file if ts file has any error.

github link for different types of tsconfigs = https://github.com/tsconfig/bases

ts documentation = https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html