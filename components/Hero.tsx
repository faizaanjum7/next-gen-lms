import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#eefbf9] dark:bg-[#0f172a] transition-colors duration-300">
            {/* Decorative blob/gradient background - approximated */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#d0f0eb] dark:from-[#1e293b] to-transparent opacity-50 rounded-bl-full -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text Content */}
                    <div className="text-center lg:text-left space-y-6">
                        <div className="flex justify-center lg:justify-start">
                            <Badge variant="soft" className="px-4 py-1 text-sm font-medium rounded-full bg-[#dbeceb] dark:bg-gray-800 text-[#3a8d84] dark:text-[#2EC4B6] border-0 flex items-center gap-2">
                                <Sparkles className="w-4 h-4" />
                                Next-Gen Learning Platform
                            </Badge>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                            Transform Your <br />
                            <span className="bg-gradient-to-r from-[#2EC4B6] to-[#FF8A14] bg-clip-text text-transparent">Learning Journey Today</span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
                            An AI-powered learning platform that personalizes content, pace, and feedback built for how you actually learn.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="/signup">
                                <Button variant="orange" size="lg" className="rounded-full px-8 text-base w-full sm:w-auto">
                                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Button variant="outline" size="lg" className="rounded-full px-8 text-base border-[#3a8d84] dark:border-[#2EC4B6] text-[#3a8d84] dark:text-[#2EC4B6] hover:bg-[#3a8d84]/10 dark:hover:bg-[#2EC4B6]/10 hover:text-[#3a8d84]">
                                <PlayCircle className="mr-2 w-5 h-5" />
                                Watch Demo
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Image/Visuals */}
                    <div className="relative">
                        {/* 
                Since I don't have the exact images, I'll create a layout that mimics the composition.
                The screenshot shows a student on the left (girl) and right (boy) with some graphics.
                I will use placeholders or assume the user will replace them.
                For now, I'll use a composed div to represent the visual weight.
            */}
                        <div className="relative w-full h-[400px] md:h-[500px]">
                            {/* Placeholder for the main visual composition */}
                            {/* Creating a visual representation using colored blocks/gradients if images are missing, 
                    but optimally using Next.js Image component if I had the assets. 
                    I'll use a reliable placeholder service or just CSS shapes for layout.
                */}

                            {/* Circle Background */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#d5f2ee] dark:bg-gray-800/50 rounded-full -z-10" />

                            <div className="absolute top-10 left-0 md:left-10 w-32 h-32 md:w-40 md:h-40 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg flex items-end justify-center">
                                <Image src="/student1.png" alt="Student 1" fill className="object-contain" sizes="(max-width: 768px) 128px, 160px" />
                            </div>

                            {/* Right Student Image */}
                            <div className="absolute bottom-10 right-0 md:right-10 w-40 h-40 md:w-48 md:h-48 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                                <Image src="/student 2.png" alt="Student 2" fill className="object-cover" sizes="(max-width: 768px) 160px, 192px" />
                            </div>

                            {/* Floating badge/element */}
                            <div className="absolute top-1/3 right-10 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg animate-bounce border dark:border-gray-700transition-colors">
                                <span className="text-sm font-semibold text-[#3a8d84] dark:text-[#2EC4B6]">AI Powered</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
