"use client";

import React, { useState } from "react";
import CourseCard, { ThemeColor } from "./CourseCard";

const TABS = ["In Progress", "Saved Courses", "My Collection", "Watched History"];

const inProgressCourses = [
    {
        title: "Machine Learning",
        category: "AI & ML",
        instructor: "Prof. Alex Johnson",
        iconLetters: "ML",
        themeColor: "blue" as ThemeColor,
        progress: { current: 1, total: 5 },
        lessons: { completed: 1, total: 13 },
        duration: { completed: 150, total: 180 },
        actionText: "Continue"
    },
    {
        title: "Data Science",
        category: "Data Science",
        instructor: "Prof. Sarah Miller",
        iconLetters: "DS",
        themeColor: "orange" as ThemeColor,
        progress: { current: 1, total: 8 },
        lessons: { completed: 5, total: 22 },
        duration: { completed: 210, total: 450 },
        actionText: "Continue"
    },
    {
        title: "UI/UX Design",
        category: "Design",
        instructor: "Prof. Emma Carter",
        iconLetters: "UX",
        themeColor: "teal" as ThemeColor,
        progress: { current: 1, total: 5 },
        lessons: { completed: 1, total: 13 },
        duration: { completed: 150, total: 180 },
        actionText: "Continue"
    }
];

const savedCourses = [
    {
        title: "Cyber Security",
        category: "Security",
        instructor: "Prof. Lisa Wang",
        iconLetters: "CS",
        themeColor: "blue" as ThemeColor,
        progress: { current: 1, total: 6 },
        lessons: { completed: 4, total: 15 },
        duration: { completed: 90, total: 240 },
        actionText: "Start Course"
    },
    {
        title: "Accounting",
        category: "Finance & Business",
        instructor: "Prof. Ken Adams",
        iconLetters: "AC",
        themeColor: "orange" as ThemeColor,
        progress: { current: 1, total: 5 },
        lessons: { completed: 5, total: 22 },
        duration: { completed: 210, total: 450 },
        actionText: "Start Course"
    }
];

const myCollectionCourses = [
    {
        title: "Digital Marketing",
        category: "Business",
        instructor: "Prof. Emmili Garden",
        iconLetters: "DM",
        themeColor: "teal" as ThemeColor,
        progress: { current: 1, total: 5 },
        lessons: { completed: 1, total: 13 },
        duration: { completed: 150, total: 180 },
        actionText: "Enroll"
    }
];

const watchedHistoryCourses = [
    {
        title: "Java Programming",
        category: "Programming",
        instructor: "Prof. Suresh Kumar",
        iconLetters: "JP",
        themeColor: "orange" as ThemeColor,
        progress: { current: 1, total: 5 },
        lessons: { completed: 5, total: 22 },
        duration: { completed: 210, total: 450 },
        actionText: "Continue"
    }
];

export default function CoursesPage() {
    const [activeTab, setActiveTab] = useState("In Progress");

    const getCoursesForTab = () => {
        switch (activeTab) {
            case "In Progress":
                return inProgressCourses;
            case "Saved Courses":
                return savedCourses;
            case "My Collection":
                return myCollectionCourses;
            case "Watched History":
                return watchedHistoryCourses;
            default:
                return inProgressCourses;
        }
    };

    const currentCourses = getCoursesForTab();

    return (
        <div className="p-6 md:p-8 w-full max-w-[1400px] transition-colors">
            <h2 className="text-[20px] md:text-[22px] font-bold text-gray-900 dark:text-white mb-6">
                Continue your learning journey...
            </h2>

            {/* Tabs Navigation */}
            <div className="flex flex-wrap gap-8 border-b border-gray-200 dark:border-gray-800 mb-8 overflow-x-auto scrollbar-hide">
                {TABS.map((tab) => {
                    const isActive = activeTab === tab;
                    return (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-3 text-base font-semibold whitespace-nowrap transition-colors relative ${isActive ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                                }`}
                        >
                            {tab}
                            {isActive && (
                                <span className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-gray-900 dark:bg-[#2EC4B6] rounded-t-full" />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Course List */}
            <div className="flex flex-col gap-6">
                {currentCourses.length > 0 ? (
                    currentCourses.map((course, index) => (
                        <CourseCard key={index} {...course} />
                    ))
                ) : (
                    <div className="text-gray-400 text-center py-12">
                        No courses found in this category.
                    </div>
                )}
            </div>
        </div>
    );
}
