"use client";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="w-full bg-[#f7f9fc] py-24 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-[#3b82f6] uppercase tracking-wider mb-3">
              About Us
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Our Vision &amp; Mission
            </h2>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              To create an inclusive, technology-driven educational ecosystem
              where every student, regardless of their location or financial
              background, can access world-class coaching, build critical
              skills, and unlock opportunities at leading global companies.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To empower students from rural and underserved communities by
              providing affordable access to top coaching centres,
              career-readiness resources, and AI-driven tools — enabling them
              to learn, grow, and compete in the global job market with
              confidence.
            </p>
          </div>
          <div className="w-full h-full">
            <Image
              src="https://www.brainboosterz.com/_next/image?url=%2FHome%2Fabout.webp&w=1080&q=75"
              alt="About Brain Boosters"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
