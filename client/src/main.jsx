// Import React (required for JSX)
import React from "react";

// Import ReactDOM for rendering React components to the DOM
import ReactDOM from "react-dom/client";

// Import BrowserRouter to enable routing in the app
import { BrowserRouter } from "react-router-dom";

// Import the root App component
import App from "./App.jsx";

// Import global CSS
import "./index.css";

// Get the root HTML element where React will render the app
const root = document.getElementById("root");

// Safety check: throw an error if root element is not found
if (!root) throw new Error("Root element not found");

// Create a React root and render the app
ReactDOM.createRoot(root).render(
    // React.StrictMode helps highlight potential problems in your app
    <React.StrictMode>

        {/* BrowserRouter enables React Router for client-side routing */}
        <BrowserRouter>

            {/* Root App component, contains all routes and pages */}
            <App />

        </BrowserRouter>
    </React.StrictMode>
);
