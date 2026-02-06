import { useState } from "react";

const SimpleForm = () => {
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted: ${username}`);
    };

    return (
        <div className="flex flex-col gap-4 bg-gray-700 border-2 border-gray-200 shadow-xl p-5 rounded-md">
            <h3
                className="font-bold font-serif text-2xl text-center text-blue-500"
            >
                Basic Form
            </h3>
            <form
                className="flex gap-2"
                onSubmit={handleSubmit}
            >
                <input 
                    type="text"
                    placeholder="Enter username..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border-2 text-white border-blue-400 p-2 rounded-md focus:outline-none"
                />

                <button
                    type="submit"
                    className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
                >
                    Submit
                </button>
            </form>      
        </div>
    );
};

export default SimpleForm;