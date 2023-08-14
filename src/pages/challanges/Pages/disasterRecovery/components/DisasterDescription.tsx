import React from "react";

export default function DisasterDescription() {
  return (
    <section>
      <div className="min-h-screen ">
        {/* top description */}
        <div className="flex flex-col py-8 mt-20  px-6 md:flex-row md:space-x-16 md:px-10 xl:px-16">
          {/* left text */}
          <div className="flex-col mt-10 md:mt-0 space-y-10 md:py-10 w-full">
            <div className="text-4xl font-bold text-black mx-auto  md:text-left">
              Be prepared for any eventuality.
            </div>

            {/* text */}
            <div className="text-left text-gray-600 tex-xl space-y-10">
              <p className="leading-8 font-semibold text-black text-xl">
                Trying to connect to a server but getting no response?
              </p>

              <p className="leading-8 font-medium text-gray-500 ">
                Ah, that’s what that black box in the corner of the office is
                for! Why has it stopped working and why did it have to stop
                working whilst we were all working from home?
              </p>
              <p className="leading-8 font-medium text-gray-500 ">
                The above scenario is a real one. We see it every month.
                Companies have in-office servers which are great, except for
                when they stop working and haven’t been backed up for weeks.
                Then the problem becomes a whole lot bigger! Especially when the
                whole office can’t work or access key files and systems. Are you
                and your business open to this risk? Could this happen to you?
                What would be the impact if it did?
              </p>
            </div>
          </div>

          {/* image section */}
          <div className="w-full  mx-auto md:-mt-0 ">
            <img
              alt=""
              src="https://cisltd.com/wp-content/uploads/2020/04/datacenter-4266403_1920-1024x683.jpg"
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
              src="https://cisltd.com/wp-content/uploads/2020/05/AdobeStock_141874763-1024x683.jpeg"
              className="w-full shadow-lg rounded h-full   md:mb-0 object-center object-cover md:inset-0 "
            />
          </div>

          {/* right text */}
          <div className="flex-col mt-10 md:mt-0 space-y-10 md:py-10 w-full">
            <div className="text-4xl font-bold text-black mx-auto  md:text-left">
              Secure back-ups shouldn't be an afterthought.
            </div>

            {/* text */}
            <div className="text-left text-gray-600 tex-xl space-y-10">
              <p className="leading-8 font-semibold text-black text-xl">
                If your company relies on in-office servers and equipment to run
                your business and if you don’t have a disaster recovery plan in
                place, then you are at risk! It’s a considerable risk for the
                whole future of your business as well.
              </p>

              <p className="leading-8 font-medium text-gray-500 ">
                A good disaster recovery plan will ensure in the event of a
                systems failure or attack, all of your systems can be turned
                back on within hours so ensuring there is limited damage for
                your business.
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
            <p className="text-lg text-blue-400 font-medium">Cloud Solutions</p>
            <p className="text-xl font-semibold">
              Managed Private Cloud Solutions
            </p>

            <p className="text-left text-lg leading-10 text-gray-500">
              Public Cloud is mature but is it always the right choice?
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
              Backup & Recovery
            </p>
            <p className="text-xl font-semibold">Onsite & Offsite Backup</p>

            <p className="text-left text-lg leading-10 text-gray-500">
              Ensure the availability of data and services for your business.
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
            <p className="text-lg text-blue-400 font-medium">
              Backup & Recovery
            </p>
            <p className="text-xl font-semibold">Office 365 Backup</p>

            <p className="text-left text-lg leading-10 text-gray-500">
              Does Microsoft back it all up?
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
