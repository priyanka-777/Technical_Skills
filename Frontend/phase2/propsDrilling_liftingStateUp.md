
## 🔗 What is **Props Drilling**?

**Props drilling** is when you pass data through **multiple levels of components**, even if intermediate components don’t need it — just to reach the final one.

### 📦 Example:

```jsx
const App = () => {
  const username = "Priyanka";
  return <Parent username={username} />;
};

const Parent = ({ username }) => {
  return <Child username={username} />;
};

const Child = ({ username }) => {
  return <p>Hello, {username}!</p>;
};
```

> 🔸 Here, `username` is passed from `App → Parent → Child`.
> Even though only `Child` uses it, all levels need to forward it — that's **prop drilling**.

---

## 🧼 Why is Prop Drilling a Problem?

* Makes your code **harder to manage**
* Causes **tightly coupled** components
* Difficult to **refactor** or reuse components independently

---

## ⬆️ What is **Lifting State Up**?

Sometimes **two or more components need to share the same state**.

Instead of duplicating state in both, we **"lift" the state up** to their **common parent** and pass it down via props.

---

### 📝 Example: Lifting State Up

Let’s say we have a parent with 2 children:

```jsx
function App() {
  const [message, setMessage] = useState("");

  return (
    <>
      <InputBox setMessage={setMessage} />
      <MessageDisplay message={message} />
    </>
  );
}

const InputBox = ({ setMessage }) => {
  return (
    <input onChange={(e) => setMessage(e.target.value)} placeholder="Type here" />
  );
};

const MessageDisplay = ({ message }) => {
  return <p>You typed: {message}</p>;
};
```

> ✅ `message` is lifted to `App` so both `InputBox` and `MessageDisplay` can use it.

---

### 🔄 Prop Drilling vs Lifting State

| Concept           | Purpose                                | Example                                         |
| ----------------- | -------------------------------------- | ----------------------------------------------- |
| **Prop Drilling** | Passing props down many levels         | `App → Parent → Child → GrandChild`             |
| **Lifting State** | Moving shared state to a common parent | `App` holds `message` shared between 2 children |

---

### ✅ When to Lift State Up?

Use **Lifting State Up** when:

* Multiple sibling components need to access the same state
* You need a single source of truth
* Avoiding data duplication


