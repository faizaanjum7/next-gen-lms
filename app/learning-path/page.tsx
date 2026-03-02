"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";

function LearningPathContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    // In a real app, these might come from a global state or database linked to the user's recent assessment
    const courseParam = searchParams?.get("course") || "web-dev";
    const levelParam = searchParams?.get("level") || "basic";

    const courseFocusAreas: Record<string, string[]> = {
        "web-dev": ["HTML & CSS", "Javascript Fundamentals", "Frontend Frameworks (React/Next)", "Database Integration"],
        "data-science": ["Python Programming", "Statistical Analysis", "Machine Learning Basics", "Data Visualization"],
        "ui-ux": ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing"],
        "ai-ml": ["Python & Libraries", "Neural Networks", "Deep Learning", "Model Deployment"],
        "cybersecurity": ["Network Security", "Ethical Hacking", "Cryptography", "Security Auditing"],
    };

    const courseNames: Record<string, string> = {
        "web-dev": "Web Development",
        "data-science": "Data Science",
        "ui-ux": "UI/UX Design",
        "ai-ml": "AI & Machine Learning",
        "cybersecurity": "Cybersecurity",
    };
    const displayCourse = courseNames[courseParam] || "Web Development";
    const displayLevel = levelParam.charAt(0).toUpperCase() + levelParam.slice(1);
    const displayFocusAreas = courseFocusAreas[courseParam] || courseFocusAreas["web-dev"];

    return (
        <main className="min-h-screen bg-[#eefbf9] font-sans text-gray-900 pb-32">
            <Navbar />

            <div className="pt-28 px-4 max-w-[760px] mx-auto flex justify-center animate-in fade-in slide-in-from-bottom-6 duration-700">
                <div className="w-full bg-[#e6f2f0] border-[2px] border-[#FF9F1C] rounded-2xl p-8 md:px-12 md:py-12 shadow-xl relative flex flex-col items-center">

                    <h1 className="text-[34px] md:text-4xl font-bold text-[#FF9F1C] mb-8 text-center tracking-wide">
                        Your Learning Path is Ready!
                    </h1>

                    {/* AI Tutor Message */}
                    <div className="bg-[#8ad6c9] rounded-xl p-6 md:p-8 mb-8 text-center max-w-[500px] shadow-sm text-gray-800">
                        <p className="font-bold text-[15.5px] md:text-[16.5px] leading-snug">
                            Hello! I'm your AI Tutor. Based on the<br />
                            AI HR assessment, your recommended<br />
                            level for <span className="font-bold text-gray-800">{displayCourse}</span> is <span className="font-bold text-gray-800">{displayLevel}</span>.<br />
                            I've crafted a personalized learning<br />
                            path just for you. Focus on mastering<br />
                            each step, and we'll unlock your full<br />
                            potential together!
                        </p>
                    </div>

                    {/* Path Summary Container */}
                    <div className="w-full border border-gray-400/30 rounded-2xl p-6 md:p-8 bg-transparent shadow-sm mb-10 max-w-[600px] text-gray-700">
                        <h3 className="font-bold text-[#b4690e] text-[17px] md:text-[18px] mb-4">
                            Personalized Path Summary
                        </h3>

                        <div className="space-y-3 mb-5">
                            <div className="text-[16px]">
                                <span className="font-bold text-gray-800">Domain: </span>
                                <span className="font-bold text-gray-600">{displayCourse}</span>
                            </div>
                            <div className="text-[16px]">
                                <span className="font-bold text-gray-800">Current Level: </span>
                                <span className="font-bold text-[#b4690e]">{displayLevel}</span>
                            </div>
                        </div>

                        <div>
                            <span className="font-bold text-gray-800 text-[16px] block mb-2">Focus Areas:</span>
                            <ul className="space-y-2 text-gray-600 font-bold ml-[18px]">
                                {displayFocusAreas.map((area, index) => (
                                    <li key={index} className="flex items-center gap-3 text-[15px]">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500 block"></span> {area}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button
                        onClick={() => router.push('/dashboard')}
                        className="bg-[#f2aa5c] hover:bg-[#e09841] text-black font-extrabold text-[17px] md:text-[18px] py-[15px] px-10 rounded-xl w-full max-w-[500px] shadow-sm transition-all duration-300"
                    >
                        View My Dashboard
                    </button>

                </div>
            </div>
        </main>
    );
}

export default function LearningPathPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#eefbf9] flex items-center justify-center">Loading...</div>}>
            <LearningPathContent />
        </Suspense>
    );
}
