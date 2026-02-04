# DAY 2 — React Fundamentals: React Components

## 🎯 Day 2 Goal

Clearly Understand:

1. **What is a React component?** 
2. **Why are components important in React?** 
3. **What are functional components?** 
4. **Why must component names start with a capital letter?** 
5. **What is export default in React?** 
6. **What is import used for?**
7. **Can one component be used inside another component?**
8. **What is the role of App component?**
9. **What happens if we write <header /> instead of <Header />?**
10. **Why should a component have only one responsibility?**

---

## 📁 Step 1: Folder Setup (inside client)

Create this structure:

```bash
client/
│
├── src/
│   ├── 01-jsx-basics/
│   ├── 02-components-folder-structure/
│   │   ├── Header.jsx
│   │   ├── Content.jsx
│   │   ├── Footer.jsx
│   │   ├── App.jsx
│   │   └── README.md
│   │
│   └── main.jsx
│
└── README.md
```

---

## 📘 Step 2: Concept

1. **What is a React component?**  
    **Answer:**  
    A React component is a small, reusable piece of UI written using JavaScript and JSX.
    It helps divide the UI into independent parts like header, footer, or content.

2. **Why are components important in React?**  
    **Answer:**  
    Components make the code:  
    - Reusable
    - Easy to manage
    - Easy to understand  
    Instead of writing everything in one file, we break UI into small components.

3. **What are functional components?**  
    **Answer:**  
    Functional components are JavaScript functions that return JSX.  
    They are simple, clean, and are the most commonly used components in modern React.

4. **Why must component names start with a capital letter?**  
    **Answer:**  
    React treats capital letter names as components and small letter names as HTML tags.  
    So `Header` is a component, but `header` is a normal HTML element.

5. **What is `export default` in React?**  
    **Answer:**  
    `export default` allows a component to be used in other files.  
    Without exporting, a component cannot be imported and reused.

6. **What is `import` used for?**  
    **Answer:**  
    `import` is used to bring a component or function from another file so that it can be used in the current file.

7. **Can one component be used inside another component?**  
    **Answer:**  
    Yes. React allows components to be nested inside other components.  
    This is how complex UIs are built from small pieces.

8. **What is the role of `App` component?**  
    **Answer:**  
    The `App` component acts as the root component.  
    It combines and displays other components like Header, Content, and Footer.

9.  **What happens if we write `<header />` instead of `<Header />`?**  
    **Answer:**  
    `<header />` is treated as an HTML tag, not a React component.  
    `<Header />` is treated as a custom React component.

10. **Why should a component have only one responsibility?**  
    **Answer:**  
    A single-responsibility component is:  
    - Easier to reuse
    - Easier to debug
    - Easier to maintain  
    This makes the code clean and organized.