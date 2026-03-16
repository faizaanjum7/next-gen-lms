"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import LearningPathView from "@/components/LearningPathView";
import { useAuth } from "@/lib/AuthContext";

export default function Home() {
  const { user } = useAuth();

  return (
    <main className="min-h-screen bg-white dark:bg-[#0f172a] font-sans text-gray-900 dark:text-gray-100 selection:bg-[#3a8d84] selection:text-white transition-colors duration-300">
      <Navbar />
      {user ? (
        <LearningPathView />
      ) : (
        <>
          <Hero />
          <Features />
          <Courses />
          <HowItWorks />
          <FAQ />
          <Footer />
        </>
      )}
    </main>
  );
}
