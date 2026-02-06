# DAY 7 — Conditional Rendering

> **Focus**: Showing different UI based on conditions
> **Core idea**: UI changes depending on state

## 🎯 Day 7 Goal

Clearly Understand:
1. **What is conditional rendering?** 
2. **Why do we need conditional rendering?** 
3. **Ways to do conditional rendering in React** 
4. **When to use which method?** 
   
5. **Why do we use ternary operator in JSX?** 
6. **What does `&&` do in conditional rendering?**
7. **When should we use `if / else` instead of ternary?**

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
│   │   ├── App.jsx
│   │   ├── ConditionalDemo.jsx
│   │   └── README.md
│   │
│   └── main.jsx
│
└── README.md
```

---

## 📘 Step 2: Concepts

### Theory Concepts

1. **What is conditional rendering?**   
    **Answer:**  
    Conditional rendering means showing or hiding parts of the UI based on a condition, such as a value in state.

    Example:

    - Logged in → show dashboard
    - Not logged in → show login button

---

2. **Why do we need conditional rendering?** 
    **Answer:**  
    Because real applications do not show everything all the time. UI must change depending on user actions, state, or data.

---

3. **Ways to do conditional rendering in React**  
    **Answer:**  
    1. `if / else`
        Used when logic is complex.

        ```jsx
        if (isLoggedIn) {
        return <Dashboard />;
        }
        return <Login />;
        ```

    2. Ternary operator (`? :`)
        Used inside JSX.

        ```jsx
        {isLoggedIn ? <Dashboard /> : <Login />}
        ```

    3. Logical AND (`&&`)
        Used when you only want to show something if condition is true.

        ```jsx
        {isAdmin && <AdminPanel />}
        ```
---

4. **When to use which method?**  
    **Answer:**  
    | Method      | Use Case          |
    | ----------- | ----------------- |
    | `if / else` | Big logic         |
    | Ternary     | Two choices       |
    | `&&`        | Show-only-if-true |

---

### Practical Concepts

5. **Why do we use ternary operator in JSX?**  
    **Answer:**  
    Because JSX does not support `if/else` directly inside it. The ternary operator lets us choose between two UI outputs in one line.

    Example:

    ```jsx
    isLoggedIn ? <Dashboard /> : <Login />
    ```

---

6. **What does `&&` do in conditional rendering?** 
    **Answer:**  
    The && operator shows something only when the condition is true. If the condition is false, nothing is rendered.

    Example:

    ```jsx
    isAdmin && <AdminPanel />
    ```

---

7. **When should we use `if / else` instead of ternary?**
    **Answer:**  
    We use `if / else` when the logic is complex or has many conditions. It keeps the code cleaner and easier to understand.

---

### One-line answers (very important)

> Conditions control UI, and state controls conditions.
