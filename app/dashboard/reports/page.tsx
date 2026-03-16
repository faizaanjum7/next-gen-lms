"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

export default function ReportsPage() {
    return (
        <div className="p-6 md:p-8 w-full max-w-[1240px] mx-auto min-h-screen">
            {/* Header Section */}
            <div className="mb-6">
                <h2 className="text-[24px] md:text-[28px] font-bold text-gray-900 dark:text-white mb-1 leading-tight transition-colors">
                    Learning Report
                </h2>
                <p className="text-[14px] md:text-[15px] font-semibold text-gray-900 dark:text-gray-300 leading-tight transition-colors">
                    Track your progress and performance insights
                </p>
            </div>

            {/* Top Value Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

                {/* Profile Progress Card */}
                <div className="bg-white dark:bg-[#1e293b] border border-transparent dark:border-gray-800 rounded-xl p-6 shadow-sm flex items-center gap-5 transition-colors">
                    <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                        {/* SVG Circular Progress (37%) */}
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="32"
                                cy="32"
                                r="30"
                                fill="none"
                                strokeWidth="2"
                                strokeDasharray="4 4"
                                className="stroke-[#3bc4b6]"
                            />
                            <circle
                                cx="32"
                                cy="32"
                                r="30"
                                fill="none"
                                strokeWidth="2"
                                strokeDasharray="70 188" /* roughly 37% of circumference (2 * pi * 30 = 188.4) */
                                className="stroke-[#3bc4b6]"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-transparent">
                            <span className="sr-only">37%</span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[13px] font-medium text-gray-900 dark:text-gray-300 transition-colors">Profile Progress</span>
                        <span className="text-[26px] font-semibold text-[#3bc4b6] leading-none mb-0.5">
                            37%
                        </span>
                        <span className="text-[11px] text-gray-400 dark:text-gray-500 transition-colors">Completed</span>
                    </div>
                </div>

                {/* Learning Score Card */}
                <div className="bg-white dark:bg-[#1e293b] border border-transparent dark:border-gray-800 rounded-xl p-6 shadow-sm flex items-center gap-5 transition-colors">
                    <div className="shrink-0 w-14 h-14 flex items-center justify-center">
                        {/* Custom SVG Star matching the UI */}
                        <svg viewBox="0 0 24 24" fill="#fbbf24" className="w-full h-full">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[13px] font-medium text-gray-900 dark:text-gray-300 transition-colors">Learning Score</span>
                        <div className="flex items-baseline gap-1 mb-0.5">
                            <span className="text-[26px] font-semibold text-[#3bc4b6] leading-none">
                                7000
                            </span>
                            <span className="text-[14px] text-[#3bc4b6] font-medium">Points</span>
                        </div>
                        <span className="text-[11px] text-gray-400 dark:text-gray-500 transition-colors">Based on recent assessments</span>
                    </div>
                </div>

                {/* Skill Level Card */}
                <div className="bg-white dark:bg-[#1e293b] border border-transparent dark:border-gray-800 rounded-xl p-6 shadow-sm flex items-center gap-5 transition-colors">
                    <div className="shrink-0 w-12 h-12 flex items-end justify-center gap-[3px] pb-1">
                        {/* simple bar chart icon created via divs */}
                        <div className="w-3 h-4 bg-[#f9a826] rounded-[2px]" />
                        <div className="w-3 h-7 bg-[#f9a826] rounded-[2px]" />
                        <div className="w-3 h-10 bg-[#f9a826] rounded-[2px]" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[13px] font-medium text-gray-900 dark:text-gray-300 transition-colors">Skill Level</span>
                        <span className="text-[20px] font-semibold text-[#3bc4b6] leading-tight mb-0.5">
                            Above Average
                        </span>
                        <span className="text-[11px] text-gray-400 dark:text-gray-500 transition-colors">Completed</span>
                    </div>
                </div>

            </div>

            {/* Filter Section */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                    <select className="w-full appearance-none border border-gray-200 dark:border-gray-800 rounded-lg py-2.5 pl-4 pr-10 text-[14px] text-gray-900 dark:text-white bg-white dark:bg-[#1e293b] outline-none focus:border-[#3bc4b6] transition-colors">
                        <option>Choose Course</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-900 dark:text-gray-400 pointer-events-none" />
                </div>
                <div className="flex-1 relative">
                    <select className="w-full appearance-none border border-gray-200 dark:border-gray-800 rounded-lg py-2.5 pl-4 pr-10 text-[14px] text-gray-900 dark:text-white bg-white dark:bg-[#1e293b] outline-none focus:border-[#3bc4b6] transition-colors">
                        <option>Choose Assessment</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-900 dark:text-gray-400 pointer-events-none" />
                </div>
                <div className="flex-1 relative">
                    <select className="w-full appearance-none border border-gray-200 dark:border-gray-800 rounded-lg py-2.5 pl-4 pr-10 text-[14px] text-gray-900 dark:text-white bg-white dark:bg-[#1e293b] outline-none focus:border-[#3bc4b6] transition-colors">
                        <option>Attempt Date</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-900 dark:text-gray-400 pointer-events-none" />
                </div>
                <button className="bg-[#f9a826] hover:bg-[#e6971a] text-white px-8 py-2.5 rounded-lg text-[14px] font-medium transition-colors whitespace-nowrap">
                    View Report
                </button>
            </div>

            {/* Summary Box */}
            <div className="bg-white dark:bg-[#1e293b] border border-gray-300 dark:border-gray-800 rounded-lg p-5 md:p-6 mb-4 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                        <h3 className="text-[18px] font-semibold text-gray-900 dark:text-white mb-1 transition-colors">Hi User</h3>
                        <p className="text-[13px] text-gray-500 dark:text-gray-400 transition-colors">
                            Here&apos;s a quick overview of your performance
                        </p>
                    </div>

                    {/* Badges */}
                    <div className="flex bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden self-start transition-colors">
                        <button className="px-5 py-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            Beginner
                        </button>
                        <button className="px-5 py-1.5 text-[13px] font-medium text-white bg-[#3bc4b6]">
                            Intermediate
                        </button>
                        <button className="px-5 py-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            Advanced
                        </button>
                    </div>
                </div>

                <div className="h-px bg-gray-200 dark:bg-gray-800 my-4 transition-colors" />

                <div className="flex flex-col gap-3 text-[14px] font-medium text-gray-500 dark:text-gray-400 transition-colors">
                    <p>Score: 16/16</p>
                    <p>Attempt Time: Oct 20, 2024 . 03:44 PM</p>
                    <p>Submission Type: Manual</p>
                </div>
            </div>

            {/* Tri-Bar Status */}
            <div className="flex gap-2 mb-1">
                <div className="h-[14px] flex-1 bg-[#3bc4b6] rounded-[2px]" />
                <div className="h-[14px] flex-1 bg-[#3bc4b6] rounded-[2px]" />
                <div className="h-[14px] flex-1 bg-[#3bc4b6] rounded-[2px]" />
            </div>
            <div className="flex justify-between px-[5%] text-[12px] font-medium text-gray-900 dark:text-gray-100 mb-8 transition-colors">
                <span className="text-center w-1/3">Average</span>
                <span className="text-center w-1/3">Challenger</span>
                <span className="text-center w-1/3">Topper</span>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">

                {/* Performance by Section */}
                <div className="bg-white dark:bg-[#1e293b] border border-gray-300 dark:border-gray-800 rounded-lg p-5 transition-colors">
                    <div className="flex justify-between items-start mb-8">
                        <h4 className="text-[15px] font-bold text-gray-900 dark:text-white transition-colors">Performance by Section</h4>
                        <div className="flex items-center gap-4 text-[11px] font-semibold text-gray-900 dark:text-gray-100 transition-colors">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-sm bg-[#52b7b0]" />
                                <span>Achieved Marks</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-sm bg-[#b4e0de]" />
                                <span>Total Marks</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[200px] w-full flex pl-8 pb-8">
                        {/* Y Axis Grid */}
                        <div className="absolute left-0 top-0 bottom-8 w-full flex flex-col justify-between text-[11px] text-gray-500">
                            <div className="flex items-center gap-4 relative">
                                <span className="w-4 text-right">16</span>
                                <div className="h-px bg-gray-400 flex-1 relative top-[1px]" />
                            </div>
                            <div className="flex items-center gap-4 relative">
                                <span className="w-4 text-right">8</span>
                                <div className="h-px bg-gray-400 flex-1 relative top-[1px]" />
                            </div>
                            <div className="flex items-center gap-4 relative">
                                <span className="w-4 text-right">4</span>
                                <div className="h-px bg-gray-400 flex-1 relative top-[1px]" />
                            </div>
                            <div className="flex items-center gap-4 relative">
                                <span className="w-4 text-right">0</span>
                                <div className="h-px bg-gray-400 flex-1 relative top-[1px]" />
                            </div>
                        </div>

                        {/* Bars */}
                        <div className="absolute left-0 right-0 bottom-8 top-0 flex items-end justify-center z-10 pt-[5px]">
                            <div className="flex items-end h-[100%]">
                                <div className="w-[72px] bg-[#52b7b0] h-[100%]" />
                                <div className="w-[72px] bg-[#b4e0de] h-[100%] ml-0.5" />
                            </div>
                        </div>

                        {/* X Axis Label */}
                        <div className="absolute bottom-0 left-0 right-0 text-center text-[10px] font-semibold text-gray-900 dark:text-gray-300 mt-2 transition-colors">
                            Assessment Name
                        </div>
                    </div>
                </div>

                {/* Accuracy */}
                <div className="bg-white dark:bg-[#1e293b] border border-gray-300 dark:border-gray-800 rounded-lg p-5 transition-colors">
                    <div className="flex justify-between items-start mb-8">
                        <h4 className="text-[15px] font-bold text-gray-900 dark:text-white transition-colors">Accuracy</h4>
                        <div className="flex items-center gap-4 text-[11px] font-semibold text-gray-900 dark:text-gray-100 transition-colors">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-sm bg-[#52b7b0]" />
                                <span>Average</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-sm bg-[#f9a826]" />
                                <span>Wrong Answers</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[200px] w-full flex pl-8 pb-8">
                        {/* Y Axis Grid */}
                        <div className="absolute left-0 top-0 bottom-8 w-full flex flex-col justify-between text-[11px] text-gray-500">
                            <div className="flex items-center gap-4 relative">
                                <span className="w-4 text-right">16</span>
                                <div className="h-px bg-gray-400 flex-1 relative top-[1px]" />
                            </div>
                            <div className="flex items-center gap-4 relative">
                                <span className="w-4 text-right">8</span>
                                <div className="h-px bg-gray-400 flex-1 relative top-[1px]" />
                            </div>
                            <div className="flex items-center gap-4 relative">
                                <span className="w-4 text-right">4</span>
                                <div className="h-px bg-gray-400 flex-1 relative top-[1px]" />
                            </div>
                            <div className="flex items-center gap-4 relative">
                                <span className="w-4 text-right">0</span>
                                <div className="h-px bg-gray-400 flex-1 relative top-[1px]" />
                            </div>
                        </div>

                        {/* Bars */}
                        <div className="absolute left-0 right-0 bottom-8 top-0 flex items-end justify-center z-10 text-[12px] font-medium pt-[5px]">
                            <div className="flex items-end h-[100%]">
                                <div className="w-[52px] bg-[#52b7b0] h-[65%] flex items-start justify-center relative">
                                    <span className="absolute -top-[20px] text-[#52b7b0]">100%</span>
                                </div>
                                <div className="w-[52px] bg-[#f9a826] h-[35%] ml-0.5 flex items-start justify-center relative">
                                    <span className="absolute -top-[20px] text-[#f9a826]">0%</span>
                                </div>
                            </div>
                        </div>

                        {/* X Axis Label */}
                        <div className="absolute bottom-0 left-0 right-0 text-center text-[10px] font-semibold text-gray-900 dark:text-gray-300 mt-2 transition-colors">
                            Correct Answers
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
