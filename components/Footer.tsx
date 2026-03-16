import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button"; // Imported but maybe not used if I use simple button

export default function Footer() {
    return (
        <footer className="bg-[#3a8d84] text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand & Info */}
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#FF9F1C] to-[#2EC4B6] bg-clip-text text-transparent break-words max-w-fit">Next-Gen LMS</h3>
                        <p className="text-blue-50 mb-6 max-w-sm">
                            Empowering learners with AI-driven personalized education. Join us to transform your future today.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-blue-50">
                                <MapPin className="w-5 h-5" />
                                <span>123 Learning Street, EdTech City, 10001</span>
                            </div>
                            <div className="flex items-center gap-3 text-blue-50">
                                <Phone className="w-5 h-5" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3 text-blue-50">
                                <Mail className="w-5 h-5" />
                                <span>support@nextgenlms.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Platform</h4>
                        <ul className="space-y-3 text-blue-50">
                            <li><Link href="#" className="hover:text-white transition-colors">Browse Courses</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Mentorship</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">For Business</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Resources</h4>
                        <ul className="space-y-3 text-blue-50">
                            <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Terms & Privacy</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter / Contact (Replacing with Company/Legal for balance as per screenshot roughly) */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-3 text-blue-50">
                            <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Partners</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-blue-50 text-sm">
                        © {new Date().getFullYear()} Next-Gen LMS. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white hover:text-[#3a8d84] transition-all duration-300"><Facebook className="w-5 h-5" /></Link>
                        <Link href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white hover:text-[#3a8d84] transition-all duration-300"><Twitter className="w-5 h-5" /></Link>
                        <Link href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white hover:text-[#3a8d84] transition-all duration-300"><Instagram className="w-5 h-5" /></Link>
                        <Link href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white hover:text-[#3a8d84] transition-all duration-300"><Linkedin className="w-5 h-5" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
