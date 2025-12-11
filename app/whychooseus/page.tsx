"use client"

export default function WCU() {
  return (
    <div className="bg-white py-12 px-6 md:px-12 text-gray-800">

      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold text-teal-800 mb-6">
        Why Choose Flovet Care?
      </h2>

      {/* Image + Text */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-6">

        {/* Image */}
        <div className="flex justify-center md:justify-start md:flex-shrink-0">
          <img 
            src="/wcs.jpg" 
            className="h-[300px] w-auto rounded-2xl" 
            alt="Why Choose Flovet Care" 
          />
        </div>

        {/* Text */}
        <div className="text-left mt-4 md:mt-0 max-w-md md:ml-4">
          <p className="text-[17px] sm:text-base md:text-lg">
            We take pride in caring for our elderly ones. As they reach a time in their lives where they need more support, Flovet Care Services provides exactly that. Taking care of your loved ones is our priority; giving them the care they deserve, for however long they need, in the comfort of their home.
          </p>
          <p className="mt-2 text-[17px] sm:text-base md:text-lg">
            Our dedicated staff ensure personalized, compassionate care that treats your loved ones like family. We provide a safe, supportive, and comfortable environment in the comfort of their home.
          </p>
        </div>

      </div>
    </div>
  )
}
