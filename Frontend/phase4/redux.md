
## 📦 What is Redux?

**Redux** is a **state management library** for JavaScript apps (especially React).
It provides a **centralized store** to hold the state of your entire app in one place.

---

## Redux ore Concepts

| Concept       | Description                                           |
| ------------- | ----------------------------------------------------- |
| `store`       | Central place where state lives                       |
| `actions`     | Plain JS objects describing what happened             |
| `reducers`    | Pure functions that change the state based on actions |
| `dispatch`    | Function to send actions to reducers                  |
| `useSelector` | React hook to **read** data from the Redux store      |
| `useDispatch` | React hook to **send actions** to update the store    |


### 🔁 Why Use Redux?

| ✅ Benefit                     | 🔍 Explanation                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------ |
| **Centralized State**         | All state lives in a single store, easy to manage and debug                    |
| **Predictable State Changes** | State is updated via **pure functions (reducers)**                             |
| **Global Access**             | Any component can access any state, no need for prop drilling                  |
| **DevTools Debugging**        | Track actions, state changes, time-travel debugging                            |
| **Middleware Support**        | Handle async actions (API calls) with tools like `redux-thunk` or `redux-saga` |

> 🧠 In short: Redux is helpful when your app becomes too big for just `useState` and `useContext`.

---

## 🚀 Setting Up Redux Toolkit in a React Project

### 📌 Why Redux Toolkit?

Redux Toolkit (RTK) is the **official, recommended way** to use Redux.
It reduces boilerplate and makes Redux easier to use.

---

### 🧱 Step-by-Step Setup

#### 1️⃣ Install Redux Toolkit & React-Redux

```bash
npm install @reduxjs/toolkit react-redux
```

---
## 🧪 Quick Example

### 1. Counter State in Redux

```js
// actions.js
export const increment = () => ({ type: 'INCREMENT' });
```

```js
// reducer.js
const initialState = { count: 0 };

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}
```

---

### 2. Create Store

```js
// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
```

---

### 3. Wrap Your App with Provider

```jsx
// main.jsx
import { Provider } from 'react-redux';
import { store } from './store';

<Provider store={store}>
  <App />
</Provider>
```

---

### 4. Use Redux Hooks in a Component

```jsx
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';

function Counter() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}
```

---

## 🧠 Summary of Flow

1. UI triggers `dispatch(action)`
2. `reducer` receives action + state, returns new state
3. `store` updates → component re-renders via `useSelector`

---

## 🔁 Redux vs Context API

| Feature                 | Redux                 | Context API           |
| ----------------------- | --------------------- | --------------------- |
| Boilerplate             | More setup            | Less                  |
| Performance             | Better for large apps | Okay for small/medium |
| DevTools Support        | Yes                   | No                    |
| Middleware (like thunk) | Yes                   | No built-in           |

---

source : https://www.freecodecamp.org/news/what-is-redux-store-actions-reducers-explained/


## 🧩 What is a Slice?

In Redux Toolkit, a **slice**:

* Combines `state`, `reducers`, and `actions` into one file.
* Is created using `createSlice()`.

> Think of a slice as a "section" of your global Redux store — like `counterSlice`, `userSlice`, etc.

---

## ✅ Step-by-Step: Creating Slices, Actions, and Reducers

### 1️⃣ Install Redux Toolkit (if not done yet)

```bash
npm install @reduxjs/toolkit react-redux
```

---

### 2️⃣ Create a Slice: `features/counter/counterSlice.js`

```js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

// Export actions
export const { increment, decrement, reset } = counterSlice.actions;

// Export reducer
export default counterSlice.reducer;
```

✅ Now you have:

* **State**: `count`
* **Actions**: `increment`, `decrement`, `reset`
* **Reducer**: managed automatically by `createSlice`

---

### 3️⃣ Add Reducer to Store

```js
// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

---

### 4️⃣ Use the Slice in Components

```jsx
// Counter.jsx
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './features/counter/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>➕ Increment</button>
      <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
      <button onClick={() => dispatch(reset())}>🔁 Reset</button>
    </div>
  );
}

export default Counter;
```

---

### 5️⃣ Wrap App with Provider

```jsx
// main.jsx
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

<Provider store={store}>
  <App />
</Provider>
```

---

## 🧠 Summary

| Concept    | Tool Used          | Description                               |
| ---------- | ------------------ | ----------------------------------------- |
| Slice      | `createSlice()`    | Defines state + actions + reducers in one |
| Store      | `configureStore()` | Combines all slices into one global store |
| Selector   | `useSelector()`    | Access state from components              |
| Dispatcher | `useDispatch()`    | Call actions to modify the store          |

---


## React-Redux Hooks

| Hook          | Purpose                              |
| ------------- | ------------------------------------ |
| `useSelector` | Access values from the Redux store   |
| `useDispatch` | Dispatch actions to update the store |


## How It Works

* `useSelector` subscribes to the Redux store and re-renders the component whenever the selected state changes.

* `useDispatch` gives you the dispatch() function to call actions from your slice (like increment()).

