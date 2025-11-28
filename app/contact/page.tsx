"use client"

export default function Contact() {
  return (
    <div className="bg-gray-50 text-[#333] min-h-screen p-6 md:p-12">

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-[40px] text-teal-900 font-bold mb-2">
          Where we are located?
        </h1>
        <p className="text-base sm:text-lg md:text-[20px]">
          Flovet Care is a new limited company which will provide domiciliary care services initially in Redbridge and Ilford in Essex.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">

        {/* Google Map */}
        <div className="w-full lg:w-[60%] h-64 sm:h-80 md:h-[600px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9972.575347507615!2d0.10496309999999999!3d51.5752706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b4a54245a7a3%3A0xa4bda9b05d6ca3a4!2s190%20Barley%20Ln%2C%20Ilford%20IG3%208XR%2C%20UK!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>

        {/* Business Info */}
        <div className="w-full lg:w-[40%] flex flex-col gap-6">

          {/* Business Hours */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-[40px] text-teal-900 font-bold mb-4">Business Hours</h2>
            <div className="grid grid-cols-2 justify-center gap-x-6 sm:gap-x-12 gap-y-2">
              <div className="text-lg sm:text-xl md:text-2xl grid gap-y-2">
                <div>Monday</div>
                <div>Tuesday</div>
                <div>Wednesday</div>
                <div>Thursday</div>
                <div>Friday</div>
                <div>Saturday</div>
                <div>Sunday</div>
              </div>
              <div className="text-lg sm:text-xl md:text-2xl grid gap-y-2">
                <div>24 hours</div>
                <div>24 hours</div>
                <div>24 hours</div>
                <div>24 hours</div>
                <div>24 hours</div>
                <div>24 hours</div>
                <div>24 hours</div>  
              </div>
            </div>
          </div>

          <hr className="border-gray-400"/>

          {/* Phone */}
          <div className="flex gap-[50px] justify-center">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl md:text-[30px] font-bold mb-2">Phone</h3>
            <a href="tel:07939416298" className="underline text-base sm:text-lg md:text-[22px]">07939416298</a>
            </div>
            <div>
            <h3 className="text-2xl sm:text-3xl md:text-[30px] font-bold mb-2 text-center">Email</h3>
            <a href="mailto:flovetcare@gmail.com?subject=Hello&body=I want to contact you" className="underline text-[25px]">flovetcare@gmail.com</a>          
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
