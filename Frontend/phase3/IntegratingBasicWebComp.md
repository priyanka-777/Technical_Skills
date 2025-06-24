

## 🧠 Can Web Components Work Inside React?

Yes! ✅
React can render Web Components **just like normal HTML tags**, but we need to handle:

1. **Props → attributes**
2. **Event binding (custom events)**

---

## 🛠 Step-by-Step: Use a Basic Web Component in React

---

### 📁 1. Create a Simple Web Component

Add this anywhere before React renders (e.g., in `main.jsx` or a separate file).

#### 📄 `src/components/MyElement.js`

```js
class MyElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<p style="color: teal;">🌟 Hello from Web Component!</p>`;
  }
}

customElements.define('my-element', MyElement);
```

---

### 📄 2. Register the Web Component in React

#### Modify `main.jsx`

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './components/MyElement.js'; // Register the Web Component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

### 📄 3. Use the Web Component in React

#### In `App.jsx`

```jsx
function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>🌐 Web Component in React</h1>
      <my-element></my-element> {/* This is your custom element! */}
    </div>
  );
}

export default App;
```

---

## ✅ Output

You’ll see:

```
🌐 Web Component in React
🌟 Hello from Web Component!
```

🚀 That’s your Web Component rendered inside React!

---

## 🧩 Advanced Example: Passing Props + Handling Events

### Custom Element that accepts a name

```js
class GreetingElement extends HTMLElement {
  static get observedAttributes() {
    return ['name'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute('name') || 'Guest';
    this.innerHTML = `<p>Hello, ${name} 👋</p>`;
  }
}

customElements.define('greeting-element', GreetingElement);
```

### Use it in React

```jsx
function App() {
  return (
    <div>
      <h1>With Props</h1>
      <greeting-element name="Priyanka"></greeting-element>
    </div>
  );
}
```

---

## ⚠️ React & Web Components: Key Notes

| Feature | Web Component                     | React Integration                 |
| ------- | --------------------------------- | --------------------------------- |
| Props   | Use HTML attributes               | Pass as props like `name="value"` |
| Events  | Use `CustomEvent` with `dispatch` | Must manually bind using `ref`    |
| Styling | Scoped via Shadow DOM             | Won’t be affected by React CSS    |

---

## 💡 When to Use This

* Embedding **shared components** in multiple projects
* Creating **framework-agnostic** UI libraries
* Using **third-party Web Component libraries**


