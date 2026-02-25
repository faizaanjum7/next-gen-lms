"use client";

import React, { useState } from "react";
import { Lock, EyeOff, Eye, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SetNewPasswordPage() {
    const router = useRouter();
    const [isSuccess, setIsSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match. Please try again.");
            return;
        }

        if (password.length < 6) {
            // Basic validation just to have some requirement
            setError("Password must be at least 6 characters long.");
            return;
        }

        setIsSuccess(true);
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
                    {!isSuccess ? (
                        // State 1: Set New Password Form
                        <div className="w-full flex flex-col items-center animate-in fade-in zoom-in duration-300">
                            <div className="w-[100px] h-[100px] bg-[#E6F8F6] rounded-full flex items-center justify-center mb-8">
                                <Lock className="w-12 h-12 text-[#2EC4B6] stroke-[1.5]" />
                            </div>

                            <h2 className="text-3xl md:text-[36px] font-bold text-gray-900 mb-3 text-center tracking-tight">
                                Set a new password
                            </h2>
                            <p className="text-gray-900 text-[16px] md:text-[18px] mb-8 text-center font-medium">
                                Your new password must be different to previously used password
                            </p>

                            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[16px] font-bold text-gray-900">Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800 w-6 h-6" />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Password"
                                            className={`w-full bg-white pl-12 pr-12 py-3.5 rounded-xl border ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-[#2EC4B6] focus:border-[#2EC4B6]'} focus:outline-none focus:ring-1 text-gray-800 font-medium placeholder:text-gray-400 placeholder:font-semibold transition-all text-[16px]`}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 hover:text-gray-600 focus:outline-none cursor-pointer"
                                        >
                                            {showPassword ? (
                                                <Eye className="w-5 h-5" />
                                            ) : (
                                                <EyeOff className="w-5 h-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-[16px] font-bold text-gray-900">Confirm Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800 w-6 h-6" />
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            required
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder="Type the password again"
                                            className={`w-full bg-white pl-12 pr-12 py-3.5 rounded-xl border ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-[#2EC4B6] focus:border-[#2EC4B6]'} focus:outline-none focus:ring-1 text-gray-800 font-medium placeholder:text-gray-400 placeholder:font-semibold transition-all text-[16px]`}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 hover:text-gray-600 focus:outline-none cursor-pointer"
                                        >
                                            {showConfirmPassword ? (
                                                <Eye className="w-5 h-5" />
                                            ) : (
                                                <EyeOff className="w-5 h-5" />
                                            )}
                                        </button>
                                    </div>
                                    {error && <p className="text-red-500 text-sm font-medium mt-1">{error}</p>}
                                </div>

                                <div className="flex flex-col gap-6 mt-2">
                                    <button
                                        type="submit"
                                        className="w-full bg-[#2EC4B6] text-white py-[18px] rounded-xl text-xl font-semibold hover:bg-transparent hover:text-[#2EC4B6] hover:border-[#2EC4B6] border-2 border-transparent transition-all cursor-pointer shadow-sm"
                                    >
                                        Reset Password
                                    </button>

                                    <div className="flex items-center justify-center w-full">
                                        <Link
                                            href="/login"
                                            className="flex items-center gap-2 text-gray-900 text-[15px] font-bold hover:text-gray-700 transition-colors"
                                        >
                                            <ArrowLeft className="w-4 h-4" />
                                            Back to Login
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    ) : (
                        // State 2: Password Reset Success
                        <div className="w-full flex flex-col items-center animate-in slide-in-from-right-8 fade-in duration-300">
                            <div className="w-[100px] h-[100px] bg-[#E6F8F6] rounded-full flex items-center justify-center mb-8">
                                {/* Changed to a filled green checkmark to match design */}
                                <div className="w-12 h-12 bg-[#00C48C] rounded flex items-center justify-center">
                                    <CheckCircle2 className="w-8 h-8 text-white stroke-[2.5]" />
                                </div>
                            </div>

                            <h2 className="text-3xl md:text-[36px] font-bold text-gray-900 mb-3 text-center tracking-tight">
                                Password Reset Successfully
                            </h2>
                            <p className="text-gray-900 text-[16px] md:text-[18px] mb-8 text-center font-medium leading-relaxed max-w-[340px]">
                                Your password has been successfully reset.
                                <br />
                                Click below to login
                            </p>

                            <div className="w-full flex flex-col gap-6 items-center">
                                <button
                                    type="button"
                                    onClick={() => router.push('/login')}
                                    className="w-full bg-[#2EC4B6] text-white py-[18px] rounded-xl text-xl font-semibold mt-1 hover:bg-transparent hover:text-[#2EC4B6] hover:border-[#2EC4B6] border-2 border-transparent transition-all cursor-pointer shadow-sm"
                                >
                                    Log in
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
