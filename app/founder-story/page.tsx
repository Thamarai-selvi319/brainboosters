"use client";

import Image from "next/image";
import { Linkedin, Instagram } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function FounderStory() {
  return (
    <div>
      <Header />
      <section className="w-full bg-[#EDF6FB] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#3B9AE1] leading-tight">
              Hi, I'm Muthumanickam.
            </h1>

            <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
              I'm a creator, volunteer and the founder of Brain Boosters
            </h2>

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
        
          <div className="relative flex justify-center">
            <Image
              src="https://www.brainboosterz.com/_next/image?url=%2FFounder%2Ffounder.webp&w=1080&q=75"
              alt="Founder Muthumanickam"
              width={400}
              height={400}
              className=" object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-24">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Founder's Story
        </h2>
      </div>
      <div className="text-lg text-gray-600 leading-relaxed space-y-6 text-justify">
        <p>
          N. Muthumanickam, the visionary behind BRAIN BOOSTERS, hails from a small town
          with big dreams. He completed his higher secondary education at Sowdambikaa
          Matric Higher Secondary School, Thuraiyur, and went on to earn a Bachelor's degree in
          Computer Applications (BCA) from National College, Trichy. He further pursued
          his Master's in Business Administration (MBA) at CARE College of Engineering,
          Trichy.
        </p>

        <p>
          The idea for BRAIN BOOSTERS was born out of a personal experience. While
          attending an AWS coaching program at one of Trichy's top institutions, he faced a
          financial setback that forced him to discontinue the course. The high fees — ranging
          from ₹20,000 to ₹30,000 — made it unaffordable, revealing a deep divide between
          privileged learners and those from financially constrained backgrounds.
        </p>

        <p>
          This experience ignited a powerful idea: What if there was a platform that could
          bridge the skill development gap between students in rural areas and top-tier
          coaching centers — at an affordable price?
        </p>

        <p>
          With this vision, BRAIN BOOSTERS was created — a platform designed to make
          high-quality education and career guidance accessible to students in remote and rural
          areas. The goal is simple yet impactful: to eliminate the barriers of distance
          and affordability, allowing students to learn anytime, anywhere without
          burdening their families financially.
        </p>

        <p>
          Muthumanickam believes that talent is everywhere, but opportunity is not.
          Through BRAIN BOOSTERS, he is committed to democratizing access to skill development,
          empowering the youth from underserved communities, and nurturing the next
          generation of skilled professionals across Tamil Nadu and beyond.
        </p>
      </div>

    </div>
  </div>
</section>


      <Footer />
    </div>
  );
}