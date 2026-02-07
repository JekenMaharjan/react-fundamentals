import { useEffect, useState } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        // Cleanup
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="flex flex-col gap-5 bg-gray-300 p-5 rounded-md shadow-lg">
            <h1 className="text-gray-600 font-semibold text-2xl">Seconds: {seconds}</h1>
        </div>
    );
};

export default Timer;