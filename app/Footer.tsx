"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-200 pt-12 md:pt-20">

      {/* Subscribe Section */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 border-b pb-12 md:pb-16 items-center">
        {/* Left */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-teal-800 mb-2 md:mb-0">Subscribe</h2>
        </div>

        {/* Right */}
        <div>
          <p className="text-gray-700 mb-4">
            Sign up to our newsletter and stay up to date
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your e-mail address"
              className="flex-1 border border-gray-300 bg-gray-400 text-white px-4 py-3 rounded-md focus:outline-none"
            />
            <button className="bg-emerald-900 text-white px-6 py-3 rounded-md">
              Subscribe
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-3">
            By submitting your information, you are granting us permission to email you.
            You may unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* Address + Quick Links Section */}
      <div className="flex flex-col md:flex-row md:justify-around bg-gray-100 py-8 md:py-12 gap-8 md:gap-0">

        {/* Quick Links */}
        <div className="text-[#333] text-center md:text-left">
          <h1 className="text-[#333] font-bold text-[20px] mb-2">Quick Links</h1>
          <div className="grid gap-y-1">
            <Link className="hover:text-teal-400" href="/">Home</Link>
            <Link className="hover:text-teal-400" href="/about">About Us</Link>
            <Link className="hover:text-teal-400" href="/contact">Contact Us</Link>
            <Link className="hover:text-teal-400" href="/services">Our Services</Link>
            <Link className="hover:text-teal-400" href="/whychooseus">Why Choose Us?</Link>
          </div>
        </div>

        {/* Address */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-serif text-gray-800 mb-3">Address</h3>
          <p className="text-gray-700">190 Barley Lane</p>
          <p className="text-gray-700">London IG3 8XR, GB</p>
          <a href="mailto:Flovetcare@gmail.com" className="text-emerald-900 mt-3 inline-block">
            Flovetcare@gmail.com
          </a>
        </div>

      </div>
    </footer>
  );
}
