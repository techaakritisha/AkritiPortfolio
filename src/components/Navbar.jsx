import React, { useState } from 'react';
import pic from "../assets/akriti.jpeg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const navItems = [
        { id: 1, text: "Home" },
        { id: 2, text: "About" },
        { id: 3, text: "Projects" },
        { id: 4, text: "Experience" },
        { id: 5, text: "Contact" },
    ];

    return (
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 bg-white z-50">
            <div className="flex justify-between items-center h-16">
                {/* Logo + Name */}
                <div className="flex space-x-2 items-center">
                    <img src={pic} className="h-11 w-11 rounded-full" alt="profile" />
                    <div>
                        <h1 className='font-semibold text-xl cursor-pointer'>
                            Akrit<span className="text-green-500 text-2xl">i</span>
                        </h1>
                        <p className="text-sm">Software Developer</p>
                    </div>
                </div>

                {/* Desktop Navbar */}
                <ul className="hidden md:flex space-x-8">
                    {navItems.map(({ id, text }) => (
                        <li
                            className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                            key={id}
                        >
                            <Link to={text} smooth={true} duration={500} offset={-70}>
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Menu Icon for Mobile */}
                <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
                    {menu ? <IoClose size={24} /> : <AiOutlineMenu size={24} />}
                </div>
            </div>

            {/* Mobile Navbar */}
            {menu && (
                <ul className="md:hidden flex flex-col items-center mt-4 space-y-4 bg-white py-4 shadow-md">
                    {navItems.map(({ id, text }) => (
                        <li
                            className="hover:scale-105 duration-200 font-semibold text-xl cursor-pointer"
                            key={id}
                        >
                            <Link
                                to={text}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                onClick={() => setMenu(false)} // Close menu on click
                            >
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;
