# ⚡ Vite + React + Tailwind CSS: Installation Guide

A streamlined guide to setting up a modern web development environment.

---

## 1️⃣ Install Node.js

Before starting, ensure you have **Node.js LTS** installed. Avoid experimental versions for better stability.

    ```bash
    # Verify installation
    node -v
    npm -v
    ```

*If not installed, install Node.js LTS (always LTS, never experimental).*

Install Node.js LTS from here: [Download Nodejs LTS](https://nodejs.org/en/download)

---

## 2️⃣ Create Your Vite project

Guide to Install Vite, Visit: [Vite Getting Started](https://vite.dev/guide/)

Go to the folder where you keep projects:

```bash
npm create vite@latest
```

📋 **Recommended Selections**:

- **Project name**: my-vite-app
- **Framework**: React
- **Variant**: JavaScript
- **npm install**: Yes

This creates a clean structure of Vite + React.

---

## 3️⃣ Enter the project folder

```bash
# Move into project folder
cd my-vite-app
```

---

## 4️⃣ Install dependencies

```bash
# Install dependencies
npm install
```

---

## 5️⃣ Run the Project

```bash
npm run dev
```

Open:

```bash
http://localhost:5173
```

If it runs, your Vite Project is Ready! 👍

---

## 📁 Project Structure Overview

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

## 📦 Configure Tailwind CSS

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