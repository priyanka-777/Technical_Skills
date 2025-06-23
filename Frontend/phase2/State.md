What is State? Why is it needed?



## 🔁 What is **State** in React?

**State** is a **built-in React object** that allows components to **store dynamic data** and **react to user interactions**.

Think of it as the **memory** of a component.

---

### 🧠 Why is State needed?

In a web app, the UI often needs to **change over time** — based on:

* ✅ User actions (like clicking a button)
* ✅ Form inputs
* ✅ Fetching data
* ✅ Toggling visibility

👉 Plain variables won’t re-render the UI when changed, but **React State does**.

---

### ⚙️ How React State works

* Managed using the `useState` hook (for functional components)
* When you update state, **React re-renders** the component with the new value

---

### 📝 Syntax

```js
import { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0); // 0 is the initial state

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

### ✅ In this example:

| Term            | Meaning                              |
| --------------- | ------------------------------------ |
| `count`         | current state value                  |
| `setCount`      | function to update state             |
| `useState(0)`   | initializes state to 0               |
| `setCount(...)` | updates state and triggers re-render |

---

### 📌 Real-World Analogy

Think of state like the **scoreboard in a cricket match**:

* Players (like components) play the game
* The scoreboard (state) **keeps track of runs**
* Whenever someone scores, the **scoreboard updates** automatically

