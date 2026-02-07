# DAY 4 — React State (`useState`)

## 🎯 Day 4 Goal

Clearly Understand:

1. **What is state in React?** 
2. **Why can’t we use normal variables for dynamic UI?** 
3. **How does useState work?** 
4. **What happens when we call setState()?** 
5. **Functional updates** 
6. **Common mistakes**

7. **What is the difference between state and a normal variable?**
8. **What does useState return?**
9.  **Why do we use setCount instead of modifying count directly?**
10. **What happens when you call setCount with the same value as current state?**

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
│   │   ├── Counter.jsx
│   │   ├── App.jsx
│   │   └── README.md
│   │
│   └── main.jsx
│
└── README.md
```

---

## 📘 Step 2: Concepts

### Theory Concepts

1. **What is state in React?**  
    **Answer:**  
    State is data that belongs to a component and can change over time.
    When state changes, React automatically re-renders the component.  
    > Props = data from parent
    > State = data owned by component

---

2. **Why can’t we use normal variables for dynamic UI?**  
    **Answer:**  
    Normal variables update in memory, but React does not know to re-render the UI when they change.  
    `useState` tells React: “Hey, this value changed — update the UI!”

---

3. **How does `useState` work?**  
    **Answer:**  
    `useState` returns an array with two items:

    ```jsx
    const [state, setState] = useState(initialValue);
    ```

    - `state` → current value
    - `setState` → function to update value
    - `initialValue` → starting value

---

4. **What happens when we call `setState()`?**  
    **Answer:**  
    - React schedules a re-render of the component
    - The UI updates automatically with the new state value

---

5. **Functional updates**  
    **Answer:**  
    If new state depends on previous state, use functional form:

    ```jsx
    setCount(prevCount => prevCount + 1);
    ```

    This avoids bugs when multiple updates happen quickly.

---

6. **Common mistakes**  
    **Answer:**  
    | Mistake                                                 | Why wrong                                   |
    | ------------------------------------------------------- | ------------------------------------------- |
    | `count++`                                               | Direct variable change → UI does not update |
    | `setCount(count + 1)` in a loop without functional form | May use stale state                         |

---

### Practical Concepts

7. **What is the difference between state and a normal variable?**  
    **Answer:**  
    A normal variable can change its value, but React does not re-render the UI when it changes.  
    State is special — when state changes, React automatically updates the UI.

---

8. **What does `useState` return?**  
    **Answer:**  
    `useState` returns an array with two values:
    1. The current state value
    2. A function to update the state

    Example:

    ```jsx
    const [count, setCount] = useState(0);
    ```

    - `count` → current value
    - `setCount` → updates the value

---

9. **Why do we use setCount instead of modifying count directly?**  
    **Answer:**  
    Because React only knows about changes made using the setter function. If we change count directly, React will not re-render the component.

    Correct:

    ```jsx
    setCount(count + 1);
    ```

    Wrong:

    ```jsx
    count = count + 1;
    ```

---

10. **What happens when you call setCount with the same value as current state?**  
    **Answer:**  
    React does nothing because the value did not change. No re-render happens since React sees no difference.

    Example:

    ```jsx
    setCount(count); // no UI update
    ```