 how to **create** and **document UI components in isolation** using **Storybook**.

---

## 🎯 Goal

Build reusable components like `Button`, `Card`, or `Input` and **showcase all their variations** with **interactive documentation** — **without needing to run the full app**.

---

## 🧩 1. Creating a UI Component

Let’s build a simple **Button component**:

### 🔧 `src/components/Button.jsx`

```jsx
import './Button.css';

function Button({ label, onClick, variant = 'primary' }) {
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
```

---

## 🎨 2. Styling (Optional)

### 🖌️ `src/components/Button.css`

```css
.btn {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-weight: bold;
  color: white;
}

.primary {
  background-color: #5c67f2;
}

.secondary {
  background-color: #999;
}
```

---

## 📘 3. Creating the Story File

Create a story to **showcase** all variations of the `Button`.

### 📖 `src/components/Button.stories.jsx`

```jsx
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'radio', options: ['primary', 'secondary'] },
    onClick: { action: 'clicked' }
  }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary'
};
```

---

## 💡 What You Just Did

| Step             | Purpose                                          |
| ---------------- | ------------------------------------------------ |
| ✅ Created Button | A simple reusable UI component                   |
| ✅ Styled It      | Used CSS to define button styles                 |
| ✅ Wrote Story    | Added isolated showcase for every button version |
| ✅ Added Docs     | Using `argTypes`, made it dynamic & documented   |

---

## 🧪 Result

In Storybook, you’ll see:

* 📌 `Components/Button` → Primary, Secondary stories
* Interactive controls to change `label`, `variant`, etc.
* Click actions logged in the **Actions panel**

---

## 📚 Bonus: Component Documentation in Storybook

Storybook automatically documents components via:

* Component’s `prop types` (or TS types)
* `argTypes` defined in the story
* Markdown comments via addons (optional)

---

## ✅ Why This Is Powerful

* Build & test **1 component at a time**
* **Preview all states** without navigating the app
* Use it as a **living style guide**
* Share with your team or designers


