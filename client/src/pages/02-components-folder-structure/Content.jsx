// A React Functional Component using Arrow Function
// Components can be written as function declarations or arrow functions
const Content = () => {

    // The component must return JSX
    // JSX lets us write HTML-like code inside JavaScript
    return (
        // <main> is a semantic HTML tag for the main content of a page
        <main className="flex-1 w-full flex items-center justify-center">
            <p className="text-2xl font-bold text-center p-4">
                This is Day 2 of learning React components.
            </p>
        </main>
    );
};

// Exporting the component so it can be imported and used in other files
export default Content;
