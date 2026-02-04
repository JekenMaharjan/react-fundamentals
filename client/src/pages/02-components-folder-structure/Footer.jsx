// Footer Component using Arrow Function
// This component displays the bottom section of the page
const Footer = () => {

    // Using JavaScript inside the component
    // new Date().getFullYear() returns the current year
    const currentDate = new Date().getFullYear();

    // JSX must return a single parent element
    return (
        // <footer> is semantic HTML for page footer
        <footer className="flex w-full p-5 justify-center bg-gray-800">

            {/* {currentDate} : dynamically shows the current year */}
            <p className="text-center text-white font-serif">
                © {currentDate} React Practice
            </p>
        </footer>
    );
};

// Exporting Footer so it can be used in other files/components
export default Footer;
