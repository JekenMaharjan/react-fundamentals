import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const ComponentsFolderStructurePage = () => {
    return (
        <div className="flex flex-col justify-between items-center min-w-screen min-h-screen">
            <Header />
            <Content />
            <Footer />
        </div>
    );
};

export default ComponentsFolderStructurePage;