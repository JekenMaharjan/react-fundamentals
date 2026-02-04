import Counter from "./Counter";

const UseStateBasicsPage = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div className="flex flex-col items-center justify-between min-w-screen min-h-screen">
            {/* HEADER SECTION */}
            <header className="font-serif font-bold text-3xl bg-blue-600 text-white w-full text-center p-5">
                <h1>
                    Day 1 - React Fundamentals : useState Basics
                </h1>
            </header>

            {/* MAIN CONTENT */}
            <main className="flex-1 flex w-full p-5 justify-center items-center">
                <Counter />
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

export default UseStateBasicsPage;