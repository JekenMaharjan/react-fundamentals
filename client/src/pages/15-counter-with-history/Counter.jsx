import { useState } from "react";
import History from "./History";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [history, setHistory] = useState([]);

    const updateCount = (newValue) => {
        setCount(newValue);
        setHistory([...history, newValue]);
    };

    return (
        <div className="flex flex-col gap-3 border-2 border-gray-300 p-5 rounded-md shadow-md">
            <p 
                className="text-center px-4 py-2 bg-gray-300 rounded-md text-gray-700 font-bold text-xl"
            >
                {count}
            </p>

            <div className="flex gap-5">
                <button
                    className="px-4 py-2 w-12 text-xl font-bold text-white 
                    rounded-md bg-green-500 hover:bg-green-600"
                    onClick={() => updateCount(count + 1)}
                >
                    +
                </button>
                <button
                    className="px-4 py-2 w-12 text-xl font-bold text-white 
                    rounded-md bg-red-500 hover:bg-red-600"
                    onClick={() => updateCount(count - 1)}
                >
                    -
                </button>
            </div>

            <button
                className="px-4 py-2 text-xl font-bold text-white 
                    rounded-md bg-blue-500 hover:bg-blue-600"
                onClick={() => updateCount(0)}
            >
                Reset
            </button>

            <hr />

            <History countHistory={history}/>
        </div>
    );
};

export default Counter;