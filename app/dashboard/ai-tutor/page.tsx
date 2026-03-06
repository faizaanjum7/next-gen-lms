"use client";

import { Send } from "lucide-react";

export default function AiTutorPage() {
    return (
        <div className="flex flex-col h-full bg-white relative">
            {/* Main Chat Area */}
            <div className="flex-1 overflow-y-auto w-full max-w-4xl mx-auto p-4 md:p-8 space-y-8 pb-32">
                {/* User Message Example */}
                <div className="flex justify-start">
                    <div className="bg-[#fbc982] text-gray-900 rounded-2xl rounded-tl-sm px-6 py-4 shadow-sm max-w-[80%] relative">
                        {/* Tail for the speech bubble */}
                        <div className="absolute top-0 -left-3 w-4 h-4 bg-[#fbc982] clip-speech-bubble"></div>
                        <p className="font-medium text-lg">Ask doubts related to course</p>
                    </div>
                </div>

                {/* Empty State / Initial View Content could go here */}
            </div>

            {/* Sticky Input Area */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-white via-white to-transparent pt-6 pb-8 px-4 md:px-8">
                <div className="max-w-4xl mx-auto relative">
                    <input
                        type="text"
                        placeholder="Type here..."
                        className="w-full bg-[#f0f0f0] text-gray-900 placeholder:text-gray-500 rounded-xl py-4 pl-6 pr-14 outline-none focus:ring-2 focus:ring-[#3fc9b9] transition-all text-base shadow-sm"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg text-gray-400 hover:text-[#3fc9b9] hover:bg-white transition-colors">
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Custom style for the speech bubble tail */}
            <style jsx>{`
                .clip-speech-bubble {
                    clip-path: polygon(100% 0, 0 100%, 100% 100%);
                }
            `}</style>
        </div>
    );
}
