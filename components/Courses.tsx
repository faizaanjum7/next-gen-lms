import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Folder, Search, Cloud, Code, Database, MonitorPlay } from "lucide-react"; 

const courses = [
    {
        title: "Java Programming",
        category: "Development",
        students: "1.5k Students",
        rating: "4.9",
        image: "bg-blue-100",
        icon: Folder, 
        iconColor: "text-blue-600",
    },
    {
        title: "UI/UX Design",
        category: "Design",
        students: "800 Students",
        rating: "4.8",
        image: "bg-pink-100",
        icon: Search,
        iconColor: "text-pink-600",
    },
    {
        title: "Cloud Computing",
        category: "IT & Software",
        students: "1.2k Students",
        rating: "4.7",
        image: "bg-cyan-100",
        icon: Cloud,
        iconColor: "text-cyan-600",
    },
    {
        title: "Golang Full Stack",
        category: "Development",
        students: "2.1k Students",
        rating: "4.9",
        image: "bg-teal-100",
        icon: Code,
        iconColor: "text-teal-600",
    },
    {
        title: "Data Structures & Algorithms",
        category: "Computer Science",
        students: "3.4k Students",
        rating: "4.8",
        image: "bg-purple-100",
        icon: Database,
        iconColor: "text-purple-600",
    },
    {
        title: "React Mastery",
        category: "Development",
        students: "1.8k Students",
        rating: "4.9",
        image: "bg-yellow-100",
        icon: MonitorPlay,
        iconColor: "text-yellow-600",
    },
];

export default function Courses() {
    const [showAll, setShowAll] = useState(false);

    const displayedCourses = showAll ? courses : courses.slice(0, 3);

    return (
        <section id="courses" className="py-20 bg-[#f8fdfc]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold mb-12 text-gray-900">
                    Explore <span className="text-[#FF9F1C]">Our Top</span> Courses
                </h2>

                {/* Search Bar - Visual only as per screenshot */}
                <div className="max-w-md mx-auto mb-12 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="text" className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full leading-5 bg-[#dbeceb] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[#3a8d84] focus:border-[#3a8d84] sm:text-sm" placeholder="Search for courses..." readOnly />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {displayedCourses.map((course, index) => (
                        <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 shadow-md rounded-2xl bg-white hover:-translate-y-1">
                            <div className={`h-40 ${course.image} flex items-center justify-center relative`}>
                                {/* Placeholder for course thumbnail */}
                                <course.icon className={`w-16 h-16 ${course.iconColor}`} />
                                <Badge className="absolute top-4 left-4 bg-white/90 text-black hover:bg-white border-0 shadow-sm">{course.category}</Badge>
                            </div>
                            <CardContent className="p-6 text-left">
                                <h3 className="font-bold text-lg mb-2 text-gray-900">{course.title}</h3>
                                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                                    <div className="flex items-center bg-gray-50 px-2 py-1 rounded-md">
                                        <span className="mr-1">👤</span> {course.students}
                                    </div>
                                    <div className="flex items-center bg-[#FF9F1C]/10 text-[#FF9F1C] px-2 py-1 rounded-md font-medium">
                                        <span className="mr-1">★</span> {course.rating}
                                    </div>
                                </div>
                                <div className="pt-2 border-t border-gray-100">
                                    <Button variant="orange" className="w-full mt-4 rounded-full font-semibold transition-transform hover:scale-[1.02] shadow-md">
                                        Enroll Now
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {!showAll && (
                    <Button 
                        onClick={() => setShowAll(true)}
                        className="bg-[#FF9F1C] hover:bg-[#e88e10] text-white font-semibold py-2 px-6 rounded-md shadow-md transition-all duration-300"
                    >
                        MORE COURSES
                    </Button>
                )}
            </div>
        </section>
    );
}
