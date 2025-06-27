

##  What Are Web Components?

Web Components are a set of web platform APIs that allow you to create **custom, reusable, encapsulated HTML elements**.

They consist of **3 main parts**:

| Feature             | Purpose                                  |
| ------------------- | ---------------------------------------- |
| **Custom Elements** | Define new HTML elements (`<my-button>`) |
| **Shadow DOM**      | Encapsulate styles and markup            |
| **HTML Templates**  | Define reusable content blocks           |

---

## 1️⃣ Custom Elements

Custom Elements allow you to create **your own HTML tags** with custom logic.

### ✅ Define one:

```js
class MyButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<button>Click Me</button>`;
  }
}

customElements.define('my-button', MyButton);
```

### ✅ Use in HTML:

```html
<my-button></my-button>
```

💡 `connectedCallback()` is called when the element is added to the DOM.

---

## 2️⃣ Shadow DOM

Shadow DOM gives your component **style & structure isolation** — so styles don’t leak in or out.

### ✅ Example:

```js
class MyCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        .card { padding: 20px; border: 1px solid #ccc; }
      </style>
      <div class="card">
        <slot></slot> <!-- content from outside -->
      </div>
    `;
  }
}

customElements.define('my-card', MyCard);
```

### ✅ Use in HTML:

```html
<my-card>This is inside the card</my-card>
```

🎯 Benefits:

* Styles inside `<my-card>` don’t affect outside, and vice versa
* `slot` lets you inject content into the shadow DOM

---

## 3️⃣ HTML Templates

Templates let you define **markup that doesn’t render until you use it** — great for cloning and reusing.

### ✅ Example:

```html
<template id="welcome-msg">
  <p>Hello <strong>User</strong>!</p>
</template>

<script>
  const template = document.getElementById('welcome-msg');
  const clone = document.importNode(template.content, true);
  document.body.appendChild(clone);
</script>
```

🎯 Benefits:

* Reusable structure
* Doesn’t load until manually added
* Great for performance

---

## 🧠 Why Use Web Components?

| Benefit            | Description                                |
| ------------------ | ------------------------------------------ |
| Framework-agnostic | Works with any tech (React, Vue, plain JS) |
| Encapsulation      | Keeps CSS/JS clean and isolated            |
| Reusability        | Define once, use anywhere                  |
| Native Support     | Supported in all modern browsers           |

---

## 🛠️ Tools to Help

* [Lit](https://lit.dev) – a library to build Web Components faster
* [Stencil](https://stenciljs.com) – compiler for Web Components
* Works well with design systems, micro frontends


