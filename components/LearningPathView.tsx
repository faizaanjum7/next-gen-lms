"use client";

import { useState } from "react";
import Image from "next/image";
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
            {/* Background images */}
            <div className="absolute left-0 bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 w-48 md:w-64 lg:w-80 h-[300px] md:h-[400px] lg:h-[500px] pointer-events-none opacity-20 md:opacity-100">
                <Image
                    src="/student1.png"
                    alt="Student with books"
                    fill
                    className="object-contain object-left-bottom md:object-left"
                    priority
                />
            </div>

            <div className="absolute right-0 bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 w-72 md:w-96 lg:w-[480px] h-[400px] md:h-[550px] lg:h-[700px] pointer-events-none opacity-20 md:opacity-100">
                <Image
                    src="/student 2.png"
                    alt="Student pointing"
                    fill
                    className="object-contain object-right-bottom md:object-right"
                    priority
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
                    <span className="text-[#2EC4B6]">Choose </span>
                    <span className="text-[#649e8a]">Your </span>
                    <span className="text-[#a4a067]">Learning </span>
                    <span className="text-[#FF9F1C]">Path</span>
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
