"use client";

import { Play, FileText, ClipboardList, CheckSquare } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="p-6 md:p-8 max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                {/* Left Column (Main Content) */}
                <div className="xl:col-span-2 space-y-6">

                    {/* Current Course Banner */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="flex items-center gap-4 flex-1 w-full">
                            <div className="bg-[#1e88e5] text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shrink-0">
                                ML
                            </div>
                            <div className="flex-1 w-full">
                                <h3 className="font-bold text-gray-900 mb-2">Machine Learning</h3>
                                <div className="bg-gray-200 h-2.5 rounded-full w-full max-w-[200px]">
                                    <div className="bg-[#1e88e5] h-2.5 rounded-full w-[30%]"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 xl:gap-10 w-full md:w-auto">
                            <div>
                                <div className="text-gray-500 text-[13px] font-medium mb-1">Lessons</div>
                                <div className="font-bold text-gray-900">4<span className="text-gray-500 font-medium">/15</span></div>
                            </div>
                            <div className="w-px h-8 bg-gray-200"></div>
                            <div>
                                <div className="text-gray-500 text-[13px] font-medium mb-1">Duration</div>
                                <div className="font-bold text-gray-900">150<span className="text-gray-500 font-medium">/180 mins</span></div>
                            </div>

                            <button className="bg-[#cbf1e9] hover:bg-[#4fcebb] text-[#007367] hover:text-[#004d44] font-bold px-5 py-2 rounded-md flex items-center gap-2 transition-colors ml-auto md:ml-0">
                                <Play className="w-4 h-4" /> Resume
                            </button>
                        </div>
                    </div>

                    {/* Status Cards */}
                    <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Status</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                            {/* Box 1 */}
                            <div className="bg-[#fcebd0] rounded-2xl p-5 md:p-6">
                                <div className="bg-[#FF9F1C] w-10 h-10 rounded-full flex items-center justify-center mb-6">
                                    <FileText className="w-5 h-5 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-1">22</div>
                                <div className="font-bold text-gray-800 text-[15px] mb-2">Lessons</div>
                                <div className="text-[#8e52f5] text-[13px] font-medium">of 97 completed</div>
                            </div>

                            {/* Box 2 */}
                            <div className="bg-[#ffd6fa] rounded-2xl p-5 md:p-6">
                                <div className="bg-[#ff8eef] w-10 h-10 rounded-full flex items-center justify-center mb-6">
                                    <ClipboardList className="w-5 h-5 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-1">07</div>
                                <div className="font-bold text-gray-800 text-[15px] mb-2">Assignments</div>
                                <div className="text-[#8e52f5] text-[13px] font-medium">of 35 completed</div>
                            </div>

                            {/* Box 3 */}
                            <div className="bg-[#ccf5df] rounded-2xl p-5 md:p-6">
                                <div className="bg-[#3ebcb0] w-10 h-10 rounded-full flex items-center justify-center mb-6">
                                    <CheckSquare className="w-5 h-5 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-1">02</div>
                                <div className="font-bold text-gray-800 text-[15px] mb-2">Tests</div>
                                <div className="text-[#8e52f5] text-[13px] font-medium">of 15 completed</div>
                            </div>
                        </div>
                    </div>

                    {/* My Courses */}
                    <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100 overflow-x-auto">
                        <div className="flex items-center justify-between mb-6 min-w-[500px]">
                            <h2 className="text-lg font-bold text-gray-900">My Courses</h2>
                            <div className="flex gap-2 bg-white rounded-lg p-1">
                                <button className="text-gray-900 font-medium px-4 py-1.5 rounded-md bg-[#cbf1e9] transition-colors">Active</button>
                                <button className="text-gray-500 font-medium px-4 py-1.5 rounded-md hover:bg-gray-50 transition-colors">Completed</button>
                            </div>
                        </div>

                        <table className="w-full min-w-[600px]">
                            <thead>
                                <tr className="text-gray-400 text-sm border-b border-gray-100">
                                    <th className="text-left font-medium pb-4 font-sans w-12">#</th>
                                    <th className="text-left font-medium pb-4 font-sans px-4">Course Name</th>
                                    <th className="text-left font-medium pb-4 font-sans px-4 w-[200px]">Completed</th>
                                    <th className="text-left font-medium pb-4 font-sans px-4">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Row 1 */}
                                <tr className="border-b border-gray-100/50">
                                    <td className="py-5">
                                        <div className="bg-[#1e88e5] text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-[13px]">
                                            ML
                                        </div>
                                    </td>
                                    <td className="py-5 px-4 font-bold text-gray-900">Machine Learning</td>
                                    <td className="py-5 px-4">
                                        <div className="bg-gray-200 h-2 rounded-full w-full">
                                            <div className="bg-[#1e88e5] h-2 rounded-full w-[35%]"></div>
                                        </div>
                                    </td>
                                    <td className="py-5 px-4">
                                        <div className="flex items-center gap-4 text-xs font-bold text-gray-900">
                                            <div className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5 text-[#FF9F1C]" /> 4</div>
                                            <div className="flex items-center gap-1.5"><ClipboardList className="w-3.5 h-3.5 text-[#ff8eef]" /> 3</div>
                                            <div className="flex items-center gap-1.5"><CheckSquare className="w-3.5 h-3.5 text-[#3ebcb0]" /> 1</div>
                                        </div>
                                    </td>
                                </tr>
                                {/* Row 2 */}
                                <tr className="border-b border-gray-100/50">
                                    <td className="py-5">
                                        <div className="bg-[#FF9F1C] text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-[13px]">
                                            JP
                                        </div>
                                    </td>
                                    <td className="py-5 px-4 font-bold text-gray-900">Java Programming</td>
                                    <td className="py-5 px-4">
                                        <div className="bg-gray-200 h-2 rounded-full w-full">
                                            <div className="bg-[#1e88e5] h-2 rounded-full w-[15%]"></div>
                                        </div>
                                    </td>
                                    <td className="py-5 px-4">
                                        <div className="flex items-center gap-4 text-xs font-bold text-gray-900">
                                            <div className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5 text-[#FF9F1C]" /> 1</div>
                                            <div className="flex items-center gap-1.5"><ClipboardList className="w-3.5 h-3.5 text-[#ff8eef]" /> 1</div>
                                            <div className="flex items-center gap-1.5"><CheckSquare className="w-3.5 h-3.5 text-[#3ebcb0]" /> 0</div>
                                        </div>
                                    </td>
                                </tr>
                                {/* Row 3 */}
                                <tr>
                                    <td className="py-5">
                                        <div className="bg-[#6cedde] text-gray-800 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-[13px]">
                                            UX
                                        </div>
                                    </td>
                                    <td className="py-5 px-4 font-bold text-gray-900">UX Design</td>
                                    <td className="py-5 px-4">
                                        <div className="bg-gray-200 h-2 rounded-full w-full">
                                            <div className="bg-[#1e88e5] h-2 rounded-full w-[25%]"></div>
                                        </div>
                                    </td>
                                    <td className="py-5 px-4">
                                        <div className="flex items-center gap-4 text-xs font-bold text-gray-900">
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
                    <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100">
                        <h2 className="text-lg font-bold text-gray-900 mb-1">Calendar</h2>
                        <div className="text-[13px] font-medium text-gray-600 mb-4">January 2026</div>

                        <div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center text-[13px]">
                            {/* Days Header */}
                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                                <div key={day} className="font-bold text-gray-800 mb-2">{day}</div>
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

                            <div className="text-gray-500 py-1 font-medium">12</div>
                            <div className="relative flex justify-center py-1">
                                <div className="absolute top-1 bottom-1 left-1/2 -right-1 bg-[#cbf1e9] -z-10"></div>
                                <div className="bg-[#3ebcb0] text-white rounded-full w-8 h-8 flex items-center justify-center font-medium shadow-sm relative z-10">13</div>
                            </div>
                            <div className="relative flex justify-center py-1">
                                <div className="absolute top-1 bottom-1 -left-1 -right-1 bg-[#cbf1e9] -z-10"></div>
                                <span className="text-gray-700 font-medium relative z-10 flex h-8 items-center">14</span>
                            </div>
                            <div className="relative flex justify-center py-1">
                                <div className="absolute top-1 bottom-1 -left-1 -right-1 bg-[#cbf1e9] -z-10"></div>
                                <span className="text-gray-700 font-medium relative z-10 flex h-8 items-center">15</span>
                            </div>
                            <div className="relative flex justify-center py-1">
                                <div className="absolute top-1 bottom-1 right-1/2 -left-1 bg-[#cbf1e9] -z-10"></div>
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
                    <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Upcoming</h2>

                        <div className="space-y-4">
                            {/* Event 1 */}
                            <div className="flex gap-4 items-center">
                                <div className="bg-[#fcedfc] text-center w-[60px] h-[64px] rounded-xl flex flex-col justify-center shrink-0">
                                    <div className="font-bold text-gray-900 text-lg leading-tight">17</div>
                                    <div className="text-gray-700 text-xs font-medium">Jan</div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-[15px] mb-1">Practical theory</h4>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1 h-1 bg-[#ff8eef] rounded-full inline-block"></span>
                                        <span className="text-[#ff8eef] text-xs font-bold">Assignment</span>
                                    </div>
                                </div>
                            </div>

                            {/* Event 2 */}
                            <div className="flex gap-4 items-center">
                                <div className="bg-[#f0f6cc] text-center w-[60px] h-[64px] rounded-xl flex flex-col justify-center shrink-0">
                                    <div className="font-bold text-gray-900 text-lg leading-tight">19</div>
                                    <div className="text-gray-700 text-xs font-medium">Jan</div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-[15px] mb-1">Practical theory 1</h4>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1 h-1 bg-[#3ebcb0] rounded-full inline-block"></span>
                                        <span className="text-[#3ebcb0] text-xs font-bold">Test</span>
                                    </div>
                                </div>
                            </div>

                            {/* Event 3 */}
                            <div className="flex gap-4 items-center">
                                <div className="bg-[#fce5df] text-center w-[60px] h-[64px] rounded-xl flex flex-col justify-center shrink-0">
                                    <div className="font-bold text-gray-900 text-lg leading-tight">24</div>
                                    <div className="text-gray-700 text-xs font-medium">Jan</div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-[15px] mb-1">Practical theory 2</h4>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1 h-1 bg-[#FF9F1C] rounded-full inline-block"></span>
                                        <span className="text-[#FF9F1C] text-xs font-bold">Lesson</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
