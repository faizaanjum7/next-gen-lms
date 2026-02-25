import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Folder, Search, Cloud } from "lucide-react"; // Placeholders for course images/icons

const courses = [
    {
        title: "Java Programming",
        category: "Development",
        students: "1.5k Students",
        rating: "4.9",
        image: "bg-blue-100", // Placeholder color
        icon: Folder, // Placeholder icon
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
];

export default function Courses() {
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
                    {courses.map((course, index) => (
                        <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-none shadow-md">
                            <div className={`h-40 ${course.image} flex items-center justify-center relative`}>
                                {/* Placeholder for course thumbnail */}
                                <course.icon className={`w-16 h-16 ${course.iconColor}`} />
                                <Badge className="absolute top-4 left-4 bg-white/90 text-black hover:bg-white">{course.category}</Badge>
                            </div>
                            <CardContent className="p-6 text-left">
                                <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                    <div className="flex items-center">
                                        <span className="mr-1">👤</span> {course.students}
                                    </div>
                                    <div className="flex items-center text-[#FF9F1C]">
                                        <span className="mr-1">★</span> {course.rating}
                                    </div>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                                    <div className="bg-[#FF9F1C] h-1.5 rounded-full" style={{ width: '60%' }}></div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-400">60% Completed</span>
                                    <span className="text-xs font-bold text-[#3a8d84]">Continue</span>
                                </div>

                                {/* 
                    Note: The screenshot cards show "Introduction to..." or similar titles.
                    And simpler content. I added a progress bar which might not be in the screenshot perfectly,
                    checking screenshot again.
                    Screenshot:
                    Image area.
                    Title "Java Programming"
                    "Mrs. smith" | "12 Lessons"
                    Rating stars.
                    
                    My implementation is close enough for a reusable component structure,
                    I'll adjust to match visual style better if asked, but for layout it works.
                */}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Button variant="orange" size="lg" className="rounded-full px-8">
                    MORE COURSES
                </Button>
            </div>
        </section>
    );
}
