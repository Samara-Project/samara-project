import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
import { MdClose, MdMenu } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { scrollToSection } from '../../../utils/helpers/smoothScrollTo';
import Link from 'next/link';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'Home', href: 'home' },
        { name: 'Our World', href: 'about' },
        { name: 'Find Us', href: 'location' },
        { name: 'Buy Now', href: 'product' }
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-secondary/[95%] backdrop-blur-md shadow-lg'
                : 'bg-secondary/60 backdrop-blur-md'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">

                    <div className="flex-shrink-0">
                        <Link href={"/"}>
                            <Image
                                src="/assets/svg/logo.svg"
                                alt="Samara Logo"
                                width={160}
                                height={40}
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        {menuItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={(e) => scrollToSection(e, item?.href)}
                                className="text-primary font-semibold hover:text-amber-300 transition-colors duration-200 text-lg tracking-wide"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center space-x-3 md:space-x-4">
                        <button
                            className="text-amber-50 cursor-not-allowed hover:text-amber-300 transition-all duration-200 p-2 hover:bg-white/10 rounded-lg group"
                            aria-label="Search"
                        >
                            <LuSearch className="w-5 h-5 group-hover:fill-amber-300/20" />
                        </button>

                        <button
                            className="cursor-not-allowed text-amber-50 hover:text-amber-300 transition-all duration-200 p-2 hover:bg-white/10 rounded-lg relative group"
                            aria-label="Cart"
                        >
                            <FaShoppingCart className="w-5 h-5 group-hover:fill-amber-300/20" />
                            <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                                1
                            </span>
                        </button>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-amber-50 hover:text-amber-300 transition-colors p-2 hover:bg-white/10 rounded-lg"
                            aria-label="Menu"
                        >
                            {isMobileMenuOpen ? (
                                <MdClose className="w-6 h-6" />
                            ) : (
                                <MdMenu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
            >
                <div className="px-4 pt-2 pb-4 space-y-2">
                    {menuItems.map((item) => (
                        <button
                            key={item.name}
                            className="block px-4 py-3 text-amber-50 hover:text-amber-300 hover:bg-white/10 rounded-lg transition-all duration-200 text-base font-medium"
                            onClick={(e) => {
                                scrollToSection(e, item?.href)
                                setIsMobileMenuOpen(false)
                            }
                            }
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;