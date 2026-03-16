"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { coursesWithQuizzes } from "../page";

// Mock data for quizzes specific to a course
const mockQuizzes = [
    {
        id: "quiz-1",
        title: "Quiz 1",
        questions: 10,
        duration: "20 min",
        completed: false, // Not attempted
        cardBg: "#e6f4cf",
        iconBg: "#b8d184",
        btnColor: "#bbcb74",
    },
    {
        id: "quiz-2",
        title: "Quiz 2",
        questions: 15,
        duration: "30 min",
        completed: false, // Not attempted
        cardBg: "#e3d3f1",
        iconBg: "#c280dc",
        btnColor: "#c280dc",
    },
    {
        id: "quiz-3",
        title: "Quiz 3",
        questions: 20,
        duration: "45 min",
        completed: true, // Attempted
        cardBg: "#f5d3e2",
        iconBg: "#d97fb7",
        btnColor: "#d97fb7",
    },
];

export default function CourseQuizzesPage({ params }: { params: Promise<{ courseId: string }> }) {
    const router = useRouter();
    const { courseId } = React.use(params);

    // Find course title
    const course = coursesWithQuizzes.find(c => c.id === courseId);
    const courseTitle = course ? course.title : "Course";

    // Get initials for the icon
    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    };
    const initials = getInitials(courseTitle);

    return (
        <div className="w-full h-full flex flex-col">
            {/* Header Area */}
            <div className="p-6 md:p-8 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3 transition-colors">
                <button
                    onClick={() => router.push("/dashboard/quizzes")}
                    className="w-8 h-8 rounded-full bg-[#1fc3b7] text-white flex items-center justify-center hover:bg-[#19a59a] transition-colors"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <h2 className="text-[20px] md:text-[22px] font-bold text-gray-900 dark:text-white transition-colors">
                    {courseTitle} Quiz
                </h2>
            </div>

            {/* Quizzes List */}
            <div className="p-6 md:p-8 flex flex-col gap-8 max-w-[800px] w-full">
                {mockQuizzes.map((quiz) => (
                    <div
                        key={quiz.id}
                        className="rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:shadow-md transition-shadow dark:shadow-none bg-opacity-100 dark:bg-opacity-20"
                        style={{ backgroundColor: quiz.cardBg, border: `1px solid ${quiz.iconBg}40` }}
                    >
                        <div className="flex items-center gap-6">
                            <div
                                className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-sm"
                                style={{ backgroundColor: quiz.iconBg }}
                            >
                                {initials}
                            </div>

                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors">{quiz.title}</h3>
                                <div className="text-sm text-gray-800 dark:text-gray-300 space-y-0.5 mt-1 transition-colors">
                                    <p>{quiz.questions} Questions</p>
                                    <p>Duration : {quiz.duration}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-2 w-full sm:w-auto mt-4 sm:mt-0">
                            {quiz.completed ? (
                                <>
                                    <span className="text-sm font-semibold text-green-700 dark:text-green-400 bg-white/60 dark:bg-white/10 px-3 py-1 rounded-full transition-colors">
                                        Attempted
                                    </span>
                                    <button
                                        onClick={() => router.push(`/dashboard/quizzes/${courseId}/${quiz.id}/result`)}
                                        className="w-full sm:w-[140px] py-2.5 rounded-md text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-sm"
                                        style={{ backgroundColor: quiz.btnColor }}
                                    >
                                        View Results
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => router.push(`/dashboard/quizzes/${courseId}/${quiz.id}/instructions`)}
                                    className="w-full sm:w-[140px] py-2.5 rounded-md text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-sm"
                                    style={{ backgroundColor: quiz.btnColor }}
                                >
                                    Start
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
