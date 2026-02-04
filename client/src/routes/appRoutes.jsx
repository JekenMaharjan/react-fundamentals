// Importing Routes and Route from react-router-dom
// Routes wraps all Route components and manages routing
import { Routes, Route } from "react-router-dom";

// Lazy loading allows components to load only when needed
// This improves performance by splitting code into smaller chunks
import { lazy } from "react";

// Lazy-loaded page components
// Each page will only be loaded when the user navigates to its route
const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound/App"));

const JsxBasicsPage = lazy(() => import("../pages/01-jsx-basics/App"));
const ComponentsFolderStructurePage = lazy(() => import("../pages/02-components-folder-structure/App"));
const PropsDataPassingPage = lazy(() => import("../pages/03-props-data-passing/App"));
const UseStateBasicsPage = lazy(() => import("../pages/04-usestate-basics/App"));
const EventsStateUpdatesPage = lazy(() => import("../pages/05-events-state-updates/App"));
const ControlledFormsPage = lazy(() => import("../pages/06-controlled-forms/App"));
const ConditionalRenderingPage = lazy(() => import("../pages/07-conditional-rendering/App"));
const ListsKeysPage = lazy(() => import("../pages/08-lists-keys/App"));
const UseEffectBasicsPage = lazy(() => import("../pages/09-useeffect-basics/App"));
const CleanupEffectsPage = lazy(() => import("../pages/10-cleanup-effects/App"));
const ComponentDesignPage = lazy(() => import("../pages/11-component-design/App"));
const LiftingStateUpPage = lazy(() => import("../pages/12-lifting-state-up/App"));
const SimpleDataFetchingPage = lazy(() => import("../pages/13-simple-data-fetching/App"));
const CustomHooksPage = lazy(() => import("../pages/14-custom-hooks/App"));

// AppRoutes component defines all application routes
function AppRoutes() {
    return (
        // <Routes> is a wrapper for all route definitions
        <Routes>

            {/* Home page route */}
            <Route path="/" element={<Home />} />

            {/* Wildcard route for any undefined path */}
            {/* Displays NotFound component (404 page) */}
            <Route path="*" element={<NotFound />} />

            {/* Lesson-specific routes */}
            <Route path="/01-jsx-basics" element={<JsxBasicsPage />} />
            <Route path="/02-components-folder-structure" element={<ComponentsFolderStructurePage />} />
            <Route path="/03-props-data-passing" element={<PropsDataPassingPage />} />
            <Route path="/04-usestate-basics" element={<UseStateBasicsPage />} />
            <Route path="/05-events-state-updates" element={<EventsStateUpdatesPage />} />
            <Route path="/06-controlled-forms" element={<ControlledFormsPage />} />
            <Route path="/07-conditional-rendering" element={<ConditionalRenderingPage />} />
            <Route path="/08-lists-keys" element={<ListsKeysPage />} />
            <Route path="/09-useeffect-basics" element={<UseEffectBasicsPage />} />
            <Route path="/10-cleanup-effects" element={<CleanupEffectsPage />} />
            <Route path="/11-component-design" element={<ComponentDesignPage />} />
            <Route path="/12-lifting-state-up" element={<LiftingStateUpPage />} />
            <Route path="/13-simple-data-fetching" element={<SimpleDataFetchingPage />} />
            <Route path="/14-custom-hooks" element={<CustomHooksPage />} />

        </Routes>
    );
}

// Exporting AppRoutes for use in App.js or main application file
export default AppRoutes;
