import Image from "next/image";

export default function StudyBuddy() {
  return (
    <section id="studybuddy" className="w-full bg-white py-28 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
                    <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 leading-snug">
              Your next favorite{" "}
              <span className="text-[#4DA3E3] font-semibold">
                study buddy
              </span>
              <br />
              is around the corner, Hang tight!
            </h2>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="https://www.brainboosterz.com/SVG/Building.svg"
              alt="Study Buddy Coming Soon"
              width={520}
              height={420}
              className="w-full max-w-[520px] h-auto"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
