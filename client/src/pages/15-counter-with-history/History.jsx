const History = ({ countHistory }) => {
    return (    
        <div className="flex flex-col gap-2 bg-gray-100 p-3 rounded-md">
            <h3 className="font-bold font-serif text-xl text-center">History</h3>
            {countHistory.map((value, index) => (
                <p key={index} className="bg-gray-300 p-2 px-5 rounded-md">{value}</p>
            ))}
        </div>
    );
};

export default History;