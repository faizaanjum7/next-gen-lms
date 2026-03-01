"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, UserCircle, ChevronDown, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/AuthContext";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'login' | 'signup'>('signup');
    const router = useRouter();
    const { user, logout } = useAuth();
    const profileMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
                setIsProfileMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="fixed w-full z-50 bg-[#eefbf9]/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-[#FF9F1C] to-[#2EC4B6] bg-clip-text text-transparent">
                            Next-Gen LMS
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="/#home" className="text-[15px] font-medium text-[#2EC4B6] hover:text-[#FF9F1C] transition-colors">Home</Link>
                            <Link href="/#about" className="text-[15px] font-medium text-[#2EC4B6] hover:text-[#FF9F1C] transition-colors">About us</Link>
                            <Link href="/#courses" className="text-[15px] font-medium text-[#2EC4B6] hover:text-[#FF9F1C] transition-colors">Courses</Link>
                            <Link href="/#faq" className="text-[15px] font-medium text-[#2EC4B6] hover:text-[#FF9F1C] transition-colors">FAQ</Link>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center">
                        {user ? (
                            <div className="relative" ref={profileMenuRef}>
                                <button
                                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                                    className="group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#2EC4B6] border border-transparent hover:border-[#2EC4B6]"
                                >
                                    <UserCircle className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors" />
                                    <span className="text-gray-900 font-medium text-base group-hover:text-black transition-colors">{user.name}</span>
                                    <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                                </button>

                                {isProfileMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5">
                                        <button
                                            onClick={() => {
                                                logout();
                                                setIsProfileMenuOpen(false);
                                                router.push('/');
                                            }}
                                            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                        >
                                            <LogOut className="w-4 h-4" />
                                            Log Out
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="bg-white border border-gray-100 rounded-lg p-1 flex items-center shadow-sm relative isolate">
                                {/* Sliding Background */}
                                <div
                                    className={cn(
                                        "absolute top-1 bottom-1 rounded-md bg-[#FF9F1C] transition-all duration-300 ease-in-out -z-10",
                                        activeTab === 'login' ? "left-1 w-[calc(50%-4px)]" : "left-[50%] w-[calc(50%-4px)]"
                                    )}
                                />

                                <button
                                    onClick={() => { setActiveTab('login'); router.push('/login'); }}
                                    onMouseEnter={() => setActiveTab('login')}
                                    className={cn(
                                        "px-6 py-2 text-sm font-semibold rounded-md transition-colors duration-200 w-28 flex items-center justify-center",
                                        activeTab === 'login' ? "text-white" : "text-[#FF9F1C] hover:text-[#e88e10]"
                                    )}
                                >
                                    Log In
                                </button>
                                <button
                                    onClick={() => { setActiveTab('signup'); router.push('/signup'); }}
                                    onMouseEnter={() => setActiveTab('signup')}
                                    className={cn(
                                        "px-6 py-2 text-sm font-semibold rounded-md transition-colors duration-200 w-28 flex items-center justify-center",
                                        activeTab === 'signup' ? "text-white" : "text-[#FF9F1C] hover:text-[#e88e10]"
                                    )}
                                >
                                    Sign Up
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#4CA1AF] focus:outline-none"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#FF9F1C] hover:bg-gray-50">Home</Link>
                        <Link href="/#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#FF9F1C] hover:bg-gray-50">About Us</Link>
                        <Link href="/#courses" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#FF9F1C] hover:bg-gray-50">Courses</Link>
                        <Link href="/#faq" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#FF9F1C] hover:bg-gray-50">FAQ</Link>
                        <div className="mt-4 flex flex-col space-y-2 px-3">
                            {user ? (
                                <>
                                    <div className="flex items-center gap-3 px-3 py-2">
                                        <UserCircle className="w-8 h-8 text-[#2EC4B6]" />
                                        <span className="text-gray-900 font-medium">{user.name}</span>
                                    </div>
                                    <button onClick={() => { logout(); setIsOpen(false); router.push('/'); }} className="flex items-center gap-2 w-full text-red-600 font-semibold px-4 py-2 border border-red-200 rounded-md hover:bg-red-50 transition-colors">
                                        <LogOut className="w-4 h-4" /> Log Out
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button onClick={() => { setIsOpen(false); router.push('/login'); }} className="w-full text-[#FF9F1C] font-semibold px-4 py-2 border border-[#FF9F1C] rounded-md hover:bg-[#FF9F1C]/10 transition-colors">
                                        Log In
                                    </button>
                                    <button onClick={() => { setIsOpen(false); router.push('/signup'); }} className="w-full bg-[#FF9F1C] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#e88e10] transition-colors shadow-md">
                                        Sign Up
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
