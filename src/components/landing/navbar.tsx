"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

export function LandingNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { href: "#features", label: "Features" },
        { href: "#how-it-works", label: "How It Works" },
        { href: "#social-proof", label: "Reviews" }
    ];

    return (
        <header className="border-b bg-white backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Image src="/FILDOS.png" alt="FilDOS Logo" width={32} height={32} className="w-8 h-8" />
                        <h1 className="text-2xl font-bold text-primary tracking-tight">
                            FilDOS
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-600 hover:text-primary transition-colors font-medium relative group"
                            >
                                {link.label}
                                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                            </Link>
                        ))}
                        <Link href="https://app.fildos.cloud">
                            <Button variant="outline" size="sm" className="ml-4">
                                My Storage
                            </Button>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}>
                    <nav className="py-4 space-y-4 border-t mt-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-gray-600 hover:text-primary transition-colors font-medium py-2"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href="https://app.fildos.cloud" onClick={() => setIsOpen(false)}>
                            <Button variant="outline" size="sm" className="w-full mt-4">
                                Dashboard
                            </Button>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}