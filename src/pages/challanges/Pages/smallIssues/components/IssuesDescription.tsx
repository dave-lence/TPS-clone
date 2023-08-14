import React from "react";

export default function IssuesDescription() {
  return (
    <section>
      <div className="min-h-screen ">
        {/* top description */}
        <div className="flex flex-col py-8 mt-20  px-6 md:flex-row md:space-x-16 md:px-10 xl:px-16">
          {/* left text */}
          <div className="flex-col mt-10 md:mt-0 space-y-10 md:py-10 w-full">
            <div className="text-4xl font-bold text-black mx-auto  md:text-left">
              Get up and running quickly.
            </div>

            {/* text */}
            <div className="text-left text-gray-600 tex-xl space-y-10">
              <p className="leading-8 font-semibold text-black text-xl">
                We see a lot of common issues and problems that relate to
                computing and IT, it’s just the nature of systems and people!
              </p>

              <p className="leading-8 font-medium text-gray-500 ">
                Jan can’t connect to the printer. Paul can’t access the server
                remotely. John has a problem with charts displaying on his PC.
                The list goes on and on. Each are small individual issues on
                their own but every single one of them creates frustration and
                chips away at your company’s productivity and efficiency.
              </p>
              <p className="leading-8 font-medium text-gray-500 ">
                How do you handle this as a business? How do you stop it from
                damaging how you operate? More importantly, how can you ensure
                these frustrations that your team feel because of simple
                problems don’t affect the service and relationship you give to
                customers?
              </p>
            </div>
          </div>

          {/* image section */}
          <div className="w-full  mx-auto md:-mt-0 ">
            <img
              alt=""
              src="https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/05/AdobeStock_55838490-1-1024x683.jpeg"
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
              src="https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/05/AdobeStock_114329288-1024x683.jpeg"
              className="w-full shadow-lg rounded h-full   md:mb-0 object-center object-cover md:inset-0 "
            />
          </div>

          {/* right text */}
          <div className="flex-col mt-10 md:mt-0 space-y-10 md:py-10 w-full">
            <div className="text-4xl font-bold text-black mx-auto  md:text-left">
              Your in good hands.
            </div>

            {/* text */}
            <div className="text-left text-gray-600 tex-xl space-y-10">
              <p className="leading-8 font-semibold text-black text-xl">
                If you run a growing business, it’s essential that you put in
                place the right support to deal with these small issues.
              </p>

              <p className="leading-8 font-medium text-gray-500 ">
                Ensure added peace of mind of knowing that if there is a glitch
                somewhere, your team can call someone who 95% of the time can
                solve the issue remotely.
              </p>
              <p className="leading-8 font-medium text-gray-500 ">
                Don’t let small issues become bigger ones in your business. Take
                our{" "}
                <a
                  href="https://"
                  className="text-blue-400 font-medium border-b-2 border-blue-400 hover:border-b-0"
                >
                  IT Systems Audit
                </a>{" "}
                today and give yourself one less headache to think about!
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
            <p className="text-lg text-blue-400 font-medium">
              IT Support and Consultancy Services
            </p>
            <p className="text-xl font-semibold">IT Audits</p>

            <p className="text-left text-lg leading-10 text-gray-500">
              Maximising the investment already made.
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
            <p className="text-lg text-blue-400 font-medium">
              {" "}
              IT Support and Consultancy Services
            </p>
            <p className="text-xl font-semibold">
              Architecture, Design & Implementation
            </p>

            <p className="text-left text-lg leading-10 text-gray-500">
              Secure and resilient IT Infrastructures.
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
