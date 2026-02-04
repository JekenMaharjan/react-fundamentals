function Footer() {
    const currentDate = new Date().getFullYear();
    return (
        <footer className="flex w-full p-4 justify-center bg-gray-800">
            <p className="text-center text-white font-serif">© {currentDate} React Practice</p>
        </footer>
    );
}

export default Footer;
