"use client";
import AboutUs from "@/components/about";
import CompanyLogos from "@/components/companylogos";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import HowItWorks from "@/components/howitworks";
import KeyFeatures from "@/components/keyfeatures";
import StudyBuddy from "@/components/studybuddy";
import TestimonialsSection from "@/components/testimonial";
import Text from "@/components/text";
import WhyChooseUs from "@/components/whychooseus";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <div className="relative z-20 -mt-18">
        <CompanyLogos />
      </div>
      <div className="relative z-10 -mt-16">
        <Text />
        <AboutUs />
        <HowItWorks />
        <KeyFeatures />
        <WhyChooseUs />
        <TestimonialsSection />
        <StudyBuddy />
      </div>

      <Footer />
    </div>
  );
}

