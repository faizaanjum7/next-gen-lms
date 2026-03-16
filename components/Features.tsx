"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, User, Share2, ChevronLeft, ChevronRight, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Skill Graph & Career Mapping",
        description: "Visualize your expertise. Track your growth through an interactive skill heat-map that syncs with real-world job requirements.",
        icon: LineChart,
        colorClass: "bg-[#2EC4B6]",
        hex: "#2EC4B6",
    },
    {
        title: "AI Mentor",
        description: "Meet your 24/7 learning partner. Whether you need a complex concept simplified or a hint on a tough assignment, your AI Mentor adapts to your style.",
        icon: User,
        colorClass: "bg-[#FF9F1C]",
        hex: "#FF9F1C",
    },
    {
        title: "Adaptive Learning Path Generator",
        description: "A curriculum that moves at your speed. Our AI analyzes your performance, dynamically reordering your lessons to reach your career goals.",
        icon: Share2,
        colorClass: "bg-[#2EC4B6]",
        hex: "#2EC4B6",
    },
    {
        title: "Collaborative AI Labs",
        description: "Join virtual labs where an AI Teaching Assistant moderates discussions, tracks individual contributions, and facilitates real-time group coding sessions.",
        icon: Users,
        colorClass: "bg-[#FF9F1C]",
        hex: "#FF9F1C",
    },
    {
        title: "Real-World Project Integration",
        description: "Bridge the gap between theory and industry. Work on live datasets and challenges sourced from top tech companies.",
        icon: Briefcase,
        colorClass: "bg-[#2EC4B6]",
        hex: "#2EC4B6",
    },
];

export default function Features() {
    const [activeIndex, setActiveIndex] = useState(1); // Start with the second item (AI Mentor) as center

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % features.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
    };

    // Calculate position styles
    const getCardStyle = (index: number) => {
        const total = features.length;

        // Calculate "signed" distance to determine relative position
        let relativeIndex = (index - activeIndex) % total;
        if (relativeIndex > total / 2) relativeIndex -= total;
        if (relativeIndex < -total / 2) relativeIndex += total;

        if (relativeIndex === 0) {
            // Center Card
            return "opacity-100 scale-100 z-30 translate-x-0 shadow-2xl pointer-events-auto blur-none";
        } else if (relativeIndex === 1) {
            // Next Card (Right)
            return "opacity-60 scale-90 z-20 translate-x-[110%] blur-[1px] hover:blur-0 hover:opacity-100 cursor-pointer pointer-events-auto";
        } else if (relativeIndex === -1) {
            // Previous Card (Left)
            return "opacity-60 scale-90 z-20 -translate-x-[110%] blur-[1px] hover:blur-0 hover:opacity-100 cursor-pointer pointer-events-auto";
        } else if (relativeIndex === 2 || relativeIndex > 1) {
            // Far Right (Hidden)
            return "opacity-0 scale-75 z-10 translate-x-[220%] pointer-events-none blur-sm";
        } else if (relativeIndex === -2 || relativeIndex < -1) {
            // Far Left (Hidden)
            return "opacity-0 scale-75 z-10 -translate-x-[220%] pointer-events-none blur-sm";
        }
        return "opacity-0 z-0 pointer-events-none";
    };

    return (
        <section id="about" className="py-20 bg-[#eefbf9]/30 dark:bg-[#0f172a]/50 overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold mb-14 text-gray-900 dark:text-white">
                    Why We Are <span className="text-[#aebf50]">Different</span> From Others?
                </h2>

                <div className="relative h-[600px] flex items-center justify-center">
                    {/* Slider Arrows */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-16 z-40">
                        <Button
                            onClick={prevSlide}
                            variant="outline"
                            size="icon"
                            className="rounded-full w-12 h-12 bg-white dark:bg-gray-800 border-0 shadow-lg text-[#FF9F1C] hover:bg-[#fff9f0] dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </Button>
                    </div>
                    <div className="absolute bottom-10 left-1/2 translate-x-4 z-40">
                        <Button
                            onClick={nextSlide}
                            variant="outline"
                            size="icon"
                            className="rounded-full w-12 h-12 bg-white dark:bg-gray-800 border-0 shadow-lg text-[#FF9F1C] hover:bg-[#fff9f0] dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </Button>
                    </div>

                    <div className="relative w-full max-w-sm h-full perspective-1000">
                        {features.map((feature, index) => {
                            const isActive = index === activeIndex;
                            const positionStyle = getCardStyle(index);

                            return (
                                <div
                                    key={index}
                                    className={cn(
                                        "w-full max-w-sm origin-center",
                                        "absolute top-0 left-0 right-0 mx-auto h-fit transition-all duration-500 ease-in-out",
                                        positionStyle
                                    )}
                                    onClick={() => {
                                        if (index === (activeIndex + 1) % features.length) nextSlide();
                                        if (index === (activeIndex - 1 + features.length) % features.length) prevSlide();
                                    }}
                                >
                                    <div
                                        className={cn(
                                            "bg-white dark:bg-[#1e293b] rounded-2xl h-[450px] p-8 flex flex-col items-start text-left overflow-hidden relative group transition-all duration-300",
                                            isActive ? "border-[3px]" : "border border-gray-200 dark:border-gray-800"
                                        )}
                                        style={isActive ? {
                                            borderColor: feature.hex,
                                            boxShadow: `0 0 0 4px ${feature.hex}1a` // 10% opacity
                                        } : {}}
                                    >
                                        <div className={cn(
                                            "w-20 h-20 rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110",
                                            feature.colorClass,
                                            "text-white"
                                        )}>
                                            <feature.icon className="w-10 h-10" />
                                        </div>

                                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
                                            {feature.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
