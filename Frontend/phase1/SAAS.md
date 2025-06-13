
## 🎨 What is SASS / SCSS?

* **SASS (Syntactically Awesome Stylesheets)** is a CSS preprocessor.
* **SCSS** is the most popular syntax (SASS 3+): it looks like CSS but adds **variables, nesting, mixins**, etc.

> 📌 Think of SCSS as **CSS with superpowers**.

---

## ✅ Benefits of Using SCSS

* ✅ Variables (`$primary-color`)
* ✅ Nesting (`.card { .title { ... } }`)
* ✅ Mixins and functions
* ✅ Code reusability and better organization

---

---

## ✅ Why Use SCSS?

- Clean & reusable code
- Easier to manage styles
- DRY (Don't Repeat Yourself)

--- 
## ⚙️ Setup SCSS in React (Vite or CRA)

### 🧪 If using **Vite**:

1. **Install `sass`**:

```bash
npm install -D sass
```

2. **Create `.scss` file** and import in your component:

```scss
/* src/styles/App.scss */
$primary-color: #007bff;

.container {
  background-color: $primary-color;
  padding: 20px;

  h1 {
    color: white;
  }
}
```

```jsx
// App.jsx
import './styles/App.scss';

function App() {
  return (
    <div className="container">
      <h1>Hello with SCSS!</h1>
    </div>
  );
}
```

---

### 🧪 If using **Create React App (CRA)**:

1. **Install `sass`**:

```bash
npm install sass
```

2. CRA supports SCSS out of the box, so follow the same steps as above.

---

## 📁 Suggested Folder Structure

```
src/
├── styles/
│   ├── _variables.scss     // SCSS variables
│   ├── _mixins.scss        // Mixins/functions
│   └── main.scss           // Import everything here
├── components/
│   └── App.jsx
```

### 🔗 Example `main.scss`:

```scss
@import './variables';
@import './mixins';

body {
  font-family: 'Segoe UI', sans-serif;
}
```

---

## 🧪 SCSS Features Cheatsheet

### ✅ Variables:

```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

### ✅ Nesting:

```scss
.navbar {
  ul {
    list-style: none;
  }

  li {
    display: inline-block;
  }
}
```

### ✅ Mixins:

```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  @include flex-center;
}
```

---


## ✅ Conclusion

* Easy to set up using `npm install sass`
* Organize styles better with SCSS partials
* Use `@import` or `@use` to structure stylesheets

---
**code snippets demonstrating usage of both `@import` and `@use`** 


### 📦 Use `@import` or `@use` to Structure Stylesheets

#### 🧩 `@import` (Legacy – still widely used)

> ✅ Simpler, but can cause global namespace issues and duplicate imports.

**Example:**

```scss
// _variables.scss
$primary-color: #28a745;

// _mixins.scss
@mixin card-shadow {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

// main.scss
@import 'variables';
@import 'mixins';

.card {
  background-color: $primary-color;
  @include card-shadow;
}
```

---

#### 🚀 `@use` (Recommended)

> ✅ Namespaced by default, avoids conflicts, supports module system.

**Example:**

```scss
// _variables.scss
$primary-color: #6610f2;

// _mixins.scss
@mixin center-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```scss
// styles/main.scss
@use './variables' as var;
@use './mixins' as *;

.container {
  background-color: var.$primary-color;
  @include center-content;
}
```

> 🔄 You can also omit `as` to use the default namespace (usually the filename).

---

This addition shows the **practical difference** between `@import` and `@use`, helping developers **transition to modern SCSS practices**.