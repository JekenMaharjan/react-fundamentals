import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

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

    return (
        <div className='flex flex-col gap-5 p-5 items-center bg-orange-100 min-w-screen min-h-screen'>
            <h1 className='font-serif font-bold text-4xl'>React Fundamentals</h1>
            <div className='flex flex-col gap-5'>
                {routeLinks.map((route) => (
                    <button
                        key={route.id}
                        onClick={() => navigate(route.link)}
                        className="bg-green-400 hover:bg-green-500 px-4 py-2 rounded-md text-start"
                    >
                        {route.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Home;
