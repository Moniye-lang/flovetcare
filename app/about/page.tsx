"use client"

export default function About() {
  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 p-6 md:p-12">

      {/* Image Section */}
      <div className="relative w-full max-w-md md:max-w-lg h-64 sm:h-80 md:h-[400px]">
        {/* Background Box */}
        <div className="bg-teal-200 rounded-2xl w-full h-full"></div>

        {/* Image on top */}
        <img
          src="/flovetabout.jpg"
          alt="About Us"
          className="absolute top-1/2 right-0 md:right-[-30px] -translate-y-1/2 h-64 sm:h-80 md:h-[400px] rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="text-[#333] w-full max-w-md md:max-w-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-teal-900 mb-3 font-bold">About us</h1>
        <p className="text-sm sm:text-base md:text-[18px] mb-6">
          Flovet Care Services is a domiciliary care provider supporting elderly people by providing them with home care. Our office is based in Essex, Ilford and we are able to provide care all over London. We provide unique care as we see everyone is unique and everyone requires different types of care. We treat your elderly loved ones as we would treat our very own, putting their needs first and performing high-quality care. Our aim is to give your loved ones a realistic alternative to move into a Residential Care home. With our experienced staff, they will be able to give the best level of care and also build companionships with your elderly ones. Flovet Care Services is a family, and we aim to treat all clients and relatives as family also. We provide care that comes from the heart.
        </p>
      </div>
      
    </div>
  )
}
