import Link from "next/link";
import { Search, Calendar, Bell, User, ChevronDown } from "lucide-react";

export default function DashboardNavbar() {
    return (
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 z-10 box-border">
            {/* Left side: Logo & Title */}
            <div className="flex items-center gap-8 md:gap-16">
                <Link href="/" className="flex items-center">
                    <span className="text-[22px] font-bold tracking-tight">
                        <span className="text-[#f2aa5c]">Next-Gen</span> <span className="text-[#3fc9b9]">LMS</span>
                    </span>
                </Link>
                <h1 className="text-2xl font-bold text-gray-900 hidden md:block">Dashboard</h1>
            </div>

            {/* Middle: Search bar */}
            <div className="flex-1 max-w-[400px] mx-8 hidden md:block">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search here.."
                        className="w-full bg-gray-100 border-none rounded-lg py-2.5 pl-10 pr-4 text-[14px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3fc9b9] transition-all"
                    />
                </div>
            </div>

            {/* Right side: Actions & Profile */}
            <div className="flex items-center gap-4">
                <button className="p-2.5 rounded-full border-2 border-[#3fc9b9] text-[#3fc9b9] hover:bg-[#3fc9b9]/10 transition-colors hidden sm:block">
                    <Calendar className="w-5 h-5" />
                </button>
                <button className="p-2.5 rounded-full border-2 border-[#3fc9b9] text-[#3fc9b9] hover:bg-[#3fc9b9]/10 transition-colors">
                    <Bell className="w-5 h-5" />
                </button>
                <div className="h-8 w-px bg-gray-200 mx-2 hidden sm:block"></div>
                <button className="flex items-center gap-2 hover:bg-gray-50 p-1.5 rounded-lg transition-colors">
                    <div className="bg-[#3fc9b9]/20 p-2 rounded-full border-2 border-[#3fc9b9]">
                        <User className="w-5 h-5 text-[#3fc9b9]" />
                    </div>
                    <span className="font-medium text-[15px] text-gray-900 hidden sm:block">Name</span>
                    <ChevronDown className="w-4 h-4 text-gray-500 hidden sm:block" />
                </button>
            </div>
        </header>
    );
}
