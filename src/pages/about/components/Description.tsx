export default function Description() {
  return (
    <section id="description">
      <div className="min-h-screen ">
        {/* top description */}
        <div className="flex flex-col  px-6 md:flex-row md:space-x-10 md:px-10 xl:px-16">
          {/* left text */}
          <div className="flex-col py-28 md:py-40 space-y-7 w-full">
            <div className="text-xl text-black mx-auto  md:text-left">
              CIS has a dedicated team of experts who can provide a scalable
              service for a wide range of IT projects.
            </div>

            <p className="text-gray-600">
              Our adaptive solutions and private cloud allow clients to expand
              their IT infrastructure as and when it’s required. Based in
              Oxfordshire, CIS is purpose-built around five key pillars:
            </p>

            {/* list items */}
            <ul className="space-y-3 ml-4">
              <li className="list-disc text-gray-600">Cloud services</li>
              <li className="list-disc text-gray-600">Cyber security</li>
              <li className="list-disc text-gray-600">Communications infrastructure</li>
              <li className="list-disc text-left text-gray-600">
                Back up & disaster recovery
              </li>
              <li className="list-disc text-left text-gray-600">IT support</li>
            </ul>
          </div>

          {/* image section */}
          <div className="w-full -mt-20 md:-mt-0 md:py-28">
            <img
              alt=""
              src="https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/05/DSC0886611-1024x700.jpg"
              className="w-full shadow-lg rounded h-auto md:w-full mb-60 md:mb-0 object-center object-cover md:inset-0 md:h-full"
            />
          </div>
        </div>

        {/* bottom description */}
        <div className="flex flex-col -mt-10  px-6 md:flex-row md:space-x-5 md:px-10 xl:px-16">
          {/* blue banner text section */}
          <div className="w-full lg:pr-36 -mt-10 md:-mt-0 md:pb-28 md:py-0">
            <div className="p-10 bg-blue-950 text-center text-white rounded">
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

              <p className="text-2xl font-bold text-left">
                We are delighted to be working with CIS, the project is already
                looking well organised and innovative. CIS delivers a prompt
                professional service with trusted knowledge we can rely on at
                all times.
              </p>
              <p className="mt-10 text-left">
                John Story, Head of IT, St. Pauls Cathedral
              </p>
            </div>
          </div>

          {/* right text */}
          <div className="flex-col mb-20  py-10 md:py-10 md:pb-36 space-y-10 w-full">
            <div className="text-xl text-black md:text-left">
              With over 30 years in the IT industry, CIS has a proven track
              record working alongside organisations looking to expand and
              protect their IT infrastructure.
            </div>

            {/* list items */}
            <ul className="space-y-3 ml-4">
              <li className="list-disc  text-gray-600">
                Last year CIS completed 34,000 tickets at a resolution rate of
                99.8%
              </li>
              <li className="list-disc text-gray-600">
                82% of customers are on managed contracts
              </li>
              <li className="list-disc text-gray-600">
                Average Survey Score 4.83/5.00 – 96.6%
              </li>
            </ul>

            <p className="list-disc text-gray-600">
              Our dedicated team of experts continually work to ensure that all
              IT development helps to make IT work smarter for business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
