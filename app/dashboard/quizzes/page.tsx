"use client";

import React from "react";
import { useRouter } from "next/navigation";

// Mock data for courses containing quizzes
export const coursesWithQuizzes = [
    {
        id: "machine-learning",
        title: "Machine Learning",
        quizzesCount: 3,
        colorTheme: "#96dce7",
        borderColor: "#57a8b8",
        gradientStart: "#d1ecf1",
        gradientEnd: "#96dce7",
        iconContent: "Machine Learning",
    },
    {
        id: "web-development",
        title: "Web Development",
        quizzesCount: 5,
        colorTheme: "#f0b4cb",
        borderColor: "#c17c99",
        gradientStart: "#f8d9e5",
        gradientEnd: "#f0b4cb",
        iconContent: "WEB DEVELOPMENT",
    },
    {
        id: "devops",
        title: "DevOps",
        quizzesCount: 4,
        colorTheme: "#c4a9eb",
        borderColor: "#8f70c3",
        gradientStart: "#e6dcf5",
        gradientEnd: "#c4a9eb",
        iconContent: "DevOps",
    },
    {
        id: "java",
        title: "Java",
        quizzesCount: 5,
        colorTheme: "#f8c88f",
        borderColor: "#cf9758",
        gradientStart: "#fdebd4",
        gradientEnd: "#f8c88f",
        iconContent: "☕ Java",
    },
    {
        id: "cloud-computing",
        title: "Cloud Computing",
        quizzesCount: 4,
        colorTheme: "#a6ecda",
        borderColor: "#6eb5a3",
        gradientStart: "#dcf7f1",
        gradientEnd: "#a6ecda",
        iconContent: "CLOUD COMPUTING",
    },
    {
        id: "aws",
        title: "AWS",
        quizzesCount: 3,
        colorTheme: "#c3e4ed",
        borderColor: "#8cb2be",
        gradientStart: "#e5f4f8",
        gradientEnd: "#c3e4ed",
        iconContent: "AWS",
    },
];

export default function QuizzesPage() {
    const router = useRouter();

    return (
        <div className="p-6 md:p-8 w-full max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coursesWithQuizzes.map((course) => (
                    <div
                        key={course.id}
                        onClick={() => router.push(`/dashboard/quizzes/${course.id}`)}
                        className="rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] shadow-sm flex flex-col h-[320px]"
                        style={{
                            backgroundColor: course.colorTheme,
                            border: `1px solid ${course.borderColor}`
                        }}
                    >
                        {/* Illustration Placeholder Area */}
                        <div className="p-4 flex-grow flex items-center justify-center bg-white m-2 rounded-t-lg shadow-sm overflow-hidden relative">
                            <div
                                className="absolute inset-0 opacity-20"
                                style={{
                                    background: `radial-gradient(circle at center, ${course.colorTheme} 0%, white 100%)`
                                }}
                            />
                            <div
                                className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                                }}
                            />
                            <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent relative z-10" style={{ backgroundImage: `linear-gradient(to right, #2b3a4a, ${course.borderColor})` }}>
                                {course.iconContent}
                            </h3>
                        </div>

                        {/* Card Footer Content */}
                        <div className="p-4 px-5 pt-2">
                            <h2 className="text-lg font-bold text-gray-900 mb-1">
                                {course.title}
                            </h2>
                            <p className="text-sm font-medium text-gray-700">
                                {course.quizzesCount} Quizzes
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
