"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, UserCircle, ChevronDown, LogOut, Bell, Settings as SettingsIcon, User as UserIcon, Trash2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/AuthContext";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'login' | 'signup'>('signup');
    const router = useRouter();
    const { user, logout, notifications, removeNotification } = useAuth();
    const profileMenuRef = useRef<HTMLDivElement>(null);
    const [showNotifications, setShowNotifications] = useState(false);

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
        <nav className="fixed w-full z-50 bg-[#eefbf9]/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-transparent dark:border-gray-800 transition-colors duration-300">
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
                                    <UserCircle className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
                                    <span className="text-gray-900 dark:text-gray-100 font-medium text-base group-hover:text-black dark:group-hover:text-white transition-colors">{user.name}</span>
                                    <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-white transition-colors" />
                                </button>

                                {isProfileMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-[#1e293b] rounded-xl shadow-xl z-50 ring-1 ring-black ring-opacity-5 overflow-hidden flex flex-col border border-gray-100 dark:border-gray-800">
                                        <div className="p-4 border-b border-gray-50 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                                            <p className="text-sm font-semibold text-gray-900 dark:text-white">{user.name}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Account Active</p>
                                        </div>

                                        <div className="py-2">
                                            <Link
                                                href="/profile"
                                                onClick={() => setIsProfileMenuOpen(false)}
                                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-[#eefbf9] dark:hover:bg-gray-800 hover:text-[#2EC4B6] transition-colors"
                                            >
                                                <UserIcon className="w-4 h-4" />
                                                Edit Profile
                                            </Link>
                                            <Link
                                                href="/settings"
                                                onClick={() => setIsProfileMenuOpen(false)}
                                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-[#eefbf9] dark:hover:bg-gray-800 hover:text-[#2EC4B6] transition-colors"
                                            >
                                                <SettingsIcon className="w-4 h-4" />
                                                Settings
                                            </Link>
                                            
                                            <div className="border-t border-gray-50 dark:border-gray-800 my-1"></div>
                                            
                                            {/* Notifications Section */}
                                            <div className="px-4 py-2 flex items-center justify-between">
                                                <div className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white">
                                                    <Bell className="w-4 h-4" />
                                                    Notifications
                                                </div>
                                                {notifications.length > 0 && (
                                                    <span className="bg-[#FF9F1C] text-white text-[10px] px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                                                        {notifications.length}
                                                    </span>
                                                )}
                                            </div>
                                            
                                            <div className="max-h-48 overflow-y-auto px-2 pb-2">
                                                {notifications.length > 0 ? (
                                                    notifications.map((notif) => (
                                                        <div key={notif.id} className="group relative bg-gray-50 dark:bg-gray-800 rounded-lg p-3 mb-2 last:mb-0 border border-transparent hover:border-[#2EC4B6]/20 transition-all">
                                                            <p className="text-xs text-gray-700 dark:text-gray-300 pr-6 leading-relaxed">{notif.message}</p>
                                                            <button 
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    removeNotification(notif.id);
                                                                }}
                                                                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                                            >
                                                                <X className="w-3 h-3" />
                                                            </button>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <p className="text-xs text-gray-400 text-center py-4 italic">No new notifications</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="p-2 border-t border-gray-50 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-800/30">
                                            <button
                                                onClick={() => {
                                                    logout();
                                                    setIsProfileMenuOpen(false);
                                                    router.push('/');
                                                }}
                                                className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-lg w-full text-left transition-colors"
                                            >
                                                <LogOut className="w-4 h-4" />
                                                Log Out
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg p-1 flex items-center shadow-sm relative isolate transition-colors">
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
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-[#4CA1AF] focus:outline-none"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-md transition-colors">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[#FF9F1C] hover:bg-gray-50 dark:hover:bg-gray-800">Home</Link>
                        <Link href="/#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[#FF9F1C] hover:bg-gray-50 dark:hover:bg-gray-800">About Us</Link>
                        <Link href="/#courses" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[#FF9F1C] hover:bg-gray-50 dark:hover:bg-gray-800">Courses</Link>
                        <Link href="/#faq" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[#FF9F1C] hover:bg-gray-50 dark:hover:bg-gray-800">FAQ</Link>
                        <div className="mt-4 flex flex-col space-y-2 px-3">
                            {user ? (
                                <>
                                    <div className="flex items-center gap-3 px-3 py-2">
                                        <UserCircle className="w-8 h-8 text-[#2EC4B6]" />
                                        <span className="text-gray-900 dark:text-white font-medium">{user.name}</span>
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
