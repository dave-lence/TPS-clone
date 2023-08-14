import { AiOutlineRight } from "react-icons/ai";

export default function AllFaqs() {
  return (
    <section id="all-faqs">
      {/* top links */}
      <div className="flex flex-col space-y-4 px-6 py-10 md:px-10 md:flex-row md:items-center md:justify-between">
        <div className="flex-row flex items-center space-x-3">
          <a href="https://" className="cursor-pointer text-left tex-2xl">
            Knowledge Base
          </a>
          <AiOutlineRight color="blue" />
          <a href="https://" className="cursor-pointer text-left tex-2xl">
            FAQs
          </a>
        </div>

        <div className="bg-gray-200 w-72 cursor-pointer flex flex-row items-center space-x-4 rounded-full px-5 py-3 text-center">
          <p>Return to Knowledge Base</p>
          <svg
            className="ml-15"
            height="18"
            viewBox="0 0 18 18"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <g fill="#49a8ff" fillRule="evenodd">
              {" "}
              <circle cx="16.5" cy="1.889135" r="1.5"></circle>{" "}
              <circle cx="16.5" cy="8.889135" r="1.5"></circle>{" "}
              <circle cx="16.5" cy="15.889135" r="1.5"></circle>{" "}
              <circle cx="9" cy="1.889135" r="1.5"></circle>{" "}
              <circle cx="9" cy="8.889135" r="1.5"></circle>{" "}
              <circle cx="9" cy="15.889135" r="1.5"></circle>{" "}
              <circle cx="1.5" cy="1.889135" r="1.5"></circle>{" "}
              <circle cx="1.5" cy="8.889135" r="1.5"></circle>{" "}
              <circle cx="1.5" cy="15.889135" r="1.5"></circle>{" "}
            </g>{" "}
          </svg>
        </div>
      </div>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <div className=" bg-gradient-to-b from-slate-200 to-slate-0 py-8 px-10 md:px-10 md:py-24">
        {/* questions */}

        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="text-3xl flex-1 font-bold mb-10">All FAQs</div>

          <div className="grid md:grid-cols-2 md:w-3/4 gap-4 md:gap-10">
            <div className="flex flex-row items-center">
              <ul>
                <li className="text-black list-disc">
                  Why is CYDEFENCE’s authenticated web application scanning
                  important?
                </li>
              </ul>
            </div>

            <div className="flex flex-row items-center">
              <ul>
                <li className="text-black list-disc ">
                  Do CIS offer penetration testing services?
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
                  Should I start with CYDEFENCE’s external vulnerability
                  scanning or web application scanning?
                </li>
              </ul>
            </div>

            <div className="flex items-center flex-row">
              <ul>
                <li className="text-black list-disc">
                  Can I scan network devices with CYDEFENCE?
                </li>
              </ul>
            </div>

            <div className="flex items-center flex-row">
              <ul>
                <li className="text-black list-disc">
                  What is the difference between CYDEFENCE’s external and
                  internal vulnerability scan?
                </li>
              </ul>
            </div>

            <div className="flex items-center flex-row">
              <ul>
                <li className="text-black list-disc">
                  What is a web application scanner?
                </li>
              </ul>
            </div>

            <div className="flex items-center flex-row">
              <ul>
                <li className="text-black list-disc">
                  Should I perform CYDEFENCE external vulnerability scanning or
                  external penetration testing?
                </li>
              </ul>
            </div>

            <div className="flex items-center flex-row">
              <ul>
                <li className="text-black list-disc">
                  Can CYDEFENCE scan behind a web-app login?
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* stay updated section */}
      <div className="border-2 relative w- mt-20 flex flex-col md:flex-row space-y-4 md:space-x-10 border-blue-100 p-5 ms:p-10 rounded md:justify-between ">
            
            <div className="space-y-5 flex-1 text-left my-12">
              <p className="text-black text-3xl font-bold">Keep up to date</p>
              <p className="text-black text-lg">
              Join our mailing list and stay up to date with all the latest in the IT world.
              </p>
            </div>

            <div className="flex flex-1  items-center md:px-0 flex-row mb-10 space-x-3 ">
              <input
                type="text"
                placeholder="Email Address"
                className="flex-1 py-3 px-4  placeholder:text-black rounded-full bg-gray-200 text-black outline-blue-400"
              />
              <div className="rounded-full p-3 border-2  cursor-pointer border-blue-400">
                <AiOutlineRight />
              </div>
            </div>
          </div>
      </div>

      
    </section>
  );
}
