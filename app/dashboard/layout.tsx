import { Metadata } from "next";
import DashboardLayoutWrapper from "@/components/dashboard/DashboardLayoutWrapper";

export const metadata: Metadata = {
    title: "Dashboard - Next-Gen LMS",
    description: "Your personalized learning dashboard",
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <DashboardLayoutWrapper>{children}</DashboardLayoutWrapper>;
}
