// Header Component using Arrow Function
// This component displays the top section of the page
const Header = () => {

    // JSX must return a single parent element
    return (
        // <header> is semantic HTML for page header
        <header className="font-serif font-bold text-3xl mb-10 bg-blue-600 text-white w-full text-center p-5">
            <h1>
                Day 2 - React Fundamentals : React Components
            </h1>
        </header>
    );
};

// Exporting Header so it can be used in other files/components
export default Header;
