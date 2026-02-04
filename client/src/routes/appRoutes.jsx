import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

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

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />

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

export default AppRoutes;
