import Card from "./Card";

// This page demonstrates how to pass data to child components using props
const PropsDataPassingPage = () => {

    // new Date().getFullYear() gets the current year dynamically
    const currentYear = new Date().getFullYear();

    return (
        <div className="flex flex-col items-center justify-between min-w-screen min-h-screen">
            
            {/* HEADER SECTION */}
            <header className="font-serif font-bold text-3xl mb-10 bg-blue-600 text-white w-full text-center p-5">
                <h1>
                    Day 3 - React Fundamentals : Props and Data Passing
                </h1>
            </header>

            {/* MAIN CONTENT */}
            <main className="flex-1 w-full flex flex-col items-center    gap-5">
                
                {/* Title of Cards Section */}
                <h3 className="text-3xl font-bold font-serif text-gray-800">
                    Course Cards
                </h3>

                {/* Using Card component multiple times with different props */}
                {/* Props are used to pass dynamic data from parent to child */}
                <div className="flex flex-wrap gap-5">
                    <Card
                        title="JSX Basics"
                        description="Learning how JSX works in React."
                        level="Beginner"
                    />

                    <Card
                        title="Components"
                        description="Breaking UI into reusable parts."
                        level="Beginner"
                    />

                    <Card
                        title="Props and Data Passing"
                        description="Passing data from parent to child."
                        level="Beginner"
                    />
                </div>
            </main>

            {/* FOOTER SECTION */}
            <footer className="flex w-full p-5 justify-center bg-gray-800">
                <p className="text-center text-white font-serif">© {currentYear} React Practice</p>
            </footer>
        </div>
    );
};

export default PropsDataPassingPage;