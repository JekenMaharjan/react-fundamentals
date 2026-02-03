import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    const routeLinks = [
        { id: 1, title: "01 : JSX Basics", link: "/01-jsx-basics" },
        { id: 2, title: "02 : Components & Folder Structure", link: "/01-jsx-basics" },
        { id: 3, title: "03 : Props (Data Passing)", link: "/01-jsx-basics" },
        { id: 4, title: "04 : useState Basics", link: "/01-jsx-basics" },
        { id: 5, title: "05 : Events & State Updates", link: "/01-jsx-basics" },
        { id: 6, title: "06 : Controlled Forms", link: "/01-jsx-basics" },
        { id: 7, title: "07 : Conditional Rendering", link: "/01-jsx-basics" },
        { id: 8, title: "08 : Lists & Keys", link: "/01-jsx-basics" },
        { id: 9, title: "09 : useEffect Basics", link: "/01-jsx-basics" },
        { id: 10, title: "10 : Cleanup & Effects", link: "/01-jsx-basics" },
        { id: 11, title: "11 : Component Design", link: "/01-jsx-basics" },
        { id: 12, title: "12 : Lifting State Up", link: "/01-jsx-basics" },
        { id: 13, title: "13 : Simple Data Fetching", link: "/01-jsx-basics" },
        { id: 14, title: "14 : Custom Hooks", link: "/01-jsx-basics" },
    ]

    return (
        <div className='flex flex-col gap-5 p-10 items-center bg-orange-100 min-w-screen min-h-screen'>
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
