# DAY 5 — React Events and State Updates (Foundational & Practical)

> **Focus**: Making your app interactive using user actions  
> **Core idea**: User → Event → Function → UI change

## 🎯 Day 5 Goal

Clearly Understand:
1. **What are events in React?** 
2. **How are React events different from HTML events?** 
3. **Why do we pass a function reference in events?** 
4. **How do events work with state?** 
5. **Common React events you must remember** 

6. **Why do we use onClick instead of onclick?**
7. **Why should we not call a function directly in JSX events?**
8.  **What happens after state updates inside an event?**

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
│   │   ├── EventsDemo.jsx
│   │   └── README.md
│   │
│   └── main.jsx
│
└── README.md
```

---

## 📘 Step 2: Concepts

### Theory Concepts

1. **What are events in React?**  
    **Answer:**  
    Events are user actions like clicking a button, typing in an input, or submitting a form.  
    React handles these using event handlers.

    Examples:

    - onClick
    - onChange
    - onSubmit

---

2. **How are React events different from HTML events?**  
    **Answer:**  
    - React uses camelCase (onClick)
    - React passes a function, not a string
    - React uses Synthetic Events for consistency

    HTML:
    
    ```html
    <button onclick="doSomething()">
    ```

    React:

    ```jsx
    <button onClick={doSomething}>
    ```

---

3. **Why do we pass a function reference in events?**  
    **Answer:**  
    So the function runs only when the event happens, not during rendering.

    Wrong:

    ```jsx
    onClick={handleClick()}
    ```

    Correct:

    ```jsx
    onClick={handleClick}
    ```

---

4. **How do events work with state?**  
    **Answer:**  
    Events are usually used to update state. When state updates, React re-renders the component automatically.

    Example flow:

    ```bash
    Button click → setState → UI updates
    ```

---

5. **Common React events you must remember**  
    **Answer:**  
    | Event          | Use           |
    | -------------- | ------------- |
    | `onClick`      | Button clicks |
    | `onChange`     | Input typing  |
    | `onSubmit`     | Form submit   |
    | `onMouseEnter` | Hover         |

---

### Practical Concepts

6. **Why do we use `onClick` instead of `onclick`?**  
    **Answer:**  
    React uses camelCase naming for events.  
    `onClick` is the correct React event handler, while `onclick` is used in plain HTML and does not work in JSX.

---

7. **Why should we not call a function directly in JSX events?**  
    **Answer:**  
    If we call the function directly, it runs immediately when the component renders, not when the event happens.  
    We should pass the function reference so it runs only when the user performs the action.

    Correct:

    ```jsx
    onClick={handleClick}
    ```

    Wrong:

    ```jsx
    onClick={handleClick()}
    ```

---

8. **What happens after state updates inside an event?**  
    **Answer:**  
    When state is updated inside an event using `setState`, React re-renders the component automatically and updates the UI with the new value.

---

### One-line answers (very important)

> Events trigger state changes, and state changes update the UI.
