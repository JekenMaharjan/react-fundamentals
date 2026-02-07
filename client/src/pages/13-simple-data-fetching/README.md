# DAY 13 — Simple Data Fetching

> **Focus**: Getting data from an API  
> **Core idea**: UI reacts to async data

## 🎯 Day 13 Goal

Clearly Understand:

1. **What is an API?** 
2. **What is data fetching in React?** 
3. **What is `fetch()`?** 
4. **Why do we use `useEffect` for fetching data?** 
5. **What is loading state?**
6. **What is error state?**

7. **Why is loading state needed?**
8. **Why is error state important?**

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
│   │   ├── App.jsx
│   │   ├── README.md
│   │   └── FetchUsers.jsx
│   │
│   └── main.jsx
│
└── README.md
```

---

## 📘 Step 2: Concepts

### Theoretical & Practical Concepts

1. **What is an API?**  
    **Answer:**  
    An API (Application Programming Interface) is a way for one program to send or receive data from another program, usually over the internet.

---

2. **What is data fetching in React?**  
    **Answer:**  
    Data fetching means requesting data from an API and using it in your React component.

---

3. **What is `fetch()`?**  
    **Answer:**  
    `fetch()` is a JavaScript function used to make HTTP requests and get data from an API.

---

4. **Why do we use `useEffect` for fetching data?**  
    **Answer:**  
    Because data fetching is a side effect, and `useEffect` runs after the component renders.

---

5. **What is loading state?**  
    **Answer:**  
    Loading state is a state variable that tells us whether data is still being fetched.

---

6. **What is error state?**  
    **Answer:**  
    Error state is used to handle failures, such as network issues or server errors.

---

7. **Why is loading state needed?**  
    **Answer:**  
    Because data does not arrive instantly. Loading state allows us to show feedback while waiting.

---

8. **Why is error state important?**  
    **Answer:**  
    It helps us handle failures gracefully instead of crashing the app.

---

### One-Line Rule to Remember

> Async data needs loading, error, and success states.
