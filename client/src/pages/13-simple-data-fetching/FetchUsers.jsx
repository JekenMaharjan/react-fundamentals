import { useEffect, useState } from "react";

const FetchUsers = () => {
    const [users, setUsers] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            if (!res.ok) {
                throw new Error("Failed to fetch");
            }
            return res.json();
        })
        .then((data) => {
            setUsers(data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        })
    }, []);

    if (loading) {
        return (
            <p>Loading users...</p>
        );
    };

    if (error) {
        return (
            <p>Error: {error}</p>
        );
    };

    return (
        <div className="flex flex-col gap-3 bg-gray-300 p-7 rounded-md shadow-lg">
            <h2 className="font-bold text-xl text-center text-gray-800 mb-2">List of Fetched Users</h2>
            {users.map((user) => (
                <p 
                    key={user.id}
                    className="border-l-7 border-2 border-gray-400 rounded-md px-3 py-2"
                >
                    {user.name}
                </p>
            ))}
        </div>
    );
};

export default FetchUsers;