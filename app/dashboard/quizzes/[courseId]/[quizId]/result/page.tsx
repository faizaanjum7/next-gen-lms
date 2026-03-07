"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function QuizResultPage({
    params
}: {
    params: Promise<{ courseId: string; quizId: string }>
}) {
    const router = useRouter();
    const { courseId, quizId } = React.use(params);

    // Format Course Name
    const courseName = courseId === "machine-learning" ? "Machine Learning"
        : courseId === "web-development" ? "Web Development"
            : courseId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const quizNum = quizId.split('-')[1] || "1";

    return (
        <div className="fixed inset-0 z-[100] bg-[#fafbfc] flex flex-col items-center">
            {/* Top Header */}
            <div className="w-full h-[72px] bg-white border-b border-gray-200 flex items-center justify-start px-6 md:px-12 flex-shrink-0">
                <h1 className="text-xl font-bold flex gap-2">
                    <span className="text-[#3fc1b3]">{courseName}</span>
                    <span className="text-[#dcab46]">Quiz {quizNum}</span>
                </h1>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col items-center w-full py-10 px-4 mt-8">
                <div className="w-full max-w-[1000px] bg-white border border-[#4edfcb] rounded-sm p-8 md:p-16 flex flex-col items-center justify-center min-h-[500px]">

                    <h2 className="text-2xl md:text-3xl font-bold text-[#2a9c4a] mb-12">
                        Quiz Completed
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 w-full mb-16">

                        {/* Score Box */}
                        <div className="flex flex-col w-full sm:w-[180px] border border-[#4edfcb] rounded-sm shadow-sm overflow-hidden">
                            <div className="bg-[#ccf2e2] text-[#2c988a] font-semibold text-center py-3 border-b border-[#4edfcb]">
                                Score
                            </div>
                            <div className="bg-[#ebfaf4] text-gray-800 font-bold text-center py-4">
                                8 / 10
                            </div>
                        </div>

                        {/* Time Taken Box */}
                        <div className="flex flex-col w-full sm:w-[180px] border border-[#4edfcb] rounded-sm shadow-sm overflow-hidden">
                            <div className="bg-[#ccf2e2] text-[#2c988a] font-semibold text-center py-3 border-b border-[#4edfcb]">
                                Time Taken
                            </div>
                            <div className="bg-[#ebfaf4] text-gray-800 font-bold text-center py-4 text-sm md:text-base">
                                15 min 12 sec
                            </div>
                        </div>

                        {/* Correct Answers Box */}
                        <div className="flex flex-col w-full sm:w-[180px] border border-[#4edfcb] rounded-sm shadow-sm overflow-hidden">
                            <div className="bg-[#ccf2e2] text-[#2c988a] font-semibold text-center py-3 border-b border-[#4edfcb]">
                                Correct Answers
                            </div>
                            <div className="bg-[#ebfaf4] text-gray-800 font-bold text-center py-4">
                                8
                            </div>
                        </div>

                    </div>

                    <button
                        onClick={() => router.push(`/dashboard/quizzes/${courseId}`)}
                        className="bg-[#60dac8] hover:bg-[#4edfcb] text-white font-bold px-12 py-3 rounded-md transition-colors shadow-sm mt-4 text-sm"
                    >
                        Back to Quizzes
                    </button>
                </div>
            </div>
        </div>
    );
}
