import Image from "next/image";

const features = [
  {
    icon: "https://www.brainboosterz.com/SVG/why1.svg",
    text: "Trusted network of premium coaching centres",
  },
  {
    icon: "https://www.brainboosterz.com/SVG/why2.svg",
    text: "Inclusive pricing for lower-middle-class students",
  },
  {
    icon: "https://www.brainboosterz.com/SVG/why3.svg",
    text: "AI-driven preparation for top-tier MNC interviews",
  },
  {
    icon: "https://www.brainboosterz.com/SVG/why4.svg",
    text: "Continuous feature upgrades based on learner feedback",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-700 mb-16">
          Why Choose Us?
        </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <Image
                src={item.icon}
                alt={item.text}
                width={48}
                height={48}
                className="opacity-80"
              />
              <p className="text-gray-700 text-base leading-relaxed max-w-[220px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
