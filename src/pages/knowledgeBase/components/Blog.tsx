import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Link } from "react-router-dom";

const slider = [
  {
    img: "https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/AdobeStock_223108718-1024x768.jpeg",
    text1: "  17/02/2021",
    text2: " Best Office Communication Systems",
  },
  {
    img: "https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2021/06/Vipre-Web1-1024x531.jpg",
    text1: "  17/02/2021",
    text2: " Best Office Communication Systems",
  },
  {
    img: "https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2021/06/Vipre-Web1-1024x531.jpg",
    text1: "  17/02/2021",
    text2: " Best Office Communication Systems",
  },
  {
    img: "https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/AdobeStock_223108718-1024x768.jpeg",
    text1: "  17/02/2021",
    text2: " Best Office Communication Systems",
  },
  {
    img: "https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/AdobeStock_223108718-1024x768.jpeg",
    text1: "  17/02/2021",
    text2: " Best Office Communication Systems",
  },
  {
    img: "https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/AdobeStock_223108718-1024x768.jpeg",
    text1: "  17/02/2021",
    text2: " Best Office Communication Systems",
  },
];

const desktopSettings = {
  dots: true,
  infinite: true,
  speed: 4000,
  slidesToShow: 3,
};
const mobileSettings = {
  dots: true,
  infinite: true,
  speed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ResourceBlog = () => {
  return (
    <section
      id="resource-blog"
      className="bg-gradient-to-b from-slate-100 to-slate-0"
    >
      <div className=" py-10 px-6 md:px-10">
        {/* top content */}

        <div className="flex flex-col space-y-4 md:flex-row justify-between my-10 md:items-center">
          {/* text */}
          <div className="space-y-6">
            <h6 className="text-gray-700 "> Blog</h6>
            <h1 className="text-3xl md:text-5xl font-bold ">
              Read our lates Blog Article
            </h1>
          </div>
        </div>

        {/* image flex container */}

        <div className="hidden md:block">
          <Slider autoplay autoplaySpeed={2000} {...desktopSettings}>
            {slider.map((slide, index) => (
              <div key={index} className="space-y-5 w-full  ">
                <img
                  className=" w-96 hover:border-b-4 hover:border-blue-400 duration-200 hover:scale-105 h-60 rounded"
                  alt=""
                  src={slide.img}
                />
                <p className="text-blue-600 mb-4 mt-4 font-bold text-sm">
                  {slide.text1}
                </p>
                <h3 className="text-lg font-bold text-slate-950 mb-5">
                  {" "}
                  {slide.text2}
                </h3>
                <div className="group">
                  <a href="https://" className="text-slate-950 text-lg">
                    Learn more
                  </a>
                  <div className="mx-0 w-20 group-hover:border-b-2 group-hover:border-sky-500">
                    {" "}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* mobile slider */}
        <div className=" md:hidden">
          <Slider autoplay autoplaySpeed={2000} {...mobileSettings}>
            {slider.map((slide, index) => (
              <div key={index} className="space-y-5 w-full">
                <img
                  className=" w-80  hover:border-b-4 hover:border-blue-400 duration-200 hover:scale-105 h-60 rounded"
                  alt=""
                  src={slide.img}
                />
                <p className="text-blue-600 mb-4 mt-4 font-bold text-sm">
                  {slide.text1}
                </p>
                <h3 className="text-lg font-bold text-slate-950 mb-5">
                  {" "}
                  {slide.text2}
                </h3>
                <div className="group">
                  <a href="https://" className="text-slate-950 text-lg">
                    Learn more
                  </a>
                  <div className="mx-0 w-20 group-hover:border-b-2 group-hover:border-sky-500">
                    {" "}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <Link className="mx-auto" to="./knowledgeBase">
          <button className="px-8 py-3 mt-10 rounded-full bg-transparent border-2 border-primary100 text-black font-normal text-sm md:text-lg hover:bg-primary100 hover:text-white hover:transition-colors hover:duration-300 ">
            View all
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ResourceBlog;

