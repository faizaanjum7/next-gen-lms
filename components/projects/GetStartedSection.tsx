"use client";

import { Plus, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function GetStartedSection() {
    return (
        <div className="space-y-4 shadow-none">
            <div className="flex items-center justify-between pb-2">
                <h2 className="text-lg font-bold text-gray-900">Get Started</h2>
                <Link href="#" className="flex items-center gap-2 text-[#5448f7] font-bold text-[14px] hover:underline transition-all">
                    View more templates <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {/* Create New Project Card */}
                <button className="bg-[#5448f7] hover:bg-[#493dec] transition-colors rounded-xl p-6 h-[220px] flex flex-col items-center justify-center text-white shadow-sm w-full group">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                        <Plus className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                    <span className="font-bold text-[15px]">Create New Project</span>
                </button>

                {/* AI Mini Project Card */}
                <div className="bg-white rounded-xl p-6 h-[220px] border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col hover:border-gray-300 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
                        <FileText className="w-5 h-5 text-gray-600" strokeWidth={2} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-[15px] mb-2">AI Mini Project</h3>
                    <p className="text-gray-500 text-[12px] font-medium leading-[1.6] flex-1">
                        Build a small AI-powered project using guided prompts, datasets, and real-world examples to strengthen your fundamentals.
                    </p>
                </div>

                {/* Course Capstone Project Card */}
                <div className="bg-white rounded-xl p-6 h-[220px] border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col hover:border-gray-300 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
                        <FileText className="w-5 h-5 text-gray-600" strokeWidth={2} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-[15px] mb-2">Course Capstone Project</h3>
                    <p className="text-gray-500 text-[12px] font-medium leading-[1.6] flex-1">
                        Apply everything you learned in a structured capstone project designed to mirror real industry problems.
                    </p>
                </div>

                {/* Industry Project Card */}
                <div className="bg-white rounded-xl p-6 h-[220px] border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col hover:border-gray-300 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
                        <FileText className="w-5 h-5 text-gray-600" strokeWidth={2} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-[15px] mb-2">Industry Project</h3>
                    <p className="text-gray-500 text-[12px] font-medium leading-[1.6] flex-1">
                        Work on an industry-inspired project with real requirements, deadlines, and deliverables to showcase job-ready skills.
                    </p>
                </div>
            </div>
        </div>
    );
}
