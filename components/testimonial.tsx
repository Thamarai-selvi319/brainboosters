"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text:
      "I couldn’t believe I was getting trained by a top institute right from my village. This platform gave me everything I needed to land a job interview at a tech firm.",
    author: "Aarti",
    role: "B.Tech Graduate",
    place: "Madurai",
  },
  {
    text:
      "I couldn’t believe I was getting trained by mentors from top institutes right from my village. The coaching felt personal, structured, and incredibly clear. This platform gave me everything I needed to land an interview at a leading tech startup!",
    author: "Sneha R.",
    role: "B.E Graduate",
    place: "Tirunelveli",
  },
  {
    text:
      "What stood out was the feedback. Real, honest, and actionable. The mock interviews and coding drills were tailored to my weak spots. I walked into my placement interview with confidence—and came out with an offer!",
    author: "Ravi T.",
    role: "Computer Science Graduate",
    place: "Trichy",
  },
  {
    text:
      "Coming from a non-tech background, I thought it was too late for me. But the step-by-step coaching, from fundamentals to system design, made the impossible feel doable. I just cleared my first tech round at a product company!",
    author: "Megha S.",
    role: "Final Year BBA Student",
    place: "Salem",
  },
  {
    text:
      "Big coaching centers never reached our college. Brainbooster did. I got mentored by engineers from Google and Flipkart who actually cared. This platform helped me build a strong portfolio and crack interviews that I thought were out of reach.",
    author: "Ali K.",
    role: "Career Switcher",
    place: "Erode",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const t = testimonials[index];

  return (
    <section id="testimonial" className="w-full bg-[#EEF7FC] py-28 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SECTION */}
          <div>
            <h2 className="text-4xl font-semibold text-gray-700 leading-snug">
              From our
              <br />
              <span className="font-bold">Brainboosters</span>
              <br />
              community...
            </h2>

            <p className="mt-6 text-gray-600 max-w-sm">
              Here's what our community members had to say about their learning
              experience
            </p>
          </div>
          <div className="relative">
                        <Image
              src="https://www.brainboosterz.com/SVG/qoutes.svg"
              alt="quote"
              width={60}
              height={60}
              className="mb-6"
            />
            <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
              {t.text}
            </p>
            <p className="mt-6 text-gray-600">
              – {t.author}, {t.role}, {t.place}
            </p>
            <button
              onClick={prev}
              className="absolute left-[-60px] top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-3 rounded-full"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="absolute right-[-60px] top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-3 rounded-full"
            >
              <ChevronRight />
            </button>
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    i === index ? "bg-gray-700 w-6" : "bg-gray-400"
                  } transition-all`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
