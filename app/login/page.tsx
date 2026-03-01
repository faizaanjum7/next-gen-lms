"use client";

import React, { useState, useEffect } from "react";
import { Mail, Lock, EyeOff, Eye, LineChart, ClipboardList, Brain, Route, Users } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";

const slides = [
    {
        id: 1,
        title: "Skill Graph & Career Mapping",
        text: "Visualize your expertise. Track your growth through an interactive skill heat-map that syncs with real-world job requirements.",
        icon: LineChart,
        iconBg: "#FF9F1C",
        borderColor: "#2EC4B6",
        dotColor: "#FF9F1C",
    },
    {
        id: 2,
        title: "Real-World Project Integration",
        text: "Bridge the gap between theory and industry. Work on live datasets and challenges sourced from top tech companies.",
        icon: ClipboardList,
        iconBg: "#2EC4B6",
        borderColor: "#FF9F1C",
        dotColor: "#2EC4B6",
    },
    {
        id: 3,
        title: "AI Mentor",
        text: "Meet your 24/7 learning partner. Whether you need a complex concept simplified, a quick micro-quiz to test your knowledge, or a hint on a tough assignment, your AI Mentor adapts to your unique learning style in real-time.",
        icon: Brain,
        iconBg: "#FF9F1C",
        borderColor: "#2EC4B6",
        dotColor: "#FF9F1C",
    },
    {
        id: 4,
        title: "Adaptive Learning Path Generator",
        text: "An AI-powered curriculum that adjusts to your pace and career goals.",
        icon: Route,
        iconBg: "#2EC4B6",
        borderColor: "#FF9F1C",
        dotColor: "#2EC4B6",
    },
    {
        id: 5,
        title: "Collaborative AI Labs",
        text: "Join virtual labs where an AI Teaching Assistant moderates discussions, tracks contributions, and enables real-time group coding.",
        icon: Users,
        iconBg: "#FF9F1C",
        borderColor: "#2EC4B6",
        dotColor: "#FF9F1C",
    }
];

export default function LoginPage() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock authentication, just need any un-empty email/password
        if (email && password) {
            // Extract a display name from email (e.g., example@gmail.com -> Example)
            const name = email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1);
            login({ name });
            router.push('/');
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlideIndex((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const activeSlide = slides[activeSlideIndex];

    return (
        <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center p-6 md:p-12 lg:p-24 overflow-x-hidden">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                {/* Left Side: Form */}
                <div className="flex flex-col w-full max-w-[400px] mx-auto lg:ml-auto order-2 lg:order-1">
                    {/* Logo */}
                    <div className="text-center mb-10">
                        <h1 className="text-4xl md:text-[42px] font-extrabold mb-8">
                            <span className="bg-gradient-to-r from-[#FF9F1C] to-[#2EC4B6] bg-clip-text text-transparent break-words">
                                Next-Gen LMS
                            </span>
                        </h1>
                        <h2 className="text-[26px] font-bold text-gray-900 mb-4">Log in</h2>
                        <Link
                            href="/signup"
                            className="inline-block text-[#2EC4B6] underline font-medium hover:text-[#28b0a3] transition-colors"
                            style={{
                                fontFamily: "Roboto, sans-serif",
                                fontSize: "15px",
                                textUnderlineOffset: "4px",
                                textDecorationThickness: "1px"
                            }}
                        >
                            Create an account
                        </Link>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-lg font-bold text-gray-900">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800 w-6 h-6" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="example@gmail.com"
                                    required
                                    className="w-full bg-white pl-12 pr-4 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#2EC4B6] focus:ring-1 focus:ring-[#2EC4B6] text-gray-800 font-medium placeholder:text-gray-400 placeholder:font-semibold transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-lg font-bold text-gray-900">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800 w-6 h-6" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    required
                                    className="w-full bg-white pl-12 pr-12 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#2EC4B6] focus:ring-1 focus:ring-[#2EC4B6] text-gray-800 font-medium placeholder:text-gray-400 placeholder:font-semibold transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 hover:text-gray-600 focus:outline-none cursor-pointer"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? (
                                        <Eye className="w-6 h-6" />
                                    ) : (
                                        <EyeOff className="w-6 h-6" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-[#2EC4B6] text-white py-4 rounded-xl text-xl font-semibold mt-2 border-2 border-transparent hover:bg-transparent hover:text-[#2EC4B6] hover:border-[#2EC4B6] transition-all cursor-pointer">
                            Log in
                        </button>

                        <div className="text-center mt-2">
                            <Link
                                href="/forgot-password"
                                className="text-[#2EC4B6] text-[15px] font-medium underline hover:text-[#28b0a3] transition-colors"
                                style={{
                                    fontFamily: "Roboto, sans-serif",
                                    textUnderlineOffset: "4px",
                                    textDecorationThickness: "1px"
                                }}
                            >
                                Forgot password?
                            </Link>
                        </div>
                    </form>
                </div>

                {/* Right Side: Features Carousel */}
                <div className="w-full h-full flex items-center justify-center lg:justify-start order-1 lg:order-2 mb-10 lg:mb-0">
                    <div
                        className="w-full max-w-[480px] bg-white rounded-[32px] border-[2px] p-8 md:p-12 flex flex-col items-center justify-between min-h-[480px] lg:min-h-[580px] shadow-sm transition-colors duration-500 relative"
                        style={{ borderColor: activeSlide.borderColor }}
                    >
                        <div className="flex flex-col w-full gap-8">
                            {/* Icon */}
                            <div
                                className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center transition-colors duration-500 rounded-lg"
                                style={{ backgroundColor: activeSlide.iconBg }}
                            >
                                <activeSlide.icon className="text-white w-12 h-12 md:w-14 md:h-14 stroke-2" />
                            </div>

                            {/* Text */}
                            <div className="flex flex-col gap-4">
                                <h2 className="text-3xl md:text-[40px] leading-tight font-extrabold text-gray-900 tracking-tight transition-opacity duration-300">
                                    {activeSlide.title}
                                </h2>
                                <p className="text-lg md:text-xl text-gray-900 font-medium leading-relaxed transition-opacity duration-300">
                                    {activeSlide.text}
                                </p>
                            </div>
                        </div>

                        {/* Dots */}
                        <div className="mt-12 bg-[#F3F4F6] rounded-full px-4 py-2 flex items-center gap-3">
                            {slides.map((slide, index) => (
                                <button
                                    key={slide.id}
                                    onClick={() => setActiveSlideIndex(index)}
                                    className="w-2.5 h-2.5 rounded-full transition-colors duration-300 cursor-pointer"
                                    style={{
                                        backgroundColor:
                                            index === activeSlideIndex ? slide.dotColor : "#D1D5DB",
                                    }}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
