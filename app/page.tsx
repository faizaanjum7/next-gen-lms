import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#3a8d84] selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Courses />
      <HowItWorks />
      <FAQ />
      <Footer />
    </main>
  );
}
