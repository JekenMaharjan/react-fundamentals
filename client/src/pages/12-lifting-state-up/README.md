# DAY 12 — Lifting State Up

> **Focus**: Sharing state between components  
> **Core idea**: State lives in the common parent

## 🎯 Day 12 Goal

Clearly Understand:

1. **What does “lifting state up” mean?** 
2. **Why do we lift state up?** 
3. **When should we lift state up?** 
4. **How does data flow when state is lifted?** 

5. **Why can’t sibling components share state directly?**
6. **How do child components update parent state?**
7. **Why is lifting state up useful?**

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
│   ├── 11-component-design/
│   ├── 12-lifting-state-up/
│   │   ├── App.jsx
│   │   ├── README.md
│   │   ├── Parent.jsx
│   │   ├── CounterButtons.jsx
│   │   └── CounterDisplay.jsx
│   │
│   └── main.jsx
│
└── README.md
```

---

## 📘 Step 2: Concepts

### Theoretical & Practical Concepts

1. **What does “lifting state up” mean?**  
    **Answer:**  
    Lifting state up means moving state to a parent component so that multiple child components can use and update the same data.

---

2. **Why do we lift state up?**  
    **Answer:**  
    Because sibling components cannot share state directly. Placing the state in their common parent allows both to stay in sync.

---

3. **When should we lift state up?**  
    **Answer:**  
    We lift state up when:

    - Two or more components need the same data
    - One component updates data and another displays it

---

4. **How does data flow when state is lifted?**  
    **Answer:**  
    Data flows:

    - Down as props
    - Up as functions (callbacks)

---

5. **Why can’t sibling components share state directly?**  
    **Answer:**  
    Because each component has its own state. Only a parent can hold shared data.

---

6. **How do child components update parent state?**  
    **Answer:**  
    By calling functions passed as props from the parent.

---

7. **Why is lifting state up useful?**  
    **Answer:**  
    It keeps data consistent and avoids duplication across components.

---

### One-Line Rule to Remember

> Shared data belongs in the closest common parent
