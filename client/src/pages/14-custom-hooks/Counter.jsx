import useCounter from "./hooks/useCounter";

const Counter = () => {
    const { count, increment, decrement, reset } = useCounter(0);

    return (
        <div className="flex flex-col gap-3 justify-center items-center bg-gray-700 text-white p-5 rounded-md">
            <h2 className="text-3xl border-b-2 border-gray-400 px-5">
                Count: {count}
            </h2>

            <div className="flex gap-4">
                <button
                    className="px-4 py-2 text-xl rounded-md bg-green-500 hover:bg-green-600"
                    onClick={increment}
                >
                    +
                </button>

                <button
                    className="px-4 py-2 text-xl rounded-md bg-red-500 hover:bg-red-600"
                    onClick={decrement}
                >
                    -
                </button>
            </div>

            <button
                className="px-4 py-2 rounded-md text-xl bg-blue-500 hover:bg-blue-600"
                onClick={reset}
            >
                Reset
            </button>
        </div>
    );
};

export default Counter;