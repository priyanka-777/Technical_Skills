
## 🎯 What are Controlled vs Uncontrolled Components?

They refer to **how form data is handled** in React.

---

### ✅ **Controlled Component**

A **controlled component** is a form element that is **controlled by React state**.

> 📌 React is the **source of truth** for the input’s value.

### 📝 Example:

```jsx
import { useState } from 'react';

function ControlledInput() {
  const [name, setName] = useState("");

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```

🧠 Here:

* The input value comes from `state`
* Any change updates the state → rerenders the UI

---

### ❎ **Uncontrolled Component**

An **uncontrolled component** lets the **DOM handle its own state** — like vanilla HTML.

> 📌 React does **not track** the value directly — you use a **ref** to access it.

### 📝 Example:

```jsx
import { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert(inputRef.current.value);
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
```

🧠 Here:

* React doesn't manage the value
* We use `ref` to get the value when needed

---

## 🆚 Comparison Table

| Feature        | Controlled Component       | Uncontrolled Component      |
| -------------- | -------------------------- | --------------------------- |
| Data source    | React state                | DOM (native input state)    |
| Value access   | `value={...}` + `useState` | `ref.current.value`         |
| React control? | Full control               | Minimal control             |
| Use case       | Dynamic UI, validations    | Simple, one-time input      |
| Recommended    | ✅ Yes (in most cases)      | ❌ Only for simple use cases |

---

## 🔍 When to Use What?

* ✅ **Controlled**: Preferred when:

  * You need real-time validation
  * You want to disable/enable submit
  * You want to reset inputs with state

* ✅ **Uncontrolled**: OK when:

  * Minimal interaction
  * Performance-sensitive forms
  * You’re integrating with non-React code

---

### 🧪 Bonus Example: Controlled Form

```jsx
function Form() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
```


