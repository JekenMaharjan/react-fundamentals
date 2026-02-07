# DAY 3 — Props (Passing Data to Components)

## 🎯 Day 3 Goal

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

11. **Which component is the parent?**
12. **Which component is the child?**
13. **Where is data defined?**
14. **Where is data received?**
15. **Why is the Card component reusable?**

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

## 📘 Step 2: Concepts

### Theory Concepts

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

---

### Practical Concepts

11. **Which component is the parent?**
    **Answer:**  
    The parent component is `PropsDataPassingPage` because this component:
    - Imports the Card component.
    - Uses <Card /> inside its JSX.
    - Sends data to Card using props.
    The component that calls another component and sends data is always the parent.

---

12. **Which component is the child?**
    **Answer:**  
    The child component is `Card` because:
    - `Card` is used inside `PropsDataPassingPage`.
    - It receives data from the parent through props.
    - It does not control the data itself.
    The component that receives data is the child.

---

13. **Where is data defined?**
    **Answer:**  
    Data is defined in `PropsDataPassingPage` component.

    Example in code:

    ```jsx
    <Card
        title="JSX Basics"
        description="Learning how JSX works in React."
        level="Beginner"
    />
    ```

    - The values (title, description, level) are created in the parent.
    - This is the source of truth for the data.

    Data is always defined in the parent component.

---

14. **Where is data received?**
    **Answer:**  
    Data is received in `Card` component.

    Example in code:

    ```jsx
    const Card = (props) => {
    ```
    
    and used here:

    ```jsx
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <p>Level: {props.level}</p>
    ```

    - `props` contains all the data sent by the parent
    - The child only uses the data, it does not create it

    Child components receive data via props.

---

15. **Why is the Card component reusable?**
    **Answer:**  
    The Card componenet is reusable because:
    1. It does not contain fixed data.
    2. It depends only on props.
    3. The same structure works with different values.

    Example:

    ```jsx
    <Card title="JSX Basics" ... />
    <Card title="Components" ... />
    <Card title="Props and Data Passing" ... />
    ```

    Same component ➜ different output ➜ reusability

    This follows the golden React rule:
    > *“Write once, use many times with different data.”*

---

### One-line answers (very important)

 - **Parent component**: `PropsDataPassingPage`
 - **Child component**: `Card`
 - **Data defined in**: Parent component
 - **Data received in**: Child component using props
 - **Card is reusable because**: It uses props instead of hard-coded data
