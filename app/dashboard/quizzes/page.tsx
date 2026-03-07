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
            <div className="flex flex-wrap gap-8 md:gap-10">
                {coursesWithQuizzes.map((course) => (
                    <div
                        key={course.id}
                        onClick={() => router.push(`/dashboard/quizzes/${course.id}`)}
                        className="rounded-[14px] cursor-pointer transition-transform hover:scale-[1.02] flex flex-col w-full sm:w-[320px] h-[340px]"
                        style={{
                            backgroundColor: course.colorTheme,
                            border: `1px solid ${course.borderColor}`
                        }}
                    >
                        {/* Course Image Area */}
                        <div className="flex items-center justify-center bg-white m-3 rounded-[12px] overflow-hidden relative h-[220px] shrink-0 border border-gray-100">
                            {course.imagePath ? (
                                <div className="absolute inset-0 flex items-center justify-center p-2">
                                    <Image
                                        src={course.imagePath}
                                        alt={course.title}
                                        fill
                                        style={{ objectFit: 'contain', objectPosition: 'center center' }}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="p-2"
                                        priority
                                    />
                                </div>
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
                        <div className="px-4 pb-4 pt-1 flex flex-col justify-end">
                            <h2 className="text-[18px] font-bold text-gray-900 mb-1">
                                {course.title}
                            </h2>
                            <p className="text-[14px] text-gray-800 font-medium">
                                {course.quizzesCount} Quizzes
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
