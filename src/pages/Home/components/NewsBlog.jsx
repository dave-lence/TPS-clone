import React from "react";
import blog1 from '../../../assets/images/Blog1.png'
import blog2 from '../../../assets/images/blog2.png'
import blog3 from '../../../assets/images/blog3.png'
import blog4 from '../../../assets/images/blog4.png'
import blog5 from '../../../assets/images/blog5.png'
import { Link } from "react-router-dom";





const NewsBlog = () => {
  return (
    <section>
      <div className="container mx-auto justify-center items-center max-w-7xl p-6 space-y-6">
        {/* newsblog container */}
        <div>
          <div className="mr-auto">
            <h6 className="text-gray-700 ">Latest News & Blog</h6>
          </div>

          <div className="flex flex-col mx-auto">
            <div className="flex flex-col justify-between sm:flex-row mb-5">
              <h2 className="text-3xl font-bold leading-tight mb-15 sm:mb-0">
                Stories, Resources & IT Advice
              </h2>
              <div className="flex">
                <svg
                  class="rotate-180 mr-2 prev-button cursor-pointer slick-arrow"
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
                      stroke="#191c21"
                      transform="matrix(0 -1 1 0 1.793666 44.768834)"
                    ></path>
                  </g>
                </svg>
                <svg
                  class="next-button cursor-pointer slick-arrow"
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
                      stroke="#191c21"
                      transform="matrix(0 -1 1 0 1.793666 44.768834)"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>

            {/* image flex container */}
            <div className="item-container inline-block">
                {/* image 1 */}
            <div className="group relative rounded mb-30 overflow-hidden md:w-1/4">
            <img src={blog1} alt="" className="w-full h-60 object-cover object-center" />
            <p class="text-blue-600 mb-4 mt-4 font-bold text-sm">17/02/2021</p>
            <h3 class="text-lg font-bold text-slate-950 mb-5">Best Office Communication Systems</h3>
            <div className="group">
            <h4 href="#" className="text-slate-950 text-lg">Learn more</h4>
           <div className="mx-0 w-20 group-hover:border-b-2 group-hover:border-sky-500"> </div>
            </div>
            </div>
            
              {/* image 2 */}
              <div className="group relative rounded mb-30 overflow-hidden md:w-1/4">
            <img src={blog2} alt="" className="w-full h-60 object-cover object-center" />
            <p class="text-blue-600 mb-4 mt-4 font-bold text-sm">17/02/2021</p>
            <h3 class="text-lg font-bold text-slate-950 mb-5">What does an IT support company do?</h3>
            <div className="group">
            <h4 href="#" className="text-slate-950 text-lg">Learn more</h4>
           <div className="mx-0 w-20 group-hover:border-b-2 group-hover:border-sky-500"> </div>
            </div>
            </div>
            
              {/* image 3 */}
              <div className="group relative rounded mb-30 overflow-hidden md:w-1/4">
            <img src={blog3} alt="" className="w-full h-60 object-cover object-center" />
            <p class="text-blue-600 mb-4 mt-4 font-bold text-sm">17/02/2021</p>
            <h3 class="text-lg font-bold text-slate-950 mb-5">What is an IT audit? The definitive guide</h3>
            <div className="group">
            <h4 href="#" className="text-slate-950 text-lg">Learn more</h4>
           <div className="mx-0 w-20 group-hover:border-b-2 group-hover:border-sky-500"> </div>
            </div>
            </div>
            
              {/* image 4 */}
              <div className="group relative rounded mb-30 overflow-hidden md:w-1/4">
            <img src={blog4} alt="" className="w-full h-60 object-cover object-center" />
            <p class="text-blue-600 mb-4 mt-4 font-bold text-sm">17/02/2021</p>
            <h3 class="text-lg font-bold text-slate-950 mb-5">Disaster Recovery Plan Guidelines</h3>
            <div className="group">
            <h4 href="#" className="text-slate-950 text-lg">Learn more</h4>
           <div className="mx-0 w-20 group-hover:border-b-2 group-hover:border-sky-500"> </div>
            </div>
            </div>
            
              {/* image 5 */}
              <div className="group relative rounded mb-30 overflow-hidden md:w-1/4">
            <img src={blog5} alt="" className="w-full h-60 object-cover object-center" />
            <p class="text-blue-600 mb-4 mt-4 font-bold text-sm">17/02/2021</p>
            <h3 class="text-lg font-bold text-slate-950 mb-5">Vipre? Edge Defence Security Solution</h3>
            <div className="group">
            <h4 className="text-slate-950 text-lg">Learn more</h4>
           <div className="mx-0 w-20 group-hover:border-b-2 group-hover:border-sky-500"> </div>
            </div>
            </div>
           </div>
        </div>
        <Link to='./knowledgeBase'>
        <button className="px-8 py-3 mt-6 rounded-full bg-transparent border-2 border-primary100 text-black font-normal text-sm md:text-lg hover:bg-primary100 hover:text-white hover:transition-colors hover:duration-300 ">
          View Knowledge Hub
        </button>
        </Link>
        
      </div>
    </section>
  );
};

export default NewsBlog;
