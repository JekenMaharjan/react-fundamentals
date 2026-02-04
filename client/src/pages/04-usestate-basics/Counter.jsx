import { useState } from "react";

const Counter = () => {
    // initialize state variable 'count' with initial value 0
    const [count, setCount] = useState(0); 

    return (
        <div className="flex flex-col bg-gray-200 p-5 shadow-xl rounded gap-4 items-center justify-center">
            <h2 className="font-bold text-3xl text-gray-700">Counter App</h2>

            <p className="text-gray-600">Current Count : {count}</p>

            <div className="flex gap-4">
                {/* Count Increase Button */}
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={() => setCount(count + 1)}
                >
                    Increase ( + )
                </button>

                {/* Count Decrease Button */}
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => setCount(count - 1)}
                >
                    Decrease ( - )
                </button>

                {/* Reset Button*/}
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => setCount(0)}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Counter;