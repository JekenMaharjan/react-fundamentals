// Importing useNavigate from react-router-dom
// useNavigate allows us to programmatically navigate to different routes/pages
import { useNavigate } from 'react-router-dom'

// Home Component
// This is the main page showing all lessons/routes
const Home = () => {

    // Initialize the navigate function from useNavigate
    // We can call navigate("/path") to go to a different page
    const navigate = useNavigate();

    // Array of route links
    // Each object contains an id (unique), title (button text), and link (route path)
    const routeLinks = [
        { id: 1, title: "01 : JSX Basics", link: "/01-jsx-basics" },
        { id: 2, title: "02 : Components & Folder Structure", link: "/02-components-folder-structure" },
        { id: 3, title: "03 : Props (Data Passing)", link: "/03-props-data-passing" },
        { id: 4, title: "04 : useState Basics", link: "/04-usestate-basics" },
        { id: 5, title: "05 : Events & State Updates", link: "/05-events-state-updates" },
        { id: 6, title: "06 : Controlled Forms", link: "/06-controlled-forms" },
        { id: 7, title: "07 : Conditional Rendering", link: "/07-conditional-rendering" },
        { id: 8, title: "08 : Lists & Keys", link: "/08-lists-keys" },
        { id: 9, title: "09 : useEffect Basics", link: "/09-useeffect-basics" },
        { id: 10, title: "10 : Cleanup & Effects", link: "/10-cleanup-effects" },
        { id: 11, title: "11 : Component Design", link: "/11-component-design" },
        { id: 12, title: "12 : Lifting State Up", link: "/12-lifting-state-up" },
        { id: 13, title: "13 : Simple Data Fetching", link: "/13-simple-data-fetching" },
        { id: 14, title: "14 : Custom Hooks", link: "/14-custom-hooks" },
    ]

    // JSX returned by the component
    return (
        // Parent container
        <div className='flex flex-col gap-5 items-center min-w-screen min-h-screen'>

            {/* Page heading */}
            <h1 className='font-serif font-bold text-3xl mb-10 bg-blue-600 text-white w-full text-center p-5'>
                React Fundamentals
            </h1>

            {/* Grid container for buttons */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-5 gap-5'>
                {/* Map over routeLinks array to create a button for each lesson */}
                {routeLinks.map((route) => (
                    <button
                        key={route.id} // key is important for list rendering in React
                        onClick={() => navigate(route.link)} // Navigate to the route when button is clicked
                        className="bg-green-400 hover:bg-green-500 px-4 py-2 rounded-md text-start" // Tailwind styling
                    >
                        {route.title} {/* Display the lesson title */}
                    </button>
                ))}
            </div>
        </div>
    );
};

// Exporting Home component for use in App.js or routing
export default Home;
