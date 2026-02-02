# Vite Installation Guide

## 1️⃣ Install Node.js

Check if Node is installed:  

```bash
node -v
npm -v
```

*If not installed, install Node.js LTS (always LTS, never experimental).*

Install Node.js LTS from here: [Download Nodejs LTS](https://nodejs.org/en/download)

---

## 2️⃣ Create Vite project

Guide to Install Vite, Visit: [Vite Getting Started](https://vite.dev/guide/)

Go to the folder where you keep projects:

```bash
npm create vite@latest
```

Choose carefully:

- **Project name**: my-vite-app
- **Framework**: React
- **Variant**: JavaScript (start simple, scale later)
- **npm install**: Yes

This creates a clean structure of Vite + React.

---

## 3️⃣ Enter the project folder

```bash
cd my-vite-app
```

---

## 4️⃣ Install dependencies

```bash
npm install
```

---

## 5️⃣ Test locally

```bash
npm run dev
```

Open:

```bash
http://localhost:5173
```

If it runs, your Vite Project is Ready! 👍

---

## 📁 Final project structure

```bash
my-vite-app/
├── public/
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── assets/
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 📦 Import Tailwind CSS

### 1. **Install Tailwind CSS**  

Install tailwindcss and @tailwindcss/vite via npm.  

```bash
npm install tailwindcss @tailwindcss/vite
```
   
### 2. **Configure the Vite plugin** 

Add the @tailwindcss/vite plugin to your Vite configuration.

```bash
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
plugins: [
    tailwindcss(),
],
})
```

### 3. **Import Tailwind CSS**  

Add an @import to your CSS file that imports Tailwind CSS.

```bash
@import "tailwindcss";
```