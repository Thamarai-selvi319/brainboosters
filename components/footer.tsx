

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#EEF7FC] pt-5">
      <div className="max-w-7xl mx-auto px-2 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex justify-center md:justify-start w-full md:w-auto my-8 md:my-20">
          <Image
            src="https://www.brainboosterz.com/SVG/BBlogo.svg"
            alt="Brain Boosters Logo"
            width={420}
            height={180}
            priority
          />
        </div>
        <div className="flex flex-col items-center md:items-end w-full md:w-auto gap-6">
          <div className="flex items-start gap-6">
            <Image
              src="https://www.brainboosterz.com/SVG/BBLogoMark.svg"
              alt="Running Brain"
              width={180}
              height={120}
            />
            <div className=" flex flex-col gap-4">
              <a href="https://www.facebook.com/people/Brain-Boosterz/pfbid09wZyjorQXK9jyquNUiBhkExHENxAPR2TnuGJCVvrTYhAX7mmdcu5mbjurkcH5cWxl/?sk" target="_blank" rel="noopener noreferrer" className="bg-[#3B9AE1] p-3 rounded-lg text-white">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/brain.boosterz/" target="_blank" rel="noopener noreferrer" className="bg-[#3B9AE1] p-3 rounded-lg text-white">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/brain-bosters/" target="_blank" rel="noopener noreferrer" className="bg-[#3B9AE1] p-3 rounded-lg text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-[#F5A623] font-medium">
            <Link href="#">About</Link>
            <Link href="#">Testimonials</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
          </div>
          <a
            href="https://www.google.com/maps/place/BRAIN+BOOSTERS/"
            target="_blank"
            className="flex items-center gap-2 bg-[#3B9AE1] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#2E86C1] transition"
          >
            Reach Us
            <MapPin size={18} />
          </a>

        </div>
      </div>
      <div className="mt-14 border-t border-gray-300" />
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 text-sm">
        <p>© 2025 Brain Boosters. All rights reserved.</p>

        <div className="flex items-center gap-2">
          <span>Powered By</span>
          <Image
            src="https://www.brainboosterz.com/SVG/ZB-logo.svg"
            alt="ZingBizz"
            width={90}
            height={24}
          />
        </div>
      </div>

    </footer>
  );
}
