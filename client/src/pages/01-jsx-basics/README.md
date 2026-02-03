# DAY 1 — React Fundamentals: JSX & First Component

## 🎯 Day 1 Goal

Clearly Understand:  
- What JSX is?
- How React renders UI?
- How to write a basic functional component?
- How to organize and push Day-1 work to GitHub properly?

---

## 📁 Step 1: Folder Setup (inside client)

Create this structure:

```bash
client/
│
├── src/
│   ├── 01-jsx-basics/
│   │   ├── App.jsx
│   │   └── README.md
│   │
│   └── main.jsx
│
└── README.md
```

---

## 📘 Step 2: Concept

**What is JSX?**  
JSX lets us write UI structure using JavaScript syntax.

Example:

    ```bash
    <h1>Hello React</h1>
    ```

Key truths:

- JSX is not HTML
- JSX runs inside JavaScript
- JSX must return one parent element

This rule exists to keep the UI tree predictable.