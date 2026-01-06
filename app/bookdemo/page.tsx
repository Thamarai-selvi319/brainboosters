import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BookDemoForm from "@/components/bookdemo/bookdemo";

export default function BookDemoPage() {
  return (
    <>
      <Header />

      <section className="w-full pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="text-4xl font-bold text-gray-800 text-center lg:text-left">
              Book Your <span className="text-[#3B9AE1]">Free Demo</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 text-center lg:text-left max-w-xl">
              See how Brain Boosters can transform your coaching institute.
              Schedule a personalized demo with our team today!
            </p>
            <div className="mt-10">
              <Image
                src="/book-demo.png"
                alt="Book Demo Illustration"
                width={450}
                height={350}
                priority
              />
            </div>
            <div className="mt-20 w-full max-w-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                What you'll see in the demo:
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-lg">✔</span>
                  Complete student & course management system
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-lg">✔</span>
                  Automated attendance & performance tracking
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-lg">✔</span>
                  Easy payment & billing management
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-lg">✔</span>
                  Mobile app for students & teachers
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-lg">✔</span>
                  Live demo with your specific requirements
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <BookDemoForm />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
