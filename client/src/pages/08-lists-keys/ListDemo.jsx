const ListDemo = () => {
    // Simple list
    const fruits = ["Apple", "Banana", "Mango"];

    // List of Objects
    const users = [
        { id: 1, name: "Ram" },
        { id: 2, name: "Shyam" },
        { id: 3, name: "Hari" },
    ];

    return (
        <div className="flex flex-col gap-5 bg-gray-300 p-5 rounded-md shadow-lg">
            <h3 className="font-semibold font-serif text-xl">List of Fruits</h3>
            <ul className="flex flex-col gap-3">
                {fruits.map((fruit, index) => (
                    <li 
                        key={index}
                        className="bg-gray-200 py-2 px-4 rounded-md"
                    >
                        {fruit}
                    </li>
                ))}
            </ul>

            <h3 className="font-semibold font-serif text-xl">List of Users</h3>
            <ul className="flex flex-col gap-3">
                {users.map((user) => (
                    <li 
                        key={user.id}
                        className="bg-gray-200 py-2 px-4 rounded-md"
                    >
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListDemo;