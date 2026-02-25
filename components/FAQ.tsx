"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const faqs = [
    {
        question: "What is Next-Gen LMS?",
        answer: "Next-Gen LMS is an AI-powered learning platform designed to personalize your educational journey through adaptive learning paths and real-time feedback.",
    },
    {
        question: "How does the AI mentor work?",
        answer: "The AI mentor analyzes your learning style and performance to provide customized recommendations, answer questions 24/7, and help you overcome learning bottlenecks.",
    },
    {
        question: "Can I get a certificate after completing a course?",
        answer: "Yes, all our courses come with a verified certificate upon completion, which you can share on your professional profile.",
    },
    {
        question: "Is there a free trial available?",
        answer: "Absolutely! We offer a 14-day free trial so you can explore all the features and courses before committing to a subscription.",
    },
    {
        question: "Can I access courses on mobile?",
        answer: "Yes, our platform is fully responsive and accessible on all devices, allowing you to learn anytime, anywhere.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-20 bg-[#eefbf9]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">
                    Frequently Asked Questions
                </h2>
                <p className="text-center text-gray-500 mb-12">
                    Got questions? We've got answers. If you can't find what you are looking for, feel free to contact us.
                </p>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                            >
                                <span className="font-semibold text-gray-900">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-[#3a8d84]" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                )}
                            </button>
                            <div
                                className={cn(
                                    "px-6 pb-6 text-gray-600 transition-all duration-300 ease-in-out",
                                    openIndex === index ? "block" : "hidden"
                                )}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Button className="bg-[#2EC4B6] hover:bg-[#25a094] text-white font-semibold py-2 px-6 rounded-md shadow-md transition-all duration-300">
                        Contact Support
                    </Button>
                </div>
            </div>
        </section>
    );
}
