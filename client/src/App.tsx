import { useNavigate } from "react-router-dom";

const App = () => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate("/01-jsx-basics")}>
            Go to JSX Basics
        </button>
    );
};

export default App;
