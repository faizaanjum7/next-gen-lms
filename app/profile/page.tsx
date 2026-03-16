"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/lib/AuthContext";
import { User, Mail, Briefcase, Award, Save, Camera } from "lucide-react";

export default function ProfilePage() {
    const { userProfile, updateProfile } = useAuth();
    const [profileData, setProfileData] = useState(userProfile);

    const [isSaving, setIsSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        setProfileData(userProfile);
    }, [userProfile]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        
        // Simulating sync delay
        setTimeout(() => {
            updateProfile(profileData);
            setIsSaving(false);
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        }, 800);
    };

    return (
        <main className="min-h-screen bg-[#eefbf9] font-sans text-gray-900 selection:bg-[#2EC4B6] selection:text-white flex flex-col">
            <Navbar />
            
            <div className="flex-1 pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Page Header */}
                    <div className="mb-10">
                        <h1 className="text-3xl font-extrabold text-gray-900 flex items-center gap-3">
                            <span className="p-2 bg-[#2EC4B6]/10 rounded-lg text-[#2EC4B6]">
                                <User className="w-8 h-8" />
                            </span>
                            Profile Settings
                        </h1>
                        <p className="mt-2 text-gray-500 font-medium">Manage your personal information and how others see you on the platform.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Sidebar / Photo */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center">
                                <div className="relative group">
                                    <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#FF9F1C] to-[#2EC4B6] p-1 shadow-lg">
                                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-4xl font-black text-gray-300 overflow-hidden">
                                            {profileData.name.charAt(0)}
                                        </div>
                                    </div>
                                    <button className="absolute bottom-1 right-1 p-2 bg-white rounded-full shadow-md text-[#2EC4B6] border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Camera className="w-4 h-4" />
                                    </button>
                                </div>
                                <h3 className="mt-4 text-xl font-bold text-gray-900">{profileData.name}</h3>
                                <p className="text-sm text-gray-500 font-medium">{profileData.title}</p>
                                
                                <div className="mt-8 w-full space-y-3">
                                    <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-xl">
                                        <Mail className="w-4 h-4 text-[#FF9F1C]" />
                                        <span className="truncate">{profileData.email}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                                <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                                    <Award className="w-4 h-4 text-[#FF9F1C]" /> Learning Status
                                </h4>
                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <div className="flex justify-between text-xs font-bold text-gray-500">
                                            <span>Platform Progress</span>
                                            <span>24%</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#2EC4B6] w-[24%]" />
                                        </div>
                                    </div>
                                    <p className="text-xs font-medium text-gray-400 leading-relaxed italic">You are in the top 10% of active learners this month!</p>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-2">
                            <form onSubmit={handleSave} className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                                <div className="space-y-8">
                                    {/* Section 1: Basic Info */}
                                    <div className="space-y-6">
                                        <h4 className="text-lg font-bold text-gray-900 border-l-4 border-[#2EC4B6] pl-3">Basic Information</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                                                <input 
                                                    type="text" 
                                                    name="name"
                                                    value={profileData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-[#f8f9fa] focus:outline-none focus:border-[#2EC4B6] transition-all font-medium text-gray-800"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-700 ml-1">Professional Title</label>
                                                <input 
                                                    type="text" 
                                                    name="title"
                                                    value={profileData.title}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-[#f8f9fa] focus:outline-none focus:border-[#2EC4B6] transition-all font-medium text-gray-800"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 ml-1">Bio</label>
                                            <textarea 
                                                name="bio"
                                                rows={4}
                                                value={profileData.bio}
                                                onChange={handleChange}
                                                className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-[#f8f9fa] focus:outline-none focus:border-[#2EC4B6] transition-all font-medium text-gray-800 resize-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Section 2: Skills */}
                                    <div className="space-y-6">
                                        <h4 className="text-lg font-bold text-gray-900 border-l-4 border-[#FF9F1C] pl-3">Professional Skills</h4>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 ml-1">Skills (Comma separated)</label>
                                            <input 
                                                type="text" 
                                                name="skills"
                                                value={profileData.skills}
                                                onChange={handleChange}
                                                className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-[#f8f9fa] focus:outline-none focus:border-[#FF9F1C] transition-all font-medium text-gray-800"
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-4 flex items-center gap-4">
                                        <button 
                                            type="submit"
                                            disabled={isSaving}
                                            className="flex items-center justify-center gap-2 bg-[#2EC4B6] text-white font-bold py-4 px-10 rounded-xl hover:shadow-lg transition-all active:scale-[0.98] disabled:opacity-70"
                                        >
                                            {isSaving ? "Saving Updates..." : "Save Changes"}
                                            {!isSaving && <Save className="w-5 h-5" />}
                                        </button>
                                        
                                        {saved && (
                                            <span className="text-green-600 font-bold text-sm animate-in fade-in slide-in-from-left-2">
                                                ✓ Profile updated successfully
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
