"use client"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      
      {/* HERO SECTION */}
      <div className="relative h-[85vh] w-full bg-[url('/flovetncp.jpg')] bg-cover bg-center bg-no-repeat">

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold">
            Welcome to Flovet Care Services Ltd
          </h1>

          <hr className="w-24 sm:w-32 md:w-40 border-0 h-[2px] mt-3 mb-3 rounded-[15px] bg-white"/>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-[27px] text-white">
            Where care comes from the heart
          </p>

          <Link 
            href="/about" 
            className="border-2 rounded-[15px] text-[16px] sm:text-[17px] md:text-[18px] text-white hover:bg-white/20 px-6 py-3 mt-6"
          >
            Read more about us
          </Link>
        </div>
      </div>

      {/* WHAT WE DO TITLE */}
      <div className="bg-white text-center pt-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-bold text-[40px] pb-[10px] text-[#333]">
          What we do
        </h2>
      </div>

      {/* CONTENT SECTIONS */}
      <div className="bg-white">

        {/* FIRST BLOCK */}
        <div className="bg-[#004a3f] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 py-12 px-4">
          <img 
            src="flovet2.jpg" 
            className="h-48 sm:h-60 md:h-[300px] rounded-2xl object-cover"
            alt=""
          />

          <div className="grid gap-4 max-w-md text-center md:text-left">
            <p className="text-xl sm:text-2xl md:text-[25px] font-bold text-white">
              Flovet Care Ltd
            </p>
            <p className="text-base sm:text-lg md:text-[23px] text-white">
              Our area of specialty in is domiciliary care. We intend to give care that has no limitations. We aim to give care that will add more value to little things that count. Our services recognise individuality.
            </p>
          </div>
        </div>

        {/* SECOND BLOCK */}
        <div className="bg-[#006456] flex flex-col md:flex-row-reverse items-center justify-center gap-6 md:gap-12 py-12 px-4">
          <img 
            src="flovet3.jpg" 
            className="h-48 sm:h-60 md:h-[300px] rounded-2xl object-cover"
            alt=""
          />

          <p className="max-w-md text-base sm:text-lg md:text-[23px] text-white text-center md:text-left">
            We give care at home for elderly which includes Personal Care, Specialist Care, Respite Care and more. All services are flexible and person-centered; putting dignity and respect at the core of the care delivery.
          </p>
        </div>

      </div>

    </div>
  )
}
