function Home() {
    return (
        <>
            <div className="flex justify-evenly h-[100vh]">
                <div className="p-4 mt-4">
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent w-[35rem]">
                        Sensual Exubitant Addictive
                    </h1>
                    <br />

                    <p className="w-[35rem] text-gray-600">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Itaque deserunt eaque quidem quibusdam
                        inventore minima tempore tempora consequuntur quaerat
                        beatae illum quam doloremque, non pariatur soluta
                        necessitatibus. Adipisci, officia iste?
                    </p>
                    <br />
                    <div>
                        <button
                            style={{ backgroundColor: "#B8860B" }}
                            className="p-2 rounded-[.5rem] font-white hover:cursor-pointer"
                        >
                            SHOP NOW;
                        </button>
                    </div>
                </div>
                <div className="">
                    <img
                        src="./src/assets/images/perfume.png"
                        alt=""
                        className="10rem"
                    />
                </div>
            </div>
        </>
    );
}

export default Home;
