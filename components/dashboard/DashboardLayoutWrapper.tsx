"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import DashboardNavbar from "./DashboardNavbar";
import Sidebar from "./Sidebar";
import AiTutorSidebar from "./AiTutorSidebar";
import HorizontalDashboardMenuBar from "./HorizontalDashboardMenuBar";

export default function DashboardLayoutWrapper({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isAiTutorMenuBarVisible, setIsAiTutorMenuBarVisible] = useState(true);
    const pathname = usePathname();
    const isAiTutorPage = pathname?.startsWith("/dashboard/ai-tutor");

    // Close the regular sidebar if we're on the AI Tutor page and it was open
    // Open the AI tutor sidebar by default initially
    useEffect(() => {
        if (isAiTutorPage) {
            setIsSidebarOpen(true);
        }
    }, [isAiTutorPage]);

    return (
        <div className="flex flex-col h-screen w-full bg-[#f6f9f8] dark:bg-[#0f172a] overflow-hidden font-sans transition-colors">
            <DashboardNavbar
                showHorizontalMenuToggle={isAiTutorPage}
                isAiTutorMenuBarVisible={isAiTutorMenuBarVisible}
                toggleAiTutorMenuBar={() => setIsAiTutorMenuBarVisible(!isAiTutorMenuBarVisible)}
            />
            <div className="flex flex-1 overflow-hidden relative">
                {isAiTutorPage ? (
                    <AiTutorSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                ) : (
                    <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                )}

                <main className="flex-1 overflow-y-auto w-full flex flex-col">
                    {isAiTutorPage && isAiTutorMenuBarVisible && (
                        <HorizontalDashboardMenuBar />
                    )}
                    <div className="flex-1 w-full relative">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
