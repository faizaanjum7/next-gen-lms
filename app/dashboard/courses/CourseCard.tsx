import React from "react";
import Image from "next/image";

// A helper type for theme colors
export type ThemeColor = "orange" | "teal" | "blue";

export interface CourseCardProps {
    title: string;
    category: string;
    instructor: string;
    iconLetters: string;
    themeColor: ThemeColor;
    progress: {
        current: number;
        total: number;
    };
    lessons: {
        completed: number;
        total: number;
    };
    duration: {
        completed: number; // in mins
        total: number;     // in mins
    };
    actionText: string;
}

export default function CourseCard({
    title,
    category,
    instructor,
    iconLetters,
    themeColor,
    progress,
    lessons,
    duration,
    actionText,
}: CourseCardProps) {
    // Map abstract themes to specific tailwind classes
    const themeMap = {
        orange: {
            bg: "bg-[#FF9F1C]",
            text: "text-white",
            buttonBg: "bg-[#FF9F1C] hover:bg-[#e68f19]",
            progressFill: "bg-[#FF9F1C]"
        },
        teal: {
            bg: "bg-[#7ce0d3]",
            text: "text-white",
            buttonBg: "bg-[#7ce0d3] hover:bg-[#68d1c3]",
            progressFill: "bg-[#7ce0d3]"
        },
        blue: {
            bg: "bg-[#3498db]",
            text: "text-white",
            buttonBg: "bg-[#3498db] hover:bg-[#2980b9]",
            progressFill: "bg-[#3498db]"
        }
    };

    const theme = themeMap[themeColor];

    // Calculate progress percentage
    const progressPercentage = (progress.current / progress.total) * 100;

    return (
        <div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 flex flex-col md:flex-row shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 dark:border-gray-800 gap-6 w-full relative mb-4 transition-colors">
            {/* Left Section: Icon & Content */}
            <div className="flex-1 flex flex-col">
                <div className="flex gap-4">
                    {/* Course Icon */}
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-xl shrink-0 ${theme.bg} ${theme.text}`}>
                        {iconLetters}
                    </div>

                    {/* Titles */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight mb-1 transition-colors">{title}</h3>
                        <p className="text-[13px] text-gray-500 dark:text-gray-400 transition-colors">{category}</p>
                        <p className="text-[13px] text-gray-400 dark:text-gray-500 transition-colors">{instructor}</p>
                    </div>
                </div>

                {/* Progress Bar Row */}
                <div className="mt-8 mb-2 flex items-center justify-between text-[13px] text-gray-500 dark:text-gray-400 font-medium transition-colors">
                    <span>Progress</span>
                    <span>{progress.current} of {progress.total} modules</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mb-6 transition-colors">
                    <div
                        className={`h-full rounded-full transition-all duration-500 ease-out ${theme.progressFill}`}
                        style={{ width: `${progressPercentage}%` }}
                    />
                </div>

                {/* Bottom Row: Info & Stats */}
                <div className="flex items-center gap-12 mt-auto">
                    <div>
                        <p className="text-[12px] text-gray-400 dark:text-gray-500 mb-0.5 transition-colors">Lessons</p>
                        <p className="text-[14px] font-bold text-gray-800 dark:text-gray-200 transition-colors">{lessons.completed}/{lessons.total}</p>
                    </div>
                    <div>
                        <p className="text-[12px] text-gray-400 dark:text-gray-500 mb-0.5 transition-colors">Duration</p>
                        <p className="text-[14px] font-bold text-gray-800 dark:text-gray-200 transition-colors">{duration.completed}/{duration.total} mins</p>
                    </div>
                </div>
            </div>

            {/* Right Section: Image & Button */}
            <div className="flex flex-col items-center justify-between gap-4 md:w-[220px] shrink-0">
                {/* Illustration Placeholder */}
                <div className="w-full h-[120px] rounded-xl border border-blue-100 dark:border-blue-900/30 bg-blue-50/30 dark:bg-blue-900/10 flex items-center justify-center relative overflow-hidden transition-colors">
                    {/* Using a generic colored block as placeholder if we don't have images */}
                    <div className="text-blue-300 dark:text-blue-700/50 font-medium text-sm flex items-center justify-center h-full w-full">
                        <svg className="w-12 h-12 opacity-50 text-blue-300 dark:text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    {/* If there's an actual image, we can put it here.
                        Like: <Image src="/path" fill className="object-cover" alt="illustration" />
                    */}
                </div>

                {/* Action Button */}
                <button
                    className={`w-full py-2.5 rounded-lg text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 ${theme.buttonBg}`}
                >
                    {actionText.includes("Continue") && (
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    )}
                    {actionText}
                </button>
            </div>
        </div>
    );
}
