import React from "react";

export default function KnowledgeFaqs() {
  return (
    <section id="issues-faqs">
      <div className="flex flex-col space-y-8 px-6 md:px-10 py-10 bg-white md:flex-row">
        {/* top info */}
        <div className="flex flex-col space-y-5">
          <p className="text-xl">FAQS</p>
          <h1 className="font-bold text-black text-3xl md:text-5xl">
            Frequently asked Questions
          </h1>

          <div className="border-2 text-center w-44 rounded-full border-blue-400 px-8 py-3 hover:bg-blue-400 duration-200 hover:text-white ">
            <p>View all FAQS</p>
          </div>
        </div>

        {/* quetsions */}
        <div className="grid md:w-3/4 px-6 md:px-0 md:grid-cols-2 gap-4 md:gap-10">
          <div className="flex flex-row items-center">
            <ul>
              <li className="text-black list-disc">
                How often should I run CYDEFENCE vulnerability scans?
              </li>
            </ul>
          </div>

          <div className="flex flex-row items-center">
            <ul>
              <li className="text-black list-disc">
                How often should I run CYDEFENCE vulnerability scans?
              </li>
            </ul>
          </div>

          <div className="flex flex-row items-center">
            <ul>
              <li className="text-black list-disc">
              What size of business do you support?
              </li>
            </ul>
          </div>

          <div className="flex flex-row items-center">
            <ul>
              <li className="text-black list-disc">
              Why should I bother when there is PC World?
              </li>
            </ul>
          </div>
          
          <div className="flex flex-row items-center">
            <ul>
              <li className="text-black list-disc">
              Why should I bother when there is PC World?
              </li>
            </ul>
          </div>

          <div className="flex flex-row items-center">
            <ul>
              <li className="text-black list-disc">
              Why should I bother when there is PC World?
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
