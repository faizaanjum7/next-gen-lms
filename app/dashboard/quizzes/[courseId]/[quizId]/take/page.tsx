"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Clock } from "lucide-react";

const mockQuestions = [
    {
        id: 1,
        text: "Which of the following is an example of supervised learning?",
        options: [
            "K Means Clustering",
            "Principal Component Analysis",
            "Linear Regression",
            "Apriori algorithm",
        ],
    },
    {
        id: 2,
        text: "What is the main goal of a classification problem?",
        options: [
            "Predicting a continuous numerical value",
            "Categorizing data into distinct classes",
            "Finding hidden patterns in unlabeled data",
            "Reducing the dimensionality of the data",
        ],
    }
];

export default function ActiveQuizPage({
    params
}: {
    params: Promise<{ courseId: string; quizId: string }>
}) {
    const router = useRouter();
    const { courseId, quizId } = React.use(params);
    const [currentQ, setCurrentQ] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [timeLeft, setTimeLeft] = useState(12 * 60 + 35); // 12:35 left

    // Format Course Name
    const courseName = courseId === "machine-learning" ? "Machine Learning"
        : courseId === "web-development" ? "Web Development"
            : courseId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const quizNum = quizId.split('-')[1] || "1";

    // Prevent back navigation easily and warn on close
    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            e.preventDefault();
            e.returnValue = "";
        };
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => window.removeEventListener("beforeunload", handleBeforeUnload);
    }, []);

    // Timer simulation
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Time formatting
    const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const secs = (timeLeft % 60).toString().padStart(2, '0');

    const handleNext = () => {
        if (currentQ < mockQuestions.length - 1) {
            setCurrentQ(prev => prev + 1);
            setSelectedOption(null);
        } else {
            // Last question -> Submit
            router.push(`/dashboard/quizzes/${courseId}/${quizId}/result`);
        }
    };

    return (
        <div
            className="fixed inset-0 z-[100] bg-[#fafbfc] dark:bg-[#0f172a] flex flex-col select-none overflow-y-auto transition-colors"
            onCopy={(e) => e.preventDefault()}
            onPaste={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
        >
            {/* Top Header */}
            <div className="h-[72px] bg-white dark:bg-[#1e293b] border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 md:px-12 flex-shrink-0 transition-colors">
                <h1 className="text-xl font-bold flex gap-2">
                    <span className="text-[#3fc1b3]">{courseName}</span>
                    <span className="text-[#dcab46]">Quiz {quizNum}</span>
                </h1>

                <div className="flex items-center gap-2 bg-[#fbe7c4] dark:bg-[#3d3a2e] border border-[#f3bd62] dark:border-[#6b5a3a] rounded-md px-4 py-1.5 md:py-2 min-w-[120px] justify-center text-[#1a1a1a] dark:text-white transition-colors">
                    <Clock className="w-5 h-5 text-[#40a399]" />
                    <span className="font-bold text-lg md:text-xl tracking-wide">{mins}:{secs}</span>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col items-center py-10 px-4">
                <div className="w-full max-w-[1000px] bg-white dark:bg-[#1e293b] border border-[#4edfcb] dark:border-[#2a9c4a] rounded-sm p-6 md:p-12 mb-8 relative min-h-[500px] flex flex-col transition-colors">

                    <h2 className="text-[18px] md:text-[20px] font-bold text-gray-900 dark:text-white mb-8 transition-colors">
                        {currentQ + 1}. {mockQuestions[currentQ].text}
                    </h2>

                    <div className="flex flex-col gap-5 md:pl-4">
                        {mockQuestions[currentQ].options.map((option, idx) => (
                            <div
                                key={idx}
                                onClick={() => setSelectedOption(idx)}
                                className={`border border-[#4edfcb] dark:border-[#2a9c4a] rounded-md p-4 flex items-center gap-4 cursor-pointer transition-colors ${selectedOption === idx ? 'bg-[#f0fbf9] dark:bg-[#1a2e2b]' : 'hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                            >
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${selectedOption === idx ? 'border-[#4edfcb]' : 'border-[#4edfcb]'}`}>
                                    {selectedOption === idx && <div className="w-2.5 h-2.5 bg-[#4edfcb] dark:bg-[#2a9c4a] rounded-full" />}
                                </div>
                                <span className="text-base font-medium text-gray-800 dark:text-gray-200 transition-colors">{option}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto pt-10 flex justify-end">
                        <button
                            onClick={handleNext}
                            disabled={selectedOption === null}
                            className="bg-[#66ebd5] hover:bg-[#4edcc4] disabled:opacity-50 text-white font-bold px-10 py-2.5 rounded-md transition-colors shadow-sm"
                        >
                            {currentQ === mockQuestions.length - 1 ? "Submit" : "Next"}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}
