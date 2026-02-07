# DAY 14 — Custom Hooks (Basic Idea)

> **Core idea**: Reuse logic, not UI

## 🎯 Day 14 Goal

Clearly Understand:

1. **Why do custom hooks exist?**
2. **What is a custom hook?**
3. **Why must custom hooks start with `use`?**
4. **What problem do custom hooks solve?**
5. **When should you create a custom hook?**
6. **Can custom hooks return JSX?**

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
│   ├── 13-simple-data-fetching/
│   ├── 14-custom-hooks/
│   │   ├── App.jsx
│   │   ├── hooks/
│   │   │   └── useCounter.js
│   │   ├── README.md
│   │   └── Counter.jsx
│   │
│   └── main.jsx
│
└── README.md
```

---

## 📘 Step 2: Concepts

### Theoretical & Practical Concepts

1. **Why do custom hooks exist?**  
    **Answer:**  
    A reusable function that contains React hook logic.

---

2. **What is a custom hook?**  
    **Answer:**  
    To reuse logic and avoid repeating the same state code in many components.

---

3. **Why must custom hooks start with `use`?**  
    **Answer:**  
    When multiple components use the same logic.

---

4. **What problem do custom hooks solve?**  
    **Answer:**  
    No. Custom hooks return data and functions, not UI.

---

5. **When should you create a custom hook?**  
    **Answer:**  
    When multiple components use the same logic.

---

6. **Can custom hooks return JSX?**  
    **Answer:**  
    No. Custom hooks return data and functions, not UI.

---

### One-Line Rule to Remember

> Components show UI, hooks share logic.
