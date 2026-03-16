"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth, UserSettings } from "@/lib/AuthContext";
import { Settings as SettingsIcon, Shield, Bell, Moon, Languages, HelpCircle, Save, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type TabType = "account" | "notifications" | "appearance" | "language";

export default function SettingsPage() {
    const { userSettings, updateSettings } = useAuth();
    const [activeTab, setActiveTab] = useState<TabType>("account");
    const [tempSettings, setTempSettings] = useState<UserSettings>(userSettings);
    const [isSaving, setIsSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        setTempSettings(userSettings);
    }, [userSettings]);

    const handleToggle = (key: keyof UserSettings) => {
        setTempSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleSelect = (key: keyof UserSettings, value: any) => {
        setTempSettings(prev => ({ ...prev, [key]: value }));
    };

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            updateSettings(tempSettings);
            setIsSaving(false);
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        }, 800);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case "account":
                return (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div className="bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Shield className="w-5 h-5 text-[#2EC4B6]" />
                                Privacy & Security
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-bold text-gray-800">Private Profile</p>
                                        <p className="text-sm text-gray-500 font-medium">Only allow verified mentors to view your skill assessments.</p>
                                    </div>
                                    <button 
                                        onClick={() => handleToggle('privateProfile')}
                                        className={cn(
                                            "w-12 h-6 rounded-full transition-all relative",
                                            tempSettings.privateProfile ? 'bg-[#2EC4B6]' : 'bg-gray-200'
                                        )}
                                    >
                                        <div className={cn(
                                            "absolute top-1 w-4 h-4 rounded-full bg-white transition-all",
                                            tempSettings.privateProfile ? 'left-7' : 'left-1'
                                        )} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "notifications":
                return (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div className="bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Bell className="w-5 h-5 text-[#FF9F1C]" />
                                Notification Settings
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-bold text-gray-800">Email Marketing</p>
                                        <p className="text-sm text-gray-500 font-medium">Receive updates about new courses and features.</p>
                                    </div>
                                    <button 
                                        onClick={() => handleToggle('marketingEmails')}
                                        className={cn(
                                            "w-12 h-6 rounded-full transition-all relative",
                                            tempSettings.marketingEmails ? 'bg-[#2EC4B6]' : 'bg-gray-200'
                                        )}
                                    >
                                        <div className={cn(
                                            "absolute top-1 w-4 h-4 rounded-full bg-white transition-all",
                                            tempSettings.marketingEmails ? 'left-7' : 'left-1'
                                        )} />
                                    </button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-bold text-gray-800">Assessment Reminders</p>
                                        <p className="text-sm text-gray-500 font-medium">Get notified when your scheduled assessments are coming up.</p>
                                    </div>
                                    <button 
                                        onClick={() => handleToggle('assessmentReminders')}
                                        className={cn(
                                            "w-12 h-6 rounded-full transition-all relative",
                                            tempSettings.assessmentReminders ? 'bg-[#2EC4B6]' : 'bg-gray-200'
                                        )}
                                    >
                                        <div className={cn(
                                            "absolute top-1 w-4 h-4 rounded-full bg-white transition-all",
                                            tempSettings.assessmentReminders ? 'left-7' : 'left-1'
                                        )} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "appearance":
                return (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div className="bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Moon className="w-5 h-5 text-indigo-500" />
                                Visual Theme
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-bold text-gray-800">Dark Mode</p>
                                        <p className="text-sm text-gray-500 font-medium">Switch to a darker interface for low-light environments.</p>
                                    </div>
                                    <button 
                                        onClick={() => handleToggle('darkMode')}
                                        className={cn(
                                            "w-12 h-6 rounded-full transition-all relative",
                                            tempSettings.darkMode ? 'bg-[#2EC4B6]' : 'bg-gray-200'
                                        )}
                                    >
                                        <div className={cn(
                                            "absolute top-1 w-4 h-4 rounded-full bg-white transition-all",
                                            tempSettings.darkMode ? 'left-7' : 'left-1'
                                        )} />
                                    </button>
                                </div>
                                <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-100 flex items-start gap-3">
                                    <div className="p-1 bg-white rounded flex-shrink-0">💡</div>
                                    <p className="text-xs text-yellow-800 leading-relaxed font-medium">
                                        Note: Dark mode is currently in beta and might not reflect perfectly on all legacy components.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "language":
                return (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div className="bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Languages className="w-5 h-5 text-[#2EC4B6]" />
                                Language & Region
                            </h3>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Preferred Language</label>
                                    <select 
                                        value={tempSettings.language}
                                        onChange={(e) => handleSelect('language', e.target.value)}
                                        className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-[#f8f9fa] focus:outline-none focus:border-[#2EC4B6] transition-all font-medium text-gray-800 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.67%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-[length:20px_20px] bg-[right_1rem_center] bg-no-repeat"
                                    >
                                        <option value="english">English (US)</option>
                                        <option value="hindi">Hindi (India)</option>
                                        <option value="spanish">Spanish (Latin America)</option>
                                        <option value="french">French (European)</option>
                                    </select>
                                </div>
                                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg text-xs font-medium text-gray-500">
                                    <Check className="w-3 h-3 text-[#2EC4B6]" />
                                    Standard system time format will be used.
                                </div>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <main className="min-h-screen bg-[#eefbf9] font-sans text-gray-900 selection:bg-[#2EC4B6] selection:text-white flex flex-col">
            <Navbar />
            
            <div className="flex-1 pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Page Header */}
                    <div className="mb-10 text-center md:text-left">
                        <h1 className="text-3xl font-extrabold text-gray-900 flex items-center gap-3 justify-center md:justify-start">
                            <span className="p-2 bg-[#FF9F1C]/10 rounded-lg text-[#FF9F1C]">
                                <SettingsIcon className="w-8 h-8" />
                            </span>
                            Settings
                        </h1>
                        <p className="mt-2 text-gray-500 font-medium">Customize your platform experience and manage privacy.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Sidebar */}
                        <div className="md:col-span-1">
                            <nav className="flex flex-col gap-1">
                                <button 
                                    onClick={() => setActiveTab("account")}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 font-bold rounded-xl transition-all",
                                        activeTab === "account" ? "bg-white text-[#2EC4B6] shadow-sm border border-gray-100" : "text-gray-500 hover:bg-white"
                                    )}
                                >
                                    <Shield className="w-4 h-4" /> Account
                                </button>
                                <button 
                                    onClick={() => setActiveTab("notifications")}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 font-bold rounded-xl transition-all",
                                        activeTab === "notifications" ? "bg-white text-[#2EC4B6] shadow-sm border border-gray-100" : "text-gray-500 hover:bg-white"
                                    )}
                                >
                                    <Bell className="w-4 h-4" /> Notifications
                                </button>
                                <button 
                                    onClick={() => setActiveTab("appearance")}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 font-bold rounded-xl transition-all",
                                        activeTab === "appearance" ? "bg-white text-[#2EC4B6] shadow-sm border border-gray-100" : "text-gray-500 hover:bg-white"
                                    )}
                                >
                                    <Moon className="w-4 h-4" /> Appearance
                                </button>
                                <button 
                                    onClick={() => setActiveTab("language")}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 font-bold rounded-xl transition-all",
                                        activeTab === "language" ? "bg-white text-[#2EC4B6] shadow-sm border border-gray-100" : "text-gray-500 hover:bg-white"
                                    )}
                                >
                                    <Languages className="w-4 h-4" /> Language
                                </button>
                            </nav>
                        </div>

                        {/* Content Area */}
                        <div className="md:col-span-3 space-y-8">
                            {renderTabContent()}
                            
                            {/* Save Button Area */}
                            <div className="flex flex-col md:flex-row items-center gap-4 bg-white/50 p-6 rounded-[24px] border border-dashed border-gray-300">
                                <button 
                                    onClick={handleSave}
                                    disabled={isSaving}
                                    className="flex items-center justify-center gap-2 bg-[#1A1A1A] text-white font-bold py-3.5 px-8 rounded-xl hover:bg-black transition-all active:scale-[0.98] disabled:opacity-70 w-full md:w-auto"
                                >
                                    {isSaving ? "Saving..." : "Apply All Settings"}
                                    {!isSaving && <Save className="w-4 h-4" />}
                                </button>
                                {saved && (
                                    <span className="text-[#2EC4B6] font-bold text-sm animate-in fade-in slide-in-from-left-2">
                                        ✓ Preferences saved successfully
                                    </span>
                                )}
                                <div className="flex-1" />
                                <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                                    <HelpCircle className="w-4 h-4" />
                                    <span>Need help with settings?</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
