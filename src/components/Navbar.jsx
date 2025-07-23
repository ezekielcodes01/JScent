function Navbar() {
    return (
        <>
            <nav className="flex gap-[30rem] p-6 bg-gray-800 text-white">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400  to-blue-500 bg-clip-text text-transparent">
                    JScent
                </h1>

                <div>
                    <ul className="flex gap-8">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
