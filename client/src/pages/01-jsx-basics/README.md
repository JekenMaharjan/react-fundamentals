# DAY 1 — React Fundamentals: JSX & First Component

## 🎯 Day 1 Goal

Clearly Understand:

1. **What is React?** 
2. **What is JSX?** 
3. **JSX vs HTML** 
4. **Why do we use {} in JSX?** 
5. **Why must JSX return one parent element?** 
6. **Single parent rule**

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

1. **What is React?**  
    **Answer:**  
    React is a JavaScript library used to build user interfaces (UI), especially single-page applications.  
    In simple words, react helps you build fast, interactive websites using small reusable pieces called components.

2. **What is JSX?**  
    **Answer:**  
    JSX stands for JavaScript XML. JSX lets us write UI structure using JavaScript syntax.  
    Example:

    ```js
    const element = <h1>Hello World</h1>;
    ```

    This looks like HTML, but it’s actually JavaScript. JSX makes React code easy to read and write.

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

4. **Why do we use {} in JSX?**  
    **Answer:**  
    {} is used to insert JavaScript inside JSX.  
    Anything inside {} is treated as JavaScript code.  
    Example:  

    ```js
    const name = "React";
    <h1>Hello {name}</h1>
    // Output: Hello React
    ```

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

6. **Single parent rule**  
    **Answer:**  
    The Single Parent Rule means:  
    A React component must wrap all JSX inside one parent element.  
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

    Fragments avoid adding extra <div> in the DOM.


