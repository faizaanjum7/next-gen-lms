"use client";

import React, { useState } from 'react';
import { Save, Eye, Palette, Upload, Award, RefreshCw } from 'lucide-react';

export default function CertificationEnginePage() {
    const [certTitle, setCertTitle] = useState('Certificate of Achievement');
    const [issuerName, setIssuerName] = useState('NextGen LMS');
    const [primaryColor, setPrimaryColor] = useState('#2EC4B6');
    const [isSaving, setIsSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            setSaveSuccess(true);
            setTimeout(() => setSaveSuccess(false), 3000);
        }, 800);
    };

    return (
        <div className="p-6 md:p-8 max-w-[1400px] mx-auto min-h-screen flex flex-col xl:flex-row gap-8">
            {/* Left Side: Configuration Panel */}
            <div className="flex-1 w-full max-w-[400px] space-y-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Certification Engine</h1>
                    <p className="text-gray-500 dark:text-gray-400">Design automated certificate templates and set issuing criteria.</p>
                </div>

                <div className="bg-white dark:bg-[#1e293b] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Template Settings</h2>
                    
                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Certificate Title</label>
                            <input
                                type="text"
                                value={certTitle}
                                onChange={(e) => setCertTitle(e.target.value)}
                                className="w-full bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-[#2EC4B6] rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none transition-all font-medium"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Issuing Organization / Signatory</label>
                            <input
                                type="text"
                                value={issuerName}
                                onChange={(e) => setIssuerName(e.target.value)}
                                className="w-full bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-[#2EC4B6] rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none transition-all font-medium"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Brand Color</label>
                            <div className="flex items-center gap-3">
                                <input
                                    type="color"
                                    value={primaryColor}
                                    onChange={(e) => setPrimaryColor(e.target.value)}
                                    className="w-12 h-12 rounded cursor-pointer border-none p-0 outline-none"
                                />
                                <span className="text-gray-500 font-mono bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-lg border border-gray-200 dark:border-gray-700">{primaryColor}</span>
                            </div>
                        </div>

                        <hr className="border-gray-100 dark:border-gray-800 my-2" />

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Logo & Signatures</label>
                            <div className="grid grid-cols-2 gap-4">
                                <button className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-4 text-center hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors flex flex-col items-center justify-center gap-2">
                                    <Upload className="w-5 h-5 text-gray-400" />
                                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">Org Logo</span>
                                </button>
                                <button className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-4 text-center hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors flex flex-col items-center justify-center gap-2">
                                    <Upload className="w-5 h-5 text-gray-400" />
                                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">Signature</span>
                                </button>
                            </div>
                        </div>

                        <div className="pt-2">
                            <button 
                                onClick={handleSave}
                                className="w-full bg-[#2EC4B6] hover:bg-[#28b0a3] text-white px-6 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                            >
                                {isSaving ? (
                                    <RefreshCw className="w-5 h-5 animate-spin" />
                                ) : (
                                    <Save className="w-5 h-5" />
                                )}
                                {saveSuccess ? "Template Saved!" : "Save Template"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Live Interactive Preview */}
            <div className="flex-2 w-full flex flex-col h-[calc(100vh-100px)]">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Eye className="w-5 h-5 text-[#2EC4B6]" /> Live Preview
                    </h2>
                </div>
                
                {/* The Certificate Preview Box */}
                <div className="flex-1 bg-gray-50 dark:bg-[#0f172a] rounded-3xl border-4 border-gray-200 dark:border-gray-800 flex items-center justify-center p-8 overflow-hidden relative shadow-inner">
                    
                    {/* Abstract CSS Background Graphics based on Primary Color */}
                    <div 
                        className="absolute top-0 left-0 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform -translate-x-1/2 -translate-y-1/2" 
                        style={{ backgroundColor: primaryColor }}
                    ></div>
                    <div 
                        className="absolute bottom-0 right-0 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform translate-x-1/3 translate-y-1/3" 
                        style={{ backgroundColor: primaryColor }}
                    ></div>

                    <div className="bg-white dark:bg-[#1e293b] w-full max-w-[800px] aspect-[1.414/1] bg-opacity-95 shadow-2xl rounded-sm border-[12px] relative z-10 flex flex-col transition-all duration-300" style={{ borderColor: primaryColor }}>
                        {/* Certificate Border accents */}
                        <div className="absolute inset-2 border-2" style={{ borderColor: `${primaryColor}40` }}></div>
                        
                        <div className="flex-1 flex flex-col items-center justify-center p-12 text-center relative z-20">
                            <Award className="w-16 h-16 mb-6 opacity-80" style={{ color: primaryColor }} />
                            
                            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white mb-2 uppercase tracking-widest leading-tight">
                                {certTitle || "..."}
                            </h1>
                            
                            <div className="w-24 h-1 my-6" style={{ backgroundColor: primaryColor }}></div>
                            
                            <p className="text-lg text-gray-500 font-medium italic mb-8">This is to certify that</p>
                            
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 font-mono underline decoration-gray-200 dark:decoration-gray-700 underline-offset-8">
                                Jane Doe
                            </h2>
                            
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[500px]">
                                has successfully completed the <span className="font-bold text-gray-800 dark:text-gray-200">Advanced Machine Learning Architecture</span> course and demonstrated incredible proficiency.
                            </p>
                        </div>

                        {/* Certificate Footer / Signatures */}
                        <div className="px-16 pb-12 w-full flex justify-between items-end relative z-20">
                            <div className="text-center">
                                <div className="text-gray-900 dark:text-white font-bold text-xl font-signature mb-2" style={{ fontFamily: 'cursive' }}>
                                    {issuerName || "..."}
                                </div>
                                <div className="w-48 h-px bg-gray-300 dark:bg-gray-600 mb-2"></div>
                                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">{issuerName || "Issuer"}</div>
                            </div>

                            <div className="text-center">
                                <div className="text-gray-900 dark:text-white font-bold text-xl mb-2 font-mono">
                                    Oct 24, 2026
                                </div>
                                <div className="w-48 h-px bg-gray-300 dark:bg-gray-600 mb-2"></div>
                                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Date Issued</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
