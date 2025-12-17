"use client"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const activeStyle =
    "border-2 bg-gray-50 flex items-center text-teal-300 text-[20px] font-bold px-4 py-2 rounded-xl transition";

  const defaultStyle =
    "px-4 py-2 text-white rounded-xl items-center flex text-lg bg-gradient-to-br from-teal-700 to-teal-500 hover:from-teal-500 hover:to-teal-800 transition";

  return (
    <div className="w-full sticky top-0 z-50 bg-white py-4 px-6 sm:px-8 flex items-center justify-between font-sans">

      {/* Logo */}
      <div className="text-2xl sm:text-3xl font-semibold flex items-center gap-3">
        <img 
          src="/Screenshot 2025-11-19 132749.png" 
          alt="Logo" 
          className="w-14 h-14 sm:w-20 sm:h-20 object-contain" 
        />
        <p className="text-teal-700">Domiciliary Care</p>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className={pathname === "/" ? activeStyle : defaultStyle}>Home</Link>
        <Link href="/about" className={pathname === "/about" ? activeStyle : defaultStyle}>About Us</Link>
        <Link href="/contact" className={pathname === "/contact" ? activeStyle : defaultStyle}>Contact Us</Link>
        <Link href="/services" className={pathname === "/services" ? activeStyle : defaultStyle}>Our Services</Link>
        <Link href="/whychooseus" className={pathname === "/whychooseus" ? activeStyle : defaultStyle}>Why Choose Us?</Link>
      </div>

      {/* CTA Button (Desktop) */}
      <button className="hidden md:block px-6 py-3 text-white text-lg rounded-xl bg-teal-800 hover:bg-teal-600 transition">
        Call Now
      </button>

      {/* Hamburger (Mobile) */}
      <button 
        className="md:hidden text-teal-700 text-3xl"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {/* SIDEBAR BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* RIGHT SIDEBAR MENU */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[260px] bg-white z-50 p-6 flex flex-col gap-6 shadow-xl 
          transform ${open ? "translate-x-0" : "translate-x-full"} 
          transition-transform duration-300
        `}
      >
        {/* Close button aligned LEFT */}
        <div className="flex justify-start">
          <button 
            onClick={() => setOpen(false)}
            className="text-3xl text-teal-700"
          >
            ×
          </button>
        </div>

        {/* Links */}
        <Link
          href="/"
          className={pathname === "/" ? activeStyle : defaultStyle}
          onClick={() => setOpen(false)}
        >
          Home
        </Link>

        <Link
          href="/about"
          className={pathname === "/about" ? activeStyle : defaultStyle}
          onClick={() => setOpen(false)}
        >
          About Us
        </Link>

        <Link
          href="/contact"
          className={pathname === "/contact" ? activeStyle : defaultStyle}
          onClick={() => setOpen(false)}
        >
          Contact Us
        </Link>

        <Link
          href="/services"
          className={pathname === "/services" ? activeStyle : defaultStyle}
          onClick={() => setOpen(false)}
        >
          Our Services
        </Link>

        <Link
          href="/whychooseus"
          className={pathname === "/whychooseus" ? activeStyle : defaultStyle}
          onClick={() => setOpen(false)}
        >
          Why Choose Us?
        </Link>

        {/* CTA button inside sidebar */}
        <button className="px-6 py-3 text-white text-lg rounded-xl bg-teal-800 hover:bg-teal-600 transition">
          Call Now
        </button>
      </div>
    </div>
  );
}
