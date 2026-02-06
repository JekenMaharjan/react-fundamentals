# DAY 8 — Lists & Keys in React

> **Focus**: Rendering multiple items efficiently  
> **Core idea**: Data → List → UI

## 🎯 Day 8 Goal

Clearly Understand:
1. **What is a list in React?** 
2. **How do we render lists in React?** 
3. **What is a key in React?** 
4. **Why are keys important?** 
5. **Can we use array index as key?** 

6. **Why do we use `map()`?**
7. **Why should keys be unique?**
8. **When is it okay to use index as key?**

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
│   │   ├── App.jsx
│   │   ├── ListDemo.jsx
│   │   └── README.md
│   │
│   └── main.jsx
│
└── README.md
```

---

## 📘 Step 2: Concepts

### Theory Concepts

1. **What is a list in React?**   
    **Answer:**  
    A list in React is a way to render multiple similar components using an array of data.

    Example:

    ```jsx
    const fruits = ["Apple", "Banana", "Mango"];
    ```

---

2. **How do we render lists in React?** 
    **Answer:**  
    We use JavaScript’s `map()` method to convert array items into JSX elements.

    Example:

    ```jsx
    fruits.map((fruit) => <li>{fruit}</li>);
    ```

---

3. **What is a key in React?**  
    **Answer:**  
    A key is a unique identifier that helps React understand which items have changed in a list.

---

4. **Why are keys important?**  
    **Answer:**  
    Keys help React:

    - Update lists efficiently
    - Avoid unnecessary re-renders
    - Maintain correct UI behavior

---

5. **Can we use array index as key?**  
    **Answer:**  
    Yes, but only when the list is static (no add/remove/reorder).  
    For dynamic lists, use a unique id.

---

### Practical Concepts

6. **Why do we use `map()`?**
    **Answer:**  
    We use `map()` to loop through an array and convert each item into a JSX element that React can render.

---

7. **Why should keys be unique?**
    **Answer:**  
    Unique keys help React update only the changed items, making the UI faster and correct.

---

8. **When is it okay to use index as key?**
    **Answer:**  
    It is okay to use index as a key only when the list is static and items do not change order or get removed.

---

### One-line answers (very important)

> Keys help React remember which list item is which.
