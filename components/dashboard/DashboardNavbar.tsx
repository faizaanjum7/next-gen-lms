"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Search, Calendar, Bell, User, ChevronDown, Eye, EyeOff, Moon, Sun, LogOut, Settings as SettingsIcon, User as UserIcon, X } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";
import { cn } from "@/lib/utils";

interface DashboardNavbarProps {
    showHorizontalMenuToggle?: boolean;
    isAiTutorMenuBarVisible?: boolean;
    toggleAiTutorMenuBar?: () => void;
}

export default function DashboardNavbar({ showHorizontalMenuToggle, isAiTutorMenuBarVisible, toggleAiTutorMenuBar }: DashboardNavbarProps) {
    const pathname = usePathname();
    const router = useRouter();
    const { user, logout, notifications, removeNotification, userSettings, updateSettings } = useAuth();
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const profileMenuRef = useRef<HTMLDivElement>(null);
    const notificationsMenuRef = useRef<HTMLDivElement>(null);
 
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
                setIsProfileMenuOpen(false);
            }
            if (notificationsMenuRef.current && !notificationsMenuRef.current.contains(event.target as Node)) {
                setIsNotificationsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const getPageTitle = () => {
        if (pathname.startsWith("/dashboard/courses")) return "Courses";
        if (pathname.startsWith("/dashboard/projects")) return "Projects";
        if (pathname.startsWith("/dashboard/ai-tutor")) return "AI Tutor";
        if (pathname.startsWith("/dashboard/payments")) return "Payment History";
        if (pathname.startsWith("/dashboard/quizzes")) return "Quizzes";
        if (pathname.startsWith("/dashboard/assignments")) return "Assignments";
        if (pathname.startsWith("/dashboard/announcements")) return "Announcements";
        if (pathname.startsWith("/dashboard/certifications")) return "Certifications";
        if (pathname.startsWith("/dashboard/reports")) return "Reports";
        if (pathname.startsWith("/dashboard/faq")) return "FAQ";
        if (pathname.startsWith("/dashboard/settings")) return "Settings";
        if (pathname.startsWith("/dashboard/help")) return "Help";
        if (pathname.startsWith("/dashboard/calendar")) return "Calendar";
        return "Dashboard";
    };
    return (
        <header className="h-16 bg-white dark:bg-[#1e293b] border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 shrink-0 z-[100] box-border transition-colors">
            {/* Left side: Logo & Title */}
            <div className="flex items-center gap-8 md:gap-16">
                <Link href="/" className="flex items-center">
                    <span className="text-[22px] font-bold tracking-tight bg-gradient-to-r from-[#FF9F1C] to-[#2EC4B6] bg-clip-text text-transparent break-words">
                        Next-Gen LMS
                    </span>
                </Link>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white hidden md:block transition-colors">{getPageTitle()}</h1>
            </div>

            {/* Middle: Search bar */}
            <div className="flex-1 max-w-[360px] mx-8 hidden md:block">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search here.."
                        className="w-full bg-gray-100 dark:bg-[#0f172a] border-none rounded-lg py-2 pl-9 pr-4 text-[13px] text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3fc9b9] transition-all"
                    />
                </div>
            </div>

            {/* Right side: Actions & Profile */}
            <div className="flex items-center gap-3">
                {showHorizontalMenuToggle && (
                    <button
                        onClick={toggleAiTutorMenuBar}
                        className="p-2 mr-4 text-[#3fc9b9] transition-colors hidden sm:block"
                        title={isAiTutorMenuBarVisible ? "Hide Menu" : "Show Menu"}
                    >
                        {isAiTutorMenuBarVisible ? (
                            <Eye className="w-5 h-5" />
                        ) : (
                            <EyeOff className="w-5 h-5 text-gray-400" />
                        )}
                    </button>
                )}
                <Link href="/dashboard/calendar" className="p-2 rounded-full border border-[#3fc9b9] text-[#3fc9b9] hover:bg-[#3fc9b9] hover:text-white transition-colors hidden sm:block">
                    <Calendar className="w-4 h-4" />
                </Link>
                <div className="relative" ref={notificationsMenuRef}>
                    <button 
                        onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                        className={cn(
                            "p-2 rounded-full border transition-all relative",
                            isNotificationsOpen 
                                ? "bg-[#3fc9b9] text-white border-[#3fc9b9]" 
                                : "border-[#3fc9b9] text-[#3fc9b9] hover:bg-[#3fc9b9] hover:text-white"
                        )}
                    >
                        <Bell className="w-4 h-4" />
                        {notifications.length > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-4 w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF9F1C] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-4 w-4 bg-[#FF9F1C] text-[10px] text-white items-center justify-center font-bold">
                                    {notifications.length}
                                </span>
                            </span>
                        )}
                    </button>

                    {isNotificationsOpen && (
                        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-[#1e293b] rounded-xl shadow-2xl z-[110] border border-gray-100 dark:border-gray-800 flex flex-col overflow-hidden animate-in fade-in slide-in-from-top-2">
                            <div className="p-4 border-b border-gray-50 dark:border-gray-800 flex items-center justify-between bg-gray-50 dark:bg-gray-800/50">
                                <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                    <Bell className="w-4 h-4 text-[#FF9F1C]" />
                                    Notifications
                                </h3>
                                {notifications.length > 0 && (
                                    <span className="text-[10px] bg-[#FF9F1C]/10 text-[#FF9F1C] px-2 py-0.5 rounded-full font-bold">
                                        {notifications.length} New
                                    </span>
                                )}
                            </div>

                            <div className="max-h-[400px] overflow-y-auto px-2 py-2">
                                {notifications.length > 0 ? (
                                    <div className="space-y-2">
                                        {notifications.map((notif) => (
                                            <div key={notif.id} className="group relative bg-white dark:bg-[#0f172a] hover:bg-[#eefbf9] dark:hover:bg-gray-800/50 p-3 rounded-lg border border-gray-50 dark:border-gray-800 transition-all cursor-default">
                                                <div className="flex gap-3">
                                                    <div className="bg-[#FF9F1C]/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                                                        <Calendar className="w-4 h-4 text-[#FF9F1C]" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                                                            {notif.message}
                                                        </p>
                                                        <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-1">
                                                            Just now
                                                        </p>
                                                    </div>
                                                    <button 
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            removeNotification(notif.id);
                                                        }}
                                                        className="text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                                                    >
                                                        <X className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-12 text-center">
                                        <div className="bg-gray-50 dark:bg-gray-800/50 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                                            <Bell className="w-6 h-6 text-gray-300 dark:text-gray-600" />
                                        </div>
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">All caught up!</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">No new notifications at the moment.</p>
                                    </div>
                                )}
                            </div>
                            
                            {notifications.length > 0 && (
                                <div className="p-3 border-t border-gray-50 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                                    <button className="text-xs font-bold text-[#3fc9b9] hover:text-[#2EC4B6] transition-colors w-full text-center">
                                        View All Notifications
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <button 
                    onClick={() => updateSettings({ darkMode: !userSettings.darkMode })}
                    className="p-2 rounded-full border border-[#3fc9b9] text-[#3fc9b9] hover:bg-[#3fc9b9] hover:text-white transition-colors"
                    title={userSettings.darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    {userSettings.darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
                <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-1 hidden sm:block transition-colors"></div>
                
                <div className="relative" ref={profileMenuRef}>
                    <button 
                        onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                        className="flex items-center gap-2 hover:bg-[#3fc9b9] p-1 pr-3 rounded-full transition-colors group"
                    >
                        <div className="bg-transparent p-1.5 rounded-full border border-[#3fc9b9] group-hover:border-white transition-colors">
                            <User className="w-4 h-4 text-[#3fc9b9] group-hover:text-white transition-colors" />
                        </div>
                        <span className="font-medium text-[14px] text-[#3fc9b9] group-hover:text-white hidden sm:block transition-colors">
                            {user?.name || "User"}
                        </span>
                        <ChevronDown className={cn(
                            "w-3.5 h-3.5 text-[#3fc9b9] group-hover:text-white hidden sm:block transition-all",
                            isProfileMenuOpen && "rotate-180"
                        )} />
                    </button>

                    {isProfileMenuOpen && (
                        <div className="absolute right-0 mt-2 w-72 !bg-white dark:!bg-[#1e293b] rounded-xl shadow-2xl z-[110] ring-1 ring-black ring-opacity-5 overflow-hidden flex flex-col border border-gray-100 dark:border-gray-800 transition-all isolate">
                            <div className="p-4 border-b border-gray-50 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
                                <p className="text-sm font-semibold text-gray-900 dark:text-white">{user?.name || "User"}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Dashboard Active</p>
                            </div>

                            <div className="py-2 bg-white dark:bg-[#1e293b]">
                                <Link
                                    href="/dashboard/profile"
                                    onClick={() => setIsProfileMenuOpen(false)}
                                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-[#eefbf9] dark:hover:bg-gray-800 hover:text-[#2EC4B6] transition-colors"
                                >
                                    <UserIcon className="w-4 h-4 text-[#2EC4B6]" />
                                    Edit Profile
                                </Link>
                                <Link
                                    href="/dashboard/settings"
                                    onClick={() => setIsProfileMenuOpen(false)}
                                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-[#eefbf9] dark:hover:bg-gray-800 hover:text-[#2EC4B6] transition-colors"
                                >
                                    <SettingsIcon className="w-4 h-4 text-[#2EC4B6]" />
                                    Settings
                                </Link>
                                
                                <div className="border-t border-gray-50 dark:border-gray-800 my-1"></div>
                                
                                {/* Notifications Section */}
                                <div className="px-4 py-2 flex items-center justify-between bg-white dark:bg-[#1e293b]">
                                    <div className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white">
                                        <Bell className="w-4 h-4 text-[#FF9F1C]" />
                                        Notifications
                                    </div>
                                    {notifications.length > 0 && (
                                        <span className="bg-[#FF9F1C] text-white text-[10px] px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                                            {notifications.length}
                                        </span>
                                    )}
                                </div>
                                
                                <div className="max-h-48 overflow-y-auto px-2 pb-2 bg-white dark:bg-[#1e293b]">
                                    {notifications.length > 0 ? (
                                        notifications.slice(0, 3).map((notif) => (
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

                            <div className="p-2 border-t border-gray-50 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
                                <button
                                    onClick={() => {
                                        logout();
                                        setIsProfileMenuOpen(false);
                                        router.push('/');
                                    }}
                                    className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg w-full text-left transition-colors"
                                >
                                    <LogOut className="w-4 h-4" />
                                    Log Out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
