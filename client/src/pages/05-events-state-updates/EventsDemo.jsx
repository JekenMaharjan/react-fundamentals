import { useState } from "react";

const EventsDemo = () => {
    const [message, setMessage] = useState("No action yet");
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    const handleClick = () => {
        setMessage("Button was clicked!");
    }

    return (
        <div className="flex flex-col gap-5 bg-gray-500 p-5 rounded">
            <div className="flex justify-between items-center bg-gray-200 p-4 rounded">
                <button
                    className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md"
                    onClick={handleClick}
                >
                    Click me
                </button>
                <p>{message}</p>
            </div>

            <div className="flex justify-between items-center bg-gray-200 p-4 rounded">
                <button
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
                    onClick={() => setCount(count + 1)}
                >
                        Increment
                </button>
                <p>Count: {count}</p>
            </div>
            
            <div className="flex flex-col gap-4 bg-gray-200 p-4 rounded">
                <input
                    type="text"
                    className="border border-gray-400 p-2 rounded"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />
                <p>Your name is {name}.</p>
            </div>
        </div>
    );
};

export default EventsDemo;