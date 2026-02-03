import { Suspense } from "react";
import AppRoutes from "./routes/appRoutes";

function App() {
    return (
        <Suspense 
        fallback={
            <div className="min-h-screen min-w-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold">Loading...</h1>
            </div>
        }>
            <AppRoutes />
        </Suspense>
    );
}

export default App;
