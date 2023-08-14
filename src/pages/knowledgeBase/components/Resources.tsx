import React from "react";
import { AiOutlineRight } from "react-icons/ai";

export default function Resources() {
  const resources = [
    {
      title: "Infographic",
      description: "Small Charity Cyber Security Tips",
      image:
        "https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/08/cyber-3400789_1920-1024x512.jpg",
    },
    {
      title: "Article",
      description: "CIS Remote Working Readiness Survey",
      image:
        "https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/07/v2-1024x683.jpg",
    },
    {
      title: "Article",
      description: "CIS Remote Working Readiness Survey",
      image:
        "https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/07/AdobeStock_243112971-1024x576.jpeg",
    },
    {
      title: "Article",
      description: "CIS Remote Working Readiness Survey",
      image:
        "https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/07/corona-4983590_1920-1024x683.jpg",
    },
    {
      title: "Article",
      description: "CIS Remote Working Readiness Survey",
      image:
        "https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/07/business-risk-test.png",
    },
    {
      title: "Article",
      description: "CIS Remote Working Readiness Survey",
      image:
        "https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/07/AdobeStock_298559228-1024x576.jpeg",
    },
    {
      title: "Article",
      description: "CIS Remote Working Readiness Survey",
      image:
        "https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/Challenges_IT-and-it%E2%80%99s-ROI-1024x392.jpg",
    },
    {
      title: "Article",
      description: "CIS Remote Working Readiness Survey",
      image:
        "https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/AdobeStock_192261204-1024x745.jpeg",
    },
    {
      title: "Article",
      description: "CIS Remote Working Readiness Survey",
      image:
        "https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/07/download-cloud.jpg",
    },
  ];

  return (
    <section id="resourse" className="mx-auto py-10  ">
      <div className="px-6 md:px-10">
        <div className="grid gap-4 md:gap-10 py-8 md:grid-cols-3">
          {/* items */}
          {resources.map((resource, index) => (
            <div
              key={index}
              className="mx-auto h-96 hover:scale-y-105  cursor-pointer relative rounded-md bg-black duration-200"
            >
              
                <img
                  alt="LOADING"
                  src={resource.image}
                  className="object-cover opacity-20 min-h-full"
                />
            
              <p className="text-blue-400 absolute left-20 top-20">
                {resource.title}
              </p>
              <h1 className="text-2xl text-white pr-10 left-20 top-28 absolute font-bold">
                {resource.description}
              </h1>
              <div className=" absolute cursor-pointer left-20 bottom-10 rounded-full border-2 border-blue-400 p-3">
                <AiOutlineRight color="white" />
              </div>
            </div>
          ))}
        </div>

        <button className="px-8 self-center py-3 my-10 rounded-full bg-transparent border-2 border-primary100 text-black font-normal text-lg hover:bg-primary100 hover:text-white hover:transition-colors duration-300">
          <p>View all Resources</p>
        </button>
      </div>
    </section>
  );
}
