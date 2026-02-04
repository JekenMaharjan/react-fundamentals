// Importing Suspense from React
// Suspense is used to show a fallback UI while lazy-loaded components are being fetched
import { Suspense } from "react";

// Importing the AppRoutes component which contains all application routes
import AppRoutes from "./routes/appRoutes";

// App component is the root of the React application
function App() {
    return (
        // <Suspense> wraps lazy-loaded components
        // The fallback prop specifies what to show while components are loading
        <Suspense
            fallback={
                // This div will show until the lazy-loaded route/component is ready
                <div className="min-h-screen min-w-screen flex items-center justify-center">
                    <h1 className="text-2xl font-bold">Loading...</h1>
                </div>
            }
        >
            {/* All routes/pages are rendered inside Suspense */}
            <AppRoutes />
        </Suspense>
    );
}

// Exporting App component as the root component
export default App;
