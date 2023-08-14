import React from "react";

export default function RoiDescription() {
  return (
    <section>
      <div className="min-h-screen ">
        {/* top description */}
        <div className="flex flex-col py-8 mt-20  px-6 md:flex-row md:space-x-16 md:px-10 xl:px-16">
          {/* left text */}
          <div className="flex-col mt-10 md:mt-0 space-y-10 md:py-10 w-full">
            <div className="text-4xl font-bold text-black mx-auto  md:text-left">
              IT impacts your bottom line.
            </div>

            {/* text */}
            <div className="text-left text-gray-600 tex-xl space-y-10">
              <p className="leading-8 font-semibold text-black text-xl">
                Every month a new request appears. Whether it’s a new laptop, a
                new system or upgrades to existing devices, there never seems to
                be enough money put in the budget to cover for what is
                requested.
              </p>

              <p className="leading-8 font-medium text-gray-500 ">
                Those business cases which promise significant changes and
                improvements if the investment is made never seem to deliver and
                the costs only ever seem to rise rather than fall.
              </p>
              <p className="leading-8 font-medium text-gray-500 ">
                f the above statements sound familiar, then we understand the
                frustrations you face. We know many IT providers focus on the
                value to them for implementing new solutions and care little for
                the return that new technology and tools can provide for the
                business.
              </p>
            </div>
          </div>

          {/* image section */}
          <div className="w-full  mx-auto md:-mt-0 ">
            <img
              alt=""
              src="https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/image2-1024x683.jpg"
              className="w-full shadow-lg rounded h-full   md:mb-0 object-center object-cover md:inset-0 "
            />
          </div>
        </div>

        {/* middle description */}
        <div className="flex flex-col py-8 mt-20  px-6 md:flex-row md:space-x-16 md:px-10 xl:px-16">
          {/* image section */}
          <div className="w-full  mx-auto md:-mt-0 ">
            <img
              alt=""
              src="https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/photo-1513611771808-7e8ab7f1dec6-1024x683.jpg"
              className="w-full shadow-lg rounded h-full   md:mb-0 object-center object-cover md:inset-0 "
            />
          </div>

          {/* right text */}
          <div className="flex-col mt-10 md:mt-0 space-y-10 md:py-10 w-full">
            <div className="text-4xl font-bold text-black mx-auto  md:text-left">
              CIS has a different approach.
            </div>

            {/* text */}
            <div className="text-left text-gray-600 tex-xl space-y-10">
              <p className="leading-8 font-semibold text-black text-xl">
                The initial IT assessment we do with every new client gives you
                an MOT on where you are in good shape (Green) as a business and
                where there are Amber and Red warnings that you need to be aware
                of.
              </p>

              <p className="leading-8 font-medium text-gray-500 ">
                Our team will outline the potential returns and risks in making
                any changes and explain all of this in simple English, so
                allowing you to make the right decision for you.
              </p>
              <p className="leading-8 font-medium text-gray-500 ">
                We know you don’t have an endless pot of money, and you need to
                show a return and gain for investing in technology. Why not book
                an appointment with our team so that we can support you in
                choosing the right technology that will deliver benefits and
                gains for your company?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* services */}
      <div className=" p-10 bg-gradient-to-b from-slate-100 to-slate-0 ">
        <div className="space-y-5">
          <p className="text-blue-400">Services</p>
          <h1 className="text-3xl md:text-5xl font-bold">Related Services</h1>
        </div>
        <div className="grid mt-20 cursor-pointer gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* item 1 */}
          <div className="flex bg-white  flex-col space-y-5 text-left md:my-5 px-7 py-10 border-2 border-sky-100 duration-200 transition-colors hover:border-sky-400 rounded-lg">
            <p className="text-lg text-blue-400 font-medium">Communications</p>
            <p className="text-xl font-semibold">VoIP Solutions – EVE VoIP</p>

            <p className="text-left text-lg leading-10 text-gray-500">
              A cloud-based VoIP communications system keeping your business
              connected.
            </p>

            <div className="text-left group">
              <a href="https://" className="text-lg">
                Learn more
              </a>
              <div className="border-b-2 w-24 border-sky-400 group-hover:border-b-0 duration-200"></div>{" "}
            </div>
          </div>

          {/* item 2 */}
          <div className="flex bg-white flex-col md:my-5  space-y-5 text-left  px-7 py-10 border-2 border-sky-100 duration-200 transition-colors hover:border-sky-400 rounded-lg">
            <p className="text-lg text-blue-400 font-medium">
              IT Support and Consultancy Services
            </p>
            <p className="text-xl font-semibold">Managed IT Support</p>

            <p className="text-left text-lg leading-10 text-gray-500">
              Expert help when you need it most.
            </p>

            <div className="text-left group">
              <a href="https://" className="text-lg">
                Learn more
              </a>
              <div className="border-b-2 w-24 border-sky-400 group-hover:border-b-0 duration-200"></div>{" "}
            </div>
          </div>

          {/* item 3 */}
          <div className="flex bg-white flex-col md:my-5  space-y-5 text-left  px-7 py-10 border-2 border-sky-100 duration-200 transition-colors hover:border-sky-400 rounded-lg">
            <p className="text-lg text-blue-400 font-medium">Cloud Solutions</p>
            <p className="text-xl font-semibold">
              Infrastructure-as-a-Service (IaaS)
            </p>

            <p className="text-left text-lg leading-10 text-gray-500">
              Ease the burden of IT infrastructure management and concentrate on
              your business operations.
            </p>

            <div className="text-left group">
              <a href="https://" className="text-lg">
                Learn more
              </a>
              <div className="border-b-2 w-24 border-sky-400 group-hover:border-b-0 duration-200"></div>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
