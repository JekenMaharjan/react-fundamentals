// Card Component using Arrow Function
// This component displays a simple card with a title, description, and level
const Card = (props) => {

    // Props (short for properties) are used to pass data from parent to child components
    // We can access the data using props.propertyName

    return (
        <div className="border-2 border-gray-300 p-5 rounded-lg shadow-md bg-gray-100">
            {/* Display the title passed from parent */}
            <h2 className="font-bold text-xl font-serif text-gray-700">{props.title}</h2>

            {/* Display the description passed from parent */}
            <p className="text-gray-700">{props.description}</p>

            {/* Display the level passed from parent */}
            <p className="text-sm font-semibold text-gray-700">Level: {props.level}</p>
        </div>
    );
};

export default Card;
