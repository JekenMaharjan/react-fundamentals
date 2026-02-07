const CounterButtons = ({ setCount }) => {
    return (
        <div className="flex gap-5">
            <button
                className="flex items-center justify-center w-12 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-md text-white text-2xl"
                onClick={() => setCount((c) => c + 1)}
            >
                +
            </button>
            <button
                className="flex items-center justify-center w-12 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md text-white text-2xl"
                onClick={() => setCount((c) => c - 1)}
            >
                -
            </button>
        </div>
    );
};

export default CounterButtons;