import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
import { MdClose, MdMenu } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { scrollToSection } from '../../../utils/helpers/smoothScrollTo';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';

const Navbar = ({ fastOrderData }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOrderDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
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
                        <div className="hidden md:block relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsOrderDropdownOpen(!isOrderDropdownOpen)}
                                className="flex items-center space-x-2 bg-primary text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
                            >
                                <FaShoppingCart className="w-4 h-4" />
                                <span>{fastOrderData?.ctaText}</span>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${isOrderDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isOrderDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
                                    {fastOrderData?.orderPlatform?.map((platform, index) => (
                                        <Link
                                            key={platform.name}
                                            href={platform.platformLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center justify-start hover:bg-secondary/10 px-4 py-4 transition-all duration-200 ${index !== fastOrderData?.orderPlatform.length - 1 ? 'border-b border-gray-100' : ''
                                                }`}
                                            onClick={() => setIsOrderDropdownOpen(false)}
                                        >
                                            <img
                                                src={urlFor(platform.image)}
                                                alt={platform.name}
                                                width={120}
                                                height={40}
                                                className="w-auto h-6"
                                            />
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Toggle */}
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

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
                    ? 'max-h-[500px] opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
            >
                <div className="px-4 pt-2 pb-4 space-y-2">
                    {menuItems.map((item) => (
                        <button
                            key={item.name}
                            className="block w-full text-left px-4 py-3 text-amber-50 hover:text-amber-300 hover:bg-white/10 rounded-lg transition-all duration-200 text-base font-medium"
                            onClick={(e) => {
                                scrollToSection(e, item?.href)
                                setIsMobileMenuOpen(false)
                            }}
                        >
                            {item.name}
                        </button>
                    ))}

                    <div className="pt-2 border-t border-white/20 mt-2">
                        <p className="px-4 py-2 text-amber-300 text-sm font-semibold">Order Now</p>
                        <div className='space-y-1'>
                            {fastOrderData?.orderPlatform?.map((platform) => (
                                <Link
                                    key={platform.name}
                                    href={platform.platformLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center space-x-3 px-4 bg-white py-3 text-amber-50 rounded-lg transition-all duration-200`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <img
                                        src={urlFor(platform.image)}
                                        alt={platform.name}
                                        width={120}
                                        height={100}
                                        className="h-7 w-auto"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;