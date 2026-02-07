# DAY 10 — useEffect Cleanup & Avoiding Infinite Loops

> **Focus**: Cleaning side effects properly  
> **Core idea**: Whatever you start, you must stop

## 🎯 Day 10 Goal

Clearly Understand:
1. **What is a cleanup function in `useEffect`?** 
2. **Why do we need cleanup in `useEffect`?** 
3. **When does cleanup run?** 
4. **What is an infinite loop in `useEffect`?** 
5. **How do we avoid infinite loops?** 

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
│   ├── 10-cleanup-effects/
│   │   ├── App.jsx
│   │   ├── Timer.jsx
│   │   └── README.md
│   │
│   └── main.jsx
│
└── README.md
```

---

## 📘 Step 2: Concepts

### Theory & Practical Concepts

1. **What is a cleanup function in `useEffect`?**  
    **Answer:**  
    A cleanup function is a function that runs when a component unmounts or before the effect runs again.  
    It is used to stop or clean side effects.

    Example:

    ```jsx
    useEffect(() => {
    return () => {
        console.log("Cleanup");
    };
    }, []);
    ```

---

2. **Why do we need cleanup in `useEffect`?**  
    **Answer:**  
    To prevent:

    - Memory leaks
    - Multiple timers running
    - Event listeners stacking
    - Unexpected bugs

---

3. **When does cleanup run?**  
    **Answer:**  
    Cleanup runs:

    - Before the component is removed from the screen
    - Before the effect runs again (if dependencies change)

---

4. **What is an infinite loop in `useEffect`?**  
    **Answer:**  
    An infinite loop happens when an effect updates state that it depends on, causing it to run again and again.

    Example (wrong):

    ```jsx
    useEffect(() => {
    setCount(count + 1);
    }, [count]);
    ```

---

5. **How do we avoid infinite loops?**  
    **Answer:**  
    - Do not update dependent state inside the same effect
    - Use correct dependency arrays
    - Move logic to event handlers if needed

---

### One-Line Rule to Remember

> Always clean what you create inside `useEffect`.
