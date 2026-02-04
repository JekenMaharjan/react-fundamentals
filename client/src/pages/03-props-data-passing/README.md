# DAY 3 — Props (Passing Data to Components)

## 🎯 Day 2 Goal

Clearly Understand:
1. **What are props in React?** 
2. **Why are props called “properties”?** 
3. **From where to where are props passed?** 
4. **Can a child component modify props?** 
5. **Why are props read-only in React?** 
6. **How do props make components reusable?**
7. **What happens if a prop is not passed?**
8. **What is the difference between props and normal variables?**
9. **Why is this code wrong?**
10. **How are props similar to function parameters?**

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
│   │   ├── Card.jsx
│   │   ├── App.jsx
│   │   └── README.md
│   │
│   └── main.jsx
│
└── README.md
```

---

## 📘 Step 2: Concept

1. **What are props in React?**  
    **Answer:**  
    Props are inputs passed to a React component from its parent component. They allow components to receive data and display it dynamically.

---

2. **Why are props called “properties”?**  
    **Answer:**  
    Props are called properties because they define characteristics or values of a component, similar to attributes of HTML elements.

---

3. **From where to where are props passed?**  
    **Answer:**  
    Props are passed from parent component to child component. The data flow in React is one-way.

---

4. **Can a child component modify props?**  
    **Answer:**  
    No. Props are read-only. Only the parent component can change the data it passes as props.

---

5. **Why are props read-only in React?**  
    **Answer:**  
    Props are read-only to maintain predictable data flow and avoid unexpected bugs. This makes the application easier to understand and debug.

---

6. **How do props make components reusable?**  
    **Answer:**  
    The same component can be reused with different data by passing different props. This avoids code duplication and keeps the UI consistent.

---

7. **What happens if a prop is not passed?**  
    **Answer:**  
    If a prop is not passed, its value becomes undefined in the child component. React does not throw an error by default.

---

8. **What is the difference between props and normal variables?**  
    **Answer:**  
    - Props come from outside the component
    - Variables are defined inside the component
    - Props are immutable, variables can change

---

9.  **Why is this code wrong?**

    ```jsx
    props.title = "New Title";
    ```

    **Answer:**  
    This is wrong because props are immutable. Changing props directly breaks React’s data flow rules.

---

10.  **How are props similar to function parameters?**  
    **Answer:**  
    Props are similar to function parameters because:
     - Data is passed when the component is called  
     - The component receives data and uses it inside 
 
        Example:

        ```jsx
        <Card title="React" />
        ```

        Works like:

        ```jsx
        function Card(title) {}
        ```