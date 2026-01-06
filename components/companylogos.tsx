import Image from "next/image";
const companies = [
  {
    name: "TCS",
    src: "https://www.brainboosterz.com/Home/CompanyLogo/tcs.svg",
  },
  {
    name: "Infosys",
    src: "https://www.brainboosterz.com/Home/CompanyLogo/infosys.svg",
  },
  {
    name: "Deloitte",
    src: "https://www.brainboosterz.com/Home/CompanyLogo/deloitte.svg",
  },
  {
    name: "Capgemini",
    src: "https://www.brainboosterz.com/Home/CompanyLogo/capgemini.svg",
  },
  {
    name: "Zoho",
    src: "https://www.brainboosterz.com/Home/CompanyLogo/zoho.svg",
  },
  {
    name: "Wipro",
    src: "https://www.brainboosterz.com/Home/CompanyLogo/wipro.svg",
  },
  {
    name: "Accenture",
    src: "https://www.brainboosterz.com/Home/CompanyLogo/accenture.svg",
  },
  {
    name: "LTIMindtree",
    src: "https://www.brainboosterz.com/Home/CompanyLogo/lti.svg",
  },
];

export default function CompanyLogos() {
  return (
    <section className="relative w-full -mt-16 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl py-8 px-6">
          <div className="flex flex-wrap items-center justify-center gap-18">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex items-center justify-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={company.src}
                  alt={company.name}
                  width={70}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
