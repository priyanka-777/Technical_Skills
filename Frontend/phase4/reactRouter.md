

# 📚 **React Router  (v6+)**
React Router is a library that allows you to create routes (pages) in a React app — just like a regular website, but without full-page reloads.

React Router is the standard routing library for React that enables **Single Page Application (SPA)** behavior — seamless navigation without full-page reloads.

---
# Core Concepts

| Concept         | What It Does                               |
| --------------- | ------------------------------------------ |
| `BrowserRouter` | Wraps your app and enables routing         |
| `Routes`        | Contains all defined routes                |
| `Route`         | Maps a path (e.g. `/about`) to a component |
| `Link`          | Navigation without reload                  |
| `useNavigate()` | Programmatic navigation                    |
| `useParams()`   | Access route parameters like `:id`         |

## ✅ 1. **Installation & Setup**

```bash
npm install react-router-dom
```

In `main.jsx`: Wrap with **BrowserRouter**

```jsx
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
  <App />
</BrowserRouter>
```

---

## ✅ 2. **Creating Routes**
In `App.jsx`:

Use `Routes` and `Route` to define path-based rendering.

```jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;

```

---

## ✅ 3. **Navigation with `<Link>`**

```jsx
import { Link } from 'react-router-dom';

<Link to="/">Home</Link>
<Link to="/about">About</Link>
```

* Prevents full-page reload
* Works like `<a>` tag but with SPA behavior

---

## ✅ 4. **Dynamic Routing with `:params`**

Define a dynamic route:

```jsx
<Route path="/user/:id" element={<User />} />
```

In `User.jsx`, use `useParams()` to access URL data:

```jsx
import { useParams } from 'react-router-dom';
const { id } = useParams(); // e.g., /user/101 → id = "101"
```

---

## ✅ 5. **404 Page Handling**

Catch all undefined routes using `path="*"`:

```jsx
<Route path="*" element={<NotFound />} />
```

Use this for a custom **404 page** that enhances UX.

---

## ✅ 6. **Navigation using `useNavigate()`**

Used for programmatic navigation (e.g., after form submit):

```jsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/dashboard');
```

---

## ✅ 7. **Route Nesting (Optional Advanced)**

You can nest routes inside other routes to build layouts:

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
</Route>
```

---

