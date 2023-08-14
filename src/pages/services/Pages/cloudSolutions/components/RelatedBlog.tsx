import React from "react";

export default function RelatedBlog() {

    const reatedBlog = [
        {
          date:"29/01/2021",
          image:"https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/pexels-photo-735911-1024x684.jpeg",
          description: "A complete guide to Ransomeware and Malware"
        },
        {
          date:"25/03/2020",
          image:"https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/AdobeStock_305109236-1024x683.jpeg",
          description: "A Guide on Cloud Computing"
        },
        {
          date:"09/12/2018",
          image:"https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/pexels-photo-1927574-1024x943.jpeg",
          description: "Anywhere, Anytime, Any Device: Staying Connectedwith Volp technology.  "
        },
    ]

  return (
    <section id="related-blog" className="min-h-screen px-6 md:px-10 py-20">
      <h1 className="text-left tex-3xl md:text-5xl mb-20 font-bold text-black">
        Related Blogs
      </h1>

      <div className="flex mx-auto flex-col md:grid md:grid-cols-3 md:gap-4 space-y-8 md:space-x-5 md:space-y-0">
        {/* content */}

     {reatedBlog.map((blog, index) => (
     <div key={index} className="space-y-4 cursor-pointer">
     <img
       alt=""
       src={blog.image}
       className="h-72 w-full hover:scale-105 hover:border-b-4 hover:border-blue-400  duration-500"
     />
     <div className="">
       <p className="text-blue-400">{blog.date}</p>
       <p className="text-xl my-5 font-bold text-black">
         {blog.description}
       </p>
       <a className="border-b-2 hover:border-b-0 duration-200 border-blue-400" href="https://">
         Learn more
       </a>
     </div>
   </div>    

     ))}
        
      </div>
    </section>
  );
}
