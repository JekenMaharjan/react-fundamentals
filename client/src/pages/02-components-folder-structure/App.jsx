// Importing child components from the same folder
// These components are separated to keep code clean and reusable
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

// Parent Component
// This component combines Header, Content, and Footer together
const ComponentsFolderStructurePage = () => {

    // A React component must return JSX
    return (
        // Single parent wrapper (required in JSX)
        <div className="flex flex-col justify-between items-center min-w-screen min-h-screen">

            {/* Header Component */}
            {/* Displays the top section of the page */}
            <Header />

            {/* Content Component */}
            {/* Contains the main body/content of the page */}
            <Content />

            {/* Footer Component */}
            {/* Displays the bottom section of the page */}
            <Footer />

        </div>
    );
};

// Exporting the component so it can be used in other files
export default ComponentsFolderStructurePage;
