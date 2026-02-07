# DAY 9 — `useEffect` (Side Effects in React)

> **Focus**: Running code at the right time 
> **Core idea**: React renders UI → `useEffect` runs side work

## 🎯 Day 9 Goal

Clearly Understand:

1. **What is `useEffect`?** 
2. **When does `useEffect` run?** 
3. **What is the dependency array?** 
4. **Different ways `useEffect` runs** 
5. **Why should we use `useEffect`?** 

6. **What happens if we pass an empty array?**
7. **Why should side effects not be inside JSX?**

---

## 📁 Step 1: Folder Setup (inside client)

Create this structure:

```bash
client/
│
├── src/
│   ├── 01-jsx-basics/
│   ├── 02-components-folder-structure/
│   ├── 03-props-data-passing/
│   ├── 04-usestate-basics/
│   ├── 05-events-state-updates/
│   ├── 06-controlled-forms/
│   ├── 07-conditional-rendering/
│   ├── 08-lists-keys/
│   ├── 09-useeffect-basics/
│   │   ├── App.jsx
│   │   ├── EffectDemo.jsx
│   │   └── README.md
│   │
│   └── main.jsx
│
└── README.md
```

---

## 📘 Step 2: Concepts

### Theory Concepts

1. **What is `useEffect`?**  
    **Answer:**  
    `useEffect` is a React Hook used to run side effects in a component.
    Side effects are things like:

    - Fetching data
    - Updating document title
    - Running timers
    - Logging to console

---

2. **When does `useEffect` run?**  
    **Answer:**  
    It runs after the component renders.

---

3. **What is the dependency array?**  
    **Answer:**  
    The dependency array tells React when to re-run the effect.

    Example:

    ```jsx
    useEffect(() => {
    console.log("Effect runs");
    }, []);
    ```

---

4. **Different ways `useEffect` runs**  
    **Answer:**  
    | Dependency | Runs when            |
    | ---------- | -------------------- |
    | No array   | Every render         |
    | `[]`       | Only once (on mount) |
    | `[count]`  | When `count` changes |

---

5. **Why should we use `useEffect`?**  
    **Answer:**  
    To keep side effects separate from rendering logic, making code cleaner and predictable.

---

### Practical Concepts

6. **What happens if we pass an empty array `[]`?**  
    **Answer:**  
    The effect runs only once, when the component is mounted for the first time.

---

7. **Why should side effects not be inside JSX?**  
    **Answer:**  
    Because JSX should only describe the UI. Side effects inside JSX can cause unexpected behavior and repeated execution.

---

### One-Line Rule to Remember

> JSX renders UI, `useEffect` handles side work.
