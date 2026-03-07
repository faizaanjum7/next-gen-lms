"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export default function QuizInstructionsPage({
    params
}: {
    params: Promise<{ courseId: string; quizId: string }>
}) {
    const router = useRouter();
    const { courseId, quizId } = React.use(params);

    // Basic mock data extraction
    const quizNum = quizId.split('-')[1] || "1";
    const courseCode = courseId === "machine-learning" ? "ML"
        : courseId === "web-development" ? "Web Dev"
            : courseId.toUpperCase().substring(0, 5);

    return (
        <div className="w-full h-full flex flex-col items-center">
            {/* Header Area */}
            <div className="w-full p-6 md:p-8 border-b border-gray-100 flex items-center gap-3">
                <button
                    onClick={() => router.push(`/dashboard/quizzes/${courseId}`)}
                    className="w-8 h-8 rounded-full bg-[#1fc3b7] text-white flex items-center justify-center hover:bg-[#19a59a] transition-colors"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <h2 className="text-[20px] md:text-[22px] font-bold text-gray-900">
                    {courseCode} Quiz {quizNum}
                </h2>
            </div>

            {/* Main Content */}
            <div className="p-6 md:p-8 w-full max-w-[900px] flex flex-col gap-8 self-center">

                {/* Top Info Card */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold text-gray-900">Take the Quiz</h3>

                    <div className="bg-[#e2f9f5] rounded-xl p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 shadow-sm">
                        <div className="flex flex-col gap-2">
                            <h4 className="text-xl font-bold text-gray-900 mb-1">
                                {courseCode} Quiz {quizNum}
                            </h4>
                            <p className="text-base text-gray-800">No of Questions: 10</p>
                            <p className="text-base text-gray-800">Duration: 20 min</p>
                            <p className="text-base text-gray-800">Marks: 10</p>
                        </div>

                        <div className="w-[160px] h-[100px] bg-[#1a233a] rounded-xl flex flex-col items-center justify-center text-white p-2 shadow-md relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#4cdccd_0%,_transparent_100%)]"></div>
                            <span className="font-bold text-sm tracking-wider z-10">{courseCode} QUIZ {quizNum}</span>
                            <div className="mt-2 text-cyan-400 z-10 w-8 h-8 rounded-full flex items-center justify-center bg-white/10">
                                <span className="text-xs">🧠</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Instructions Box */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold text-gray-900">Instructions</h3>

                    <div className="border border-[#4cdccd] rounded-xl p-6 md:p-8 flex flex-col gap-8 bg-white shadow-sm">
                        <ul className="space-y-4 text-base text-gray-900">
                            {[
                                "The quiz timer will start immediately after you click Start Quiz.",
                                "Once time is over, the quiz will be auto-submitted.",
                                "Timer cannot be paused.",
                                "You can select only one option per question.",
                                "You may navigate between questions.",
                                "Answers can be changed before submission.",
                                "Do not refresh or close the browser during the quiz.",
                                "Switching tabs may result in automatic submission.",
                                "Ensure a stable internet connection."
                            ].map((instruction, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#4cdccd] mt-2 flex-shrink-0" />
                                    <span>{instruction}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => router.push(`/dashboard/quizzes/${courseId}/${quizId}/take`)}
                            className="w-full sm:w-[400px] mx-auto py-3 md:py-4 mt-4 rounded-xl text-white font-bold text-xl hover:opacity-90 transition-opacity shadow-md"
                            style={{ backgroundColor: '#2acdbb' }}
                        >
                            Start the Quiz
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
