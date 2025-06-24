
## 🌐 Introduction to React **Context API**

### 📌 What is it?

The **Context API** allows you to **share state and functions globally** across your app **without prop drilling**.

> 🎯 Use it when **many components need the same data**, and passing props gets messy.

---

## 🧠 When to Use Context?

✅ Good use cases:

* Theme (dark/light mode)
* User authentication status
* Language/locale
* App-wide alerts or modals
* Sharing state across sibling components

❌ Don’t use it for everything — for **local state**, `useState` is enough.

---

## 🔧 How Context API Works

It has **3 main parts**:

| Part                    | Description                                      |
| ----------------------- | ------------------------------------------------ |
| `React.createContext()` | Creates a Context object                         |
| `Provider`              | Supplies the context value to children           |
| `useContext()`          | Lets you consume the context in child components |

---

### 🛠️ Example: Sharing User Info

#### 1. **Create Context**

```js
import { createContext } from 'react';

export const UserContext = createContext(); // creates context
```

---

#### 2. **Wrap your app in a Provider**

```js
import React, { useState } from 'react';
import { UserContext } from './UserContext';
import Dashboard from './Dashboard';

const App = () => {
  const [user, setUser] = useState("Priyanka");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Dashboard />
    </UserContext.Provider>
  );
};
```

---

#### 3. **Consume Context with `useContext`**

```js
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Dashboard = () => {
  const { user } = useContext(UserContext);
  return <h1>Welcome, {user}!</h1>;
};
```



---

### ⚠️ Notes

* You can have **multiple contexts** (UserContext, ThemeContext, etc.)
* Prefer **custom context providers** for better structure

---

## ✅ Benefits of Context API

| Advantage           | Why It Helps                                   |
| ------------------- | ---------------------------------------------- |
| Avoid prop drilling | No need to pass props through many layers      |
| Centralized state   | Keep global/shared state in one place          |
| Easy consumption    | Any component can access it using `useContext` |

