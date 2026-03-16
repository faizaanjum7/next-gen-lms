"use client";

import React from "react";
import { ClipboardList, ClipboardCheck } from "lucide-react";

const currentAssignments = [
    {
        id: 1,
        title: "ER Diagram Design",
        dueDate: "2 Feb 2026, 11:59 PM",
    },
    {
        id: 2,
        title: "Case Study on Software Development",
        dueDate: "31 Jan 2026, 11:59 PM",
    },
    {
        id: 3,
        title: "Basic Coding in Java",
        dueDate: "30 Jan 2026, 11:59 PM",
    },
];

const completedAssignments = [
    {
        id: 1,
        title: "Email Writing",
        submittedDate: "27 Jan 2026",
    },
    {
        id: 2,
        title: "SQL Basics",
        submittedDate: "25 Jan 2026",
    },
    {
        id: 3,
        title: "Case Study on Project Management",
        submittedDate: "22 Jan 2026",
    },
];

export default function AssignmentsPage() {
    return (
        <div className="p-6 md:p-8 w-full max-w-[1400px] flex flex-col gap-6">
            {/* Current Assignments Section */}
            <div className="bg-[#f8f9fa] dark:bg-[#1e293b] rounded-xl border border-gray-200 dark:border-gray-800 p-6 md:p-8 transition-colors">
                <h2 className="text-[20px] md:text-[22px] font-bold text-black dark:text-white mb-6 transition-colors">
                    Current Assignments ({currentAssignments.length})
                </h2>

                <div className="flex flex-col gap-4">
                    {currentAssignments.map((assignment) => (
                        <div
                            key={assignment.id}
                            className="bg-white dark:bg-gray-800 border text-black dark:text-gray-200 border-gray-200 dark:border-gray-700 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:shadow-sm"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0">
                                    <ClipboardList className="w-8 h-8 text-black dark:text-white transition-colors" strokeWidth={2} />
                                </div>
                                <div>
                                    <h3 className="text-base sm:text-[17px] font-medium text-black dark:text-white mb-0.5 transition-colors">
                                        {assignment.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 transition-colors">
                                        Due: {assignment.dueDate}
                                    </p>
                                </div>
                            </div>
                            <button className="whitespace-nowrap bg-[#3b8af0] hover:bg-[#2e74d1] text-white text-sm font-medium px-6 py-2 sm:py-2.5 rounded-md transition-colors w-full sm:w-auto">
                                View Assignment
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Completed Assignments Section */}
            <div className="bg-[#f8f9fa] dark:bg-[#1e293b] rounded-xl border border-gray-200 dark:border-gray-800 p-6 md:p-8 transition-colors">
                <h2 className="text-[20px] md:text-[22px] font-bold text-black dark:text-white mb-6 transition-colors">
                    Completed Assignments ({completedAssignments.length})
                </h2>

                <div className="flex flex-col gap-4">
                    {completedAssignments.map((assignment) => (
                        <div
                            key={assignment.id}
                            className="bg-white dark:bg-gray-800 border text-black dark:text-gray-200 border-gray-200 dark:border-gray-700 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:shadow-sm"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0">
                                    <ClipboardCheck className="w-8 h-8 text-black dark:text-white transition-colors" strokeWidth={2} />
                                </div>
                                <div>
                                    <h3 className="text-base sm:text-[17px] font-medium text-black dark:text-white mb-0.5 transition-colors">
                                        {assignment.title}
                                    </h3>
                                    <p className="text-sm text-[#22c55e] dark:text-green-400 mt-0.5 font-medium transition-colors">
                                        {assignment.submittedDate}
                                    </p>
                                </div>
                            </div>
                            <button className="whitespace-nowrap bg-[#31ad54] hover:bg-[#289145] text-white text-sm font-medium px-6 py-2 sm:py-2.5 rounded-md transition-colors w-full sm:w-auto">
                                View Submission
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
