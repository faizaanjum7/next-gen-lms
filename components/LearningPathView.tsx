"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

export default function LearningPathView() {
    const [selectedCourse, setSelectedCourse] = useState("");
    const router = useRouter();

    const handleSubmit = () => {
        if (selectedCourse) {
            router.push(`/level-selection?course=${encodeURIComponent(selectedCourse)}`);
        }
    };
    return (
        <div className="min-h-screen bg-[#eefbf9] flex flex-col items-center justify-center pt-24 pb-12 px-4 relative overflow-hidden">
            {/* Background images removed */}

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 bg-gradient-to-r from-[#2EC4B6] to-[#FF8A14] bg-clip-text text-transparent">
                    Choose Your Learning Path
                </h1>

                <div className="w-full max-w-md bg-transparent flex flex-col items-start gap-4">
                    <h2 className="text-2xl font-semibold text-gray-900">Courses</h2>

                    <div className="relative w-full">
                        <select
                            className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-4 pr-10 text-gray-500 font-medium text-lg focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent shadow-sm cursor-pointer"
                            value={selectedCourse}
                            onChange={(e) => setSelectedCourse(e.target.value)}
                        >
                            <option value="" disabled>Select Course</option>
                            <option value="web-dev">Web Development Masterclass</option>
                            <option value="data-science">Data Science Fundamentals</option>
                            <option value="ui-ux">UI/UX Design UI/UX</option>
                            <option value="ai-ml">AI & Machine Learning</option>
                            <option value="cybersecurity">Cybersecurity Basics</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>

                    <div className="w-full flex justify-center mt-32">
                        <button
                            onClick={handleSubmit}
                            disabled={!selectedCourse}
                            className={`text-white text-xl font-medium py-3 px-12 rounded-md transition-colors w-full sm:w-auto shadow-sm ${selectedCourse ? 'bg-[#FF9F1C] hover:bg-[#e88e10]' : 'bg-gray-400 cursor-not-allowed'}`}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
