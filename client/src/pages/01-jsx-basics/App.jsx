
const JsxBasicsPage = () => {
    const fullName = "Jeken Maharjan";
    const profession = "Computer Engineer";
    const learing = "React Fundamentals";
    const currentYear = new Date().getFullYear();

    // Wrong JSX usage - Uncommenting this will cause an error
    // return (
    //     <h1>Hello</h1>
    //     <p>This will break</p>
    // );

    return (
        <div className="flex flex-col items-center justify-between min-w-screen min-h-screen">
            <header className="w-full flex items-center justify-center bg-blue-600">
                <h1 className="text-2xl font-bold text-center text-white p-4 font-mono">
                    DAY 1 - React Fundamentals : JSX Basics
                </h1>
            </header>
            
            <main className="flex flex-col gap-2 bg-white py-5 px-10 rounded-md shadow-2xl border-2 border-gray-200">
                <p>Name: {fullName}</p>
                <p>Profession: {profession}</p>
                <p>Learning: {learing}</p>
                <p>Current Year: {currentYear}</p>
                <p>10 + 5 = {10 + 5}</p>

                <p>Is React fun? {true ? "Yes" : "Absolutely"}</p>
                <p>Random number: {Math.floor(Math.random() * 10)}</p>
            </main>

            <footer className="flex w-full p-4 justify-center bg-gray-800">
                <p className="text-center text-white font-serif">© {currentYear} React Practice</p>
            </footer>
        </div>
    )
}

export default JsxBasicsPage;