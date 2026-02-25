"use client";

import React, { useState } from "react";
import { Mail, HelpCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ForgotPasswordPage() {
    const [isEmailSent, setIsEmailSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsEmailSent(true);
    };

    return (
        <div className="min-h-screen w-full bg-white flex flex-col p-6 md:p-12 relative overflow-hidden">
            {/* Logo Component */}
            <div className="absolute top-6 left-6 md:top-12 md:left-12">
                <h1 className="text-3xl md:text-4xl font-extrabold">
                    <span className="bg-gradient-to-r from-[#FF9F1C] to-[#2EC4B6] bg-clip-text text-transparent break-words">
                        Next-Gen LMS
                    </span>
                </h1>
            </div>

            <div className="flex-1 flex items-center justify-center w-full mt-16 md:mt-0">
                <div className="w-full max-w-[480px] flex flex-col items-center">
                    {!isEmailSent ? (
                        // State 1: Forgot Password Form
                        <div className="w-full flex flex-col items-center animate-in fade-in zoom-in duration-300">
                            <div className="w-[100px] h-[100px] bg-[#E6F8F6] rounded-full flex items-center justify-center mb-8">
                                <HelpCircle className="w-12 h-12 text-[#2EC4B6] stroke-[1.5]" />
                            </div>

                            <h2 className="text-3xl md:text-[36px] font-bold text-gray-900 mb-3 text-center tracking-tight">
                                Forgot Password ?
                            </h2>
                            <p className="text-gray-900 text-[16px] md:text-[18px] mb-8 text-center font-medium">
                                Don't worry, we will send you reset instruction
                            </p>

                            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[17px] font-bold text-gray-900">Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800 w-[22px] h-[22px]" />
                                        <input
                                            type="email"
                                            required
                                            placeholder="example@gmail.com"
                                            className="w-full bg-white pl-[45px] pr-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#2EC4B6] focus:ring-1 focus:ring-[#2EC4B6] text-gray-800 font-medium placeholder:text-gray-400 placeholder:font-semibold transition-all text-[16px]"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <button
                                        type="submit"
                                        className="w-full bg-[#2EC4B6] text-white py-[18px] rounded-xl text-xl font-semibold mt-1 border-2 border-transparent hover:bg-transparent hover:text-[#2EC4B6] hover:border-[#2EC4B6] transition-all cursor-pointer shadow-sm"
                                    >
                                        Send Password Reset Link
                                    </button>

                                    <div className="flex items-center justify-between w-full px-1">
                                        <Link
                                            href="/login"
                                            className="flex items-center gap-2 text-gray-900 text-[15px] font-bold hover:text-gray-700 transition-colors"
                                        >
                                            <ArrowLeft className="w-4 h-4" />
                                            Back to Login
                                        </Link>
                                        <button
                                            type="button"
                                            className="text-[#2EC4B6] text-[15px] font-bold underline hover:text-[#28b0a3] transition-colors cursor-pointer"
                                            style={{
                                                textUnderlineOffset: "4px",
                                                textDecorationThickness: "1px"
                                            }}
                                        >
                                            Resend
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    ) : (
                        // State 2: Check Mail Success
                        <div className="w-full flex flex-col items-center animate-in slide-in-from-right-8 fade-in duration-300">
                            <div className="w-[100px] h-[100px] bg-[#E6F8F6] rounded-full flex items-center justify-center mb-8">
                                <Mail className="w-12 h-12 text-[#2EC4B6] stroke-[1.5]" />
                            </div>

                            <h2 className="text-3xl md:text-[36px] font-bold text-gray-900 mb-3 text-center tracking-tight">
                                Check your email
                            </h2>
                            <p className="text-gray-900 text-[16px] md:text-[18px] mb-8 text-center font-medium">
                                We sent a password reset link to your mail
                            </p>

                            <div className="w-full flex flex-col gap-6 items-center">
                                <button
                                    type="button"
                                    onClick={() => window.open('https://mail.google.com', '_blank')}
                                    className="w-full bg-[#2EC4B6] text-white py-[18px] rounded-xl text-xl font-semibold mt-1 border-2 border-transparent hover:bg-transparent hover:text-[#2EC4B6] hover:border-[#2EC4B6] transition-all cursor-pointer shadow-sm"
                                >
                                    Open Gmail
                                </button>

                                <div className="flex items-center text-[15px] font-medium mt-1">
                                    <span className="text-gray-900 font-bold">Didn't receive the email ?</span>
                                    <button
                                        type="button"
                                        className="ml-2 text-[#2EC4B6] font-bold underline hover:text-[#28b0a3] transition-colors cursor-pointer"
                                        style={{
                                            textUnderlineOffset: "4px",
                                            textDecorationThickness: "1px"
                                        }}
                                    >
                                        Click to resend
                                    </button>
                                </div>

                                <Link
                                    href="/login"
                                    className="flex items-center gap-2 text-gray-900 text-[15px] font-bold hover:text-gray-700 transition-colors mt-4"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to Login
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
