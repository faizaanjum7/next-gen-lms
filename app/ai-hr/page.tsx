"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { Suspense, useState, useEffect, useRef } from "react";
import { Check, Calendar, Clock, X, Send } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";

function AIHRContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const courseParam = searchParams?.get("course") || "web-dev";
    const levelParam = searchParams?.get("level") || "basic";
    const { addNotification } = useAuth();

    // Helper to format unknown course slugs like "full-stack-java" -> "Full Stack Java"
    const formatCourseName = (slug: string) => {
        return slug
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    // Assessment Process State
    const [assessmentState, setAssessmentState] = useState<'idle' | 'processing' | 'chat' | 'results'>('idle');
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isAssessmentFinished, setIsAssessmentFinished] = useState(false);
    const [isGeneratingPath, setIsGeneratingPath] = useState(false);

    // Chat State
    const courseQuestions: Record<string, { title: string, text: string }[]> = {
        "web-dev": [
            { title: "Question 1", text: "State difference between SVG (Scalable Vector Graphics) and Canvas" },
            { title: "Question 2", text: "Explain the concept of closures in JavaScript and provide a practical use case." },
            { title: "Question 3", text: "How does CSS Flexbox differ from CSS Grid, and when should you use each?" }
        ],
        "data-science": [
            { title: "Question 1", text: "Explain the difference between supervised and unsupervised machine learning." },
            { title: "Question 2", text: "What is the curse of dimensionality, and how can it be mitigated?" },
            { title: "Question 3", text: "Describe a scenario where you would use a Random Forest algorithm over a simple Decision Tree." }
        ],
        "ui-ux": [
            { title: "Question 1", text: "What are the key differences between UI (User Interface) and UX (User Experience)?" },
            { title: "Question 2", text: "Explain the importance of usability testing in the design process." },
            { title: "Question 3", text: "How do you ensure a design is accessible for users with disabilities?" }
        ],
        "ai-ml": [
            { title: "Question 1", text: "What is backpropagation in neural networks, and why is it important?" },
            { title: "Question 2", text: "Explain the concept of overfitting and provide strategies to prevent it." },
            { title: "Question 3", text: "Describe the differences between RNNs (Recurrent Neural Networks) and CNNs (Convolutional Neural Networks)." }
        ],
        "cybersecurity": [
            { title: "Question 1", text: "What are the standard stages of a cyber attack (the Cyber Kill Chain)?" },
            { title: "Question 2", text: "Explain the difference between symmetric and asymmetric encryption." },
            { title: "Question 3", text: "How does a SQL injection attack work, and how can it be prevented?" }
        ]
    };

    const generateDefaultCourseQuestions = (courseName: string) => [
        { title: "Question 1", text: `What are the core principles and foundational concepts involved in ${courseName}?` },
        { title: "Question 2", text: `Can you describe a challenging scenario you might face in ${courseName} and how you would approach solving it?` },
        { title: "Question 3", text: `What modern tools or frameworks are typically used in ${courseName}, and why are they important?` }
    ];

    const displayCourseNameRaw = courseParam ? formatCourseName(courseParam) : "Web Development";
    const assessmentQuestions = courseQuestions[courseParam] || generateDefaultCourseQuestions(displayCourseNameRaw);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [chatHistory, setChatHistory] = useState<{ role: 'ai' | 'user', content: React.ReactNode }[]>([
        {
            role: 'ai',
            content: (
                <div className="flex flex-col gap-2">
                    <span className="font-bold text-[18px]">{assessmentQuestions[0].title}</span>
                    <span className="text-[17px] font-medium leading-relaxed">{assessmentQuestions[0].text}</span>
                </div>
            )
        }
    ]);
    const [answerInput, setAnswerInput] = useState('');
    const chatEndRef = useRef<HTMLDivElement | null>(null);

    // Auto-scroll chat
    useEffect(() => {
        if (assessmentState === 'chat' && chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chatHistory, assessmentState]);

    // Fullscreen enforcement
    useEffect(() => {
        const onFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', onFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
    }, []);

    const enterFullscreen = async () => {
        try {
            if (!document.fullscreenElement) {
                await document.documentElement.requestFullscreen();
            }
        } catch (err) {
            console.error("Error attempting to enable fullscreen:", err);
        }
    };

    const handleStartAssessment = async () => {
        await enterFullscreen();
        setAssessmentState('processing');

        // Simulate processing delay
        setTimeout(() => {
            setAssessmentState('chat');
        }, 3500);
    };

    const handleSendAnswer = () => {
        if (!answerInput.trim()) return;

        const newHistory = [
            ...chatHistory,
            {
                role: 'user' as const,
                content: (
                    <div className="text-[17px] font-medium leading-relaxed">{answerInput}</div>
                )
            }
        ];
        setChatHistory(newHistory);
        setAnswerInput('');

        // Move to next question or complete
        if (currentQuestionIndex < assessmentQuestions.length - 1) {
            const nextIndex = currentQuestionIndex + 1;
            setTimeout(() => {
                setChatHistory(prev => [
                    ...prev,
                    {
                        role: 'ai' as const,
                        content: (
                            <div className="flex flex-col gap-2">
                                <span className="font-bold text-[18px]">{assessmentQuestions[nextIndex].title}</span>
                                <span className="text-[17px] font-medium leading-relaxed">{assessmentQuestions[nextIndex].text}</span>
                            </div>
                        )
                    }
                ]);
                setCurrentQuestionIndex(nextIndex);
            }, 1000); // simulate bot delay
        } else {
            setTimeout(() => {
                setChatHistory(prev => [
                    ...prev,
                    {
                        role: 'ai' as const,
                        content: (
                            <div className="flex flex-col gap-2">
                                <span className="font-bold text-[18px]">Assessment Completed</span>
                                <span className="text-[17px] font-medium leading-relaxed">Thank you for completing the assessment! AI HR is currently evaluating your answers. You will receive your results shortly.</span>
                            </div>
                        )
                    }
                ]);

                // Show results after a brief evaluating delay
                setTimeout(() => {
                    setIsAssessmentFinished(true);
                    setAssessmentState('results');
                    if (document.fullscreenElement) {
                        document.exitFullscreen().catch(err => console.error(err));
                    }
                }, 3000);
            }, 1000);
        }
    };

    // Assessment Scheduling State
    const { addScheduledAssessment } = useAuth();
    const [isScheduling, setIsScheduling] = useState(false);
    const [scheduleDate, setScheduleDate] = useState("");
    const [scheduleTime, setScheduleTime] = useState("");

    // Toast Notification State
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    // Handle Confirm Schedule
    const handleConfirmSchedule = () => {
        if (!scheduleDate || !scheduleTime) {
            alert("Please select both date and time.");
            return;
        }

        // Add to global context for dashboard persistence
        addScheduledAssessment({
            course: displayCourse,
            level: displayLevel,
            date: scheduleDate,
            time: scheduleTime
        });

        // Simulating an API call/success notification
        const formattedDate = new Date(scheduleDate).toLocaleDateString();
        const msg = `Assessment scheduled for ${formattedDate} at ${scheduleTime}`;
        addNotification(msg);
        setToastMessage(msg);
        setIsScheduling(false);
        setShowToast(true);

        // Reset the schedule form
        setScheduleDate("");
        setScheduleTime("");
    };

    // Auto-dismiss toast
    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    const courseNames: Record<string, string> = {
        "web-dev": "Web Development",
        "data-science": "Data Science",
        "ui-ux": "UI/UX Design",
        "ai-ml": "AI & Machine Learning",
        "cybersecurity": "Cybersecurity",
    };

    const displayCourse = courseNames[courseParam] || formatCourseName(courseParam);

    // Capitalize first letter of level
    const displayLevel = levelParam.charAt(0).toUpperCase() + levelParam.slice(1);

    // Dynamic assessment mappings based on course
    const assessmentMappings: Record<string, string[]> = {
        "web-dev": ["Conceptual questions", "Coding challenges", "Real-world scenarios"],
        "data-science": ["Statistical problems", "Data analysis tasks", "Model building exercises"],
        "ui-ux": ["Design critiques", "Wireframing tasks", "User flow scenarios"],
        "ai-ml": ["Algorithm implementation", "Math problem sets", "Dataset evaluation"],
        "cybersecurity": ["Vulnerability identification", "Network analysis", "Security policy review"],
    };

    const defaultAssessments = ["Conceptual questions", "Practical exercises", "Real-world scenarios"];
    const assessments = courseParam && assessmentMappings[courseParam] ? assessmentMappings[courseParam] : defaultAssessments;

    if (assessmentState === 'processing') {
        return (
            <main className="min-h-screen bg-[#eefbf9] font-sans text-gray-900 pb-32">
                <Navbar />
                <div className="pt-28 px-4 max-w-[720px] mx-auto flex justify-center">
                    <div className="w-full bg-[#e6f2f0] border-[2px] border-[#FF9F1C] rounded-2xl p-8 md:px-14 md:py-16 shadow-lg relative flex flex-col items-center justify-center min-h-[450px]">

                        <div className="relative w-32 h-32 mb-8 flex justify-center items-center">
                            <svg className="animate-spin w-full h-full" viewBox="0 0 100 100" fill="none">
                                <defs>
                                    <linearGradient id="spinnerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#FF9F1C" />
                                        <stop offset="50%" stopColor="#FF9F1C" stopOpacity="0.5" />
                                        <stop offset="100%" stopColor="#FF9F1C" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <circle
                                    cx="50" cy="50" r="40"
                                    stroke="url(#spinnerGradient)"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                    className="opacity-100"
                                />
                            </svg>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#FF9F1C] mb-6 tracking-wide">
                            Processing...
                        </h2>
                        <p className="text-gray-900 font-bold text-[17px] text-center mb-8 max-w-lg">
                            AI HR is evaluating your responses to provide an objective skill assessment.
                        </p>
                        <p className="text-gray-500 font-medium text-[15px] text-center">
                            This may take a moment. Please do not close the window.
                        </p>
                    </div>
                </div>
            </main>
        );
    }

    if (assessmentState === 'chat' || assessmentState === 'results') {
        return (
            <>
                {assessmentState === 'chat' && !isAssessmentFinished && !isFullscreen && (
                    <div className="fixed inset-0 z-[200] bg-[#1A1A1A]/95 text-white flex flex-col items-center justify-center p-8 backdrop-blur-md">
                        <h2 className="text-4xl font-bold text-red-500 mb-6 flex items-center gap-3">
                            <span className="bg-red-500/20 p-2 rounded-full"><X className="w-8 h-8" /></span> Assessment Paused
                        </h2>
                        <p className="text-xl text-center mb-10 max-w-2xl leading-relaxed text-gray-200">
                            You have exited full-screen mode. To ensure exam integrity and focus, this assessment must be completed securely. Please return to full-screen to continue.
                        </p>
                        <button
                            onClick={enterFullscreen}
                            className="bg-[#FF9F1C] hover:bg-[#e09841] text-black font-bold text-xl py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            Resume Assessment
                        </button>
                    </div>
                )}

                <div className="fixed inset-0 z-[100] bg-[#eefbf9] flex flex-col md:flex-row font-sans overflow-hidden">
                    {/* Sidebar */}
                    <div className="w-full md:w-[320px] bg-[#e6f2f0] border-r border-[#a8e0d6] p-6 flex flex-col h-full shadow-sm z-10 shrink-0">
                        <div className="font-bold text-[#FF9F1C] text-2xl mb-8 tracking-wide">AI Assessment</div>

                        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">History</div>
                            {isAssessmentFinished ? (
                                <>
                                    <button
                                        onClick={() => setAssessmentState('results')}
                                        className={`w-full text-left p-4 rounded-xl border-2 shadow-sm relative overflow-hidden group transition-all ${assessmentState === 'results' ? 'bg-white border-[#a8e0d6]' : 'bg-transparent border-transparent hover:bg-white/50'}`}
                                    >
                                        {assessmentState === 'results' && <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FF9F1C]"></div>}
                                        <div className="font-bold text-gray-900 text-[15px] mb-1">Assessment Results</div>
                                        <div className="text-gray-600 text-[13px] font-medium mt-1">{displayCourse}</div>
                                    </button>
                                    <button
                                        onClick={() => setAssessmentState('chat')}
                                        className={`w-full text-left p-4 rounded-xl border-2 shadow-sm relative overflow-hidden group transition-all ${assessmentState === 'chat' ? 'bg-white border-[#a8e0d6]' : 'bg-transparent border-transparent hover:bg-white/50'}`}
                                    >
                                        {assessmentState === 'chat' && <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FF9F1C]"></div>}
                                        <div className="font-bold text-gray-900 text-[15px] mb-1">{displayCourse} Assessment</div>
                                        <div className="text-gray-600 text-[13px] font-medium mt-1">Chat Transcript</div>
                                    </button>
                                </>
                            ) : (
                                <button className="w-full text-left bg-white p-4 rounded-xl border-2 border-[#a8e0d6] shadow-sm relative overflow-hidden group">
                                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FF9F1C]"></div>
                                    <div className="font-bold text-gray-900 text-[15px] mb-1">Active Assessment</div>
                                    <div className="text-gray-600 text-[13px] font-medium mt-1">{displayCourse} Assessment</div>
                                </button>
                            )}
                        </div>

                        <div className="mt-auto pt-6 border-t border-[#a8e0d6]">
                            <button onClick={() => {
                                if (document.fullscreenElement) { document.exitFullscreen().catch(() => { }); }
                                setAssessmentState('idle');
                                setIsAssessmentFinished(false);
                            }} className="text-gray-600 hover:text-red-500 font-bold w-full text-left flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-colors bg-white border border-gray-300 hover:bg-red-50 hover:border-red-200 shadow-sm">
                                <X className="w-5 h-5 stroke-[3]" /> End Assessment
                            </button>
                        </div>
                    </div>

                    {/* Main Chat/Result Area */}
                    <div className="flex-1 flex justify-center items-start md:items-center bg-[#eefbf9] p-4 md:p-8 h-full relative overflow-y-auto overflow-x-hidden">

                        {assessmentState === 'chat' && (
                            <div className="w-full max-w-5xl h-full max-h-[90vh] bg-[#e6f2f0] border-[2px] border-[#FF9F1C] rounded-2xl shadow-xl relative flex flex-col overflow-hidden shrink-0">

                                {/* Chat History Container */}
                                <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-6 flex flex-col scroll-smooth">
                                    {chatHistory.map((msg, i) => (
                                        <div key={i} className={`flex w-full ${msg.role === 'ai' ? 'justify-start' : 'justify-end'}`}>
                                            {msg.role === 'ai' ? (
                                                <div className="bg-[#f2aa5c] text-black px-8 py-6 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm">
                                                    {msg.content}
                                                </div>
                                            ) : (
                                                <div className="bg-white text-gray-900 px-8 py-6 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm border border-[#a8e0d6]">
                                                    {msg.content}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    <div ref={chatEndRef} />
                                </div>

                                {/* Input Area */}
                                {!isAssessmentFinished && (
                                    <div className="p-6 md:p-10 pt-4 bg-[#e6f2f0] w-full border-t border-[#a8e0d6]/50">
                                        <form onSubmit={(e) => { e.preventDefault(); handleSendAnswer(); }} className="relative">
                                            <input
                                                type="text"
                                                value={answerInput}
                                                onChange={(e) => setAnswerInput(e.target.value)}
                                                placeholder="Type your answer..."
                                                className="w-full bg-white rounded-xl py-4 pl-6 pr-14 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#FF9F1C] shadow-sm text-gray-900 placeholder:text-gray-500 border border-gray-200"
                                            />
                                            <button
                                                type="submit"
                                                disabled={!answerInput.trim()}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#FF9F1C] hover:bg-[#e09841] text-white p-2.5 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm inline-flex items-center justify-center"
                                            >
                                                <Send className="w-5 h-5 -ml-0.5" />
                                            </button>
                                        </form>
                                    </div>
                                )}
                            </div>
                        )}

                        {assessmentState === 'results' && (
                            <div className="w-full max-w-3xl bg-[#e6f2f0] border-[2px] border-[#FF9F1C] rounded-2xl p-8 md:px-12 md:py-10 shadow-xl relative flex flex-col my-auto shrink-0 animate-in fade-in zoom-in-95 duration-500">
                                <h2 className="text-3xl md:text-4xl font-black text-[#FF9F1C] text-center mb-8">
                                    Skill Assessment Complete!
                                </h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                    <div className="border border-[#a8e0d6] rounded-xl p-6 text-center flex flex-col justify-center gap-2 bg-[#dcefe9] shadow-sm">
                                        <div className="font-bold text-gray-700 text-[17px]">Your self-accessed level</div>
                                        <div className="font-bold text-gray-900 text-[22px] tracking-wide">{displayLevel}</div>
                                    </div>
                                    <div className="border border-[#a8e0d6] rounded-xl p-6 text-center flex flex-col justify-center gap-2 bg-[#dcefe9] shadow-sm">
                                        <div className="font-bold text-[#b4690e] text-[17px]">AI HR recommended level</div>
                                        <div className="font-bold text-gray-900 text-[22px] tracking-wide">{displayLevel}</div>
                                    </div>
                                </div>

                                <div className="mb-8 space-y-6">
                                    <div>
                                        <h4 className="font-bold text-[#6b5846] mb-3 text-[17px]">Strengths</h4>
                                        <ul className="list-disc pl-6 text-gray-800 font-medium space-y-1">
                                            <li><span className="text-gray-900">Demonstrated good foundational knowledge.</span></li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-[#8c1c1c] mb-3 text-[17px]">Areas to Improve</h4>
                                        <ul className="list-disc pl-6 text-gray-800 font-medium space-y-1">
                                            <li><span className="text-gray-900">Continue practicing advanced concepts and problem-solving.</span></li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-[#96621f] mb-3 text-[17px]">Reason for Level Decision</h4>
                                        <p className="text-gray-900 font-medium leading-relaxed">
                                            Based on your performance across conceptual, coding, and real-world scenario questions, the AI HR system has determined your current skill level.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-center mt-2">
                                    <button
                                        onClick={() => {
                                            setIsGeneratingPath(true);
                                            setTimeout(() => {
                                                router.push(`/learning-path?course=${courseParam}&level=${levelParam}`);
                                            }, 3000);
                                        }}
                                        disabled={isGeneratingPath}
                                        className={`${isGeneratingPath ? 'bg-[#3ebcb0] text-black opacity-100' : 'bg-[#f2aa5c] hover:bg-[#e09841] text-black'} font-bold text-[17px] py-4 px-10 rounded-xl w-full max-w-[400px] shadow-sm transition-all duration-300`}
                                    >
                                        {isGeneratingPath ? "Generating Learning Path..." : "Start My Learning Path"}
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </>
        );
    }

    return (
        <main className="min-h-screen bg-[#eefbf9] font-sans text-gray-900 selection:bg-[#3a8d84] selection:text-white pb-32">
            <Navbar />

            <div className="pt-28 px-4 max-w-[720px] mx-auto flex justify-center">
                {/* Main AI HR Card */}
                <div className="w-full bg-[#e6f2f0] border-[2px] border-[#FF9F1C] rounded-2xl p-8 md:px-14 md:py-10 shadow-lg relative overflow-hidden">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-[#FF9F1C] mb-6">Meet AI HR</h1>
                        <p className="text-gray-700 font-medium text-[16px] leading-relaxed max-w-2xl mx-auto">
                            AI HR will objectively evaluate your current skill level through a series of tailored assessments. This ensures personalized learning paths aligned with your true capabilities and job-readiness goals.
                        </p>
                    </div>

                    {/* Display Pills */}
                    <div className="flex flex-col gap-4 mb-10">
                        {/* Selected Course */}
                        <div className="bg-[#a8e0d6] p-1.5 rounded-md flex items-center shadow-sm w-full">
                            <span className="font-bold text-gray-900 w-[140px] px-3 text-[15px]">Selected course</span>
                            <div className="bg-white text-gray-900 font-medium py-1.5 px-4 rounded w-full min-h-[36px] flex items-center">
                                {displayCourse}
                            </div>
                        </div>

                        {/* Selected Level */}
                        <div className="bg-[#a8e0d6] p-1.5 rounded-md flex items-center shadow-sm w-full">
                            <span className="font-bold text-gray-900 w-[140px] px-3 text-[15px]">Selected level</span>
                            <div className="bg-white text-gray-900 font-medium py-1.5 px-4 rounded w-full min-h-[36px] flex items-center">
                                {displayLevel}
                            </div>
                        </div>
                    </div>

                    {/* Assessments Included */}
                    <div className="mb-10">
                        <h3 className="text-[17px] font-bold text-black mb-6">Assessment types included:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4">
                            {assessments.map((assessment, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="bg-white rounded-full p-0.5 flex-shrink-0">
                                        <Check className="w-4 h-4 text-black stroke-[3]" />
                                    </div>
                                    <span className="text-black font-medium text-[16px]">{assessment}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons & Scheduling Area */}
                    <div className="mt-10">
                        {!isScheduling ? (
                            <div className="flex flex-col items-center gap-4 justify-center">
                                <button
                                    onClick={handleStartAssessment}
                                    className="bg-[#f2aa5c] hover:bg-[#e09841] text-black font-bold text-[16px] py-3.5 px-10 rounded-md w-full max-w-[400px] shadow-sm transition-colors duration-300"
                                >
                                    Start Skill Assessment
                                </button>
                                <button
                                    onClick={() => setIsScheduling(true)}
                                    className="bg-transparent border-[2px] border-[#f2aa5c] hover:bg-[#f2aa5c]/10 text-black font-bold text-[16px] py-3 px-10 rounded-md w-full max-w-[400px] transition-colors duration-300"
                                >
                                    Schedule for Later
                                </button>
                            </div>
                        ) : (
                            <div className="bg-white border border-[#a8e0d6] rounded-xl p-6 shadow-sm max-w-[500px] mx-auto animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <h4 className="text-[17px] font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-[#f2aa5c]" />
                                    Choose Date & Time
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[14px] font-medium text-gray-700">Date</label>
                                        <div className="relative">
                                            <input
                                                type="date"
                                                value={scheduleDate}
                                                onChange={(e) => setScheduleDate(e.target.value)}
                                                className="w-full border border-gray-300 rounded-md py-2 px-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#a8e0d6] focus:border-[#a8e0d6] bg-transparent text-gray-900"
                                                min={new Date().toISOString().split('T')[0]}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[14px] font-medium text-gray-700">Time</label>
                                        <div className="relative">
                                            <input
                                                type="time"
                                                value={scheduleTime}
                                                onChange={(e) => setScheduleTime(e.target.value)}
                                                className="w-full border border-gray-300 rounded-md py-2 px-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#a8e0d6] focus:border-[#a8e0d6] bg-transparent text-gray-900"
                                            />
                                            <Clock className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none bg-white pl-1 hidden" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={handleConfirmSchedule}
                                        className="flex-1 bg-[#1A1A1A] hover:bg-[#333333] text-white font-medium text-[15px] py-2.5 rounded-md transition-colors duration-200"
                                    >
                                        Confirm
                                    </button>
                                    <button
                                        onClick={() => setIsScheduling(false)}
                                        className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium text-[15px] py-2.5 rounded-md transition-colors duration-200"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>

            {/* Toast Notification */}
            {showToast && (
                <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-[#1A1A1A] text-white px-6 py-4 rounded-lg shadow-2xl z-50 animate-in slide-in-from-right slide-in-from-bottom-5 duration-300 flex items-center justify-between min-w-[300px] border-l-4 border-[#FF9F1C]">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#FF9F1C]/20 p-1.5 rounded-full">
                            <Check className="w-5 h-5 text-[#FF9F1C]" />
                        </div>
                        <span className="font-medium text-[15px]">{toastMessage}</span>
                    </div>
                    <button
                        onClick={() => setShowToast(false)}
                        className="text-gray-400 hover:text-white transition-colors p-1"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            )}
        </main>
    );
}

export default function AIHRPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#eefbf9] flex items-center justify-center">Loading...</div>}>
            <AIHRContent />
        </Suspense>
    );
}
