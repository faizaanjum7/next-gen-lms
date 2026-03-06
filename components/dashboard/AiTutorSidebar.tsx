"use client";

import { Sparkles, Edit, Search, User, ChevronLeft, ChevronRight } from "lucide-react";

interface AiTutorSidebarProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (isOpen: boolean) => void;
}

export default function AiTutorSidebar({ isSidebarOpen, setIsSidebarOpen }: AiTutorSidebarProps) {
    return (
        <aside
            className={`relative flex flex-col h-full bg-white border-r border-gray-200 transition-all duration-300 ease-in-out shrink-0 z-20 ${isSidebarOpen ? "w-[240px]" : "w-[72px]"
                }`}
        >
            {/* Toggle Button Positioned Half In/Half Out */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="absolute -right-3 top-6 bg-[#4fded0] hover:bg-[#3bc4b6] text-white p-1 rounded-full shadow-md z-30 transition-colors"
            >
                {isSidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>

            <div className="flex-1 overflow-y-auto pt-6 pb-4 px-3 space-y-4 scrollbar-hide flex flex-col items-center">
                {/* AI Tutor Logo/Icon */}
                <div className="p-2 mb-4 w-full flex justify-center">
                    <Sparkles className="w-6 h-6 text-gray-700" />
                </div>

                {/* New Chat Button */}
                <button
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg w-full transition-colors text-gray-600 hover:bg-gray-100 hover:text-gray-900 font-medium ${!isSidebarOpen && "justify-center"
                        }`}
                    title={!isSidebarOpen ? "New chat" : undefined}
                >
                    <Edit className="w-4 h-4 shrink-0 text-gray-600" />
                    <span
                        className={`text-[14px] whitespace-nowrap overflow-hidden transition-all duration-300 ${isSidebarOpen ? "opacity-100 w-auto" : "opacity-0 w-0 hidden"
                            }`}
                    >
                        New chat
                    </span>
                </button>

                {/* Search Chats Button */}
                <button
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg w-full transition-colors text-gray-600 hover:bg-gray-100 hover:text-gray-900 font-medium ${!isSidebarOpen && "justify-center"
                        }`}
                    title={!isSidebarOpen ? "Search chats" : undefined}
                >
                    <Search className="w-4 h-4 shrink-0 text-gray-600" />
                    <span
                        className={`text-[14px] whitespace-nowrap overflow-hidden transition-all duration-300 ${isSidebarOpen ? "opacity-100 w-auto" : "opacity-0 w-0 hidden"
                            }`}
                    >
                        Search chats
                    </span>
                </button>
            </div>

            {/* Bottom Account Status */}
            <div className={`p-4 border-t border-gray-100 flex ${isSidebarOpen ? 'justify-start items-center gap-3' : 'justify-center'} transition-all`}>
                <div className="bg-transparent p-1.5 rounded-full border border-gray-400">
                    <User className="w-5 h-5 text-gray-900" />
                </div>
                <div className={`flex flex-col transition-all duration-300 ${isSidebarOpen ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
                    <span className="text-sm font-bold text-gray-900">John Doe</span>
                    <span className="text-xs text-gray-400">Basic</span>
                </div>
            </div>
        </aside>
    );
}
