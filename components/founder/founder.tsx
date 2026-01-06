"use client";

import Image from "next/image";
import { Linkedin, Instagram } from "lucide-react";

export default function Founder() {
  return (
    <section className="w-full bg-[#EDF6FB] py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        <div className="relative flex justify-center">
          <Image
            src="https://www.brainboosterz.com/_next/image?url=%2FFounder%2Ffounder.webp&w=1080&q=75"
            alt="Founder Muthumanickam"
            width={400}
            height={400}
            className="rounded-full object-cover"
            priority
          />
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3B9AE1] leading-tight">
            Hi, I'm Muthumanickam.
          </h2>

          <p className="mt-6 text-xl text-gray-700 leading-relaxed">
            I'm a creator, volunteer and the founder of Brain Boosters
          </p>

          <div className="flex gap-6 mt-8">
            <a
              href="https://www.linkedin.com/in/muthu-manickam-a0a361251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B9AE1] hover:text-[#2E86C1] transition-colors"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://www.instagram.com/muthumanickam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B9AE1] hover:text-[#2E86C1] transition-colors"
            >
              <Instagram size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
