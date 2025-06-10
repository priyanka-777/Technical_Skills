
# 📘 React Basics: Components, JSX, and Props

---
## What is React ?

* React is a JavaScript library for building out user interfaces.

* Websites like Facebook, Netflix, and Airbnb are examples of user interfaces built in React.

* React provides developers with a set of tools and structure to build user interfaces, making the process faster and easie


## ⚛️ 1. What is a React Component?

A **React component** is a JavaScript function (or class) that **returns JSX** to display part of the UI.

### 👉 Types of Components:
- **Functional Component** (preferred modern way)
- **Class Component** (older syntax, rarely used now)

### ✅ Functional Component Example:
```jsx
function Hello() {
  return <h1>Hello, World!</h1>;
}
````

### 🔄 Components Are Reusable:

```jsx
function App() {
  return (
    <div>
      <Hello />
      <Hello />
    </div>
  );
}
```

---

## 💡 2. What is JSX?

JSX stands for **JavaScript XML**. It allows you to write HTML-like code inside JavaScript.

### ✅ JSX Example:

```jsx
const element = <h2>Hello, Priyanka!</h2>;
```

### 🚫 Without JSX:

```jsx
const element = React.createElement("h2", null, "Hello, Priyanka!");
```

### 🧠 JSX Rules:

* Use only **one root element** in return
* Use **camelCase** for attributes (`className`, `onClick`)
* Always **close tags** (e.g., `<img />`, `<br />`)
* You can insert JavaScript using `{}`

```jsx
const name = "Priyanka";
return <p>Hello, {name}</p>;
```

---

## 🎁 3. What are Props?

**Props** (short for **Properties**) are used to pass **data from one component to another**.

They are like **function arguments** — read-only and passed from parent to child.

### ✅ Example:

```jsx
function Welcome(props) {
  return <h1>Welcome, {props.name}!</h1>;
}

function App() {
  return <Welcome name="Priyanka" />;
}
```

### 🧠 Key Points:

* Props are **read-only**
* You can pass any data type: string, number, array, function, etc.
* Destructuring makes code cleaner:

```jsx
function Welcome({ name }) {
  return <h1>Welcome, {name}!</h1>;
}
```

---

## 🧪 Real-Life Analogy:

| Concept   | Analogy                          |
| --------- | -------------------------------- |
| Component | A custom-made box                |
| JSX       | The design/blueprint of the box  |
| Props     | The items you put inside the box |

---

## 📦 Mini Component with Props Example:

```jsx
function Card({ title, content }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Card title="React" content="Learn components and props" />
      <Card title="Vue" content="Another frontend library" />
    </div>
  );
}
```

---

## ✅ Summary

| Feature   | What it Does                               |
| --------- | ------------------------------------------ |
| Component | Reusable block of UI                       |
| JSX       | HTML-like syntax in JavaScript             |
| Props     | Pass data from parent to child (read-only) |

---

