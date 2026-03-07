"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, ChevronLeft } from "lucide-react";

export default function CheckoutPage() {
    const [expandedAccordion, setExpandedAccordion] = useState<"upi" | "card" | null>(null);

    const toggleAccordion = (type: "upi" | "card") => {
        setExpandedAccordion(prev => prev === type ? null : type);
    };

    return (
        <div className="flex-1 w-full flex flex-col pt-6 px-1 lg:px-6 mb-20">
            {/* Header with Back Button */}
            <div className="flex items-center gap-4 mb-8 mt-2 lg:mt-0 px-2 lg:px-0">
                <Link
                    href="/dashboard/payments"
                    className="flex items-center justify-center bg-[#4fded0] hover:bg-[#3bc4b6] text-white p-1.5 rounded-full shadow-sm transition-colors"
                >
                    <ChevronLeft className="w-5 h-5" />
                </Link>
                <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
            </div>

            <div className="max-w-4xl mx-auto w-full px-2 lg:px-0">
                {/* Your Order Section */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-8 w-full">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Your Order</h2>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                        <span className="text-lg font-semibold text-gray-900">Course Name</span>
                    </div>

                    <div className="flex justify-between items-center py-4 border-t border-gray-100">
                        <span className="text-gray-600 font-medium">Total</span>
                        <span className="text-gray-900 font-medium">Rs 0</span>
                    </div>
                    {/* Add a subtle underline below to match UI */}
                    <div className="w-full border-b border-gray-200 mt-2"></div>
                </div>

                {/* Payment Section */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Payment</h2>

                    <div className="flex flex-col gap-4">
                        {/* UPI Accordion */}
                        <div className={`border ${expandedAccordion === "upi" ? "border-[#4fded0]" : "border-[#2EC4B6] hover:bg-gray-50"} rounded-xl overflow-hidden transition-all duration-300`}>
                            <button
                                onClick={() => toggleAccordion("upi")}
                                className="w-full flex justify-between items-center p-5 outline-none"
                            >
                                <span className={`text-lg font-bold ${expandedAccordion === "upi" ? "text-gray-900" : "text-gray-900"}`}>
                                    UPI
                                </span>
                                {expandedAccordion === "upi" ? (
                                    <ChevronUp className="w-5 h-5 text-[#4fded0]" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-[#4fded0]" />
                                )}
                            </button>

                            {/* Expanded UPI Content */}
                            {expandedAccordion === "upi" && (
                                <div className="p-5 pt-0 border-t border-[#4fded0]/20 bg-white">
                                    <p className="text-[#4fded0] text-sm font-medium mb-4">Scan the QR or Enter the UPI ID</p>

                                    <h3 className="text-lg font-bold text-gray-900 mb-4">UPI QR</h3>

                                    <div className="bg-[#eafdfa] rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6 mb-8">
                                        <div className="bg-white p-2 rounded-lg shrink-0">
                                            {/* Dummy QR Code Vector */}
                                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="text-gray-900">
                                                <rect width="100" height="100" fill="white" />
                                                <rect x="10" y="10" width="30" height="30" stroke="black" strokeWidth="6" fill="black" />
                                                <rect x="20" y="20" width="10" height="10" fill="white" />
                                                <rect x="60" y="10" width="30" height="30" stroke="black" strokeWidth="6" fill="black" />
                                                <rect x="70" y="20" width="10" height="10" fill="white" />
                                                <rect x="10" y="60" width="30" height="30" stroke="black" strokeWidth="6" fill="black" />
                                                <rect x="20" y="70" width="10" height="10" fill="white" />
                                                <path d="M60 60 H70 V70 H60 Z M70 60 H80 V70 H70 Z M80 60 H90 V70 H80 Z M60 70 H70 V80 H60 Z M80 70 H90 V80 H80 Z M70 80 H80 V90 H70 Z M60 80 H70 V90 H60 Z M80 80 H90 V90 H80 Z" fill="black" />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
                                            <p className="text-gray-900 font-medium">Scan and pay using any UPI app</p>
                                            <div className="flex items-center gap-4">
                                                {/* PhonePe logo mockup */}
                                                <div className="w-10 h-10 rounded-full bg-[#5f259f] flex items-center justify-center text-white font-bold text-xl">
                                                    पे
                                                </div>
                                                {/* GPay logo mockup text */}
                                                <div className="flex items-center">
                                                    <span className="text-[#EA4335] font-bold text-xl">G</span>
                                                    <span className="text-gray-600 font-bold ml-1 text-lg">Pay</span>
                                                </div>
                                                {/* Paytm logo mockup text */}
                                                <div className="text-[#00B9F1] font-bold text-lg bg-white px-2 py-0.5 rounded shadow-sm border border-gray-100">
                                                    Pay<span className="text-[#002E6E]">tm</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Pay with UPI ID / Number</h3>
                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            placeholder="example@okhdfcbank"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4fded0] focus:border-transparent transition-all placeholder:text-gray-400 text-gray-900"
                                        />
                                        <button className="w-[180px] bg-[#2EC4B6] hover:bg-[#25a59a] text-white font-medium py-3 px-6 rounded-lg transition-colors">
                                            Verify and Pay
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Credit / Debit Card Accordion */}
                        <div className={`border ${expandedAccordion === "card" ? "border-[#4fded0]" : "border-[#2EC4B6] hover:bg-gray-50"} rounded-xl overflow-hidden transition-all duration-300`}>
                            <button
                                onClick={() => toggleAccordion("card")}
                                className="w-full flex justify-between items-center p-5 outline-none"
                            >
                                <span className={`text-lg font-bold ${expandedAccordion === "card" ? "text-gray-900" : "text-gray-900"}`}>
                                    Credit / Debit Card
                                </span>
                                {expandedAccordion === "card" ? (
                                    <ChevronUp className="w-5 h-5 text-[#4fded0]" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-[#4fded0]" />
                                )}
                            </button>

                            {/* Expanded Card Content */}
                            {expandedAccordion === "card" && (
                                <div className="p-5 pt-0 border-t border-[#4fded0]/20 bg-white">
                                    <p className="text-[#4fded0] text-sm font-medium mb-6">Enter the card details</p>

                                    <div className="space-y-5 max-w-lg">
                                        <input
                                            type="text"
                                            placeholder="Card Number"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4fded0] focus:border-transparent transition-all placeholder:text-gray-400 text-gray-900"
                                        />

                                        <input
                                            type="text"
                                            placeholder="Card Name"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4fded0] focus:border-transparent transition-all placeholder:text-gray-400 text-gray-900"
                                        />

                                        <div className="grid grid-cols-2 gap-4">
                                            <input
                                                type="text"
                                                placeholder="MM / YY"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4fded0] focus:border-transparent transition-all placeholder:text-gray-400 text-gray-900"
                                            />
                                            <input
                                                type="text"
                                                placeholder="CVC"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4fded0] focus:border-transparent transition-all placeholder:text-gray-400 text-gray-900"
                                            />
                                        </div>

                                        <button className="w-[180px] bg-[#2EC4B6] hover:bg-[#25a59a] text-white font-medium py-3 px-6 rounded-lg mt-4 transition-colors">
                                            Pay Now
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
