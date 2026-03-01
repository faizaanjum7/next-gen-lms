"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";

function LevelSelectionContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const courseParam = searchParams?.get("course");

    const courseNames: Record<string, string> = {
        "web-dev": "Web development",
        "data-science": "Data Science",
        "ui-ux": "UI/UX Design",
        "ai-ml": "AI & Machine Learning",
        "cybersecurity": "Cybersecurity",
    };

    const courseData: Record<string, any> = {
        "web-dev": {
            basic: { title: "Structure & Styling", list: ["HTML Fundamentals", "CSS Basics", "Forms & Inputs", "Basic Layouts"] },
            intermediate: { title: "Interactivity & Responsiveness", list: ["JavaScript Fundamentals", "DOM Manipulation", "API Integration", "Browser Events"] },
            advance: { title: "Modern Tools & Production Concepts", list: ["Frontend Frameworks", "State Management", "Performance Optimization", "Deployment Workflows"] }
        },
        "data-science": {
            basic: { title: "Data Foundations", list: ["Python Basics", "Data Structures", "Statistics Fundamentals", "Data Cleaning"] },
            intermediate: { title: "Analysis & Visualization", list: ["Pandas & NumPy", "Matplotlib & Seaborn", "Exploratory Data Analysis", "SQL for Data"] },
            advance: { title: "Predictive Modeling", list: ["Machine Learning Algorithms", "Model Evaluation", "Feature Engineering", "Deployment Pipelines"] }
        },
        "ui-ux": {
            basic: { title: "Design Fundamentals", list: ["Color Theory", "Typography", "Layout & Grid Systems", "Wireframing"] },
            intermediate: { title: "Prototyping & Testing", list: ["Interaction Design", "Figma/Adobe XD Mastery", "Usability Testing", "Accessibility"] },
            advance: { title: "Design Systems & Strategy", list: ["Design Systems", "User Journeys", "UX Strategy", "Cross-Platform Design"] }
        },
        "ai-ml": {
            basic: { title: "Math & Coding Basics", list: ["Linear Algebra", "Calculus Essentials", "Python for AI", "Probability"] },
            intermediate: { title: "Machine Learning Core", list: ["Supervised Learning", "Unsupervised Learning", "Neural Networks Basics", "Scikit-Learn"] },
            advance: { title: "Deep Learning & NLP", list: ["Deep Neural Networks", "Natural Language Processing", "Computer Vision", "TensorFlow/PyTorch"] }
        },
        "cybersecurity": {
            basic: { title: "Security Fundamentals", list: ["Networking Basics", "Operating Systems", "Cryptography Intro", "Threat Landscape"] },
            intermediate: { title: "Defensive Security", list: ["Firewalls & VPNs", "Intrusion Detection", "Secure Coding", "Vulnerability Scanning"] },
            advance: { title: "Offensive & Advanced", list: ["Penetration Testing", "Malware Analysis", "Incident Response", "Cloud Security"] }
        }
    };

    const displayCourse = courseParam ? (courseNames[courseParam] || courseParam) : "Web development";
    const selectedData = courseParam && courseData[courseParam] ? courseData[courseParam] : courseData["web-dev"];

    return (
        <main className="min-h-screen bg-[#eefbf9] font-sans text-gray-900 selection:bg-[#3a8d84] selection:text-white pb-32">
            <Navbar />

            <div className="pt-32 px-4 max-w-7xl mx-auto">
                {/* Course Pill */}
                <div className="mb-16">
                    <div className="inline-flex items-center border border-[#75d4cb] rounded-md overflow-hidden shadow-sm">
                        <div className="bg-[#bbede6] px-5 py-2 font-semibold text-[17px] text-gray-900">
                            Selected Course
                        </div>
                        <div className="bg-white px-5 py-2 font-medium text-[16px] text-gray-900 min-w-[200px]">
                            {displayCourse}
                        </div>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-2xl font-bold text-[#FF9F1C] mb-12">
                    Choose your skill level
                </h1>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 justify-items-center">
                    {/* Basic Card */}
                    <div
                        onClick={() => router.push(`/ai-hr?course=${courseParam || 'web-dev'}&level=basic`)}
                        className="w-full max-w-[320px] bg-[#dbe8ff] min-h-[360px] rounded-lg border border-[#a8c6fa] pt-12 pb-8 px-10 flex flex-col items-center shadow-[4px_4px_12px_rgba(180,210,255,0.8)] hover:shadow-[6px_6px_16px_rgba(180,210,255,1)] transition-all duration-300 cursor-pointer text-black"
                    >
                        <h2 className="text-[22px] font-bold mb-6 tracking-wide">Basic</h2>
                        <h3 className="text-[16px] font-medium mb-8 text-center">{selectedData.basic.title}</h3>
                        <div className="w-full text-left flex flex-col gap-0.5 text-[14px] font-normal leading-snug">
                            {selectedData.basic.list.map((item: string, i: number) => <p key={i}>{item}</p>)}
                        </div>
                    </div>

                    {/* Intermediate Card */}
                    <div
                        onClick={() => router.push(`/ai-hr?course=${courseParam || 'web-dev'}&level=intermediate`)}
                        className="w-full max-w-[320px] bg-[#e6d6f5] min-h-[360px] rounded-lg border border-[#cbbbdf] pt-12 pb-8 px-10 flex flex-col items-center shadow-[4px_4px_12px_rgba(230,214,245,0.8)] hover:shadow-[6px_6px_16px_rgba(230,214,245,1)] transition-all duration-300 cursor-pointer text-black"
                    >
                        <h2 className="text-[22px] font-bold mb-6 tracking-wide">Intermediate</h2>
                        <h3 className="text-[16px] font-medium mb-8 text-center leading-snug">{selectedData.intermediate.title}</h3>
                        <div className="w-full text-left flex flex-col gap-0.5 text-[14px] font-normal leading-snug pl-4">
                            {selectedData.intermediate.list.map((item: string, i: number) => <p key={i}>{item}</p>)}
                        </div>
                    </div>

                    {/* Advance Card */}
                    <div
                        onClick={() => router.push(`/ai-hr?course=${courseParam || 'web-dev'}&level=advance`)}
                        className="w-full max-w-[320px] bg-[#fadfed] min-h-[360px] rounded-lg border border-[#eabccf] pt-12 pb-8 px-10 flex flex-col items-center shadow-[4px_4px_12px_rgba(250,223,237,0.8)] hover:shadow-[6px_6px_16px_rgba(250,223,237,1)] transition-all duration-300 cursor-pointer text-black"
                    >
                        <h2 className="text-[22px] font-bold mb-6 tracking-wide">Advance</h2>
                        <h3 className="text-[16px] font-medium mb-8 text-center leading-snug">{selectedData.advance.title.includes("&") ? <>{selectedData.advance.title.split("&")[0]}&amp;<br />{selectedData.advance.title.split("&")[1]}</> : selectedData.advance.title}</h3>
                        <div className="w-full text-left flex flex-col gap-0.5 text-[14px] font-normal leading-snug pl-4">
                            {selectedData.advance.list.map((item: string, i: number) => <p key={i}>{item}</p>)}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default function LevelSelectionPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#eefbf9] flex items-center justify-center">Loading...</div>}>
            <LevelSelectionContent />
        </Suspense>
    );
}
