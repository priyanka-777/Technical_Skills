
## 🔧 `useState` Hook – Basics

`useState` is a **React Hook** that lets you add state to functional components.

### 📦 Syntax

```js
const [stateVariable, setStateFunction] = useState(initialValue);
```

---

### 📌 Example

```js
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // State initialized to 0

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

---

## 🔁 How State Updates Work

### ✅ When you call `setCount(...)`:

* React **updates the value of `count`**
* It then **re-renders** the component
* The UI reflects the updated value

---

## ⚠️ Important Rules of State

| Rule                                 | Explanation                                                              |
| ------------------------------------ | ------------------------------------------------------------------------ |
| ✅ State updates are **asynchronous** | React may batch updates, so don’t rely on the updated value immediately. |
| ✅ Never mutate state directly        | ❌ `count++` is wrong — always use `setCount(count + 1)`                  |
| ✅ Can be any type                    | You can use numbers, strings, arrays, objects — anything!                |
| ✅ Can update based on previous state | Use a function inside `setState` when new state depends on old state     |

```js
setCount(prev => prev + 1); // safer when relying on previous state
```

---

## 🧠 Real Usage: Add Task to To-Do List

```js
const [todos, setTodos] = useState([]);

const addTodo = (newItem) => {
  setTodos([...todos, newItem]); // don’t mutate original array
};
```

This way:

* You keep the old items
* And **create a new array** with the new item


