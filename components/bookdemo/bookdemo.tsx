"use client";

import { useState } from "react";

const DESIGNATIONS = [
  "Owner",
  "Principal",
  "Marketing Manager",
  "Admin",
  "Other",
];

const COACHING_TYPES = [
  "NEET",
  "JEE",
  "UPSC",
  "TNPSC",
  "School Tuitions",
  "Spoken English",
  "Computer Courses",
  "Others",
];

const DEMO_MODES = ["Google Meet", "Zoom", "Phone Call", "In-person"];

const DEMO_TIMES = [
  "10:00 AM – 12:00 PM",
  "12:00 PM – 2:00 PM",
  "2:00 PM – 4:00 PM",
  "4:00 PM – 6:00 PM",
];

export default function BookDemoForm() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [coachingCentreName, setCoachingCentreName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [designation, setDesignation] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [demoMode, setDemoMode] = useState("");
  const [demoTime, setDemoTime] = useState("");
  const [comments, setComments] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const resetForm = () => {
    setCoachingCentreName("");
    setContactPerson("");
    setDesignation("");
    setMobile("");
    setEmail("");
    setCity("");
    setSelectedTypes([]);
    setDemoMode("");
    setDemoTime("");
    setComments("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      coachingCentreName,
      contactPerson,
      designation,
      mobile,
      email,
      city,
      selectedTypes,
      demoMode,
      demoTime,
      comments,
    };
    localStorage.setItem("demoBooking", JSON.stringify(formData));
    setShowPopup(true);
  };

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  return (
    <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Fill in Your Details
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="font-medium">
            Coaching Centre Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your coaching centre name"
            className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={coachingCentreName}
            onChange={(e) => setCoachingCentreName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="font-medium">
            Name of Contact Person <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Your full name"
            className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={contactPerson}
            onChange={(e) => setContactPerson(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="font-medium">
            Designation <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            required
          >
            <option value="">Select your designation</option>
            {DESIGNATIONS.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="font-medium">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="10-digit mobile number"
            className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="font-medium">
            Email ID <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="coachingcenter@gmail.com"
            className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="font-medium">
            City / Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Your city"
            className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="font-medium block mb-3">
            Type of Coaching <span className="text-red-500">*</span>
          </label>

          <div className="grid grid-cols-2 gap-3">
            {COACHING_TYPES.map((type) => (
              <label
                key={type}
                className="flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer hover:border-blue-500"
              >
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => toggleType(type)}
                  className="h-4 w-4"
                />
                <span>{type}</span>
              </label>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-2">Select all that apply</p>
        </div>
        <div>
          <label className="font-medium">
            Preferred Demo Mode <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={demoMode}
            onChange={(e) => setDemoMode(e.target.value)}
            required
          >
            <option value="">Select demo mode</option>
            {DEMO_MODES.map((mode) => (
              <option key={mode} value={mode}>{mode}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="font-medium">
            Preferred Demo Time <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={demoTime}
            onChange={(e) => setDemoTime(e.target.value)}
            required
          >
            <option value="">Select preferred time</option>
            {DEMO_TIMES.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="font-medium">
            Additional Comments <span className="text-gray-400">(Optional)</span>
          </label>
          <textarea
            rows={4}
            placeholder="Tell us about your coaching centre or your current challenges..."
            className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#3B9AE1] text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
        >
          Book My Demo
        </button>
      </form>
      {showPopup && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold text-center mb-4">Success!</h3>
            <p className="text-center mb-4">Your demo was booked successfully!</p>
            <button
              onClick={() => {
                setShowPopup(false);
                resetForm();
              }}
              className="w-full bg-[#3B9AE1] text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
