"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Calendar, Bell, User, ChevronDown } from "lucide-react";

export default function DashboardNavbar() {
    const pathname = usePathname();

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
        return "Dashboard";
    };
    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 z-10 box-border">
            {/* Left side: Logo & Title */}
            <div className="flex items-center gap-8 md:gap-16">
                <Link href="/" className="flex items-center">
                    <span className="text-[22px] font-bold tracking-tight bg-gradient-to-r from-[#FF9F1C] to-[#2EC4B6] bg-clip-text text-transparent break-words">
                        Next-Gen LMS
                    </span>
                </Link>
                <h1 className="text-2xl font-bold text-gray-900 hidden md:block">{getPageTitle()}</h1>
            </div>

            {/* Middle: Search bar */}
            <div className="flex-1 max-w-[360px] mx-8 hidden md:block">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search here.."
                        className="w-full bg-gray-100 border-none rounded-lg py-2 pl-9 pr-4 text-[13px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3fc9b9] transition-all"
                    />
                </div>
            </div>

            {/* Right side: Actions & Profile */}
            <div className="flex items-center gap-3">
                <button className="p-2 rounded-full border border-[#3fc9b9] text-[#3fc9b9] hover:bg-[#3fc9b9]/10 transition-colors hidden sm:block">
                    <Calendar className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-full border border-[#3fc9b9] text-[#3fc9b9] hover:bg-[#3fc9b9]/10 transition-colors">
                    <Bell className="w-4 h-4" />
                </button>
                <div className="h-6 w-px bg-gray-200 mx-1 hidden sm:block"></div>
                <button className="flex items-center gap-2 hover:bg-gray-50 p-1 rounded-lg transition-colors">
                    <div className="bg-[#3fc9b9]/20 p-1.5 rounded-full border border-[#3fc9b9]">
                        <User className="w-4 h-4 text-[#3fc9b9]" />
                    </div>
                    <span className="font-medium text-[14px] text-gray-900 hidden sm:block">Name</span>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-500 hidden sm:block" />
                </button>
            </div>
        </header>
    );
}
