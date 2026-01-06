"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 500;
      const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-[#EDF6FB] shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
        <a href="/" onClick={(e) => { if (pathname === '/') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); } }}>
        <div className="flex items-center">
          <Image
            src="https://www.brainboosterz.com/SVG/BBlogo.svg"
            alt="BrainBoosterz Logo"
            width={240}
            height={40}
            priority
          />
        </div>
        </a>
        <nav className="flex items-center gap-8">
          <Link
            href="/#about"
            className={`${
              isScrolled ? "text-gray-700" : "text-[#2B2E63]"
            } hover:text-[#4FA3D1] font-medium transition`}
          >
            About
          </Link>

          <Link
            href="/#testimonial"
            className={`${
              isScrolled ? "text-gray-700" : "text-[#2B2E63]"
            } hover:text-[#4FA3D1] font-medium transition`}
          >
            Testimonial
          </Link>

          <a
            href="/founder-story"
            className={`${
              isScrolled ? "text-gray-700" : "text-[#2B2E63]"
            } hover:text-[#4FA3D1] font-medium transition`}
          >
            Founder&apos;s Story
          </a>
          <a
            href="/blogs"
            className={`${
              isScrolled ? "text-gray-700" : "text-[#2B2E63]"
            } hover:text-[#4FA3D1] font-medium transition`}
          >
            Blog
          </a>
          <a
            href="/#studybuddy"
            className="bg-[#3B9AE1] text-white px-5 py-2 rounded-lg font-semibold transition"
          >
            Get Started
          </a>
        </nav>

      </div>
    </header>
  );
}
