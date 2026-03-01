"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { Suspense, useState, useEffect } from "react";
import { Check, Calendar, Clock, X } from "lucide-react";

function AIHRContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const courseParam = searchParams?.get("course");
    const levelParam = searchParams?.get("level");

    // Scheduling State
    const [isScheduling, setIsScheduling] = useState(false);
    const [scheduleDate, setScheduleDate] = useState("");
    const [scheduleTime, setScheduleTime] = useState("");

    // Toast Notification State
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    // Handle Confirm Schedule
    const handleConfirmSchedule = () => {
        if (!scheduleDate || !scheduleTime) {
            alert("Please select both date and time.");
            return;
        }

        // Simulating an API call/success
        const formattedDate = new Date(scheduleDate).toLocaleDateString();
        setToastMessage(`Assessment scheduled for ${formattedDate} at ${scheduleTime}`);
        setIsScheduling(false);
        setShowToast(true);

        // Reset the schedule form
        setScheduleDate("");
        setScheduleTime("");
    };

    // Auto-dismiss toast
    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    const courseNames: Record<string, string> = {
        "web-dev": "Web development",
        "data-science": "Data Science",
        "ui-ux": "UI/UX Design",
        "ai-ml": "AI & Machine Learning",
        "cybersecurity": "Cybersecurity",
    };

    const displayCourse = courseParam ? (courseNames[courseParam] || courseParam) : "Web development";

    // Capitalize first letter of level
    const displayLevel = levelParam
        ? levelParam.charAt(0).toUpperCase() + levelParam.slice(1)
        : "Basic";

    // Dynamic assessment mappings based on course
    const assessmentMappings: Record<string, string[]> = {
        "web-dev": ["Conceptual questions", "Coding challenges", "Real-world scenarios"],
        "data-science": ["Statistical problems", "Data analysis tasks", "Model building exercises"],
        "ui-ux": ["Design critiques", "Wireframing tasks", "User flow scenarios"],
        "ai-ml": ["Algorithm implementation", "Math problem sets", "Dataset evaluation"],
        "cybersecurity": ["Vulnerability identification", "Network analysis", "Security policy review"],
    };

    const defaultAssessments = ["Conceptual questions", "Practical exercises", "Real-world scenarios"];
    const assessments = courseParam && assessmentMappings[courseParam] ? assessmentMappings[courseParam] : defaultAssessments;

    return (
        <main className="min-h-screen bg-[#eefbf9] font-sans text-gray-900 selection:bg-[#3a8d84] selection:text-white pb-32">
            <Navbar />

            <div className="pt-28 px-4 max-w-[720px] mx-auto flex justify-center">
                {/* Main AI HR Card */}
                <div className="w-full bg-[#e6f2f0] border-[2px] border-[#FF9F1C] rounded-2xl p-8 md:px-14 md:py-10 shadow-lg relative overflow-hidden">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-[#FF9F1C] mb-6">Meet AI HR</h1>
                        <p className="text-gray-700 font-medium text-[16px] leading-relaxed max-w-2xl mx-auto">
                            AI HR will objectively evaluate your current skill level through a series of tailored assessments. This ensures personalized learning paths aligned with your true capabilities and job-readiness goals.
                        </p>
                    </div>

                    {/* Display Pills */}
                    <div className="flex flex-col gap-4 mb-10">
                        {/* Selected Course */}
                        <div className="bg-[#a8e0d6] p-1.5 rounded-md flex items-center shadow-sm w-full">
                            <span className="font-bold text-gray-900 w-[140px] px-3 text-[15px]">Selected course</span>
                            <div className="bg-white text-gray-900 font-medium py-1.5 px-4 rounded w-full min-h-[36px] flex items-center">
                                {displayCourse}
                            </div>
                        </div>

                        {/* Selected Level */}
                        <div className="bg-[#a8e0d6] p-1.5 rounded-md flex items-center shadow-sm w-full">
                            <span className="font-bold text-gray-900 w-[140px] px-3 text-[15px]">Selected level</span>
                            <div className="bg-white text-gray-900 font-medium py-1.5 px-4 rounded w-full min-h-[36px] flex items-center">
                                {displayLevel}
                            </div>
                        </div>
                    </div>

                    {/* Assessments Included */}
                    <div className="mb-10">
                        <h3 className="text-[17px] font-bold text-black mb-6">Assessment types included:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4">
                            {assessments.map((assessment, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="bg-white rounded-full p-0.5 flex-shrink-0">
                                        <Check className="w-4 h-4 text-black stroke-[3]" />
                                    </div>
                                    <span className="text-black font-medium text-[16px]">{assessment}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons & Scheduling Area */}
                    <div className="mt-10">
                        {!isScheduling ? (
                            <div className="flex flex-col items-center gap-4 justify-center">
                                <button
                                    onClick={() => console.log('Starting assessment...')}
                                    className="bg-[#f2aa5c] hover:bg-[#e09841] text-black font-bold text-[16px] py-3.5 px-10 rounded-md w-full max-w-[400px] shadow-sm transition-colors duration-300"
                                >
                                    Start Skill Assessment
                                </button>
                                <button
                                    onClick={() => setIsScheduling(true)}
                                    className="bg-transparent border-[2px] border-[#f2aa5c] hover:bg-[#f2aa5c]/10 text-black font-bold text-[16px] py-3 px-10 rounded-md w-full max-w-[400px] transition-colors duration-300"
                                >
                                    Schedule for Later
                                </button>
                            </div>
                        ) : (
                            <div className="bg-white border border-[#a8e0d6] rounded-xl p-6 shadow-sm max-w-[500px] mx-auto animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <h4 className="text-[17px] font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-[#f2aa5c]" />
                                    Choose Date & Time
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[14px] font-medium text-gray-700">Date</label>
                                        <div className="relative">
                                            <input
                                                type="date"
                                                value={scheduleDate}
                                                onChange={(e) => setScheduleDate(e.target.value)}
                                                className="w-full border border-gray-300 rounded-md py-2 px-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#a8e0d6] focus:border-[#a8e0d6] bg-transparent text-gray-900"
                                                min={new Date().toISOString().split('T')[0]}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[14px] font-medium text-gray-700">Time</label>
                                        <div className="relative">
                                            <input
                                                type="time"
                                                value={scheduleTime}
                                                onChange={(e) => setScheduleTime(e.target.value)}
                                                className="w-full border border-gray-300 rounded-md py-2 px-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#a8e0d6] focus:border-[#a8e0d6] bg-transparent text-gray-900"
                                            />
                                            <Clock className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none bg-white pl-1 hidden" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={handleConfirmSchedule}
                                        className="flex-1 bg-[#1A1A1A] hover:bg-[#333333] text-white font-medium text-[15px] py-2.5 rounded-md transition-colors duration-200"
                                    >
                                        Confirm
                                    </button>
                                    <button
                                        onClick={() => setIsScheduling(false)}
                                        className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium text-[15px] py-2.5 rounded-md transition-colors duration-200"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>

            {/* Toast Notification */}
            {showToast && (
                <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-[#1A1A1A] text-white px-6 py-4 rounded-lg shadow-2xl z-50 animate-in slide-in-from-right slide-in-from-bottom-5 duration-300 flex items-center justify-between min-w-[300px] border-l-4 border-[#FF9F1C]">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#FF9F1C]/20 p-1.5 rounded-full">
                            <Check className="w-5 h-5 text-[#FF9F1C]" />
                        </div>
                        <span className="font-medium text-[15px]">{toastMessage}</span>
                    </div>
                    <button
                        onClick={() => setShowToast(false)}
                        className="text-gray-400 hover:text-white transition-colors p-1"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            )}
        </main>
    );
}

export default function AIHRPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#eefbf9] flex items-center justify-center">Loading...</div>}>
            <AIHRContent />
        </Suspense>
    );
}
