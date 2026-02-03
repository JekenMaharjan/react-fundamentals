import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound/App"));

const JsxBasicsPage = lazy(() => import("../pages/01-jsx-basics/App"));

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/01-jsx-basics" element={<JsxBasicsPage />} />
        </Routes>
    );
}

export default AppRoutes;
