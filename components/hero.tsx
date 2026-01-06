"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-[#EDF6FB] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-[60px] md:text-[62px] leading-tight font-caudex font-bold text-[#2B2E63]">
            India&apos;s first Skill <br />
            Development Hub
          </h1>

          <p className="mt-2 text-[60px] md:text-[60px] font-caveat font-bold text-[#2B2E63]">
            for GenZ students
          </p>

          <p className="mt-6 max-w-xl text-[18px] font-bold text-gray-600 leading-relaxed">
            Whether you&apos;re from a town or a village, access India&apos;s best
            coaching centers, industry-ready skills, and career opportunities.
          </p>

          <button className="mt-8 bg-[#3B9AE1] hover:bg-[#2E86C1] text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md transition">
            Get Started
          </button>

          <p className="mt-9 text-[#2B2E63] text-[25px] md:text-[25px] font-caveat font-bold flex items-center gap-2">
            Get placed in top companies
        <span className="text-xl">
  <img
    src="https://www.brainboosterz.com/Home/arrow.svg"
    alt="arrow"
    className="inline w-16 h-10"
  />
</span>

          </p>
        </div>
<div className="relative flex justify-center items-center">
  <div className="absolute w-[420px] h-[420px] bg-[#3B9AE1] rounded-full -z-10" />
  <Image
    src="https://www.brainboosterz.com/Home/HeroAssets/star.svg"
    alt="star"
    width={30}
    height={30}
    className="absolute top-[40px] left-[80px] float blink"
  />
  <Image
    src="https://www.brainboosterz.com/Home/HeroAssets/speech-bubble.svg"
    alt="speech"
    width={60}
    height={60}
    className="absolute top-[180px] left-[60px] float-slow hidden md:block"
  />
  <Image
    src="https://www.brainboosterz.com/Home/HeroAssets/live-doodle.svg"
    alt="live"
    width={80}
    height={80}
    className="absolute top-[60px] right-[60px] float"
  />
  <Image
    src="https://www.brainboosterz.com/Home/HeroAssets/video-doodle.svg"
    alt="video"
    width={60}
    height={60}
    className="absolute bottom-[60px] left-[70px] float-slow hidden md:block"
  />
  <Image
    src="https://www.brainboosterz.com/Home/HeroAssets/dot.svg"
    alt="dot"
    width={14}
    height={14}
    className="absolute bottom-[40px] right-[90px] blink"
  />
  <Image
    src="https://www.brainboosterz.com/Home/HeroAssets/circle.svg"
    alt="circle"
    width={18}
    height={18}
    className="absolute top-[200px] right-[90px] rotate-slow"
  />
  <Image
    src="/hero-image (2).webp"
    alt="Student Learning"
    width={350}
    height={350}
    className="rounded-full object-cover z-10"
    priority
  />
</div>

      </div>
    </section>
  );
}
