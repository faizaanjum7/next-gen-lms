"use client";

import React from "react";

const announcements = [
    {
        id: 1,
        titlePrefix: "New Module Released:",
        titleSuffix: "Quantum Computing Basics",
        date: "27 Jan 2026",
        desc: "A new module covering Cloud Fundamentals, Deployment Models, and Use Cases has been added.\nWe recommend completing this module before starting the next assignment.",
        buttonText: "Go to course"
    },
    {
        id: 2,
        titlePrefix: "Recorded Session Uploaded",
        titleSuffix: "",
        date: "26 Jan 2026",
        desc: "The recording of the Live Web Development Workshop held on Jan 25 is now available.",
        buttonText: "Watch Recording"
    },
    {
        id: 3,
        titlePrefix: "Assignment 3 Released:",
        titleSuffix: "Python Programming",
        date: "25 Jan 2026",
        desc: "Assignment 3 for Python Programming is now live.\nDeadline: 30 Jan 2026, 11:59 PM.",
        buttonText: "Go to Assignment"
    },
    {
        id: 4,
        titlePrefix: "Upcoming Live Session",
        titleSuffix: "",
        date: "23 Jan 2026",
        desc: "Join us for a live session on Career Opportunities in Tech on 31 Jan 2026 at 6:00 PM.",
        buttonText: "Set Reminder"
    }
];

export default function AnnouncementsPage() {
    return (
        <div className="p-6 md:p-8 w-full max-w-[1200px]">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Latest Announcements
            </h1>

            <div className="space-y-4">
                {announcements.map((announcement) => (
                    <div
                        key={announcement.id}
                        className="bg-white rounded-md p-5 md:px-6 md:py-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-shadow hover:shadow-md"
                        style={{
                            border: "1px solid #7edbd2",
                            boxShadow: "0 2px 8px rgba(46, 196, 182, 0.15)"
                        }}
                    >
                        <div className="flex-1">
                            <h3 className="text-lg md:text-[1.15rem] mb-1.5 leading-tight">
                                <span className="font-semibold" style={{ color: "#2E8B57" }}>{announcement.titlePrefix}</span>
                                {announcement.titleSuffix && (
                                    <span className="font-bold text-gray-900 ml-1.5">{announcement.titleSuffix}</span>
                                )}
                            </h3>
                            <p className="text-[14px] mb-3">
                                <span className="font-bold text-gray-900">Posted:</span>
                                <span className="text-gray-800 ml-1.5">{announcement.date}</span>
                            </p>
                            <div className="text-[14px] text-gray-800 space-y-0.5">
                                {announcement.desc.split('\n').map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        </div>

                        <div className="shrink-0 mt-3 md:mt-0 self-stretch md:self-auto flex items-end md:items-center">
                            <button className="bg-[#2ec4b6] hover:bg-[#25a18e] transition-colors text-white px-5 py-2 rounded-md text-[14px] font-semibold md:w-auto">
                                {announcement.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
