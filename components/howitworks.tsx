import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-sm font-semibold text-[#3b82f6] uppercase tracking-wider mb-3">
              Process
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
              How it Works?
            </h2>
            <Image
              src="https://www.brainboosterz.com/SVG/BBLogoMark.svg"
              alt="BrainBoosters Process"
              width={420}
              height={420}
              className="w-[320px] md:w-[420px]"
            />
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">
                1. Connect with Coaching Centres
              </h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                Browse verified coaching institutes across categories like
                competitive exams, technical skills, soft skills, and more.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">
                2. Learn at Your Pace
              </h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                Choose flexible online sessions, recorded modules, and
                personalized learning paths suited to your goals.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">
                3. Skill Up for MNC Jobs
              </h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                Prepare for interviews with AI-powered resume builders, group
                discussion simulators, HR Q&A prep, and real-time feedback.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
