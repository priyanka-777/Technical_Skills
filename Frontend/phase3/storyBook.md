

## 📖 What is **Storybook**?

**Storybook** is an **open-source tool** for developing and showcasing **UI components in isolation**.

### 🔍 Think of it like:

> A visual **playground** for your components — you can build, test, and document UI components **outside of your main app**.

---

### 🧩 What Can You Do With Storybook?

* ✅ Build and test components **independently**
* ✅ See different **states** of a component (like loading, error, success)
* ✅ Make components **easier to reuse and maintain**
* ✅ Share components with your team or design systems
* ✅ Catch bugs visually without running the whole app

---

### 📺 Example UI States in Storybook

Imagine a `Button` component:

| State    | Preview                              |
| -------- | ------------------------------------ |
| Default  | `<Button>Click Me</Button>`          |
| Disabled | `<Button disabled>Click Me</Button>` |
| Loading  | `<Button>Loading...</Button>`        |

Each of these becomes a **"story"** in Storybook.

---

## 🧱 Why **Component-Driven Development** (CDD)?

### ✅ Component-Driven Development means:

> You **build and test UI components** independently first, then **assemble them** into full pages or apps.

### 🔧 Why is it useful?

| Benefit                             | Description                           |
| ----------------------------------- | ------------------------------------- |
| 🔁 Reusability                      | Build once, use everywhere            |
| 📦 Isolation                        | Easier to test/debug without full app |
| 🧪 Visual Testing                   | Preview how components look/behave    |
| 📚 Documentation                    | Stories serve as live docs for teams  |
| 🤝 Designer-Developer Collaboration | Design handoff is smoother            |

---

## 🧠 Real-World Analogy

Think of CDD like **LEGO blocks**:

* You build small, strong blocks (components)
* Then assemble them into castles (full pages)

---

## 🔨 Tools That Work with Storybook

* React / Vue / Angular / HTML / Svelte
* Addons for Accessibility, Testing, Controls, Docs
* Integrates with Figma, Chromatic, GitHub Actions, etc.

---

## 🔗 Storybook + CDD = 💡 Perfect Pair

* **Storybook** is the **tool**
* **CDD** is the **methodology**

Using Storybook helps **enforce** CDD by making you build and test components in isolation first.

---

### 📌 Summary:

| Term          | Definition                                                                                                |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| **Storybook** | A tool to build, view, and test UI components in isolation                                                |
| **CDD**       | A development practice that focuses on building applications from the ground up using reusable components |

---

# StoryBook Setup


Here’s a **step-by-step guide** to install and set up **Storybook** in a **React project** (like one created with Vite or Create React App):

---

## ✅ Prerequisites

Make sure your project is already set up with React:

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
```

---

## 📦 Step 1: Install Storybook

Run this command in the **root of your React project**:

```bash
npx storybook@latest init
```

This command does the following:

* Detects your framework (React)
* Installs necessary dependencies
* Creates `.storybook/` config folder
* Adds example stories in `src/stories`
* Adds useful scripts to your `package.json`

---

## 🛠 Step 2: Start Storybook

Once the installation is done, start the Storybook server:

```bash
npm run storybook
```

It will open a local development server (usually at `http://localhost:6006`) showing example components like `Button`, `Header`, etc.

---

## 📁 Project Structure After Setup

Your folder should now include:

```
my-app/
├── .storybook/
│   ├── main.js         // Storybook config
│   ├── preview.js      // Global parameters or decorators
├── src/
│   ├── stories/        // Example components and stories
│       ├── Button.jsx
│       ├── Button.stories.jsx
```

---

## 📄 Step 3: Create Your Own Story

Let's say you have a component in `src/components/MyButton.jsx`:

```jsx
// MyButton.jsx
export default function MyButton({ label }) {
  return <button>{label}</button>;
}
```

Create a story for it:

```jsx
// MyButton.stories.jsx
import MyButton from '../components/MyButton';

export default {
  title: 'Components/MyButton',
  component: MyButton,
};

export const Primary = () => <MyButton label="Click me" />;
```

Now your component will appear in the Storybook sidebar under **Components > MyButton**.

---

## 🧹 Optional: Clean Up Defaults

You can delete the example stories from `src/stories/` if you want to start fresh:

```bash
rm -rf src/stories
```

---

## 🚀 Summary of Commands

```bash
npx storybook@latest init   # Install and configure Storybook
npm run storybook           # Run Storybook locally
```

