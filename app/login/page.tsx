"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Mail, Lock, EyeOff, Eye, LineChart, ClipboardList, Brain, Route, Users, Building } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth, Role } from "@/lib/AuthContext";

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

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState<Role>('employee');
    const { login, switchRole } = useAuth();
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock authentication, just need any un-empty email/password
        if (email && password) {
            // Extract a display name from email (e.g., example@gmail.com -> Example)
            const name = email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1);
            login({ name });
            switchRole(role);
            
            const redirectParams = searchParams.get('redirect');
            if (redirectParams) {
                router.push(redirectParams);
            } else {
                router.push('/');
            }
        }
    };

    return (
        <React.Fragment>
            {/* Logo */}
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-[42px] font-extrabold mb-8">
                    <span className="bg-gradient-to-r from-[#FF9F1C] to-[#2EC4B6] bg-clip-text text-transparent break-words">
                        Next-Gen LMS
                    </span>
                </h1>
                <h2 className="text-[26px] font-bold text-gray-900 mb-4">Log in</h2>
                <Link
                    href={`/signup${searchParams.toString() ? `?${searchParams.toString()}` : ''}`}
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
                <div className="flex flex-col gap-2 mb-2">
                    <label className="text-lg font-bold text-gray-900">Login Role</label>
                    <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
                        {(['employee', 'instructor', 'admin'] as Role[]).map((r) => (
                            <button
                                key={r}
                                type="button"
                                onClick={() => setRole(r)}
                                className={`flex-1 py-2 text-sm font-bold rounded-lg capitalize transition-colors cursor-pointer ${role === r ? 'bg-white dark:bg-[#1e293b] text-[#2EC4B6] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                {r}
                            </button>
                        ))}
                    </div>
                </div>

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

                {/* Divider */}
                <div className="flex items-center gap-4 my-1">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <span className="text-sm font-medium text-gray-400">Or continue with</span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                <div className="flex flex-col gap-3">
                    <button type="button" className="w-full bg-white border border-gray-300 text-gray-700 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-50 transition-all cursor-pointer">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        Google Workspace
                    </button>

                    <button type="button" className="w-full bg-white border border-gray-300 text-gray-700 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-50 transition-all cursor-pointer">
                        <svg className="w-5 h-5" viewBox="0 0 21 21">
                            <rect x="1" y="1" width="9" height="9" fill="#f25022"/>
                            <rect x="11" y="1" width="9" height="9" fill="#7fba00"/>
                            <rect x="1" y="11" width="9" height="9" fill="#00a4ef"/>
                            <rect x="11" y="11" width="9" height="9" fill="#ffb900"/>
                        </svg>
                        Microsoft 365
                    </button>
                    
                    <button type="button" className="w-full bg-white border border-gray-300 text-gray-700 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-50 transition-all cursor-pointer">
                        <Building className="w-5 h-5 text-[#2EC4B6]" />
                        Company Domain Login (SSO)
                    </button>
                </div>

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
        </React.Fragment>
    );
}

export default function LoginPage() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

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
                    {/* Form Component */}
                    <Suspense fallback={<div className="text-center py-4">Loading form...</div>}>
                        <LoginForm />
                    </Suspense>
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
