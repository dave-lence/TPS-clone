import { AiOutlineRight } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


export default function KeepUpToDate() {
  
  return (
    <section id="keep-up-t-date" className="my-10">
      <div className="min-h-screen my-10 px-6 md:px-10">
        <div className="flex flex-col space-y-5 md:flex-row md:space-x-10">
          {/* left box input */}
          <div className="border-2 w-full md:w-1/2 border-blue-100 p-10 rounded ">
            <p className="text-blue-400 text-xl text-left">Our Newsletter</p>

            <div className="space-y-5 text-left my-12">
              <p className="text-black text-3xl font-bold">Keep up to date</p>
              <p className="text-black text-lg">
                Discover the latest industry news, offers & more.
              </p>
            </div>

            <div className="flex px-4 items-center md:px-0 sm:flex-row flex-col space-y-5 mb-10 sm:space-x-3 md:space-x-7">
              <input
                type="text"
                placeholder="Email Address"
                className="flex-1 py-3 px-4 placeholder:text-black rounded-full bg-gray-100 text-black outline-blue-400"
              />
              <div className="rounded-full p-3 border-2  cursor-pointer border-blue-400">
                <AiOutlineRight />
              </div>
            </div>
          </div>

          {/* right blue content */}

          <div className="p-10 w-full md:w-1/2 bg-blue-950  text-white rounded">
            <div className="flex justify-between mb-10">
              <svg
                height="22"
                viewBox="0 0 50 22"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke="#49a8ff"
                  stroke-width="2"
                  transform="translate(1.85781 1.610305)"
                >
                  <path d="m11.5020027 18.9572212-2.67894668.0427788c-2.19907981-.1580957-4.35414083-1.0744306-6.03615479-2.7564446-3.71617829-3.7161782-3.71555831-9.74055336 0-13.45611167 3.71617829-3.71617829 9.74055337-3.71679828 13.45673167-.00061998 1.9603864 1.96038634 2.886021 4.56369509 2.778144 7.13166481h.0458787l-.0055798 9.02881284z"></path>
                  <path d="m38.6441928 18.9572212-2.6789467.0427788c-2.1990798-.1580957-4.3541408-1.0744306-6.0361548-2.7564446-3.7161783-3.7161782-3.7155583-9.74055336 0-13.45611167 3.7161783-3.71617829 9.7405534-3.71679828 13.4567317-.00061998 1.9603863 1.96038634 2.886021 4.56369509 2.778144 7.13166481h.0458787l-.0055798 9.02881284z"></path>
                </g>
              </svg>
            </div>

            <Carousel   autoPlay infiniteLoop interval={5000} transitionTime={3000} stopOnHover>
              <div>
                <p className="text-2xl font-bold text-left">
                  CIS’s expertise has helped our business to grow without having
                  to worry about unpredictable system outages &amp; high
                  maintenance costs. We’ve seen a huge increase in efficiency
                  from working in a virtualised environment along with peace of
                  mind that our systems are fully backed up at all times.
                </p>
                <p className="mt-10  mb-10 text-left">
                  John Story, Head of IT, St. Pauls Cathedral
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-left">
                  CIS’s expertise has helped our business to grow without having
                  to worry about unpredictable system outages &amp; high
                  maintenance costs. We’ve seen a huge increase in efficiency
                  from working in a virtualised environment along with peace of
                  mind that our systems are fully backed up at all times.
                </p>
                <p className="mt-10 text-left">
                  John Story, Head of IT, St. Pauls Cathedral
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-left">
                  CIS’s expertise has helped our business to grow without having
                  to worry about unpredictable system outages &amp; high
                  maintenance costs. We’ve seen a huge increase in efficiency
                  from working in a virtualised environment along with peace of
                  mind that our systems are fully backed up at all times.
                  
                </p>
                <p className="mt-10  mb-10 text-left">
                  John Story, Head of IT, St. Pauls Cathedral
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-left">
                  CIS’s expertise has helped our business to grow without having
                  to worry about unpredictable system outages &amp; high
                  maintenance costs. We’ve seen a huge increase in efficiency
                  from working in a virtualised environment along with peace of
                  mind that our systems are fully backed up at all times.
                </p>
                <p className="mt-4 mb-10 text-left">
                  John Story, Head of IT, St. Pauls Cathedral
                </p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
