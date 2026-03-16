import React from "react";
import Link from "next/link";
import { CreditCard, Wallet } from "lucide-react";

export default function PaymentsHistoryPage() {
    return (
        <div className="flex-1 w-full flex flex-col pt-6 px-1 lg:px-6">
            <div className="flex flex-col mb-8 mt-2 lg:mt-0 px-2 lg:px-0">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white transition-colors">Payments History</h1>
            </div>

            {/* Top Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 px-2 lg:px-0">
                {/* Total Spent */}
                <div className="bg-[#d4f5f0] dark:bg-[#1a2e2b] rounded-xl p-6 shadow-sm border border-[#aae8e0] dark:border-[#2a9c4a] min-h-[120px] flex flex-col justify-center transition-colors">
                    <h3 className="text-gray-900 dark:text-white font-bold text-[18px] mb-4 transition-colors">Total Spent</h3>
                    <p className="text-gray-800 dark:text-gray-300 text-[15px] font-medium transition-colors">Rs 0</p>
                </div>

                {/* Active Subscriptions */}
                <div className="bg-[#fcdca0] dark:bg-[#3d3a2e] rounded-xl p-6 shadow-sm border border-[#f5c970] dark:border-[#6b5a3a] min-h-[120px] flex flex-col justify-center transition-colors">
                    <h3 className="text-gray-900 dark:text-white font-bold text-[18px] mb-4 transition-colors">Active Subscriptions</h3>
                    <p className="text-gray-800 dark:text-gray-300 text-[15px] font-medium transition-colors">0 Courses</p>
                </div>

                {/* Checkout Link */}
                <Link href="/dashboard/payments/checkout" className="block transition-transform hover:scale-[1.02]">
                    <div className="bg-[#d4f5f0] dark:bg-[#1a2e2b] rounded-xl p-6 shadow-sm border border-[#aae8e0] dark:border-[#2a9c4a] min-h-[120px] flex flex-col justify-center cursor-pointer hover:shadow-md transition-all">
                        <h3 className="text-gray-900 dark:text-white font-bold text-[18px] mb-4 transition-colors">Checkout</h3>
                        <p className="text-gray-800 dark:text-gray-300 text-[15px] font-medium transition-colors">UPI / Card</p>
                    </div>
                </Link>
            </div>

            {/* Payment History Section */}
            <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col flex-1 px-2 lg:px-0 mx-2 lg:mx-0 transition-colors">
                <div className="p-5 border-b border-gray-100 dark:border-gray-800 transition-colors">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors">Payment History</h2>
                </div>

                {/* Empty State */}
                <div className="flex-1 flex flex-col items-center justify-center py-20 min-h-[400px]">
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl mb-4 text-gray-400 dark:text-gray-500 transition-colors">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                            <path d="M7 15h.01" />
                            <path d="M11 15h2" />
                        </svg>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 font-medium transition-colors">No payments made yet</p>
                </div>
            </div>
        </div>
    );
}
