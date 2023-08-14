import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 min-h-screen w-full ">
      {/* get in touch */}

      <div className="flex flex-col py-20 px-6 md:px-14 md:items-center md:flex-row md:space-x-10">
        {/*section text */}
        <div className="flex flex-col space-y-6">
          <h3 className="font-bold text-3xl text-white text-left">Get in Touch</h3>
          <p className="text-white text-xl text-left">
            Looking to expand or protect your IT infrastructure? Discover how we can make IT work smarter for your business.
          </p>

          <div className="rounded-full w-40 md:w-52 py-2 border-2 border-sky-400 text-center hover:bg-sky-400 duration-500 text-white">
            Make an Enquiry
          </div>
        </div>

        <div className="w-3/4 mt-7 mx-auto md:mt-0">
          <svg className="s-hero__flourish w-38" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1258 778" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
            <defs> <clipPath id="erq9t3lfd8r2"> <path id="erq9t3lfd8r3" d="M883.850000,73C1058.350000,73,1199.850000,214.500000,1199.850000,389C1199.850000,563.500000,1058.350000,705,883.850000,705C803.800803,705.110352,726.725712,674.673738,668.350000,619.900000L668.350000,619.900000L657.550000,609.100000L746.850000,519.800000C782.496386,557.333675,831.986678,578.590280,883.750000,578.600000C988.450000,578.600000,1073.350000,493.700000,1073.350000,389C1073.350000,284.300000,988.550000,199.400000,883.850000,199.400000C830.772472,199.379745,780.137972,221.702481,744.350000,260.900000L744.250000,260.800000L703.250000,301.800000L613.850000,212.400000L654.850000,171.400000L654.750000,171.300000C714.375726,108.460209,797.224030,72.912465,883.850000,73ZM289.050000,158.200000C351.870332,158.123459,411.989682,183.739216,455.450000,229.100000L366.650000,317.900000C327.555405,275.287608,261.432026,272.119934,218.443071,310.800072C175.454116,349.480209,171.646304,415.569815,209.908358,458.931302C248.170411,502.292790,314.220046,506.740382,357.950000,468.900000L372.150000,454.100000L378.650000,447.600000L421.050000,405.200000L510.450000,494.600000L503.450000,501.600000L481.050000,524L447.150000,557.900000L446.950000,557.800000C404.223299,597.948263,347.779765,620.268139,289.150000,620.200000C161.550000,620.200000,58.150000,516.800000,58.150000,389.200000C58.150000,261.600000,161.450000,158.200000,289.050000,158.200000ZM527,299.400000L616.400000,388.800000L527,478.200000L437.600000,388.800000ZM597.300000,229.100000L686.700000,318.500000L685.600000,319.600000L675.400000,329.800000L633,372.200000L543.600000,282.800000L586,240.400000Z" fill="none" stroke="none" stroke-width="1"></path> </clipPath> </defs> <g id="erq9t3lfd8r4" opacity="0.5"> <g id="erq9t3lfd8r5" opacity="0.5"> <g id="erq9t3lfd8r6"> <g id="erq9t3lfd8r7"> <path id="erq9t3lfd8r8" d="M883.900000,735C796.156553,735.122213,711.674585,701.751478,647.700000,641.700000L647.300000,641.300000L527.200000,521L467.700000,580.500000C382.245598,660.535231,253.956806,673.888270,153.851670,613.167147C53.746534,552.446023,6.311322,432.503460,37.805195,319.737202C69.299068,206.970944,172.018452,128.964239,289.100000,128.900000C324.846325,128.815928,360.222647,136.136341,393,150.400000C424.548459,164.143572,453.089062,183.952109,477,208.700000L526.300000,257.800000L633.400000,150.600000C742.070515,36.294699,914.289085,9.944273,1052.166458,86.526338C1190.043832,163.108402,1258.683472,323.240161,1219.070521,475.902524C1179.457571,628.564886,1041.618003,735.119257,883.900000,735ZM658.400000,389.400000L768.500000,498.900000C799,530.900000,840,548.600000,883.800000,548.600000C971.917032,548.600000,1043.350000,477.167032,1043.350000,389.050000C1043.350000,300.932968,971.917032,229.500000,883.800000,229.500000C839.036617,229.683852,796.378532,248.530245,766.100000,281.500000L765.700000,281.900000ZM289.100000,314.600000C255.780106,314.547825,226.376603,336.372015,216.778164,368.279506C207.179724,400.186998,219.662462,434.611444,247.481123,452.951023C275.299785,471.290601,311.857622,469.196378,337.400000,447.800000L395.400000,389.100000L344.700000,339C330.377556,323.472760,310.224080,314.628429,289.100000,314.600000Z" fill="rgb(51,72,158)" stroke="none" stroke-width="1"></path> </g> </g> </g> <g id="erq9t3lfd8r9"> <g id="erq9t3lfd8r10"> <g id="erq9t3lfd8r11"> <path id="erq9t3lfd8r12" d="M883.900000,735C796.156553,735.122213,711.674585,701.751478,647.700000,641.700000L647.300000,641.300000L527.200000,521L467.700000,580.500000C382.245598,660.535231,253.956806,673.888270,153.851670,613.167147C53.746534,552.446023,6.311322,432.503460,37.805195,319.737202C69.299068,206.970944,172.018452,128.964239,289.100000,128.900000C324.846325,128.815928,360.222647,136.136341,393,150.400000C424.548459,164.143572,453.089062,183.952109,477,208.700000L526.300000,257.800000L633.400000,150.600000C742.070515,36.294699,914.289085,9.944273,1052.166458,86.526338C1190.043832,163.108402,1258.683472,323.240161,1219.070521,475.902524C1179.457571,628.564886,1041.618003,735.119257,883.900000,735ZM658.400000,389.400000L768.500000,498.900000C799,530.900000,840,548.600000,883.800000,548.600000C971.917032,548.600000,1043.350000,477.167032,1043.350000,389.050000C1043.350000,300.932968,971.917032,229.500000,883.800000,229.500000C839.036617,229.683852,796.378532,248.530245,766.100000,281.500000L765.700000,281.900000ZM289.100000,314.600000C255.780106,314.547825,226.376603,336.372015,216.778164,368.279506C207.179724,400.186998,219.662462,434.611444,247.481123,452.951023C275.299785,471.290601,311.857622,469.196378,337.400000,447.800000L395.400000,389.100000L344.700000,339C330.377556,323.472760,310.224080,314.628429,289.100000,314.600000Z" fill="rgb(14,49,120)" stroke="none" stroke-width="1"></path> </g> </g> </g> </g> <g id="erq9t3lfd8r13"> <path id="erq9t3lfd8r14" class="isolation:isolate" d="M883.850000,73C1058.350000,73,1199.850000,214.500000,1199.850000,389C1199.850000,563.500000,1058.350000,705,883.850000,705C803.800803,705.110352,726.725712,674.673738,668.350000,619.900000L668.350000,619.900000L657.550000,609.100000L746.850000,519.800000C782.496386,557.333675,831.986678,578.590280,883.750000,578.600000C988.450000,578.600000,1073.350000,493.700000,1073.350000,389C1073.350000,284.300000,988.550000,199.400000,883.850000,199.400000C830.772472,199.379745,780.137972,221.702481,744.350000,260.900000L744.250000,260.800000L703.250000,301.800000L613.850000,212.400000L654.850000,171.400000L654.750000,171.300000C714.375726,108.460209,797.224030,72.912465,883.850000,73ZM289.050000,158.200000C351.870332,158.123459,411.989682,183.739216,455.450000,229.100000L366.650000,317.900000C327.555405,275.287608,261.432026,272.119934,218.443071,310.800072C175.454116,349.480209,171.646304,415.569815,209.908358,458.931302C248.170411,502.292790,314.220046,506.740382,357.950000,468.900000L372.150000,454.100000L378.650000,447.600000L421.050000,405.200000L510.450000,494.600000L503.450000,501.600000L481.050000,524L447.150000,557.900000L446.950000,557.800000C404.223299,597.948263,347.779765,620.268139,289.150000,620.200000C161.550000,620.200000,58.150000,516.800000,58.150000,389.200000C58.150000,261.600000,161.450000,158.200000,289.050000,158.200000ZM527,299.400000L616.400000,388.800000L527,478.200000L437.600000,388.800000ZM597.300000,229.100000L686.700000,318.500000L685.600000,319.600000L675.400000,329.800000L633,372.200000L543.600000,282.800000L586,240.400000Z" opacity="0.2" fill="none" stroke="rgb(68,161,245)" stroke-width="2"></path> </g> <g id="erq9t3lfd8r15"> <path id="erq9t3lfd8r16" class="isolation:isolate" d="M883.850000,73C1058.350000,73,1199.850000,214.500000,1199.850000,389C1199.850000,563.500000,1058.350000,705,883.850000,705C803.800803,705.110352,726.725712,674.673738,668.350000,619.900000L668.350000,619.900000L657.550000,609.100000L746.850000,519.800000C782.496386,557.333675,831.986678,578.590280,883.750000,578.600000C988.450000,578.600000,1073.350000,493.700000,1073.350000,389C1073.350000,284.300000,988.550000,199.400000,883.850000,199.400000C830.772472,199.379745,780.137972,221.702481,744.350000,260.900000L744.250000,260.800000L703.250000,301.800000L613.850000,212.400000L654.850000,171.400000L654.750000,171.300000C714.375726,108.460209,797.224030,72.912465,883.850000,73ZM289.050000,158.200000C351.870332,158.123459,411.989682,183.739216,455.450000,229.100000L366.650000,317.900000C327.555405,275.287608,261.432026,272.119934,218.443071,310.800072C175.454116,349.480209,171.646304,415.569815,209.908358,458.931302C248.170411,502.292790,314.220046,506.740382,357.950000,468.900000L372.150000,454.100000L378.650000,447.600000L421.050000,405.200000L510.450000,494.600000L503.450000,501.600000L481.050000,524L447.150000,557.900000L446.950000,557.800000C404.223299,597.948263,347.779765,620.268139,289.150000,620.200000C161.550000,620.200000,58.150000,516.800000,58.150000,389.200000C58.150000,261.600000,161.450000,158.200000,289.050000,158.200000ZM527,299.400000L616.400000,388.800000L527,478.200000L437.600000,388.800000ZM597.300000,229.100000L686.700000,318.500000L685.600000,319.600000L675.400000,329.800000L633,372.200000L543.600000,282.800000L586,240.400000Z" opacity="0.2" fill="none" stroke="rgb(68,161,245)" stroke-width="2"></path> </g> <g id="erq9t3lfd8r17"> <g id="erq9t3lfd8r18" clip-path="url(#erq9t3lfd8r2)"> <g id="erq9t3lfd8r19"> <g id="erq9t3lfd8r20"> <path id="erq9t3lfd8r21" d="M690.690000,196C797.290000,89.400000,970.190000,89.400000,1076.790000,196C1183.390000,302.600000,1183.390000,475.500000,1076.790000,582.100000C970.190000,688.700000,797.290000,688.700000,690.690000,582.100000L392.490000,284.300000C350.162698,241.971239,286.504859,229.308052,231.200423,252.215341C175.895987,275.122630,139.836393,329.089124,139.836393,388.950000C139.836393,448.810876,175.895987,502.777370,231.200423,525.684659C286.504859,548.591948,350.162698,535.928761,392.490000,493.600000Z" fill="none" stroke="rgb(37,96,217)" stroke-width="3" stroke-dashoffset="2426.950000" stroke-dasharray="526.950000,2300"></path> </g> </g> </g> </g> <g id="erq9t3lfd8r22" clip-path="url(#erq9t3lfd8r2)"> <g id="erq9t3lfd8r23"> <g id="erq9t3lfd8r24"> <path id="erq9t3lfd8r25" d="M717.610000,225C808.210000,134.400000,955.110000,134.400000,1045.710000,225C1136.310000,315.600000,1136.310000,462.500000,1045.710000,553.100000C955.110000,643.700000,808.210000,643.700000,717.610000,553.100000L419.910000,255.400000C346.110000,181.600000,226.410000,181.600000,152.610000,255.400000C78.810000,329.200000,78.810000,448.900000,152.610000,522.700000C226.410000,596.500000,346.110000,596.500000,419.910000,522.700000Z" fill="none" stroke="rgb(73,168,255)" stroke-width="3" stroke-dasharray="526.240000,2300"></path> </g> </g> </g>
          </svg>
        </div>
      </div>

      <div className="container space-y-6 p-6  max-w-7xl md:mx-auto border-b border-sky-400 border-opacity-40"></div>
      {/* footer global container */}
      <div className="flex flex-col md:flex-row md:items-center mx-auto p-6 py-10 space-y-6 ">
        {/* footer flex box */}
        <div className="flex flex-col flex-wrap md:flex-row md:items-center py-55 md:space-x-16 ">
          {/* border box */}
          <div className="w-full sm:w-1/2 md:w-full lg:w-1/4">
            <div className="p-4 border-2 border-sky-400 border-opacity-40 rounded-sm px-10 sm:px-30 lg:px15 xl:px-30 py-25 sm:py-35 lg:py-10 xl:py-35 mb-30">
              <div className="flex flex-col md:flex-row lg:flex-col"></div>
              <div className="flex flex-col justify-center w-full flex-grow md:w-auto md:pr-30 lg:w-full">
                <h3 href="#" className="text-blue-400 font-sans mb-10">
                  Support
                </h3>
                <p className="text-white mb-30 md:mb-0 lg:mb-30 w-full inline-block">
                  Talking with an engineer? Access remote support
                </p>
              </div>

              {/* button */}
              <div className="mt-8">
                <Link to='support'>
                  <button className="text-white rounded-full px-5 items-center py-2 border-2 border-sky-400 hover:bg-blue-400 flex flex-row">
                    <p className="">Remote Support</p>

                    <svg
                      class="next-button cursor-pointer slick-arrow"
                      height="40"
                      viewBox="0 0 44 45"
                      width="44"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{}}
                    >
                      <g
                        fill="none"
                        fill-rule=""
                        transform="translate(1 1.082729)"
                      >
                        <circle
                          cx="21"
                          cy="21.527576"
                          r="21"
                          stroke="#fffff"
                          stroke-width="0"
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
                  </button>
                </Link>
              </div>
            </div>
          </div>


          {/* second flex-container */}
          <div className="flex flex-col mx-auto mt-4 md:mt-20 gap-14  md:flex-row space-x-6 ">
            <div className="flex flex-col sm:pl-10">
              <div>
                <h4 className="text-blue-400 font-semibold font-sans mb-2">
                  Services
                </h4>
                <div className="my-2">
                  <a
                    href="https://"
                    className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                  >
                    Cloud Solutions
                  </a>
                </div>
                <div className="my-2">
                  <a
                    href="https://"
                    className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                  >
                    Cyber Security
                  </a>
                </div>
                <div className="my-2">
                  <a
                    href="https://"
                    className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                  >
                    Communications
                  </a>
                </div>
                <div className="my-2">
                  <a
                    href="https://"
                    className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                  >
                    IT Support
                  </a>
                </div>
                <div className="my-2">
                  <a
                    href="https://"
                    className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                  >
                    Backup & Recovery
                  </a>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-blue-400 font-semibold font-sans mb-2">
                  CIS
                </h4>
                <div className="my-2">
                  <a
                    href="https://"
                    className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                  >
                    About
                  </a>
                </div>
                <div className="my-2">
                  <a
                    href="https://"
                    className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                  >
                    Knowledge
                  </a>
                </div>
                <div className="my-2">
                  <a
                    href="https://"
                    className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                  >
                    Success Stories
                  </a>
                </div>
                <div className="my-2">
                  <a
                    href="https://"
                    className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                  >
                    Blog
                  </a>
                </div>
                <div className="my-2">
                  <a
                    href="https://"
                    className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                  >
                    Career
                  </a>
                </div>
              </div>
            </div>

            {/* third flex-container */}
            <div className="flex flex-col mb-0 md:mb-0">
              <div>
                <h4 className="text-blue-400 font-semibold font-sans">
                  Get in touch
                </h4>
                <div className="my-2">
                  <a
                    href="https://"
                    className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                  >
                    Cloud Solutions
                  </a>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-blue-400 font-semibold font-sans mb-2">
                  Oxford
                </h4>
                <div className="my-2">
                  <a
                    href="https://"
                    className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                  >
                    +44 13767 700 555
                  </a>
                </div>
                <div className="my-3">
                  <a
                    href="https://"
                    className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                  >
                    Faringdon Business Centre,
                  </a>
                </div>
                <div className="my-2">
                  <a
                    href="https://"
                    className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                  >
                    Brunel House
                  </a>
                </div>
                <div className="my-2">
                  <a
                    href="https://"
                    className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                  >
                    volunteer Way
                  </a>
                </div>
                <div className="my-2">
                  <a
                    href="https://"
                    className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                  >
                    Faringdon
                  </a>
                </div>
                <div className="my-2">
                  <a
                    href="https://"
                    className="border-transparent border-b-2 text-blue-400 font-sans"
                  >
                    Birmingham
                  </a>
                </div>
                <div className="my-2">
                  <a
                    href="https://"
                    className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                  >
                    +44 1217 591 000
                  </a>
                </div>
                <div className="my-3">
                  <a
                    href="https://"
                    className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                  >
                    Izabella House, Regent place.
                  </a>
                </div>
              </div>
            </div>

            {/* 4th flex-container */}
            <div className="flex flex-col">
              <div>
                <h4 className="text-blue-400 font-semibold font-sans mb-2">
                  Stay up to date
                </h4>
                <div className="my-2">
                  <a href="https://" className=" text-white font-sans">
                    Discover the latest industry news, offers & more!
                  </a>
                </div>
              </div>

              <div className="flex flex-col mt-4 ">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Email address"
                    className="px-4 mr-6 rounded-full border-2 border-sky-400"
                  />
                  <div>
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
                          stroke="#ffff"
                          transform="matrix(0 -1 1 0 1.793666 44.768834)"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="text-blue-700 mt-8 text-lg">Follow us</div>
                <div className="flex flex-row gap-1 mt-5 ">
                  <a
                    class="c-social-icon mr-6"

                    href="https://"
                  >
                    {" "}
                    <svg
                      class="text-white"
                      height="20"
                      viewBox="0 0 9 20"
                      width="9"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="fill-current"
                        d="m8.37383984 6.6847312-.20965073 2.81514358h-2.72012113v9.42967822h-3.58007736v-9.42967822h-1.81260525v-2.81514358h1.81260525v-2.11099043-.60964581s-.12811989-3.11629391 3.58007736-3.28474223c1.80192859-.08128611 3.30296957.32857216 3.30296957.32857216l-.38144786 2.76813474s-2.92152171-.91422387-2.92152171.86721504v2.04145653z"
                        fill="#fff"
                        fill-rule="evenodd"
                        transform="translate(0 .200882)"
                      ></path>
                    </svg>{" "}
                  </a>
                  <a
                    class="c-social-icon mr-6"

                    href="https://twitter.com/cis_oxford?lang=en"
                  >
                    {" "}
                    <svg
                      class="icon-twitter text-white"
                      height="14"
                      viewBox="0 0 18 14"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="fill-current"
                        d="m69.3002602 3.09921812c-.6904189.40181553-1.4533587.69461508-2.2662792.85283295-.6512184-.68207341-1.5797804-1.10945463-2.6038936-1.10945463-1.9712954 0-3.568226 1.57204898-3.568226 3.51214747 0 .2749518.0313604.54363277.0916312.79928971-2.9645383-.14519384-5.5934222-1.54358905-7.3540149-3.66891823-.307724.51903182-.4831462 1.12296103-.4831462 1.76644472 0 1.21750587.6296581 2.29319449 1.5881105 2.9226894-.5855576-.01784775-1.1353447-.17654799-1.6160409-.43992288-.00098.01495352-.00098.03038941-.00098.04534293 0 1.70084219 1.2289358 3.12142654 2.8631069 3.44316834-.3008639.0810384-.6149579.1244519-.9408121.1244519-.229323 0-.4527658-.0226715-.6703287-.0631907.4542359 1.3940539 1.7703929 2.4104108 3.332043 2.437906-1.2210957.9430364-2.7587356 1.5045169-4.4316171 1.5045169-.2876337 0-.5713474-.0164006-.851141-.0496843 1.5788003.9965797 3.4550346 1.5788022 5.4699405 1.5788022 6.5631447 0 10.151461-5.352395 10.151461-9.993292 0-.15242942-.0039201-.3038941-.0098001-.45535877.696789-.49491324 1.3014568-1.11283124 1.7797029-1.81709374-.6399482.27881077-1.3274271.46693569-2.0492064.55135071.7369695-.43316968 1.3029268-1.12296104 1.5694902-1.94202798"
                        fill="#fff"
                        fill-rule="evenodd"
                        transform="translate(-52 -2.799118)"
                      ></path>
                    </svg>{" "}
                  </a>
                  <a
                    class="c-social-icon mr-6"

                    href="https://www.linkedin.com/company/computing-information-systems"
                  >
                    {" "}
                    <svg
                      class="text-white"
                      height="19"
                      viewBox="0 0 20 19"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="fill-current"
                        d="m4.82185366 2.21648916c0 1.22880233-.93004445 2.21380945-2.42530433 2.21380945h-.0278564c-1.43954707.00089242-2.36869293-.98590015-2.36869293-2.21380945 0-1.25827215.95879945-2.21648854 2.42440574-2.21648854 1.46740347-.0008924 2.37049011.95821639 2.39744792 2.21648854zm-4.57024743 16.78261784h4.28808902v-12.81758708h-4.28808902zm14.81241817-13.11764346c-2.2743406 0-3.2924473 1.24130468-3.8648514 2.11646912v.04107915h-.0278564c.0107831-.01250235.0206676-.02679075.0278564-.04107915v-1.81551971h-4.28719045c.05571281 1.20111855 0 12.81758705 0 12.81758705h4.28719045v-7.158488c0-.3857867.0260592-.7635363.1410792-1.039481.3109134-.7626433 1.017208-1.56011459 2.1979601-1.56011459 1.5536685 0 2.1745967 1.17789989 2.1745967 2.89965199v6.8584316h4.2871907v-7.3487023c.0008983-3.94002604-2.1161884-5.76983416-4.9359753-5.76983416z"
                      ></path>
                    </svg>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between md:flex-row max-w-7xl mx-auto p-6 py-10 space-y-6">
        <div className="text-gray-500">
          <h4 className="text-sm leading-5">©Copyright 2023 CIS Ltd.</h4>
          <p className="text-xs leading-5 max-w-xl mx-auto">This site is protected by reCAPTCHA</p>
          <p className="text-xs leading-5 max-w-xl mx-auto"> The Google Privacy Policy and Terms of Service apply.</p>
        </div>
        <div className="text-gray-500 justify-between">
          <div className="flex flex-col md:flex-row gap-3">
            <Link to={"/privacy"}>
            <p className="hover:text-white duration-200 cursor-pointer" >Privacy Policy</p>
            </Link>
            <p>cookie Policy</p>
            <Link to={"/terms"}>
              <p className="hover:text-white duration-200 cursor-pointer">Terms and Conditions</p>
            </Link>
          </div>
        </div>

        <div className="text-gray-500 text-sm">Website by code23_</div>
      </div>
    </footer>
  );
};

export default Footer;