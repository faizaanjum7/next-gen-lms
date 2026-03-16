import { Button } from "@/components/ui/button";
import { UserPlus, Settings, Rocket, ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";

const steps = [
    {
        id: 1,
        title: "Set Your Goals",
        description: "Tell us what you want to learn. Our AI analyzes your current skills to create a personalized path.",
        icon: UserPlus,
    },
    {
        id: 2,
        title: "Learn Adaptively",
        description: "Engage with bite-sized lessons. Receive instant feedback and see your progress in real-time.",
        icon: Settings, // Using Settings as a placeholder for the "config/adaptive" icon
    },
    {
        id: 3,
        title: "Launch Your Career",
        description: "Complete real-world projects, earn certificates, and get ready to land your dream job.",
        icon: Rocket,
    },
];

export default function HowItWorks() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    How <span className="text-[#FF9F1C]">Our LMS</span> Works
                </h2>
                <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
                    From first login to career launch, our AI guides every step of your learning journey.
                </p>

                <div className="relative max-w-5xl mx-auto mt-20">
                    {/* Connecting Line & Arrows (Desktop Only) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] z-0">
                        {/* Gradient Line - connects center of first col to center of last col */}
                        <div className="absolute top-0 left-[16.666%] right-[16.666%] h-full bg-gradient-to-r from-[#2EC4B6] via-[#a29bfe] to-[#FF9F1C] opacity-60" />

                        {/* Arrow 1 - positioned between step 1 and 2 */}
                        <div className="absolute top-1/2 left-[33.333%] transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-8 h-8 rounded-full bg-white border-2 border-[#2EC4B6] flex items-center justify-center text-[#FF9F1C] shadow-sm z-10">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>

                        {/* Arrow 2 - positioned between step 2 and 3 */}
                        <div className="absolute top-1/2 left-[66.666%] transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-8 h-8 rounded-full bg-white border-2 border-[#2EC4B6] flex items-center justify-center text-[#FF9F1C] shadow-sm z-10">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="relative mb-6">
                                    {/* Circle Icon */}
                                    <div className="w-24 h-24 rounded-full bg-[#ffba52] flex flex-col items-center justify-center text-white shadow-xl border-4 border-white transition-transform hover:scale-105 duration-300 relative z-20">
                                        <step.icon className="w-8 h-8 mb-1" />
                                        <span className="text-xs font-bold opacity-90">0{step.id}</span>
                                    </div>
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-gray-900">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed px-6">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
                    <Link href="/signup">
                        <Button variant="orange" size="lg" className="rounded-full px-8 text-base">
                            Get Started <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Button variant="outline" size="lg" className="rounded-full px-8 text-base border-[#3a8d84] text-[#3a8d84] hover:bg-[#3a8d84]/10 hover:text-[#3a8d84]">
                        <PlayCircle className="mr-2 w-5 h-5" />
                        Watch Demo
                    </Button>
                </div>
            </div>
        </section>
    );
}
