import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import JsxBasicsPage from "./pages/01-jsx-basics/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/01-jsx-basics" element={<JsxBasicsPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
