import React from 'react'

const KeepUpToDate = () => {
  return (
    <section>
        <div className='container flex flex-col sm:flex-row mx-auto justify-between items-center max-w-6xl h-60 sm:h-48 shadow-xl p-6 space-y-6'>
            <div className='flex flex-col'>
            <h2 className='text-2xl font-bold'>Keep up to date</h2>
            <p className='sm:mt-2 mt-4'>Join our mailing list and stay up to date with all the latest in the IT world</p>
            </div>

            <div className="flex flex-col sm:flex-row mr-auto mb-10 sm:mb-0 sm:mr-0 sm:p-0 ">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Email address"
                    className="px-4 md:mr-6 rounded-full border-2 w-36 h-12 sm:w-72 hover:border-sky-400"
                  />
                  </div>
                  <div>
                  <svg
                      className="next-button cursor-pointer slick-arrow"
                      height="45"
                      viewBox="0 0 44 45"
                      width="44"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{}}
                    >
                      <g
                        fill="none"
                        fill-rule="evenodd"
                        transform="translate(1 1.082729)"
                      >
                        <circle
                          cx="21"
                          cy="21.527576"
                          r="21"
                          stroke="#49a8ff"
                          stroke-width="2"
                        ></circle>
                        <path
                          d="m23.28125 26.057896.46875-.390625 7.8125-7.8125-.9375-.9375-7.34375 7.3828125-7.34375-7.3828125-.9375.9375 7.8125 7.8125z"
                          fill="#191c21"
                          fill-rule="nonzero"
                          stroke="#ffff"
                          transform="matrix(0 -1 1 0 1.793666 44.768834)"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
                </div>
      
    </section>
  )
}

export default KeepUpToDate
