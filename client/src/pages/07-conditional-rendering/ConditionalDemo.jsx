import { useState } from "react";

const ConditionalDemo = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="flex flex-col gap-5 bg-gray-300 p-5 rounded-md shadow-md">
            { isLoggedIn
                ? <h1 className="font-bold text-2xl">Welcome Back!</h1>
                : <h1 className="font-bold text-2xl">Please Log In...</h1> 
            }

            { isLoggedIn 
                && 
                <p className="text-sm text-gray-600">You have access to the dashboard.</p> 
            }

            <button
                className={
                    `px-4 py-2 rounded-md 
                    ${isLoggedIn 
                        ? `bg-red-400 hover:bg-red-500`
                        : `bg-green-400 hover:bg-green-500` 
                    }`}
                onClick={() => setIsLoggedIn(!isLoggedIn)}
            >
                { isLoggedIn
                    
                    ? "LogOut"
                    :"LogIn" 
                }
            </button>
        </div>
    );
};

export default ConditionalDemo;