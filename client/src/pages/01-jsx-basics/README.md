# DAY 1 — React Fundamentals: JSX & First Component

## 🎯 Day 1 Goal

Clearly Understand:
1. **What is React?** 
2. **What is JSX?** 
3. **JSX vs HTML** 
4. **Why do we use {} in JSX?** 
5. **Why must JSX return one parent element?** 
6. **Single parent rule**

7. **What error did you get when returning multiple elements?**
8. **Why does React enforce a single parent?**
9.  **What kind of JavaScript can be written inside {}?**
10. **Why can’t we write if directly inside JSX?**

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

## 📘 Step 2: Concepts

### Theory Concepts

1. **What is React?**   
    **Answer:**  
    React is a JavaScript library used to build user interfaces (UI), especially single-page applications.
    In simple words, react helps you build fast, interactive websites using small reusable pieces called components.

---

1. **What is JSX?**  
    **Answer:**  
    JSX stands for JavaScript XML. JSX lets us write UI structure using JavaScript syntax.  
    Example:

    ```js
    const element = <h1>Hello World</h1>;
    ```

    This looks like HTML, but it’s actually JavaScript. JSX makes React code easy to read and write.

---

3. **JSX vs HTML**  
    **Answer:**
    | HTML                    | JSX                     |
    | ----------------------- | ----------------------- |
    | Used in normal websites | Used inside React       |
    | `class`                 | `className`             |
    | `for`                   | `htmlFor`               |
    | Can’t write JS inside   | Can write JS using `{}` |
    | One file per page       | Component-based         |

    Example difference:

    ```html
    <!-- HTML -->
    <h1 class="title">Hello</h1>
    ```

    ```js
    // JSX
    <h1 className="title">Hello</h1>
    ```

---

4. **Why do we use `{}` in JSX?**  
    **Answer:**  
    `{}` is used to insert JavaScript inside JSX. Anything inside `{}` is treated as JavaScript code.

    Example:

    ```js
    const name = "React";
    <h1>Hello {name}</h1>
    // Output: Hello React
    ```

---

5. **Why must JSX return one parent element?**  
    **Answer:**  
    React components must return only one parent element because React needs one root to manage the UI efficiently.

    This is invalid:

    ```js
    return (
        <h1>Hello</h1>
        <p>Welcome</p>
    );
    ```

    This is valid:

    ```js
    return (
        <div>
            <h1>Hello</h1>
            <p>Welcome</p>
        </div>
    );
    ```

---

6. **What is Single parent rule?**  
    **Answer:**  
    The Single Parent Rule means a React component must wrap all JSX inside one parent element.  
    Parent can be:
    1. `<div>`
    2. `<section>`
    3. `<main>`
    4. `React.Fragment or <> </>`

    Example using Fragment:

    ```js
    return (
        <>
            <h1>Hello</h1>
            <p>Welcome</p>
        </>
    );
    ```
    
    Fragments avoid adding extra `<div>` in the DOM.

---

### Practical Concepts

7. **What error did you get when returning multiple elements?**  
   **Answer:**  
    Error:

    > JSX expressions must have one parent element

    (or sometimes)

    > Adjacent JSX elements must be wrapped in an enclosing tag

    In simple word,  
    React does not allow returning two elements side by side like this:

    ```jsx
    <h1>Hello</h1>
    <p>This will break</p>
    ```

    You must wrap them inside one parent (like a `<div>`).

---

8. **Why does React enforce a single parent?**  
   **Answer:**  
    Because JSX must return one JavaScript object.

    In simple word,
    - JSX is converted into JavaScript
    - JavaScript functions can return only one value
    - Multiple elements must be wrapped into one container

    Correct:
    
    ```html
    <div>
        <h1>Hello</h1>
        <p>Works fine</p>
    </div>
    ```

    > This rule keeps React fast, predictable, and easy to manage.

---

9.  **What kind of JavaScript can be written inside `{}`?**  
    **Answer:**  
    Inside `{}` we can write JavaScript expressions.

    Examples in code:

    ```jsx
    {fullName}               // variable
    {10 + 5}                 // expression
    {true ? "Yes" : "No"}    // ternary condition
    {Math.random()}          // function call
    ```

    - Expressions - Allowed
    - Statements - Not Allowed

---

10. **Why can’t we write if directly inside JSX?**  
    **Answer:**  
    Because if is a statement, not an expression.

    Example (wrong):

    ```jsx
    { if (isLoggedIn) { "Yes" } }
    ```

    **React solution:**  
    Use ternary operator instead (expression):

    ```jsx
    {isLoggedIn ? "Yes" : "No"}
    ```

    Simple Reason:
    - JSX only accepts expressions
    - `if`, `for`, `while` are statements
    - Statements do not return a value

---

### One-line answers (VERY IMPORTANT)

- **Error**: JSX must have a single parent element
- **Reason for single parent**: JSX returns one JavaScript object
- **Inside {} we can write**: JavaScript expressions
- **if not allowed because**: It is a statement, not an expression


