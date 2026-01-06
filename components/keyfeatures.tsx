import Image from "next/image";

const features = [
  {
    title: "Affordable Learning\nfrom Top Coaches",
    icon: "https://www.brainboosterz.com/SVG/key1.svg",
  },
  {
    title: "Access from\nAnywhere, Anytime",
    icon: "https://www.brainboosterz.com/SVG/key2.svg",
  },
  {
    title: "AI Tools for Resume,\nEnglish, and Aptitude",
    icon: "https://www.brainboosterz.com/SVG/key3.svg",
  },
  {
    title: "Live Chat, Doubt\nSolving & Peer\nInteraction",
    icon: "https://www.brainboosterz.com/SVG/key4.svg",
  },
  {
    title: "Track Progress and\nCareer Readiness",
    icon: "https://www.brainboosterz.com/SVG/key5.svg",
  },
];

export default function KeyFeatures() {
  const firstRow = features.slice(0, 3);
  const secondRow = features.slice(3);

  return (
    <section className="w-full bg-[#eef7fb] py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-700 mb-16">
          Key Features
        </h2>
        <div className="flex flex-wrap justify-center gap-10 mb-10">
          {firstRow.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
        <div className="flex justify-center gap-10">
          {secondRow.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>

      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: any }) {
  return (
    <div className="bg-white w-full max-w-[340px] min-h-[190px]
                    rounded-2xl shadow-sm border border-gray-200
                    flex flex-col items-center justify-center
                    text-center px-6 py-10">
      <Image
        src={feature.icon}
        alt={feature.title}
        width={48}
        height={48}
        className="mb-6"
      />

      <h3 className="text-gray-700 font-bold text-lg leading-relaxed whitespace-pre-line">
        {feature.title}
      </h3>
    </div>
  );
}
