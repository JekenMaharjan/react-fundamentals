import { useEffect, useState } from "react";

const EffectDemo = () => {
    const [count, setCount] = useState(0);

    // Run useEffect Once
    useEffect(() => {
        console.log("Component Mounted!");
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <div className="flex flex-col gap-5 bg-gray-300 p-5 rounded-md shadow-lg">
            <h3 className="text-sm text-gray-600">Click increase button to increase the count</h3>
            <button
                className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md"
                onClick={() => (setCount(prev => prev + 1))}
            >
                Increase
            </button>
        </div>
    );
};

export default EffectDemo;