"use client"

import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {

    const navigate = useNavigate();

    const handleRoute = () => {
        navigate("/01-jsx-basics");
    }

    return (
        <div className='bg-orange-600 w-screen h-screen'>
            <button
                onClick={handleRoute}
                className='bg-green-400'
            >
                Navigate
            </button>
        </div>
    )
}

export default App
