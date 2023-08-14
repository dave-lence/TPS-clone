import React from "react";

export default function BackupDescription() {
  return (
    <section id="description">
      <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-0  px-6 py-10 md:px-10">
        {/* description 1 */}
        <div className="flex flex-col py-8 md:flex-row md:space-x-16 xl:px-10">
          {/* image section */}
          <div className="w-full  mx-auto md:-mt-0 ">
            <img
              alt=""
              src="https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/server-1235959_1920-1024x683.jpg"
              className="w-full shadow-lg rounded h-full   md:mb-0 object-center object-cover md:inset-0 "
            />
          </div>

          {/* left text */}
          <div className="flex-col mt-10 md:mt-0 space-y-10 md:py-10 w-full">
            <h1 className="font-bold text-3xl  text-left">
              Get back up and running quickly
            </h1>
            <div className="text-xl font-medium text-black mx-auto  md:text-left">
              Data and service availability is critical to an organisation, CIS
              prides itself in ensuring your data and services are safe, secure
              and available.
            </div>

            {/* text */}
            <div className="text-left text-gray-500 tex-xl space-y-10">
              <p className="leading-7 font-medium">
                A comprehensive data protection strategy is crucial to ensuring
                the continuing operations of your organisation should the worst
                happen. CIS’ team of data protection experts can help to ensure
                your business is protected from the devastation that a server
                failure or ransomware outbreak can cause.
              </p>

              <p className="leading-7 font-medium">
                Wherever your data resides, CIS can ensure it is protected and
                available, whether recovering from accidental deletion or a
                major catastrophe CIS can quickly get your organisation back to
                running as normal.
              </p>
            </div>
          </div>
        </div>

        {/* description 2 */}
        <div className="flex flex-col py-10 md:flex-row md:space-x-16 xl:px-10">
          {/* right text */}
          <div className="flex-col mt-10 md:mt-0 space-y-10 md:py-10 w-full">
            <h1 className="font-bold text-3xl  text-left">
              Back up solutions Oxford
            </h1>
            <div className="text-xl font-medium text-black mx-auto  md:text-left">
              CIS offers onsite and offsite backup solutions; these solutions
              ensure that your data is kept safe and within reach if something
              was to happen, such as a malicious{" "}
              <a
                href="https://"
                className="border-b-2 duration-100 border-blue-400 text-blue-400 hover:border-b-0"
              >
                cyber attack
              </a>{" "}
              .
            </div>

            {/* text */}
            <div className="text-left text-gray-500 tex-xl space-y-10">
              <p className="leading-7 font-medium">
                Our{" "}
                <a
                  href="https://"
                  className="border-b-2 duration-100 border-blue-400 text-blue-400 hover:border-b-0"
                >
                  Private Cloud solutions
                </a>{" "}
                also ensure that{" "}
                <a
                  href="https://"
                  className="border-b-2 duration-100 border-blue-400 text-blue-400 hover:border-b-0"
                >
                  cyber security threats
                </a>{" "}
                are mitigated to the highest degree, providing our clients with
                a peace of mind that their data is safe and secure. station that
                a server failure or ransomware outbreak can cause.
              </p>

              <p className="leading-7 font-medium">
                CIS’s backup solutions are regularly tested, guarantee fast
                recovery and ensure compliance.
              </p>
            </div>
          </div>

          {/* image section */}
          <div className="w-full  mx-auto md:-mt-0 ">
            <img
              alt=""
              src="https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/07/AdobeStock_298559228-1024x576.jpeg"
              className="w-full mt-10 md:mt-0 shadow-lg rounded h-full   md:mb-0 object-center object-cover md:inset-0 "
            />
          </div>
        </div>
      </div>

      {/* services */}
      <div className="grid p-10 bg-white cursor-pointer gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* item 1 */}
        <div className="flex flex-col space-y-3 text-left md:my-5 px-7 py-10 border-2 border-sky-100 duration-200 transition-colors hover:border-sky-400 rounded-lg">
          <p className="text-lg text-blue-400 font-medium">
            Backup & Recovery{" "}
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

        {/* item 2 */}
        <div className="flex flex-col md:my-5  space-y-3 text-left  px-7 py-10 border-2 border-sky-100 duration-200 transition-colors hover:border-sky-400 rounded-lg">
          <p className="text-lg text-blue-400 font-medium">
            Backup & Recovery{" "}
          </p>
          <p className="text-xl font-semibold">Office 365 Backup</p>

          <p className="text-left text-lg leading-10 text-gray-500">
            Does microsoft back it all up?
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
  );
}
