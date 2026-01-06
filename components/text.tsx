"use client";

import Image from "next/image";
import Link from "next/link";

export default function Text() {
  return (
    <section className="relative w-full bg-[#E9ECEF] overflow-hidden">
      <Image
        src="/laptop-top-view (1).webp"
        alt="Laptop top view"
        width={420}
        height={420}
        className="absolute top-0 left-0 object-contain"
        priority
      />
      <Image
        src="/plant-top-view.webp"
        alt="Plant top view"
        width={260}
        height={260}
        className="absolute bottom-0 right-0 object-contain"
      />
      <div className="relative z-10 max-w-4xl mx-auto text-center py-28 px-6">
        <h2 className="text-[42px] md:text-[48px] font-semibold text-[#4A4A4A]">
          Ready to take the next step?
        </h2>

        <p className="mt-6 text-[18px] md:text-[20px] text-gray-600 leading-relaxed">
          Find coaching centers near you and gain skills <br />
          from the comfort of your home.
        </p>

        <button onClick={() => { const element = document.getElementById("studybuddy"); if (element) { element.scrollIntoView({ behavior: "smooth", block: "start" }); } }} className="mt-10 bg-[#3B9AE1] hover:bg-[#2E86C1] text-white text-lg font-semibold px-10 py-4 rounded-xl shadow-md transition">
          Get Started
        </button>
      </div>
      <div className="relative z-20 bg-[#3B9AE1] py-2 px-2">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white text-lg font-medium">
            Running a coaching center? Reach more learners on Brain Boosters.
          </p>

          <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#3B9AE1] transition">
            Book a demo!
          </button>
        </div>
      </div>

    </section>
  );
}
