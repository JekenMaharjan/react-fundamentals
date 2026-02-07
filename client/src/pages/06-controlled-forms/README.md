# DAY 6 — Forms & Controlled Components

> **Focus**: Handling forms the “React way”  
> **Core idea**: React controls the input, not the browser

## 🎯 Day 6 Goal

Clearly Understand:

1. **What is a controlled component?** 
2. **Why do we use controlled components?** 
3. **What is `onChange` used for?** 
4. **What is `onSubmit` used for?** 
5. **Why do we use `event.preventDefault()`?** 

6. **Why do we use `value` and `onChange` together?**
7. **What happens if we don’t use `event.preventDefault()`?**
8. **Who controls the input value in a controlled component?**

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
│   │   ├── App.jsx
│   │   ├── SimpleForm.jsx
│   │   └── README.md
│   │
│   └── main.jsx
│
└── README.md
```

---

## 📘 Step 2: Concepts

### Theory Concepts

1. **What is a controlled component?**  
    **Answer:**  
    A controlled component is an input element whose value is controlled by React state. The input value comes from state, and changes happen using setState.

---

2. **Why do we use controlled components?**  
    **Answer:**  
    Because React becomes the single source of truth for the form data. This makes validation, submission, and debugging easier.

---

3. **What is `onChange` used for?**  
    **Answer:**  
    `onChange` is used to capture user input and update state whenever the input value changes.

---

4. **What is `onSubmit` used for?**  
    **Answer:**  
    `onSubmit` is used to handle form submission. We usually prevent the page from refreshing using `event.preventDefault()`.

---

5. **Why do we use `event.preventDefault()`?**  
    **Answer:**  
    To stop the browser’s default behavior of reloading the page when a form is submitted.

---

### Practical Concepts

6. **Why do we use `value` and `onChange` together?**  
    **Answer:**  
    - `value` shows the current state in the input
    - `onChange` updates the state when the user types

    Using both keeps the input fully controlled by React.

---

7. **What happens if we don’t use `event.preventDefault()`?**  
    **Answer:**  
    The browser refreshes the page when the form is submitted. This causes React state to reset and the app to lose data.

---

8. **Who controls the input value in a controlled component?**  
    **Answer:**  
    React state controls the input value, not the browser.

---

### One-line answers (very important)

> Controlled component = React controls input + state controls UI
