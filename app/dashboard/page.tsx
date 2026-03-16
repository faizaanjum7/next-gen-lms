"use client";

import { Play, FileText, ClipboardList, CheckSquare } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";

export default function DashboardPage() {
    const { scheduledAssessments } = useAuth();

    const getMonthName = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleString('default', { month: 'short' });
    };

    const getDay = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.getDate();
    };

    return (
        <div className="p-6 md:p-8 max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                {/* Left Column (Main Content) */}
                <div className="xl:col-span-2 space-y-6">

                    {/* Current Course Banner */}
                    <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-colors">
                        <div className="flex items-center gap-4 flex-1 w-full">
                            <div className="bg-[#1e88e5] text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shrink-0">
                                ML
                            </div>
                            <div className="flex-1 w-full">
                                <h3 className="font-bold text-gray-900 dark:text-white mb-2 transition-colors">Machine Learning</h3>
                                <div className="bg-gray-200 dark:bg-gray-700 h-2.5 rounded-full w-full max-w-[200px] transition-colors">
                                    <div className="bg-[#1e88e5] h-2.5 rounded-full w-[30%]"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 xl:gap-10 w-full md:w-auto">
                            <div>
                                <div className="text-gray-500 dark:text-gray-400 text-[13px] font-medium mb-1 transition-colors">Lessons</div>
                                <div className="font-bold text-gray-900 dark:text-white transition-colors">4<span className="text-gray-500 dark:text-gray-400 font-medium">/15</span></div>
                            </div>
                            <div className="w-px h-8 bg-gray-200 dark:bg-gray-700 transition-colors"></div>
                            <div>
                                <div className="text-gray-500 dark:text-gray-400 text-[13px] font-medium mb-1 transition-colors">Duration</div>
                                <div className="font-bold text-gray-900 dark:text-white transition-colors">150<span className="text-gray-500 dark:text-gray-400 font-medium">/180 mins</span></div>
                            </div>

                            <button className="bg-[#cbf1e9] hover:bg-[#4fcebb] text-[#007367] hover:text-[#004d44] font-bold px-5 py-2 rounded-md flex items-center gap-2 transition-colors ml-auto md:ml-0">
                                <Play className="w-4 h-4" /> Resume
                            </button>
                        </div>
                    </div>

                    {/* Status Cards */}
                    <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 transition-colors">Status</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                            {/* Box 1 */}
                            <div className="bg-[#fcebd0] dark:bg-[#FF9F1C]/10 rounded-2xl p-5 md:p-6 transition-colors">
                                <div className="bg-[#FF9F1C] w-10 h-10 rounded-full flex items-center justify-center mb-6">
                                    <FileText className="w-5 h-5 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1 transition-colors">22</div>
                                <div className="font-bold text-gray-800 dark:text-gray-200 text-[15px] mb-2 transition-colors">Lessons</div>
                                <div className="text-[#8e52f5] dark:text-[#a78bfa] text-[13px] font-medium transition-colors">of 97 completed</div>
                            </div>

                            {/* Box 2 */}
                            <div className="bg-[#ffd6fa] dark:bg-[#ff8eef]/10 rounded-2xl p-5 md:p-6 transition-colors">
                                <div className="bg-[#ff8eef] w-10 h-10 rounded-full flex items-center justify-center mb-6">
                                    <ClipboardList className="w-5 h-5 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1 transition-colors">07</div>
                                <div className="font-bold text-gray-800 dark:text-gray-200 text-[15px] mb-2 transition-colors">Assignments</div>
                                <div className="text-[#8e52f5] dark:text-[#a78bfa] text-[13px] font-medium transition-colors">of 35 completed</div>
                            </div>

                            {/* Box 3 */}
                            <div className="bg-[#ccf5df] dark:bg-[#3ebcb0]/10 rounded-2xl p-5 md:p-6 transition-colors">
                                <div className="bg-[#3ebcb0] w-10 h-10 rounded-full flex items-center justify-center mb-6">
                                    <CheckSquare className="w-5 h-5 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1 transition-colors">02</div>
                                <div className="font-bold text-gray-800 dark:text-gray-200 text-[15px] mb-2 transition-colors">Tests</div>
                                <div className="text-[#8e52f5] dark:text-[#a78bfa] text-[13px] font-medium transition-colors">of 15 completed</div>
                            </div>
                        </div>
                    </div>

                    {/* My Courses */}
                    <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100 dark:border-gray-800 overflow-x-auto transition-colors">
                        <div className="flex items-center justify-between mb-6 min-w-[500px]">
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white transition-colors">My Courses</h2>
                            <div className="flex gap-2 bg-white dark:bg-[#0f172a] rounded-lg p-1 transition-colors">
                                <button className="text-gray-900 dark:text-white font-medium px-4 py-1.5 rounded-md bg-[#cbf1e9] dark:bg-[#3fc9b9] transition-colors">Active</button>
                                <button className="text-gray-500 dark:text-gray-400 font-medium px-4 py-1.5 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Completed</button>
                            </div>
                        </div>

                        <table className="w-full min-w-[600px]">
                            <thead>
                                <tr className="text-gray-400 dark:text-gray-500 text-sm border-b border-gray-100 dark:border-gray-800 transition-colors">
                                    <th className="text-left font-medium pb-4 font-sans w-12">#</th>
                                    <th className="text-left font-medium pb-4 font-sans px-4">Course Name</th>
                                    <th className="text-left font-medium pb-4 font-sans px-4 w-[200px]">Completed</th>
                                    <th className="text-left font-medium pb-4 font-sans px-4">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                 {/* Row 1 */}
                                <tr className="border-b border-gray-100/50 dark:border-gray-800/50 transition-colors">
                                    <td className="py-5">
                                        <div className="bg-[#1e88e5] text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-[13px]">
                                            ML
                                        </div>
                                    </td>
                                    <td className="py-5 px-4 font-bold text-gray-900 dark:text-white transition-colors">Machine Learning</td>
                                    <td className="py-5 px-4">
                                        <div className="bg-gray-200 dark:bg-gray-700 h-2 rounded-full w-full transition-colors">
                                            <div className="bg-[#1e88e5] h-2 rounded-full w-[35%]"></div>
                                        </div>
                                    </td>
                                    <td className="py-5 px-4">
                                        <div className="flex items-center gap-4 text-xs font-bold text-gray-900 dark:text-gray-200 transition-colors">
                                            <div className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5 text-[#FF9F1C]" /> 4</div>
                                            <div className="flex items-center gap-1.5"><ClipboardList className="w-3.5 h-3.5 text-[#ff8eef]" /> 3</div>
                                            <div className="flex items-center gap-1.5"><CheckSquare className="w-3.5 h-3.5 text-[#3ebcb0]" /> 1</div>
                                        </div>
                                    </td>
                                </tr>
                                 {/* Row 2 */}
                                <tr className="border-b border-gray-100/50 dark:border-gray-800/50 transition-colors">
                                    <td className="py-5">
                                        <div className="bg-[#FF9F1C] text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-[13px]">
                                            JP
                                        </div>
                                    </td>
                                    <td className="py-5 px-4 font-bold text-gray-900 dark:text-white transition-colors">Java Programming</td>
                                    <td className="py-5 px-4">
                                        <div className="bg-gray-200 dark:bg-gray-700 h-2 rounded-full w-full transition-colors">
                                            <div className="bg-[#1e88e5] h-2 rounded-full w-[15%]"></div>
                                        </div>
                                    </td>
                                    <td className="py-5 px-4">
                                        <div className="flex items-center gap-4 text-xs font-bold text-gray-900 dark:text-gray-200 transition-colors">
                                            <div className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5 text-[#FF9F1C]" /> 1</div>
                                            <div className="flex items-center gap-1.5"><ClipboardList className="w-3.5 h-3.5 text-[#ff8eef]" /> 1</div>
                                            <div className="flex items-center gap-1.5"><CheckSquare className="w-3.5 h-3.5 text-[#3ebcb0]" /> 0</div>
                                        </div>
                                    </td>
                                </tr>
                                 {/* Row 3 */}
                                <tr>
                                    <td className="py-5">
                                        <div className="bg-[#6cedde] dark:bg-[#3fc9b9] text-gray-800 dark:text-gray-900 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-[13px] transition-colors">
                                            UX
                                        </div>
                                    </td>
                                    <td className="py-5 px-4 font-bold text-gray-900 dark:text-white transition-colors">UX Design</td>
                                    <td className="py-5 px-4">
                                        <div className="bg-gray-200 dark:bg-gray-700 h-2 rounded-full w-full transition-colors">
                                            <div className="bg-[#1e88e5] h-2 rounded-full w-[25%]"></div>
                                        </div>
                                    </td>
                                    <td className="py-5 px-4">
                                        <div className="flex items-center gap-4 text-xs font-bold text-gray-900 dark:text-gray-200 transition-colors">
                                            <div className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5 text-[#FF9F1C]" /> 3</div>
                                            <div className="flex items-center gap-1.5"><ClipboardList className="w-3.5 h-3.5 text-[#ff8eef]" /> 3</div>
                                            <div className="flex items-center gap-1.5"><CheckSquare className="w-3.5 h-3.5 text-[#3ebcb0]" /> 1</div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

                {/* Right Column (Sidebar/Widgets) */}
                <div className="space-y-6">

                    {/* Calendar Widget */}
                    <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1 transition-colors">Calendar</h2>
                        <div className="text-[13px] font-medium text-gray-600 dark:text-gray-400 mb-4 transition-colors">January 2026</div>

                        <div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center text-[13px]">
                            {/* Days Header */}
                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                                <div key={day} className="font-bold text-gray-800 dark:text-gray-200 mb-2 transition-colors">{day}</div>
                            ))}

                            {/* Empty days for formatting (start on Thu) */}
                            <div className="text-gray-300 py-1"></div>
                            <div className="text-gray-300 py-1"></div>
                            <div className="text-gray-300 py-1"></div>
                            <div className="text-gray-500 py-1 font-medium">1</div>
                            <div className="text-gray-500 py-1 font-medium">2</div>
                            <div className="text-gray-500 py-1 font-medium">3</div>
                            <div className="text-gray-500 py-1 font-medium">4</div>

                            <div className="text-gray-500 py-1 font-medium">5</div>
                            <div className="text-gray-500 py-1 font-medium">6</div>
                            <div className="text-gray-500 py-1 font-medium">7</div>
                            <div className="text-gray-500 py-1 font-medium">8</div>
                            <div className="text-gray-500 py-1 font-medium">9</div>
                            <div className="text-gray-500 py-1 font-medium">10</div>
                            <div className="text-gray-500 py-1 font-medium">11</div>

                            <div className="text-gray-500 dark:text-gray-400 py-1 font-medium transition-colors">12</div>
                            <div className="relative flex justify-center py-1">
                                <div className="absolute top-1 bottom-1 left-1/2 -right-1 bg-[#cbf1e9] dark:bg-[#3fc9b9]/20 -z-10 transition-colors"></div>
                                <div className="bg-[#3ebcb0] text-white rounded-full w-8 h-8 flex items-center justify-center font-medium shadow-sm relative z-10">13</div>
                            </div>
                             <div className="relative flex justify-center py-1">
                                <div className="absolute top-1 bottom-1 -left-1 -right-1 bg-[#cbf1e9] dark:bg-[#3fc9b9]/20 -z-10 transition-colors"></div>
                                <span className="text-gray-700 dark:text-gray-200 font-medium relative z-10 flex h-8 items-center transition-colors">14</span>
                            </div>
                            <div className="relative flex justify-center py-1">
                                <div className="absolute top-1 bottom-1 -left-1 -right-1 bg-[#cbf1e9] dark:bg-[#3fc9b9]/20 -z-10 transition-colors"></div>
                                <span className="text-gray-700 dark:text-gray-200 font-medium relative z-10 flex h-8 items-center transition-colors">15</span>
                            </div>
                            <div className="relative flex justify-center py-1">
                                <div className="absolute top-1 bottom-1 right-1/2 -left-1 bg-[#cbf1e9] dark:bg-[#3fc9b9]/20 -z-10 transition-colors"></div>
                                <div className="bg-[#3ebcb0] text-white rounded-full w-8 h-8 flex items-center justify-center font-medium shadow-sm relative z-10">16</div>
                            </div>
                            <div className="text-gray-500 py-1 relative font-medium">
                                17
                                <span className="w-1 h-1 bg-[#ff8eef] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2"></span>
                            </div>
                            <div className="text-gray-500 py-1 font-medium">18</div>

                            <div className="text-gray-500 py-1 relative font-medium">
                                19
                                <span className="w-1 h-1 bg-[#3ebcb0] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2"></span>
                            </div>
                            <div className="text-gray-500 py-1 font-medium">20</div>
                            <div className="text-gray-500 py-1 font-medium">21</div>
                            <div className="text-gray-500 py-1 font-medium">22</div>
                            <div className="text-gray-500 py-1 font-medium">23</div>
                            <div className="text-gray-500 py-1 relative font-medium">
                                24
                                <span className="w-1 h-1 bg-[#FF9F1C] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2"></span>
                            </div>
                            <div className="text-gray-500 py-1 font-medium">25</div>

                            <div className="text-gray-500 py-1 font-medium">26</div>
                            <div className="text-gray-500 py-1 font-medium">27</div>
                            <div className="text-gray-500 py-1 font-medium">28</div>
                            <div className="text-gray-500 py-1 font-medium">29</div>
                            <div className="text-gray-500 py-1 font-medium">30</div>
                            <div className="text-gray-500 py-1 font-medium">31</div>
                            <div className="text-gray-300 py-1">1</div>
                        </div>
                    </div>

                    {/* Upcoming Events Widget */}
                    <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 transition-colors">Upcoming</h2>

                        <div className="space-y-4">
                            {scheduledAssessments.length > 0 ? (
                                scheduledAssessments.map((assessment) => (
                                    <div key={assessment.id} className="flex gap-4 items-center animate-in fade-in slide-in-from-right-4">
                                        <div className="bg-[#fce5df] dark:bg-[#FF9F1C]/10 text-center w-[60px] h-[64px] rounded-xl flex flex-col justify-center shrink-0 transition-colors">
                                            <div className="font-bold text-gray-900 dark:text-white text-lg leading-tight transition-colors">
                                                {getDay(assessment.date)}
                                            </div>
                                            <div className="text-gray-700 dark:text-gray-400 text-xs font-medium transition-colors">
                                                {getMonthName(assessment.date)}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white text-[15px] mb-1 transition-colors">
                                                {assessment.course} Assessment
                                            </h4>
                                            <div className="flex items-center gap-1.5 transition-colors">
                                                <span className="w-1 h-1 bg-[#FF9F1C] rounded-full inline-block"></span>
                                                <span className="text-[#FF9F1C] text-xs font-bold">Scheduled at {assessment.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="space-y-4">
                                    {/* Event 1 */}
                                    <div className="flex gap-4 items-center opacity-60">
                                        <div className="bg-[#fcedfc] dark:bg-[#ff8eef]/10 text-center w-[60px] h-[64px] rounded-xl flex flex-col justify-center shrink-0 transition-colors">
                                            <div className="font-bold text-gray-900 dark:text-white text-lg leading-tight transition-colors">17</div>
                                            <div className="text-gray-700 dark:text-gray-400 text-xs font-medium transition-colors">Jan</div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white text-[15px] mb-1 transition-colors">Practical theory</h4>
                                            <div className="flex items-center gap-1.5 transition-colors">
                                                <span className="w-1 h-1 bg-[#ff8eef] rounded-full inline-block"></span>
                                                <span className="text-[#ff8eef] text-xs font-bold">Assignment</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Event 2 */}
                                    <div className="flex gap-4 items-center opacity-60">
                                        <div className="bg-[#f0f6cc] dark:bg-[#3ebcb0]/10 text-center w-[60px] h-[64px] rounded-xl flex flex-col justify-center shrink-0 transition-colors">
                                            <div className="font-bold text-gray-900 dark:text-white text-lg leading-tight transition-colors">19</div>
                                            <div className="text-gray-700 dark:text-gray-400 text-xs font-medium transition-colors">Jan</div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white text-[15px] mb-1 transition-colors">Practical theory 1</h4>
                                            <div className="flex items-center gap-1.5 transition-colors">
                                                <span className="w-1 h-1 bg-[#3ebcb0] rounded-full inline-block"></span>
                                                <span className="text-[#3ebcb0] text-xs font-bold">Test</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p className="text-xs text-gray-400 dark:text-gray-500 italic text-center pt-2">No new scheduled assessments</p>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
