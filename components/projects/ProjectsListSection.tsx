"use client";

import { useState } from "react";
import { ChevronDown, MoreHorizontal } from "lucide-react";

type ProjectStatus = "Draft" | "Active" | "Completed";

interface Project {
    id: string;
    name: string;
    course: string;
    createdOn: string;
    status: ProjectStatus;
}

export default function ProjectsListSection() {
    const [activeTab, setActiveTab] = useState<"All" | ProjectStatus>("All");

    const tabs = ["All", "Draft", "Active", "Completed"];

    // Data dynamically adjusted to match mockups for each tab
    const displayProjects = activeTab === "All" ? [
        { id: "3", name: "Prediction Model", course: "Machine Learning", createdOn: "Jan 12, 2026", status: "Active" as ProjectStatus },
        { id: "6", name: "Sales Analysis", course: "Sales Analysis", createdOn: "Jan 10, 2026", status: "Draft" as ProjectStatus },
        { id: "7", name: "Redesign Case Study", course: "UI/UX Design", createdOn: "Jan 5, 2026", status: "Completed" as ProjectStatus },
    ] : activeTab === "Completed" ? [
        { id: "1", name: "Prediction Model", course: "Machine Learning", createdOn: "Jan 12, 2026", status: "Completed" as ProjectStatus },
        { id: "2", name: "Learning Progress Tracker", course: "Web Development", createdOn: "Jan 10, 2026", status: "Completed" as ProjectStatus },
    ] : activeTab === "Active" ? [
        { id: "3", name: "Prediction Model", course: "Machine Learning", createdOn: "Jan 12, 2026", status: "Active" as ProjectStatus },
        { id: "4", name: "Authentication Flow Design", course: "System Design", createdOn: "Jan 09, 2026", status: "Active" as ProjectStatus },
    ] : [
        { id: "5", name: "Online Quiz System", course: "Web Development", createdOn: "Jan 17, 2026", status: "Draft" as ProjectStatus },
        { id: "6", name: "Sales Analysis", course: "Sales Analysis", createdOn: "Jan 10, 2026", status: "Draft" as ProjectStatus },
    ];


    const getStatusStyle = (status: ProjectStatus) => {
        if (status === "Draft") {
            return "bg-lime-100 text-lime-700"; // Yellowish green
        }
        if (status === "Active" || status === "Completed") {
            return "bg-indigo-100 text-indigo-500"; // Light purplish blue
        }
        return "bg-gray-100 text-gray-700";
    };

    return (
        <div className="space-y-6">
            <h2 className="text-lg font-bold text-gray-900">Projects</h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto scrollbar-hide pb-2 sm:pb-0 w-full sm:w-auto">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`px-5 py-2.5 rounded-xl font-bold text-[15px] transition-colors whitespace-nowrap ${activeTab === tab
                                ? "bg-[#3ebcb0] text-white shadow-sm"
                                : "text-gray-500 hover:text-gray-800"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="flex-1"></div>

                <button className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-2.5 font-bold text-gray-900 text-[15px] bg-white hover:bg-gray-50 transition-colors shrink-0 shadow-sm">
                    Last Modified <ChevronDown className="w-4 h-4 text-gray-600" strokeWidth={2.5} />
                </button>
            </div>

            <div className="rounded-xl overflow-hidden shadow-none border-none">
                <table className="w-full min-w-[700px]">
                    <thead className="bg-[#f0f0f0] text-gray-700">
                        <tr>
                            <th className="py-4 px-6 text-left font-bold w-[30%] text-[15px]">Project Name</th>
                            <th className="py-4 px-6 text-left font-bold w-[25%] text-[15px]">Course</th>
                            <th className="py-4 px-6 text-left font-bold w-[20%] text-[15px]">Created On</th>
                            <th className="py-4 px-6 text-left font-bold w-[15%] text-[15px]">Status</th>
                            <th className="py-4 px-6 text-right font-bold w-[10%] text-[15px]"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                        {displayProjects.map((project) => (
                            <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                                <td className="py-5 px-6">
                                    <div className="font-bold text-gray-800 text-[15px]">{project.name}</div>
                                </td>
                                <td className="py-5 px-6">
                                    <div className="font-bold text-gray-600 text-[15px]">{project.course}</div>
                                </td>
                                <td className="py-5 px-6">
                                    <div className="font-bold text-gray-600 text-[15px]">{project.createdOn}</div>
                                </td>
                                <td className="py-5 px-6">
                                    <span className={`px-4 py-1.5 rounded font-bold text-sm ${getStatusStyle(project.status)}`}>
                                        {project.status}
                                    </span>
                                </td>
                                <td className="py-5 px-6 text-right text-gray-400">
                                    <button className="hover:text-gray-800 transition-colors p-1">
                                        <MoreHorizontal className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}
