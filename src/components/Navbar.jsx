function Navbar() {
    return (
        <>
            <nav style={{ backgroundColor: "#B8860B" }} className="flex gap-[30rem] p-6 text-black">
                <h1 className="text-2xl font-bold text-black">
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
