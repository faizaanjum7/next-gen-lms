"use client";

import { Construction, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CodePlayStudioPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 text-center">
            <div className="bg-[#fefce8] dark:bg-yellow-900/20 p-8 rounded-full mb-8 animate-pulse">
                <Construction className="w-24 h-24 text-yellow-600 dark:text-yellow-500" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Code Play Studio
            </h1>
            
            <div className="max-w-xl mx-auto space-y-6">
                <div className="bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                    <p className="text-xl text-yellow-800 dark:text-yellow-400 font-medium leading-relaxed">
                        Under Construction & Maintenance
                    </p>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                    We're building something amazing! Code Play Studio is currently undergoing a major update to provide you with the best coding environment.
                </p>
                
                <p className="text-[#3fc9b9] font-semibold text-lg">
                    You'll be notified once it's fully updated and functional soon.
                </p>
                
                <div className="pt-8">
                    <Link 
                        href="/dashboard"
                        className="inline-flex items-center gap-2 bg-[#3fc9b9] hover:bg-[#35b1a3] text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md hover:shadow-lg active:scale-95"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
}
