"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";
import { useState } from "react";
import {
    LayoutGrid, BookOpen, Folder, Sparkles, Wallet, ClipboardList, ClipboardType,
    Megaphone, Award, LineChart, HelpCircle, Settings, LogOut, ChevronLeft, ChevronRight,
    Bot, Terminal, PieChart, Users, Sliders, ShieldCheck, PenTool, CheckCircle, FileBadge
} from "lucide-react";

interface SidebarProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) {
    const pathname = usePathname();
    const { currentRole, switchRole } = useAuth();

    const employeeNavItems = [
        { name: "Dashboard", href: "/dashboard", icon: LayoutGrid },
        { name: "Courses", href: "/dashboard/courses", icon: BookOpen },
        { name: "Projects", href: "/dashboard/projects", icon: Folder },
        { name: "Code Play Studio", href: "/dashboard/code-play-studio", icon: Terminal },
        { name: "AI Tutor", href: "/dashboard/ai-tutor", icon: Sparkles },
        { name: "AI HR", href: "/dashboard/ai-hr", icon: Bot },
        { name: "Quizzes", href: "/dashboard/quizzes", icon: ClipboardList },
        { name: "Assignments", href: "/dashboard/assignments", icon: ClipboardType },
        { name: "Certifications", href: "/dashboard/certifications", icon: Award },
    ];

    const instructorNavItems = [
        { name: "Course Builder", href: "/dashboard/instructor/course-builder", icon: PenTool },
        { name: "Assessments", href: "/dashboard/instructor/assessments", icon: CheckCircle },
        { name: "Student Progress", href: "#", icon: LineChart },
    ];

    const adminNavItems = [
        { name: "User Management", href: "/dashboard/admin/users", icon: Users },
        { name: "Certification Engine", href: "/dashboard/admin/certifications", icon: FileBadge },
        { name: "System Settings", href: "#", icon: Sliders },
        { name: "Reports", href: "/dashboard/reports", icon: LineChart },
        { name: "Analytics", href: "/dashboard/analytics", icon: PieChart },
    ];

    const bottomNavItems = [
        { name: "Settings", href: "/dashboard/settings", icon: Settings },
        { name: "Help", href: "/dashboard/help", icon: HelpCircle },
        { name: "Log Out", href: "/login", icon: LogOut },
    ];

    const renderNavItems = () => {
        if (currentRole === 'admin') return adminNavItems;
        if (currentRole === 'instructor') return instructorNavItems;
        return employeeNavItems;
    };

    const primaryNavItems = renderNavItems();

    return (
        <aside
            className={`relative flex flex-col h-full bg-white dark:bg-[#1e293b] border-r border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out shrink-0 z-20 ${isSidebarOpen ? "w-[240px]" : "w-[72px]"}`}
        >
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="absolute -right-3 top-6 bg-[#4fded0] hover:bg-[#3bc4b6] text-white p-1 rounded-full shadow-md z-30 transition-colors"
                aria-label="Toggle Sidebar"
            >
                {isSidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>

            {/* Role Indicator */}
            <div className={`pt-6 px-3 pb-2 border-b border-gray-100 dark:border-gray-800 transition-all ${isSidebarOpen ? 'block' : 'hidden'}`}>
                <div className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-[#2EC4B6]/10 rounded-lg text-sm font-bold text-[#2EC4B6]">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="capitalize">{currentRole} Dashboard</span>
                </div>
            </div>

            {/* Compact Role Indicator when collapsed */}
            <div className={`pt-6 pb-2 border-b border-gray-100 dark:border-gray-800 transition-all flex justify-center ${!isSidebarOpen ? 'block' : 'hidden'}`}>
                <div onClick={() => setIsSidebarOpen(true)} className="w-10 h-10 rounded-lg bg-[#2EC4B6]/10 flex items-center justify-center cursor-pointer" title={`Current Role: ${currentRole}`}>
                    <ShieldCheck className="w-5 h-5 text-[#2EC4B6]" />
                </div>
            </div>

            {/* Top Navigation Links */}
            <div className="flex-1 overflow-y-auto pt-4 pb-4 px-3 space-y-1.5 scrollbar-hide">
                {primaryNavItems.map((item) => {
                    const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href) && item.href !== "#");
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${isActive
                                ? "bg-[#67ecd3] dark:bg-[#3fc9b9] text-gray-900 shadow-sm font-semibold"
                                : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#0f172a] hover:text-gray-900 dark:hover:text-white font-medium"
                                }`}
                            title={!isSidebarOpen ? item.name : undefined}
                        >
                            <item.icon className="w-4 h-4 shrink-0" strokeWidth={isActive ? 2.5 : 2} />
                            <span
                                className={`text-[14px] whitespace-nowrap overflow-hidden transition-all duration-300 ${isSidebarOpen ? "opacity-100 w-auto" : "opacity-0 w-0 hidden"
                                    }`}
                            >
                                {item.name}
                            </span>
                        </Link>
                    );
                })}
            </div>

            {/* Bottom Actions */}
            <div className={`p-4 border-t border-gray-100 dark:border-gray-800 flex ${isSidebarOpen ? 'justify-around' : 'flex-col items-center space-y-4'} transition-all`}>
                {bottomNavItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="text-[#4fded0] hover:text-[#3bc4b6] p-2 hover:bg-gray-100 dark:hover:bg-[#0f172a] rounded-lg transition-colors"
                        title={item.name}
                    >
                        <item.icon className="w-5 h-5" />
                    </Link>
                ))}
            </div>
        </aside>
    );
}
