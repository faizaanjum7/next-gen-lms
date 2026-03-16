"use client";

import { useState } from "react";
import { 
    Bot, 
    MessageSquare, 
    History, 
    Calendar, 
    Video, 
    ChevronRight, 
    Award, 
    CheckCircle2, 
    Plus,
    X,
    User,
    Clock,
    Target
} from "lucide-react";

export default function AiHrPage() {
    const [isMockInterviewModalOpen, setIsMockInterviewModalOpen] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState("");

    const chatHistory = [
        { id: 1, topic: "Career Guidance", date: "Oct 12, 2025", preview: "Your career path in Web Development looks promising based on..." },
        { id: 2, topic: "Skill Improvement", date: "Oct 15, 2025", preview: "To improve your React skills, I recommend focusing on hooks..." },
        { id: 3, topic: "Resume Review", date: "Oct 20, 2025", preview: "Your resume highlights your projects well, but we can refine..." },
    ];

    const assessmentHistory = [
        { id: 1, course: "Full Stack Development", date: "Oct 05, 2025", score: "88%", status: "Completed" },
        { id: 2, course: "Data Structures & Algorithms", date: "Sep 28, 2025", score: "92%", status: "Completed" },
        { id: 3, course: "System Design", date: "Oct 18, 2025", score: "InProgress", status: "Ongoing" },
    ];

    const mockInterviewHistory = [
        { id: 1, topic: "Frontend React Developer", date: "Oct 22, 2025", duration: "45 mins", score: "85/100" },
        { id: 2, topic: "Backend Node.js Engineer", date: "Oct 25, 2025", duration: "30 mins", score: "78/100" },
    ];

    const topics = ["Frontend React Developer", "Backend Node.js Engineer", "Full Stack Java", "UI/UX Designer", "Data Science Intern", "QA Automation Engineer"];

    return (
        <div className="p-6 md:p-8 max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-500">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-gradient-to-r from-[#3fc9b9] to-[#2EC4B6] p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3">
                        <Bot className="w-10 h-10" />
                        AI HR Assistant
                    </h1>
                    <p className="text-white/80 text-lg max-w-2xl">
                        Your personal career companion. Track your assessments, review past conversations, and prepare for your future with interactive mock interviews.
                    </p>
                </div>
                <button 
                    onClick={() => setIsMockInterviewModalOpen(true)}
                    className="relative z-10 bg-white text-[#2EC4B6] hover:bg-gray-50 font-bold px-8 py-4 rounded-2xl flex items-center gap-3 transition-all shadow-lg active:scale-95 shrink-0"
                >
                    <Video className="w-6 h-6" />
                    Schedule Mock Interview
                </button>
                
                {/* Decorative Circles */}
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Left Column: Chat History & Assessment History */}
                <div className="xl:col-span-2 space-y-8">
                    {/* Past Chat History */}
                    <div className="bg-white dark:bg-[#1e293b] rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                <MessageSquare className="w-6 h-6 text-[#3fc9b9]" />
                                Past Chat History
                            </h2>
                            <button className="text-[#3fc9b9] hover:underline font-semibold text-sm">View All</button>
                        </div>
                        <div className="space-y-4">
                            {chatHistory.map((chat) => (
                                <div key={chat.id} className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800/50 border border-transparent hover:border-[#3fc9b9]/20 transition-all cursor-pointer">
                                    <div className="bg-[#ccf5df] dark:bg-[#3fc9b9]/20 p-3 rounded-xl">
                                        <MessageSquare className="w-5 h-5 text-[#3fc9b9]" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-[#3fc9b9] transition-colors">{chat.topic}</h3>
                                            <span className="text-xs text-gray-400 font-medium">{chat.date}</span>
                                        </div>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-1">
                                            {chat.preview}
                                        </p>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#3fc9b9] group-hover:translate-x-1 transition-all" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Assessment History */}
                    <div className="bg-white dark:bg-[#1e293b] rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                <History className="w-6 h-6 text-[#FF9F1C]" />
                                Course Enrollment Assessment History
                            </h2>
                            <button className="text-[#FF9F1C] hover:underline font-semibold text-sm">Download Reports</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-gray-400 text-sm border-b border-gray-100 dark:border-gray-800">
                                        <th className="text-left font-medium pb-4 font-sans px-2">Course Name</th>
                                        <th className="text-left font-medium pb-4 font-sans px-2">Date</th>
                                        <th className="text-center font-medium pb-4 font-sans px-2">Score</th>
                                        <th className="text-right font-medium pb-4 font-sans px-2">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                                    {assessmentHistory.map((item) => (
                                        <tr key={item.id} className="group hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                                            <td className="py-4 px-2 font-bold text-gray-900 dark:text-white">{item.course}</td>
                                            <td className="py-4 px-2 text-gray-500 text-sm">{item.date}</td>
                                            <td className="py-4 px-2 text-center">
                                                {item.score === "InProgress" ? (
                                                    <span className="text-gray-400 italic">--</span>
                                                ) : (
                                                    <span className="font-bold text-[#3fc9b9]">{item.score}</span>
                                                )}
                                            </td>
                                            <td className="py-4 px-2 text-right">
                                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                                                    item.status === 'Completed' 
                                                    ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' 
                                                    : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
                                                }`}>
                                                    {item.status === 'Completed' ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                                                    {item.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Right Column: Mock Interview History & Calendar */}
                <div className="space-y-8">
                    {/* Mock Interview History */}
                    <div className="bg-white dark:bg-[#1e293b] rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                <Target className="w-6 h-6 text-[#8e52f5]" />
                                Mock Interviews
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {mockInterviewHistory.map((interview) => (
                                <div key={interview.id} className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-gray-900 dark:text-white leading-tight">{interview.topic}</h3>
                                        <span className="bg-[#8e52f5] text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase">Pass</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {interview.date}</span>
                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {interview.duration}</span>
                                    </div>
                                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                                        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Performance Score:</span>
                                        <span className="font-bold text-[#8e52f5]">{interview.score}</span>
                                    </div>
                                </div>
                            ))}
                            <button 
                                onClick={() => setIsMockInterviewModalOpen(true)}
                                className="w-full py-4 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-2xl flex items-center justify-center gap-2 text-gray-500 hover:text-[#3fc9b9] hover:border-[#3fc9b9]/50 hover:bg-[#3fc9b9]/5 transition-all group"
                            >
                                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                                <span className="font-bold">New Interview</span>
                            </button>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="bg-[#f0f9ff] dark:bg-blue-900/10 rounded-3xl p-6 border border-blue-100 dark:border-blue-900/30">
                        <h3 className="font-bold text-blue-900 dark:text-blue-400 mb-4">Quick Stats</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-[#1e293b] p-4 rounded-2xl shadow-sm">
                                <div className="text-gray-500 text-xs mb-1">Success Rate</div>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">82%</div>
                            </div>
                            <div className="bg-white dark:bg-[#1e293b] p-4 rounded-2xl shadow-sm">
                                <div className="text-gray-500 text-xs mb-1">Rank</div>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">#12</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mock Interview Scheduling Modal */}
            {isMockInterviewModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white dark:bg-[#1e293b] w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                        <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-[#3fc9b9] to-[#2EC4B6] text-white">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <Video className="w-6 h-6" />
                                Schedule Mock Interview
                            </h2>
                            <button 
                                onClick={() => setIsMockInterviewModalOpen(false)}
                                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        
                        <div className="p-8 space-y-8">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Select Interview Topic</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {topics.map((topic) => (
                                        <button
                                            key={topic}
                                            onClick={() => setSelectedTopic(topic)}
                                            className={`p-4 text-left rounded-2xl border-2 transition-all font-medium ${
                                                selectedTopic === topic 
                                                ? 'border-[#3fc9b9] bg-[#3fc9b9]/5 text-[#3fc9b9]' 
                                                : 'border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-[#3fc9b9]/30'
                                            }`}
                                        >
                                            {topic}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Date</label>
                                    <input 
                                        type="date" 
                                        className="w-full p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3fc9b9] transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Time</label>
                                    <input 
                                        type="time" 
                                        className="w-full p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3fc9b9] transition-all"
                                    />
                                </div>
                            </div>

                            <div className="pt-4 flex gap-4">
                                <button 
                                    onClick={() => setIsMockInterviewModalOpen(false)}
                                    className="flex-1 py-4 px-6 rounded-2xl border-2 border-gray-100 dark:border-gray-800 font-bold text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                                >
                                    Cancel
                                </button>
                                <button 
                                    disabled={!selectedTopic}
                                    onClick={() => {
                                        alert(`Scheduled mock interview for ${selectedTopic}!`);
                                        setIsMockInterviewModalOpen(false);
                                    }}
                                    className="flex-1 py-4 px-6 rounded-2xl bg-[#3fc9b9] hover:bg-[#35b1a3] text-white font-bold shadow-lg shadow-[#3fc9b9]/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
                                >
                                    Confirm Schedule
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
