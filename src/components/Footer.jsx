import { Facebook, Instagram, Linkedin, Twitch, Twitter } from "lucide-react";

function Footer() {
    return (
        <>
            <div
                style={{ backgroundColor: "#B8860B" }}
                className=" text-white p-8"
            >
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400  to-blue-500 bg-clip-text text-transparent">
                            Links
                        </h1>
                        <ul className="gap-8">
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400  to-blue-500 bg-clip-text text-transparent">
                            Our Services
                        </h1>
                        <ul className="gap-8">
                            <li>Free Delivery</li>
                            <li>Customization</li>
                            <li>We make peak content</li>
                            <li>Personsal Perfume</li>
                        </ul>
                    </div>
                    <div className="flex gap-2 mt-auto">
                        <Instagram />
                        <Twitch />
                        <Twitter />
                        <Facebook />
                        <Linkedin />
                    </div>
                </div>
                <p className="mt-4 text-center pt-4">
                    Copyright &copy; 2022. All rights reserved.
                </p>
            </div>
        </>
    );
}

export default Footer;
