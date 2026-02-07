import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterButtons from "./CounterButtons";

const Parent = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col gap-5 bg-gray-300 p-5 rounded-md shadow-lg">
            <CounterDisplay count={count}/>
            <CounterButtons setCount={setCount}/>
        </div>
    );
};

export default Parent;