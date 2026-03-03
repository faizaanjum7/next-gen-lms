"use client";

import { useState } from "react";
import DashboardNavbar from "./DashboardNavbar";
import Sidebar from "./Sidebar";

export default function DashboardLayoutWrapper({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex flex-col h-screen w-full bg-[#f6f9f8] overflow-hidden font-sans">
            <DashboardNavbar />
            <div className="flex flex-1 overflow-hidden relative">
                <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                <main className="flex-1 overflow-y-auto w-full">
                    {children}
                </main>
            </div>
        </div>
    );
}
