"use client";

import React from "react";
import Image from "next/image";
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
        imagePath: "/machinelearning.png",
    },
    {
        id: "web-development",
        title: "Web Development",
        quizzesCount: 5,
        colorTheme: "#f0b4cb",
        borderColor: "#c17c99",
        gradientStart: "#f8d9e5",
        gradientEnd: "#f0b4cb",
        imagePath: "/webdev.png",
    },
    {
        id: "devops",
        title: "DevOps",
        quizzesCount: 4,
        colorTheme: "#c4a9eb",
        borderColor: "#8f70c3",
        gradientStart: "#e6dcf5",
        gradientEnd: "#c4a9eb",
        imagePath: "/devops.png",
    },
    {
        id: "java",
        title: "Java",
        quizzesCount: 5,
        colorTheme: "#f8c88f",
        borderColor: "#cf9758",
        gradientStart: "#fdebd4",
        gradientEnd: "#f8c88f",
        imagePath: "/java.png",
    },
    {
        id: "cloud-computing",
        title: "Cloud Computing",
        quizzesCount: 4,
        colorTheme: "#a6ecda",
        borderColor: "#6eb5a3",
        gradientStart: "#dcf7f1",
        gradientEnd: "#a6ecda",
        imagePath: "/cloudcomputing.png",
    },
    {
        id: "aws",
        title: "AWS",
        quizzesCount: 3,
        colorTheme: "#c3e4ed",
        borderColor: "#8cb2be",
        gradientStart: "#e5f4f8",
        gradientEnd: "#c3e4ed",
        imagePath: "/aws.png",
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
                        {/* Course Image Area */}
                        <div className="flex-grow flex items-center justify-center bg-white m-2 rounded-t-lg shadow-sm overflow-hidden relative">
                            {course.imagePath ? (
                                <Image
                                    src={course.imagePath}
                                    alt={course.title}
                                    fill
                                    className="object-contain p-2"
                                />
                            ) : (
                                <div className="p-4 w-full h-full flex items-center justify-center">
                                    <div
                                        className="absolute inset-0 opacity-20"
                                        style={{
                                            background: `radial-gradient(circle at center, ${course.colorTheme} 0%, white 100%)`
                                        }}
                                    />
                                    <h3
                                        className="text-xl md:text-2xl font-bold bg-clip-text text-transparent relative z-10 text-center px-4"
                                        style={{ backgroundImage: `linear-gradient(to right, #2b3a4a, ${course.borderColor})` }}
                                    >
                                        {course.title.toUpperCase()}
                                    </h3>
                                </div>
                            )}
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
