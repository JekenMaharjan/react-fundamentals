// A React Functional Component
// Component names should always start with a CAPITAL letter
const JsxBasicsPage = () => {

    // Variables used inside JSX
    // We use const because these values do not change
    const fullName = "Jeken Maharjan";
    const profession = "Computer Engineer";
    const learing = "React Fundamentals";

    // JavaScript can be written normally inside components
    const currentYear = new Date().getFullYear();

    // WRONG JSX USAGE
    // React components must return ONLY ONE parent element
    // Uncommenting below code will cause an error
    /*
    return (
        <h1>Hello</h1>
        <p>This will break</p>
    );
    */

    // CORRECT JSX USAGE
    // Everything is wrapped inside a single parent <div>
    return (
        <div className="flex flex-col items-center justify-between min-w-screen min-h-screen">

            {/* HEADER SECTION */}
            <header className="font-serif font-bold text-3xl mb-10 bg-blue-600 text-white w-full text-center p-5">
                <h1>
                    Day 1 - React Fundamentals : JSX Basics
                </h1>
            </header>

            {/* MAIN CONTENT */}
            <main className="flex flex-col gap-2 bg-white py-5 px-10 rounded-md shadow-2xl border-2 border-gray-200">

                {/* Using JavaScript variables inside JSX with {} */}
                <p>Name: {fullName}</p>
                <p>Profession: {profession}</p>
                <p>Learning: {learing}</p>
                <p>Current Year: {currentYear}</p>

                {/* JavaScript expressions inside JSX */}
                <p>10 + 5 = {10 + 5}</p>

                {/* Conditional rendering using ternary operator */}
                <p>Is React fun? {true ? "Yes" : "Absolutely"}</p>

                {/* Calling JavaScript functions inside JSX */}
                <p>Random number: {Math.floor(Math.random() * 10)}</p>
            </main>

            {/* FOOTER SECTION */}
            <footer className="flex w-full p-5 justify-center bg-gray-800">
                <p className="text-center text-white font-serif">
                    © {currentYear} React Practice
                </p>
            </footer>
        </div>
    );
};

// Exporting the component so it can be used in other files
export default JsxBasicsPage;
