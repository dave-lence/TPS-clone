import React from "react";
import { AiOutlineRight } from "react-icons/ai";

export default function TermsGetIntouch() {
  return (
    <section>
      <div className="px-10 md:px-60 py-10">
        {/* icons */}
        <div className="flex flex-row items-center space-x-4 mt-5 ">
          <p className=" text-blue-300 font-medium">Share</p>

          <div className=" border-2 mr-3 rounded-full p-3 border-blue-100">
            <a className="c-social-icon " href="https://">
              {" "}
              <svg
                className="text-black mx-auto my-auto"
                height="18"
                viewBox="0 0 9 20"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-current"
                  d="m8.37383984 6.6847312-.20965073 2.81514358h-2.72012113v9.42967822h-3.58007736v-9.42967822h-1.81260525v-2.81514358h1.81260525v-2.11099043-.60964581s-.12811989-3.11629391 3.58007736-3.28474223c1.80192859-.08128611 3.30296957.32857216 3.30296957.32857216l-.38144786 2.76813474s-2.92152171-.91422387-2.92152171.86721504v2.04145653z"
                  fill="#fff"
                  fill-rule="evenodd"
                  transform="translate(0 .200882)"
                ></path>
              </svg>{" "}
            </a>
          </div>

          <div className="border-2 rounded-full p-3 mr-3 border-blue-100">
            <a
              className="c-social-icon mx-auto my-auto"
              href="https://twitter.com/cis_oxford?lang=en"
            >
              {" "}
              <svg
                className="icon-twitter text-black"
                height="18"
                viewBox="0 0 18 14"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-current"
                  d="m69.3002602 3.09921812c-.6904189.40181553-1.4533587.69461508-2.2662792.85283295-.6512184-.68207341-1.5797804-1.10945463-2.6038936-1.10945463-1.9712954 0-3.568226 1.57204898-3.568226 3.51214747 0 .2749518.0313604.54363277.0916312.79928971-2.9645383-.14519384-5.5934222-1.54358905-7.3540149-3.66891823-.307724.51903182-.4831462 1.12296103-.4831462 1.76644472 0 1.21750587.6296581 2.29319449 1.5881105 2.9226894-.5855576-.01784775-1.1353447-.17654799-1.6160409-.43992288-.00098.01495352-.00098.03038941-.00098.04534293 0 1.70084219 1.2289358 3.12142654 2.8631069 3.44316834-.3008639.0810384-.6149579.1244519-.9408121.1244519-.229323 0-.4527658-.0226715-.6703287-.0631907.4542359 1.3940539 1.7703929 2.4104108 3.332043 2.437906-1.2210957.9430364-2.7587356 1.5045169-4.4316171 1.5045169-.2876337 0-.5713474-.0164006-.851141-.0496843 1.5788003.9965797 3.4550346 1.5788022 5.4699405 1.5788022 6.5631447 0 10.151461-5.352395 10.151461-9.993292 0-.15242942-.0039201-.3038941-.0098001-.45535877.696789-.49491324 1.3014568-1.11283124 1.7797029-1.81709374-.6399482.27881077-1.3274271.46693569-2.0492064.55135071.7369695-.43316968 1.3029268-1.12296104 1.5694902-1.94202798"
                  fill="#fff"
                  fill-rule="evenodd"
                  transform="translate(-52 -2.799118)"
                ></path>
              </svg>{" "}
            </a>
          </div>

          <div className=" border-2 rounded-full mr-3 p-3 border-blue-100">
            <a
              className="c-social-icon mx-auto my-auto"
              href="https://www.linkedin.com/company/computing-information-systems"
            >
              {" "}
              <svg
                className="text-black"
                height="19"
                viewBox="0 0 20 19"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-current"
                  d="m4.82185366 2.21648916c0 1.22880233-.93004445 2.21380945-2.42530433 2.21380945h-.0278564c-1.43954707.00089242-2.36869293-.98590015-2.36869293-2.21380945 0-1.25827215.95879945-2.21648854 2.42440574-2.21648854 1.46740347-.0008924 2.37049011.95821639 2.39744792 2.21648854zm-4.57024743 16.78261784h4.28808902v-12.81758708h-4.28808902zm14.81241817-13.11764346c-2.2743406 0-3.2924473 1.24130468-3.8648514 2.11646912v.04107915h-.0278564c.0107831-.01250235.0206676-.02679075.0278564-.04107915v-1.81551971h-4.28719045c.05571281 1.20111855 0 12.81758705 0 12.81758705h4.28719045v-7.158488c0-.3857867.0260592-.7635363.1410792-1.039481.3109134-.7626433 1.017208-1.56011459 2.1979601-1.56011459 1.5536685 0 2.1745967 1.17789989 2.1745967 2.89965199v6.8584316h4.2871907v-7.3487023c.0008983-3.94002604-2.1161884-5.76983416-4.9359753-5.76983416z"
                ></path>
              </svg>{" "}
            </a>
          </div>
        </div>

        {/* blue banner */}

        <div className="rounded p-10 mt-10 space-y-10 bg-blue-950">
          <p className="text-2xl font-bold text-white text-left">
            How can we help?
          </p>
          <p className="text-white text-left">
            Whether you have a project to discuss or just need some friendly
            advice, we'd be happy to help.
          </p>

          <div className="rounded-full cursor-pointer w-40 md:w-52 py-2 border-2 border-sky-400 text-center hover:bg-sky-400 duration-500 text-white">
            Get in touch
          </div>
        </div>

        {/* get in touch input  */}
        <div className="border-2 relative  mt-10 flex flex-col  space-y-4  border-gray-100 p-5 ms:p-10 rounded ">
          <div className="space-y-5 flex-1 text-left mb-5 mt-12">
            <p className="text-black text-3xl font-bold">Keep up to date</p>
            <p className="text-black text-lg">
            Join our mailing list and stay up to date with all the latest in the IT world
            </p>
          </div>

          <div className="flex  items-center md:pr-48 flex-row mb-10 space-x-3 ">
            <input
              type="text"
              placeholder="Email Address"
              className="flex-1 py-3 px-4 w-64 placeholder:text-black rounded-full bg-gray-200 text-black outline-blue-400"
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
