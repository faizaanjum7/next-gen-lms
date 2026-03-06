"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutGrid,
    BookOpen,
    Folder,
    Sparkles,
    Wallet,
    ClipboardList,
    ClipboardType,
    Megaphone,
    Award,
    LineChart,
    HelpCircle,
} from "lucide-react";

export default function HorizontalDashboardMenuBar() {
    const pathname = usePathname();

    const primaryNavItems = [
        { name: "Dashboard", href: "/dashboard", icon: LayoutGrid },
        { name: "Courses", href: "/dashboard/courses", icon: BookOpen },
        { name: "Projects", href: "/dashboard/projects", icon: Folder },
        { name: "AI Tutor", href: "/dashboard/ai-tutor", icon: Sparkles },
        { name: "Payment History", href: "/dashboard/payments", icon: Wallet },
        { name: "Quizzes", href: "/dashboard/quizzes", icon: ClipboardList },
        { name: "Assignments", href: "/dashboard/assignments", icon: ClipboardType },
        { name: "Announcements", href: "/dashboard/announcements", icon: Megaphone },
        { name: "Certifications", href: "/dashboard/certifications", icon: Award },
        { name: "Reports", href: "/dashboard/reports", icon: LineChart },
        { name: "FAQ", href: "/dashboard/faq", icon: HelpCircle },
    ];

    return (
        <div className="w-full bg-white border-b border-gray-200 shrink-0 z-10 box-border px-6 py-4 flex items-center justify-center gap-6 overflow-x-auto scrollbar-hide">
            {primaryNavItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`p-3 rounded-xl transition-all ${isActive
                                ? "bg-[#3fc9b9] text-gray-900 shadow-sm"
                                : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                            }`}
                        title={item.name}
                    >
                        <item.icon className="w-5 h-5 shrink-0" strokeWidth={isActive ? 2.5 : 2} />
                    </Link>
                );
            })}
        </div>
    );
}
