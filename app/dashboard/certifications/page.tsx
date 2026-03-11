"use client";

import React from "react";
import Image from "next/image";

interface Certificate {
    title: string;
    completionDate: string;
    issuedOn: string;
    image: string;
}

interface NewCertificate {
    title: string;
    type: string;
    image: string;
}

const earnedCertificates: Certificate[] = [
    {
        title: "UI/UX Design",
        completionDate: "10 Dec, 2024",
        issuedOn: "12 Dec, 2024",
        image: "/webdev.png",
    },
    {
        title: "Java Programming",
        completionDate: "15 Nov, 2024",
        issuedOn: "17 Nov, 2024",
        image: "/java.png",
    },
    {
        title: "DevOps",
        completionDate: "07 Jan, 2024",
        issuedOn: "09 Jan, 2024",
        image: "/devops.png",
    },
];

const newCertifications: NewCertificate[] = [
    {
        title: "Advanced Front End Development",
        type: "Associate Certification",
        image: "/webdev.png",
    },
    {
        title: "Cyber Security",
        type: "Expert Certification",
        image: "/cloudcomputing.png",
    },
    {
        title: "Full Stack Development",
        type: "Associate Certification",
        image: "/machinelearning.png",
    },
];

const skills = ["Data Analysis", "Python", "HTML/CSS", "Java Script", "ReactJs"];

export default function CertificationsPage() {
    return (
        <div className="p-6 md:p-8 w-full max-w-[1400px]">
            <h2 className="text-[22px] md:text-[24px] font-bold text-gray-900 mb-8">
                My Learning Milestones
            </h2>

            <div className="flex flex-col gap-8">

                {/* Top Section: Earned & Skills */}
                <div className="flex flex-col xl:flex-row gap-8 items-start">

                    {/* Certifications Earned Section */}
                    <section className="flex-1 w-full">
                        <h3 className="text-[18px] font-semibold text-gray-900 mb-4">Certifications Earned</h3>
                        <div className="flex flex-col gap-4">
                            {earnedCertificates.map((cert, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
                                >
                                    <div className="flex flex-row items-center gap-4">
                                        <div className="w-[68px] h-[68px] shrink-0 rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden bg-[#fbfdff]">
                                            <Image
                                                src={cert.image}
                                                alt={cert.title}
                                                width={44}
                                                height={44}
                                                className="object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-[15px] font-semibold text-gray-900 leading-tight">
                                                {cert.title}
                                            </h4>
                                            <p className="text-[13px] text-gray-500 mt-1">
                                                Completion Date: {cert.completionDate} <span className="mx-1">Issued on:</span> {cert.issuedOn}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 mt-2 md:mt-0">
                                        <button className="px-5 py-2 rounded-md text-[13px] font-medium border border-[#f5a524] text-[#f5a524] hover:bg-[#fff7ed] transition-colors whitespace-nowrap">
                                            View
                                        </button>
                                        <button className="px-5 py-2 rounded-md text-[13px] font-medium border border-[#3bc4b6] text-[#3bc4b6] hover:bg-[#ebfbf9] transition-colors whitespace-nowrap">
                                            Download Certificate
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Right Column: Skills Achieved */}
                    <section className="w-full xl:w-[320px] shrink-0">
                        <h3 className="text-[18px] font-semibold text-gray-900 mb-4">Skills Achieved</h3>
                        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm min-h-[140px]">
                            <div className="flex flex-wrap gap-2.5">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-1.5 border border-gray-200 rounded-full text-[13px] text-gray-600 bg-white"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

                {/* Bottom Section: Earn New Certification */}
                <section className="w-full">
                    <h3 className="text-[18px] font-semibold text-gray-900 mb-4">Earn New Certification</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {newCertifications.map((cert, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex flex-col hover:border-[#3bc4b6] transition-colors cursor-pointer group"
                            >
                                <div className="w-16 h-16 rounded-lg border border-gray-200 flex items-center justify-center bg-[#fbfdff] mb-4 overflow-hidden group-hover:border-[#3bc4b6] transition-colors">
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        width={40}
                                        height={40}
                                        className="object-contain p-1"
                                    />
                                </div>
                                <h4 className="text-[15px] font-semibold text-gray-900 leading-tight mb-1">
                                    {cert.title}
                                </h4>
                                <p className="text-[13px] text-gray-500">{cert.type}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
