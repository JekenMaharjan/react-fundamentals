# DAY 15 — Mini Project 1 (Counter with History)

> **Goal**: Understand state, arrays, immutability, and rendering lists.

## 🎯 Day 15 Goal

Clearly Understand:
- Managing multiple states
- Storing history using arrays
- Updating state immutably
- Rendering lists with `.map()`
- Real-world thinking (tracking changes)

---

## 📁 Folder Structure

```bash
15-counter-with-history/
├── App.jsx
├── Counter.jsx
├── History.jsx
└── README.md
```

> Keep it simple. Clean structure builds good habits.

---

## 🛠 Practical Task

**Requirements**
- Show current counter valuea
- Buttons:
    - Increment
    - Decrement
    - Reset
- Maintain a history list:
    - Store every counter value change
    - Display history below counter

---

## 📘 Concepts

1. **Why do we store history in an array?**  
    **Answer:**  
    Because arrays allow us to store multiple values in order.

2. **Why do we use spread operator when updating history?**  
    **Answer:**  
    To avoid mutating state directly and create a new array.

3. **Why is `.map()` used for history display?**  
    **Answer:**  
    To loop over data and render UI dynamically.

4. **Why is `key` needed in list rendering?**  
    **Answer:**  
    So React can track changes efficiently.

## One-Line Rule to Remember

> State is never changed, it is replaced.
