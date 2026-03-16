"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate an API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: "", email: "", subject: "", message: "" });
            
            // Auto hide success message after 5 seconds
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#2EC4B6] selection:text-white flex flex-col">
            <Navbar />

            {/* Page Header */}
            <div className="bg-[#eefbf9] pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                        <span className="bg-gradient-to-r from-[#FF9F1C] to-[#2EC4B6] bg-clip-text text-transparent break-words">
                            Get in Touch
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto">
                        Have a question, feedback, or need assistance? Our support team is here to help you on your learning journey.
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    
                    {/* Left Side: Contact Information */}
                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
                            <p className="text-gray-600 text-lg">
                                Reach out to us directly using the information below, or fill out the form to send us a message.
                            </p>
                        </div>

                        <div className="flex flex-col gap-8 flex-1">
                            {/* Email */}
                            <div className="flex items-start gap-5 p-6 rounded-[24px] bg-[#f8f9fa] border border-gray-100 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
                                <div className="w-14 h-14 rounded-full bg-[#eefbf9] flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-[#2EC4B6]" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Email Us</h4>
                                    <p className="text-gray-600 mb-2">For general inquiries and support.</p>
                                    <a href="mailto:support@nextgenlms.com" className="text-[#FF9F1C] font-semibold hover:underline">
                                        support@nextgenlms.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-5 p-6 rounded-[24px] bg-[#f8f9fa] border border-gray-100 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
                                <div className="w-14 h-14 rounded-full bg-[#fff5e6] flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-[#FF9F1C]" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Call Us</h4>
                                    <p className="text-gray-600 mb-2">Mon-Fri from 9am to 6pm EST.</p>
                                    <a href="tel:+15551234567" className="text-[#2EC4B6] font-semibold hover:underline">
                                        +1 (555) 123-4567
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-5 p-6 rounded-[24px] bg-[#f8f9fa] border border-gray-100 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
                                <div className="w-14 h-14 rounded-full bg-[#f0f4ff] flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-[#3b82f6]" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Headquarters</h4>
                                    <p className="text-gray-600">
                                        123 Learning Street<br />
                                        EdTech City, NY 10001
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 relative overflow-hidden">
                        {/* Decorative blob corner */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#eefbf9] rounded-full blur-3xl opacity-60 pointer-events-none"></div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <MessageSquare className="w-6 h-6 text-[#FF9F1C]" />
                            Send a Message
                        </h3>

                        {submitSuccess && (
                            <div className="mb-8 p-4 bg-[#eefbf9] border border-[#2EC4B6] text-[#28b0a3] rounded-xl font-medium flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
                                <div className="w-8 h-8 rounded-full bg-[#2EC4B6] flex items-center justify-center shrink-0 text-white">✓</div>
                                Your message has been sent successfully. We will get back to you soon!
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                            {/* Name & Email Row (Desktop) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-[15px] font-bold text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                        className="w-full bg-[#f8f9fa] px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2EC4B6] focus:ring-1 focus:ring-[#2EC4B6] text-gray-800 font-medium placeholder:text-gray-400 transition-all"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-[15px] font-bold text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                        className="w-full bg-[#f8f9fa] px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2EC4B6] focus:ring-1 focus:ring-[#2EC4B6] text-gray-800 font-medium placeholder:text-gray-400 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="subject" className="text-[15px] font-bold text-gray-700">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="How can we help?"
                                    required
                                    className="w-full bg-[#f8f9fa] px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2EC4B6] focus:ring-1 focus:ring-[#2EC4B6] text-gray-800 font-medium placeholder:text-gray-400 transition-all"
                                />
                            </div>

                            {/* Message */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-[15px] font-bold text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here..."
                                    required
                                    rows={5}
                                    className="w-full bg-[#f8f9fa] px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2EC4B6] focus:ring-1 focus:ring-[#2EC4B6] text-gray-800 font-medium placeholder:text-gray-400 transition-all resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#2EC4B6] text-white py-4 rounded-xl text-lg font-bold mt-2 border-2 border-transparent hover:bg-transparent hover:text-[#2EC4B6] hover:border-[#2EC4B6] transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            <Footer />
        </main>
    );
}
