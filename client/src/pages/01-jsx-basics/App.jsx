
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
        <div className="flex flex-col p-5 items-center bg-orange-100 min-w-screen min-h-screen">
            <h1 className="font-serif font-bold text-4xl mb-10">React Fundamentals - Day 1</h1>
            <h4 className="font-serif font-bold text-xl mb-5">JSX Basics</h4>
            
            <div className="flex flex-col gap-2 bg-white py-5 px-10 rounded-md shadow-md">
                <p>Name: {fullName}</p>
                <p>Profession: {profession}</p>
                <p>Learning: {learing}</p>
                <p>Current Year: {currentYear}</p>
                <p>10 + 5 = {10 + 5}</p>

                <p>Is React fun? {true ? "Yes" : "Absolutely"}</p>
                <p>Random number: {Math.floor(Math.random() * 10)}</p>
            </div>
        </div>
    )
}

export default JsxBasicsPage;