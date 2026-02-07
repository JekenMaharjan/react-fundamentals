# DAY 11 — Component Design (Smart vs Dumb)

> **Focus**: Writing clean, reusable, well-separated components  
> **Core idea**: Each component should have one responsibility

## 🎯 Day 11 Goal

Clearly Understand:

1. **What is a smart component?** 
2. **What is a dumb component?** 
3. **Why do we separate smart and dumb components?** 
4. **What is separation of concerns?** 
5. **What makes a component reusable?** 

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
│   │   ├── App.jsx
│   │   ├── ProfileContainer.jsx
│   │   ├── ProfileView.jsx
│   │   └── README.md
│   │
│   └── main.jsx
│
└── README.md
```

---

## 📘 Step 2: Concepts

### Theory & Practical Concepts

1. **What is a smart component?**  
    **Answer:**  
    A smart component (also called a container component) handles:

    - State
    - Logic
    - Data fetching

    It decides how things work.

---

2. **What is a dumb component?**  
    **Answer:**  
    A dumb component (also called a presentational component) handles:

    - UI only
    - Props only
    - No business logic

    It decides how things look.

---

3. **Why do we separate smart and dumb components?**  
    **Answer:**  
    To:

    - Keep code clean
    - Improve reusability
    - Make testing easier
    - Avoid mixing logic with UI

---

4. **What is separation of concerns?**  
    **Answer:**  
    Separation of concerns means each component does one job and does it well.

---

5. **What makes a component reusable?**  
    **Answer:**  
    A component is reusable when:

    - It receives data through props
    - It has minimal internal logic
    - It does not depend on specific data

---

### One-Line Rule to Remember

> Keep logic and UI separate to build reusable and maintainable components.
