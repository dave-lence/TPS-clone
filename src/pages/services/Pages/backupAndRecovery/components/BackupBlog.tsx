import React from "react";

export default function BackupBlog() {

    const reatedBlog = [
        {
          date:"11/06/2019",
          image:"https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/pexels-photo-461146-1024x683-1.jpeg",
          description: "Back Up Your Data: 5 Tips for Future-Proofing Your Infastructure"
        },
        {
          date:"31/01/2019",
          image:"https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/pexels-photo-926984.jpeg",
          description: "Building Your Business: How Private cloud can help your business Grow"
        },
        {
          date:"02/02/2017",
          image:"https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/Services_Backup-Recovery-1024x392.jpg",
          description: "Can your business Survive? "
        },
    ]

  return (
    <section id="related-blog" className="min-h-screen px-6 md:px-10 py-7">
      <h1 className="text-left tex-3xl md:text-5xl mb-10 md:mb-20 font-bold text-black">
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

