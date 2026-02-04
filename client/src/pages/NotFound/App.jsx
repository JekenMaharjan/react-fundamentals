// NotFound Component using Arrow Function
// This component is displayed when a page does not exist (404 page)
const NotFound = () => {

    // JSX must return a single parent element
    return (
        <div className="min-h-screen min-w-screen flex items-center justify-center">
            <h1 className="text-2xl font-bold">Page Not Found...</h1>
        </div>
    );
};

// Exporting the component so it can be used in routing or other parent components
export default NotFound;
