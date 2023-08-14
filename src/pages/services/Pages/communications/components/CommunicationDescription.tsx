import React from 'react'

export default function CommunicationDescription() {
  return (
    <section>
      <div className="min-h-screen ">
        {/* top description */}
        <div className="flex flex-col py-8 mt-20  px-6 md:flex-row md:space-x-16 md:px-10 xl:px-16">
          {/* image section */}
          <div className="w-full  mx-auto md:-mt-0 ">
            <img
              alt=""
              src="https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/unnamed-file-1.jpg"
              className="w-full shadow-lg rounded h-full   md:mb-0 object-center object-cover md:inset-0 "
            />
          </div>

          {/* right text */}
          <div className="flex-col mt-10 md:mt-0 space-y-10 md:py-10 w-full">
            <div className="text-4xl font-bold text-black mx-auto  md:text-left">
            Secure, reliable communications from CIS
            </div>

            {/* text */}
            <div className="text-left text-gray-600 tex-xl space-y-10">
              <p className="leading-8 font-semibold text-black text-xl">
              Email, Internet connectivity and phones are the lifeblood of an organisations’ ability to communicate with customers and suppliers, ensure yours are reliable!
              </p>

              <p className="leading-8 font-medium text-gray-500 ">
              CIS can ensure you and your organisation are always available to communicate through whichever means you need. CIS networking specialists can advise you through the myriad of Internet connectivity options available and ensure they are specified appropriately for you.
              </p>
              <p className="leading-8 font-medium text-gray-500 ">
              CIS will ensure you have the right communication solutions for your organisation to keep you and your staff connected be that hosted telephony systems, Microsoft 365 hosted email solutions or redundant Internet connectivity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* services */}
      <div className="grid p-10 bg-white cursor-pointer gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* item 1 */}
        <div className="flex flex-col space-y-3 text-left md:my-5 px-7 py-10 border-2 border-sky-100 duration-200 transition-colors hover:border-sky-400 rounded-lg">
          <p className="text-lg text-blue-400 font-medium">
            Communications{" "}
          </p>
          <p className="text-xl font-semibold">Broadband</p>

          <p className="text-left text-lg leading-10 text-gray-500">
           Broadband that works for your Business.
          </p>

          <div className="text-left group">
            <a href="https://" className="text-lg">
              Learn more
            </a>
            <div className="border-b-2 w-24 border-sky-400 group-hover:border-b-0 duration-200"></div>{" "}
          </div>
        </div>

        {/* item 2 */}
        <div className="flex flex-col md:my-5  space-y-3 text-left  px-7 py-10 border-2 border-sky-100 duration-200 transition-colors hover:border-sky-400 rounded-lg">
          <p className="text-lg text-blue-400 font-medium">
            Communications{" "}
          </p>
          <p className="text-xl font-semibold">VolP Solutions - EVE VolP</p>

          <p className="text-left text-lg leading-10 text-gray-500">
            A cloud-based VolP communications system keeping your business connected.
          </p>

          <div className="text-left group">
            <a href="https://" className="text-lg">
              Learn more
            </a>
            <div className="border-b-2 w-24 border-sky-400 group-hover:border-b-0 duration-200"></div>{" "}
          </div>
        </div>

        {/* item 3 */}
        <div className="flex flex-col md:my-5  space-y-3 text-left  px-7 py-10 border-2 border-sky-100 duration-200 transition-colors hover:border-sky-400 rounded-lg">
          <p className="text-lg text-blue-400 font-medium">
            Communications{" "}
          </p>
          <p className="text-xl font-semibold">Mobile Communications</p>

          <p className="text-left text-lg leading-10 text-gray-500">
            Tailor communications to your business needs
          </p>

          <div className="text-left group">
            <a href="https://" className="text-lg">
              Learn more
            </a>
            <div className="border-b-2 w-24 border-sky-400 group-hover:border-b-0 duration-200"></div>{" "}
          </div>
        </div>
      </div>
    </section>
  )
}
