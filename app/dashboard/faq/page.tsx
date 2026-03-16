"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "What is Next-Gen LMS?",
        answer: "Next-Gen LMS is a comprehensive learning management system designed to empower learners with modern, accessible, and structured educational content. It supports an intuitive interface to help you track your progress smoothly.",
    },
    {
        question: "Who can use this platform?",
        answer: "Our platform is designed for individuals, students, and professionals eager to learn and improve their skills, regardless of their prior experience.",
    },
    {
        question: "Will I get a certificate after completing a course?",
        answer: "Yes, you will receive a verifiable certificate of completion for every course that you successfully finish.",
    },
    {
        question: "Do I need any prior knowledge to start?",
        answer: "Not necessarily. We offer courses ranging from beginner to advanced levels. Course prerequisites are usually mentioned in the course details.",
    },
    {
        question: "Can I learn at my own pace?",
        answer: "Absolutely! Next-Gen LMS allows you to access course materials anytime, anywhere, and learn at a pace that perfectly suits your schedule.",
    },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="p-6 md:p-12 w-full max-w-[1000px] mx-auto min-h-[calc(100vh-80px)]">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h2 className="text-[28px] md:text-[32px] font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                    Frequently Asked Questions
                </h2>
                <p className="text-[17px] text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium transition-colors">
                    Got questions? We&apos;ve got answers. If you can&apos;t find what you are looking for, feel free to contact us.
                </p>
            </div>

            {/* FAQ List */}
            <div className="flex flex-col gap-5">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div
                            key={index}
                            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "border-[#3bc4b6] shadow-sm" : "border-[#3bc4b6] opacity-90 dark:opacity-60"
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-5 md:px-8 md:py-6 bg-white dark:bg-[#1e293b] outline-none focus:outline-none transition-colors"
                            >
                                <span className="text-[16px] font-semibold text-gray-900 dark:text-white text-left pr-4 transition-colors">
                                    {faq.question}
                                </span>
                                <span className="shrink-0 ml-2">
                                    <ChevronDown
                                        className={`w-5 h-5 text-[#3bc4b6] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                        strokeWidth={2.5}
                                    />
                                </span>
                            </button>

                            <div
                                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out bg-white dark:bg-[#1e293b] ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="pb-6 px-5 md:px-8 text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed transition-colors">
                                        <div className="pt-4 border-t border-gray-100 dark:border-gray-800">{faq.answer}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
