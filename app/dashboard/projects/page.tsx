"use client";

import GetStartedSection from "@/components/projects/GetStartedSection";
import ProjectsListSection from "@/components/projects/ProjectsListSection";

export default function ProjectsPage() {
    return (
        <div className="p-6 md:p-8 max-w-[1400px] mx-auto space-y-10">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">Hey, what will you create today ?</h1>
                <p className="text-gray-500 dark:text-gray-400 text-[15px] transition-colors">Get started by selecting the content type from the option below</p>
            </div>

            <GetStartedSection />

            <ProjectsListSection />
        </div>
    );
}
